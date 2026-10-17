import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const requestData = await req.json();

    // 1. Separate Full Name into First & Last Name
    const fullName = (
      requestData.fullName ||
      requestData.name ||
      requestData.contactName ||
      ""
    ).trim();
    const nameParts = fullName.split(/\s+/).filter(Boolean);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    // 2. Dubai Local Time (YYYY-MM-DD HH:mm:ss in Asia/Dubai)
    const conversionTime = new Date()
      .toLocaleString("sv-SE", {
        timeZone: "Asia/Dubai",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      .replace(",", "");

    // 3. Extract tracking queries from referer URL if not provided directly
    const referer = req.headers.get("referer") || "";
    let refererUrl: URL | null = null;
    const pageUrl =
      requestData.landingPageUrl ||
      requestData.formPageUrl ||
      requestData.page ||
      referer ||
      "";

    if (pageUrl) {
      try {
        refererUrl = new URL(pageUrl);
      } catch {
        // Ignored if invalid URL
      }
    }

    const gclid =
      requestData.gclid || refererUrl?.searchParams.get("gclid") || "";
    const gbraid =
      requestData.gbraid || refererUrl?.searchParams.get("gbraid") || "";
    const wbraid =
      requestData.wbraid || refererUrl?.searchParams.get("wbraid") || "";
    const campaign =
      requestData.campaign ||
      requestData.utm_campaign ||
      refererUrl?.searchParams.get("utm_campaign") ||
      refererUrl?.searchParams.get("campaign") ||
      "";
    const adgroup =
      requestData.adgroup ||
      requestData.adGroup ||
      requestData.utm_content ||
      refererUrl?.searchParams.get("utm_content") ||
      refererUrl?.searchParams.get("adgroup") ||
      "";
    const keyword =
      requestData.keyword ||
      requestData.utm_term ||
      refererUrl?.searchParams.get("utm_term") ||
      refererUrl?.searchParams.get("keyword") ||
      "";

    const targetSheetTab =
      requestData.sheetName ||
      process.env.TARGET_SHEET_TAB ||
      "eshaare-tours-spain-landing-page";

    const targetLeadSource =
      requestData.leadSource ||
      process.env.LEAD_SOURCE ||
      "eshaare-tours-spain-landing-page";

    // 4. Map data to target sheetName + 35 Google Sheet columns
    const sheetPayload = {
      sheetName: targetSheetTab,
      "Lead ID": "LEAD-" + Date.now(),
      "Conversion date/time": conversionTime,
      "Time zone": "Asia/Dubai",
      "Transaction ID": requestData.transactionId || "",
      "Google Click ID (GCLID)": gclid,
      "GBRAID": gbraid,
      "WBRAID": wbraid,
      "Conversion name": "Website Lead Submission",
      "Conversion value": requestData.conversionValue || "",
      "Currency": "AED",
      "Lead source": targetLeadSource,
      "Full name": fullName,
      "First name": firstName,
      "Last name": lastName,
      "Email": requestData.email || requestData.contactEmail || "",
      "Phone": requestData.phone || requestData.contactPhone || "",
      "Street address": requestData.address || requestData.streetAddress || "",
      "City": requestData.city || "",
      "Region/State":
        requestData.residenceLocation ||
        requestData.emirate ||
        requestData.region ||
        requestData.state ||
        "",
      "Postal code": requestData.postalCode || "",
      "Country code": requestData.countryCode || "AE",
      "Ad user data consent": requestData.adUserDataConsent || "",
      "Ad personalization consent": requestData.adPersonalizationConsent || "",
      "User agent": req.headers.get("user-agent") || requestData.userAgent || "",
      "Session ID": requestData.sessionId || "",
      "Landing page URL": pageUrl,
      "Form page URL": requestData.formPageUrl || pageUrl || referer,
      "Campaign": campaign,
      "Ad group": adgroup,
      "Keyword": keyword,
      "Service interested":
        requestData.service ||
        requestData.serviceInterested ||
        requestData.visaType ||
        "Spain Visa",
      "Lead status": "New",
      "Notes":
        requestData.notes ||
        requestData.message ||
        (requestData.formLocation ? `Submitted via ${requestData.formLocation}` : "") ||
        "",
      "Ready to upload?": "Yes",
      "Issues": "",
    };

    // 5. Send data to Google Apps Script Web App
    const googleScriptUrl =
      process.env.GOOGLE_SCRIPT_URL ||
      "https://script.google.com/macros/s/AKfycbxocLqGx5NyXt5q7iEHQFKecvkr9pPdtvlVziYD54oqcsaMuLJCxn3A09OPSXDD1cpRiQ/exec";

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(sheetPayload),
      redirect: "follow",
    });

    const responseText = await response.text();

    if (
      responseText.includes("You need access") ||
      responseText.includes("accounts.google.com")
    ) {
      console.error(
        "Google Apps Script Permission Error: Deployment access must be set to 'Anyone'"
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "Google Script Access Restricted. Set access to 'Anyone' in Apps Script deployment settings.",
        },
        { status: 403 }
      );
    }

    let parsedResponse: any = null;
    try {
      parsedResponse = JSON.parse(responseText);
    } catch {
      // Ignored if non-json
    }

    if (parsedResponse && parsedResponse.status === "error") {
      console.error(
        "Google Script execution error:",
        parsedResponse.message || parsedResponse.error
      );
      return NextResponse.json(
        {
          success: false,
          error:
            parsedResponse.message ||
            "Failed to save lead in Google Sheets.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully!",
      leadId: sheetPayload["Lead ID"],
    });
  } catch (error) {
    console.error("Error submitting lead:", error);
    return NextResponse.json(
      { success: false, message: "Error submitting lead" },
      { status: 500 }
    );
  }
}
