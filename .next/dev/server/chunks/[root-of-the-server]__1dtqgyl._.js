module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/app/api/lead/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(req) {
    try {
        const requestData = await req.json();
        // 1. Separate Full Name into First & Last Name
        const fullName = requestData.name || requestData.fullName || requestData.contactName || "";
        const nameParts = fullName.trim().split(" ");
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || "";
        // 2. Dubai Local Time (YYYY-MM-DD HH:mm:ss)
        const conversionTime = new Date().toLocaleString("sv-SE", {
            timeZone: "Asia/Dubai"
        });
        // 3. Map data to the 35 Google Sheet columns
        const sheetPayload = {
            "Lead ID": "LEAD-" + Date.now(),
            "Conversion date/time": conversionTime,
            "Time zone": "Asia/Dubai",
            "Transaction ID": "",
            "Google Click ID (GCLID)": requestData.gclid || "",
            "GBRAID": requestData.gbraid || "",
            "WBRAID": requestData.wbraid || "",
            "Conversion name": "Website Lead Submission",
            "Conversion value": "",
            "Currency": "AED",
            "Lead source": requestData.source || "Hero Lead Form - Spain",
            "Full name": fullName,
            "First name": firstName,
            "Last name": lastName,
            "Email": requestData.email || requestData.contactEmail || "",
            "Phone": requestData.phone || requestData.contactPhone || "",
            "Street address": requestData.address || "",
            "City": requestData.city || "",
            "Region/State": requestData.residenceLocation || requestData.emirate || "",
            "Postal code": "",
            "Country code": "AE",
            "Ad user data consent": "",
            "Ad personalization consent": "",
            "User agent": req.headers.get("user-agent") || "",
            "Session ID": "",
            "Landing page URL": requestData.page || req.headers.get("referer") || "",
            "Form page URL": req.headers.get("referer") || "",
            "Campaign": requestData.campaign || "",
            "Ad group": requestData.adgroup || "",
            "Keyword": requestData.keyword || "",
            "Service interested": requestData.service || requestData.visaType || "Spain Visa",
            "Lead status": "New",
            "Notes": requestData.message || requestData.notes || "",
            "Ready to upload?": "Yes",
            "Issues": ""
        };
        // 4. Send data to Google Apps Script Web App
        const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbye3wBfBhKH3R2JqK_auLlhdpI7cKUT1yaTkoNUYBMDSAWS4yCIkTp4aKRrrZ1tIMahHg/exec";
        const response = await fetch(googleScriptUrl, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(sheetPayload),
            redirect: "follow"
        });
        const responseText = await response.text();
        if (responseText.includes("You need access") || responseText.includes("accounts.google.com")) {
            console.error("Google Apps Script Permission Error: Deployment access must be set to 'Anyone'");
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Google Script Access Restricted. Set access to 'Anyone' in Apps Script deployment settings."
            }, {
                status: 403
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Lead submitted successfully!"
        });
    } catch (error) {
        console.error("Error submitting lead:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Error submitting lead"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1dtqgyl._.js.map