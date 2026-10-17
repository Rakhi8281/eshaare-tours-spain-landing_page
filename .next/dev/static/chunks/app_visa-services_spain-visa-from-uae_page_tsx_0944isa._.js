(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/visa-services/spain-visa-from-uae/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpainVisaPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SpainVisaPage() {
    _s();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openFaq, setOpenFaq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeDocTab, setActiveDocTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showChatBubble, setShowChatBubble] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fullName: "",
        phone: "",
        email: "",
        residenceLocation: "Dubai"
    });
    const [heroError, setHeroError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmittingHero, setIsSubmittingHero] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formSubmitted, setFormSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bottomFormData, setBottomFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fullName: "",
        phone: "",
        email: "",
        residenceLocation: "Dubai"
    });
    const [bottomError, setBottomError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmittingBottom, setIsSubmittingBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bottomFormSubmitted, setBottomFormSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const validateLead = (data)=>{
        const nameTrimmed = data.fullName.trim();
        const nameRegex = /^[a-zA-Z\s'-]{2,60}$/;
        if (!nameRegex.test(nameTrimmed)) {
            return "Full Name must contain alphabets and spaces only (minimum 2 characters).";
        }
        const digitsOnly = data.phone.replace(/[^0-9]/g, "");
        if (digitsOnly.length < 7 || digitsOnly.length > 15) {
            return "Phone number must contain between 7 to 15 digits.";
        }
        const emailTrimmed = data.email.trim();
        if (emailTrimmed) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(emailTrimmed)) {
                return "Please enter a valid email address (e.g. name@example.com).";
            }
        }
        return null;
    };
    // Hero Form Submit Handler
    const handleHeroSubmit = async (e)=>{
        e.preventDefault();
        setHeroError("");
        const error = validateLead(formData);
        if (error) {
            setHeroError(error);
            return;
        }
        setIsSubmittingHero(true);
        const urlParams = ("TURBOPACK compile-time truthy", 1) ? new URLSearchParams(window.location.search) : "TURBOPACK unreachable";
        const currentUrl = ("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable";
        try {
            const payload = {
                sheetName: "eshaare-tours-spain-landing-page",
                leadSource: "eshaare-tours-spain-landing-page",
                fullName: formData.fullName,
                phone: formData.phone,
                email: formData.email,
                residenceLocation: formData.residenceLocation,
                service: "Spain Visa",
                formLocation: "Hero Lead Form - Spain",
                page: currentUrl,
                landingPageUrl: currentUrl,
                formPageUrl: currentUrl,
                gclid: urlParams?.get("gclid") || "",
                gbraid: urlParams?.get("gbraid") || "",
                wbraid: urlParams?.get("wbraid") || "",
                campaign: urlParams?.get("utm_campaign") || urlParams?.get("campaign") || "",
                adgroup: urlParams?.get("utm_content") || urlParams?.get("adgroup") || "",
                keyword: urlParams?.get("utm_term") || urlParams?.get("keyword") || ""
            };
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const result = await res.json();
            if (!res.ok || !result.success) {
                setHeroError(result.error || result.message || "Failed to submit lead. Please try again.");
                return;
            }
            setFormSubmitted(true);
            setFormData({
                fullName: "",
                phone: "",
                email: "",
                residenceLocation: "Dubai"
            });
        } catch (err) {
            console.error("Failed to post hero lead:", err);
            setHeroError("An unexpected error occurred. Please try again.");
        } finally{
            setIsSubmittingHero(false);
        }
    };
    // Bottom Form Submit Handler
    const handleBottomSubmit = async (e)=>{
        e.preventDefault();
        setBottomError("");
        const error = validateLead(bottomFormData);
        if (error) {
            setBottomError(error);
            return;
        }
        setIsSubmittingBottom(true);
        const urlParams = ("TURBOPACK compile-time truthy", 1) ? new URLSearchParams(window.location.search) : "TURBOPACK unreachable";
        const currentUrl = ("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable";
        try {
            const payload = {
                sheetName: "eshaare-tours-spain-landing-page",
                leadSource: "eshaare-tours-spain-landing-page",
                fullName: bottomFormData.fullName,
                phone: bottomFormData.phone,
                email: bottomFormData.email,
                residenceLocation: bottomFormData.residenceLocation,
                service: "Spain Visa",
                formLocation: "Bottom Lead Form - Spain",
                page: currentUrl,
                landingPageUrl: currentUrl,
                formPageUrl: currentUrl,
                gclid: urlParams?.get("gclid") || "",
                gbraid: urlParams?.get("gbraid") || "",
                wbraid: urlParams?.get("wbraid") || "",
                campaign: urlParams?.get("utm_campaign") || urlParams?.get("campaign") || "",
                adgroup: urlParams?.get("utm_content") || urlParams?.get("adgroup") || "",
                keyword: urlParams?.get("utm_term") || urlParams?.get("keyword") || ""
            };
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const result = await res.json();
            if (!res.ok || !result.success) {
                setBottomError(result.error || result.message || "Failed to submit lead. Please try again.");
                return;
            }
            setBottomFormSubmitted(true);
            setBottomFormData({
                fullName: "",
                phone: "",
                email: "",
                residenceLocation: "Dubai"
            });
        } catch (err) {
            console.error("Failed to post bottom lead:", err);
            setBottomError("An unexpected error occurred. Please try again.");
        } finally{
            setIsSubmittingBottom(false);
        }
    };
    const toggleFaq = (index)=>{
        setOpenFaq(openFaq === index ? null : index);
    };
    const faqs = [
        {
            q: "How long does it take to process a Spain Schengen visa from the UAE?",
            a: "The standard processing time for a Spain Schengen visa at BLS International UAE is typically 15 calendar days from the date of your appointment. During peak travel seasons (summer and holidays), processing may take up to 20-30 days, so we recommend applying at least 4-6 weeks before your intended travel date."
        },
        {
            q: "Can UAE expat residents apply for a Spain visa in Dubai or Abu Dhabi?",
            a: "Yes! Any non-UAE citizen holding a valid UAE Residence Visa (with at least 3 months validity remaining after returning from the Schengen area) can apply through BLS Spain Visa Application Centres in Dubai or Abu Dhabi."
        },
        {
            q: "Do I need to visit the BLS application center in person for biometrics?",
            a: "If you have not submitted Schengen biometric data (fingerprints and photo) within the last 59 months, you must attend the BLS center in person. If your biometrics were collected within the past 59 months for a previous Schengen visa, our team can submit your application on your behalf."
        },
        {
            q: "What is the minimum bank balance required for a Spain Schengen Visa?",
            a: "Spain requires applicants to demonstrate sufficient financial means of approximately €113.40 (approx. AED 450) per day per person, with a minimum required balance of €1,020.60 (approx. AED 4,100) per applicant regardless of stay duration. We recommend maintaining a steady 3 to 6-month bank statement with sufficient funds."
        },
        {
            q: "What documents are included in Eshaare Tours' Spain Visa Package?",
            a: "Our comprehensive package includes complete application form filling, priority BLS appointment booking assistance, document verification & translation check, flight itinerary reservation, confirmed hotel bookings, Schengen-compliant travel insurance policy (€30,000 cover), and customized cover letter preparation."
        },
        {
            q: "What happens if my Spain visa application gets rejected?",
            a: "With Eshaare Tours, our thorough pre-submission audit maximizes your approval probability. In the rare event of a refusal, we analyze the official refusal letter, correct any discrepancies, and assist you in filing a fast-track appeal or re-application."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: "#f8f6f2",
            color: "#1a1a1a",
            fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif"
        },
        className: "jsx-4c3226a5b4c3c4ec" + " " + "min-h-screen font-sans selection:bg-[#0b6e52] selection:text-white overflow-x-clip w-full max-w-full pb-24 lg:pb-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "4c3226a5b4c3c4ec",
                children: '@import "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display:ital@0;1&family=Great+Vibes&display=swap";html{scroll-behavior:smooth}.font-serif-dm{font-family:DM Serif Display,Georgia,serif}.font-sans-dm{font-family:DM Sans,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif}.font-great-vibes{font-family:Great Vibes,cursive}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "jsx-4c3226a5b4c3c4ec" + " " + "sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs text-stone-900 transition-all",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4c3226a5b4c3c4ec" + " " + "w-full max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12 h-14 sm:h-18 flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-2 sm:gap-3 group shrink min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/fox-logo.webp",
                                        alt: "Eshaare Tours logo",
                                        style: {
                                            height: "26px",
                                            width: "auto",
                                            objectFit: "contain"
                                        },
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "sm:!h-8 lg:!h-14 shrink-0 transition-transform duration-300 group-hover:scale-105"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "leading-none text-left min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "'Great Vibes', cursive"
                                                },
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "font-bold text-[#063024] block transition-colors duration-300 text-base sm:text-xl lg:text-2xl leading-none whitespace-nowrap",
                                                children: "Eshaare Tours"
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[7.5px] sm:text-[9px] tracking-tight sm:tracking-[0.16em] uppercase text-[#0b6e50] font-bold block mt-0.5 whitespace-nowrap overflow-hidden",
                                                children: "Connecting Dreams Into Destinations"
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "hidden lg:flex items-center gap-8 text-sm font-medium text-[#063024]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#services",
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "hover:text-[#0b6e52] transition-colors",
                                        children: "Visa Services"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#documents",
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "hover:text-[#0b6e52] transition-colors",
                                        children: "Requirements"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#process",
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "hover:text-[#0b6e52] transition-colors",
                                        children: "Process"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#destinations",
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "hover:text-[#0b6e52] transition-colors",
                                        children: "Destinations"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "hover:text-[#0b6e52] transition-colors",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "hidden lg:flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20want%20to%20apply%20for%20a%20Spain%20Visa",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs text-[#063024] font-medium hover:text-[#0b6e52] flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-stone-300 hover:border-[#0b6e52] transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "w-4 h-4 fill-current text-[#0b6e52]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
                                                    className: "jsx-4c3226a5b4c3c4ec"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 15
                                            }, this),
                                            "WhatsApp Support"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#apply",
                                        style: {
                                            color: "#ffffff"
                                        },
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-[#0b6e52] hover:bg-[#0f8a66] !text-white text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer",
                                        children: "Start Application"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                "aria-label": "Toggle Navigation Menu",
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "lg:hidden shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f1f5f3] hover:bg-[#e3eae6] text-[#063024] flex items-center justify-center focus:outline-none transition-colors shadow-2xs",
                                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "w-4 h-4 sm:w-5 sm:h-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M6 18L18 6M6 6l12 12",
                                        className: "jsx-4c3226a5b4c3c4ec"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 307,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "w-4 h-4 sm:w-5 sm:h-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M4 6h16M4 12h16M4 18h16",
                                        className: "jsx-4c3226a5b4c3c4ec"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 311,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4c3226a5b4c3c4ec" + " " + "lg:hidden bg-white border-b border-stone-200 px-4 pt-4 pb-6 space-y-4 shadow-xl animate-fadeIn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "flex flex-col space-y-3 font-medium text-base text-[#063024]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#services",
                                        onClick: ()=>setMobileMenuOpen(false),
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "hover:text-[#0b6e52] py-2 border-b border-stone-100",
                                        children: "Visa Services"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#documents",
                                        onClick: ()=>setMobileMenuOpen(false),
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "hover:text-[#0b6e52] py-2 border-b border-stone-100",
                                        children: "Requirements"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#process",
                                        onClick: ()=>setMobileMenuOpen(false),
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "hover:text-[#0b6e52] py-2 border-b border-stone-100",
                                        children: "Process"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#destinations",
                                        onClick: ()=>setMobileMenuOpen(false),
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "hover:text-[#0b6e52] py-2 border-b border-stone-100",
                                        children: "Destinations"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 342,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        onClick: ()=>setMobileMenuOpen(false),
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "hover:text-[#0b6e52] py-2 border-b border-stone-100",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-2 flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#apply",
                                        onClick: ()=>setMobileMenuOpen(false),
                                        style: {
                                            color: "#ffffff"
                                        },
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "w-full bg-[#0b6e52] hover:bg-[#0f8a66] !text-white text-white text-center font-semibold py-3 rounded-lg shadow-md cursor-pointer",
                                        children: "Start Application"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20want%20to%20apply%20for%20a%20Spain%20Visa",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "w-full border border-stone-300 text-[#063024] text-center font-medium py-2.5 rounded-lg flex items-center justify-center gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-4c3226a5b4c3c4ec",
                                            children: "💬 Chat on WhatsApp"
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 372,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-4c3226a5b4c3c4ec" + " " + "relative bg-[#06241b] text-white pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-10 lg:pb-24 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 z-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/spain/madrid-royal-palace.webp",
                                alt: "Spain Plaza Architecture",
                                fill: true,
                                priority: true,
                                className: "object-cover object-right sm:object-center opacity-85",
                                sizes: "100vw"
                            }, void 0, false, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 bg-gradient-to-r from-[#06241b]/90 via-[#06241b]/55 to-black/20"
                            }, void 0, false, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 392,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 bg-gradient-to-t from-[#06241b]/70 via-transparent to-[#06241b]/20"
                            }, void 0, false, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4c3226a5b4c3c4ec" + " " + "max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c3226a5b4c3c4ec" + " " + "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "lg:col-span-7 space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/70 bg-amber-400/10 text-amber-300 text-xs font-semibold backdrop-blur-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "font-bold text-white",
                                                    children: "5.0"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex text-amber-400 text-xs tracking-tighter",
                                                    children: "★★★★★"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-stone-200 font-medium",
                                                    children: "Google Reviews"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "block sm:inline-flex items-center gap-2 px-4 py-1 rounded-full border border-emerald-500/60 text-emerald-300 text-[11px] font-bold uppercase tracking-widest bg-[#0b6e52]/40 backdrop-blur-xs",
                                            children: "SPAIN VISA FROM UAE"
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            style: {
                                                fontSize: "clamp(38px, 5.2vw, 64px)"
                                            },
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm font-bold tracking-tight text-white leading-[1.1]",
                                            children: "Your Spain journey starts here."
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-sans-dm text-stone-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl",
                                            children: "Professional visa application assistance for UAE residents — from document review and application preparation to appointment guidance."
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 421,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-2 flex flex-wrap items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#quick-check-card",
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-[#0b6e52] hover:bg-[#0f8a66] text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                            children: "Start Your Spain Visa Application"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-4 h-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M14 5l7 7m0 0l-7 7m7-7H3",
                                                                className: "jsx-4c3226a5b4c3c4ec"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 433,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20want%20to%20apply%20for%20a%20Spain%20Visa",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-4 h-4 fill-current",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
                                                                className: "jsx-4c3226a5b4c3c4ec"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                            children: "Chat on WhatsApp"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 426,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-amber-200/90",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-amber-400 font-bold",
                                                            children: "✔"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 452,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                            children: "100% Document Verification"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 453,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-amber-400 font-bold",
                                                            children: "✔"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 456,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                            children: "Fast-Track BLS Appointment"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-amber-400 font-bold",
                                                            children: "✔"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                            children: "Transparent Pricing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 461,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 450,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 399,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "quick-check-card",
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "lg:col-span-5 flex justify-center lg:justify-end relative mt-8 lg:mt-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white/98 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-2xl text-stone-900 border border-stone-200/80 w-full max-w-md relative z-20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "mb-5 text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-xl sm:text-2xl font-bold text-[#063024] tracking-tight",
                                                        children: "UAE Resident Quick Check"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "font-sans-dm text-xs text-stone-500 mt-1 leading-relaxed",
                                                        children: "Share your details and our team will get in touch."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 469,
                                                columnNumber: 17
                                            }, this),
                                            formSubmitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "w-12 h-12 bg-[#0b6e52] text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 480,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-lg font-bold text-[#063024]",
                                                        children: "Inquiry Received!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "font-sans-dm text-xs text-stone-600",
                                                        children: "Thank you! Our Spain Visa specialist will review your details and contact you within 15 minutes."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 486,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setFormSubmitted(false),
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs text-[#0b6e52] font-semibold underline pt-1 cursor-pointer",
                                                        children: "Submit another inquiry"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 479,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleHeroSubmit,
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-4 font-sans-dm",
                                                children: [
                                                    heroError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-red-50 border border-red-200 text-red-700 px-3.5 py-2.5 rounded-xl text-xs font-medium",
                                                        children: heroError
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 499,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1",
                                                                children: "Full Name *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 506,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                placeholder: "e.g. Mohammed Al Mansoori",
                                                                value: formData.fullName,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        fullName: e.target.value
                                                                    }),
                                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#0b6e52] focus:bg-white transition-all shadow-2xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 509,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 505,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1",
                                                                children: "Phone Number *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 521,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                required: true,
                                                                placeholder: "e.g. +971 50 123 4567",
                                                                value: formData.phone,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        phone: e.target.value
                                                                    }),
                                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#0b6e52] focus:bg-white transition-all shadow-2xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 524,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 520,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1",
                                                                children: "Email Address *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                required: true,
                                                                placeholder: "e.g. name@example.com",
                                                                value: formData.email,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        email: e.target.value
                                                                    }),
                                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#0b6e52] focus:bg-white transition-all shadow-2xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1",
                                                                children: "UAE Residence Location *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 551,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: formData.residenceLocation,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        residenceLocation: e.target.value
                                                                    }),
                                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-[#0b6e52] focus:bg-white transition-all cursor-pointer shadow-2xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Dubai",
                                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                                        children: "Dubai"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Abu Dhabi",
                                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                                        children: "Abu Dhabi"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                        lineNumber: 560,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Sharjah",
                                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                                        children: "Sharjah"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                        lineNumber: 561,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Ajman / RAK / UAQ / Fujairah",
                                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                                        children: "Ajman / RAK / UAQ / Fujairah"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                        lineNumber: 562,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 554,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            disabled: isSubmittingHero,
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-full bg-[#0b6e52] hover:bg-[#0f8a66] active:scale-[0.99] disabled:opacity-60 text-white font-semibold py-3.5 px-5 rounded-xl text-center text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer",
                                                            children: isSubmittingHero ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-4c3226a5b4c3c4ec",
                                                                children: "Submitting Lead..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 574,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                                        children: "Get Free Visa Consultation"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                        lineNumber: 577,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "transition-transform group-hover:translate-x-1",
                                                                        children: "→"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                        lineNumber: 578,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 576,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 568,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[10px] text-stone-400 text-center pt-1 font-normal",
                                                        children: "Your details are handled with care and confidentiality."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 497,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 468,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                            lineNumber: 397,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                        lineNumber: 396,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white border-y border-stone-200/80 py-3.5 sm:py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4c3226a5b4c3c4ec" + " " + "max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4c3226a5b4c3c4ec" + " " + "grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-center gap-3 p-1.5 rounded-lg hover:bg-[#f8f6f2] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "w-8 h-8 rounded-lg bg-[#f8f6f2] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: "1.75",
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-4 h-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                                className: "jsx-4c3226a5b4c3c4ec"
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 603,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 602,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 601,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-sm sm:text-base font-bold text-[#1a1a1a] leading-tight",
                                                children: "Expert Visa Guidance"
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 607,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-snug",
                                                children: "Dedicated Schengen specialists guiding you through every requirement step-by-step."
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 608,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 606,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 600,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-center gap-3 p-1.5 rounded-lg hover:bg-[#f8f6f2] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "w-8 h-8 rounded-lg bg-[#f8f6f2] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: "1.75",
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-4 h-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                                className: "jsx-4c3226a5b4c3c4ec"
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 617,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 616,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 615,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-sm sm:text-base font-bold text-[#1a1a1a] leading-tight",
                                                children: "Clear Documentation"
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 621,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-snug",
                                                children: "Rigorous document auditing prevents common embassy refusal triggers before submission."
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 622,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 620,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 614,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-center gap-3 p-1.5 rounded-lg hover:bg-[#f8f6f2] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "w-8 h-8 rounded-lg bg-[#f8f6f2] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: "1.75",
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-4 h-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
                                                className: "jsx-4c3226a5b4c3c4ec"
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 631,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 630,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 629,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-sm sm:text-base font-bold text-[#1a1a1a] leading-tight",
                                                children: "Dedicated Support"
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 635,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-snug",
                                                children: "Real-time status updates and end-to-end concierge support across Dubai and Abu Dhabi."
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 636,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 634,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 628,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                        lineNumber: 599,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                    lineNumber: 598,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                lineNumber: 597,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-8 sm:pt-10 lg:pt-12 pb-16 lg:pb-20 max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4c3226a5b4c3c4ec" + " " + "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c3226a5b4c3c4ec" + " " + "lg:col-span-6 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs font-semibold uppercase tracking-widest text-[#0b6e52] bg-emerald-100/80 px-3 py-1 rounded-full",
                                    children: "DESTINATION HIGHLIGHT"
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 650,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] leading-tight",
                                    children: "Explore Spain: From Madrid to Costa del Sol"
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 653,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-stone-700 text-base leading-relaxed",
                                    children: "Spain offers an unrivaled blend of golden beaches, historic palaces, world-renowned culinary arts, and vibrant Mediterranean culture. Whether you plan to admire Antoni Gaudí’s architectural wonders in Barcelona, visit the Royal Palace of Madrid, or relax along Andalusia’s sun-kissed coastlines—your dream trip is just one visa away."
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 656,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-stone-600 text-sm leading-relaxed",
                                    children: "With a Spain Schengen Visa issued through Eshaare Tours, you gain entry to Spain as well as unrestricted travel access across all 29 European Schengen member states."
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 659,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-stone-300 text-center sm:text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "p-2.5 sm:p-3 rounded-lg bg-white border border-stone-200 min-w-0 shadow-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "block font-serif-dm text-base sm:text-xl font-bold text-[#0b6e52]",
                                                    children: "90 Days"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 666,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[11px] sm:text-xs text-stone-500 block leading-tight mt-0.5",
                                                    children: "Max Stay"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 667,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 665,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "p-2.5 sm:p-3 rounded-lg bg-white border border-stone-200 min-w-0 shadow-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "block font-serif-dm text-base sm:text-xl font-bold text-[#0b6e52]",
                                                    children: "29 States"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[11px] sm:text-xs text-stone-500 block leading-tight mt-0.5",
                                                    children: "Schengen Access"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 671,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 669,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "p-2.5 sm:p-3 rounded-lg bg-white border border-stone-200 min-w-0 shadow-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "block font-serif-dm text-base sm:text-xl font-bold text-[#0b6e52]",
                                                    children: "15 Days"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[11px] sm:text-xs text-stone-500 block leading-tight mt-0.5",
                                                    children: "Processing Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 673,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 664,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#apply",
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "inline-flex items-center gap-2 text-[#0b6e52] font-semibold text-sm hover:text-[#0f8a66] transition-colors group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-4c3226a5b4c3c4ec",
                                                children: "Plan Your Spain Trip With Us"
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 684,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "w-4 h-4 group-hover:translate-x-1 transition-transform",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M17 8l4 4m0 0l-4 4m4-4H3",
                                                    className: "jsx-4c3226a5b4c3c4ec"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 686,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 685,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 680,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 679,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                            lineNumber: 649,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c3226a5b4c3c4ec" + " " + "lg:col-span-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "relative aspect-[4/3] w-full overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/spain/spain.webp",
                                            alt: "Madrid Royal Palace Spain",
                                            fill: true,
                                            className: "object-cover group-hover:scale-105 transition-transform duration-700",
                                            sizes: "(max-width: 1024px) 100vw, 600px"
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 696,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 695,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 704,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute bottom-6 left-6 right-6 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs uppercase tracking-widest text-emerald-300 font-semibold",
                                                children: "Capital City"
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 706,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-2xl font-bold mt-1",
                                                children: "Royal Palace of Madrid"
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 709,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs text-stone-300 mt-1",
                                                children: "Immerse yourself in centuries of royal history and majestic plazas."
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 710,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 705,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 694,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                            lineNumber: 693,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                    lineNumber: 647,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                lineNumber: 646,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "services",
                className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-[#f8f6f2] pt-10 sm:pt-12 lg:pt-16 pb-16 lg:pb-20 border-y border-stone-200/80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4c3226a5b4c3c4ec" + " " + "max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-center max-w-3xl mx-auto mb-8 sm:mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs font-semibold uppercase tracking-widest text-[#0b6e52] bg-emerald-100/90 px-3.5 py-1 rounded-full border border-emerald-200/60",
                                    children: "OUR SERVICES & SOLUTIONS"
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 723,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] mt-3",
                                    children: "Professional Visa & Travel Solutions"
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 726,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-stone-600 text-sm sm:text-base mt-3 font-light leading-relaxed",
                                    children: "Comprehensive end-to-end guidance tailored for UAE residents seeking seamless global mobility."
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 729,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                            lineNumber: 722,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c3226a5b4c3c4ec" + " " + "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "relative h-40 sm:h-44 w-full overflow-hidden bg-stone-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/services/doorstep-visa.webp",
                                                        alt: "Doorstep Visa Service",
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 739,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 738,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[10px] font-bold tracking-wider text-amber-800 uppercase block mb-1",
                                                            children: "DOORSTEP SERVICE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 746,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-1.5 leading-snug",
                                                            children: "Doorstep Visa Service"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs text-stone-600 leading-relaxed font-light",
                                                            children: "Complete document collection, dossier auditing, and stamped passport delivery at your home or office across the 7 Emirates."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 752,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 745,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 737,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "px-5 pb-5 pt-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#apply",
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0b6e52] group-hover:text-[#0f8a66] transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: "Inquire Service"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 762,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "transition-transform group-hover:translate-x-1",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 763,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 758,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 757,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 736,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "relative h-40 sm:h-44 w-full overflow-hidden bg-stone-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/services/worldwide-visa.webp",
                                                        alt: "Worldwide Visa Assistance",
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 772,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[10px] font-bold tracking-wider text-amber-800 uppercase block mb-1",
                                                            children: "GLOBAL FILING"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 779,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-1.5 leading-snug",
                                                            children: "Worldwide Visa Assistance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 782,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs text-stone-600 leading-relaxed font-light",
                                                            children: "End-to-end guidance and filing for tourist, business, and student visas for Schengen, UK, USA, GCC, Asia, and Oceania."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 785,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 778,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 770,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "px-5 pb-5 pt-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#apply",
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0b6e52] group-hover:text-[#0f8a66] transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: "Inquire Service"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 795,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "transition-transform group-hover:translate-x-1",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 796,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 791,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 790,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 769,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "relative h-40 sm:h-44 w-full overflow-hidden bg-stone-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/services/vfs-slot-booking.webp",
                                                        alt: "Express VFS Slot Booking",
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 805,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 804,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[10px] font-bold tracking-wider text-amber-800 uppercase block mb-1",
                                                            children: "PRIORITY TRACKING"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 812,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-1.5 leading-snug",
                                                            children: "Express VFS Slot Booking"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 815,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs text-stone-600 leading-relaxed font-light",
                                                            children: "24/7 express tracking of VFS and embassy systems to capture urgent or early biometric submission slots as soon as they open."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 818,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 811,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 803,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "px-5 pb-5 pt-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#apply",
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0b6e52] group-hover:text-[#0f8a66] transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: "Inquire Service"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 828,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "transition-transform group-hover:translate-x-1",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 824,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 823,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 802,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "relative h-40 sm:h-44 w-full overflow-hidden bg-stone-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/services/flight-hotel-booking.webp",
                                                        alt: "Verifiable Flight & Hotel Bookings",
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 838,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 837,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[10px] font-bold tracking-wider text-amber-800 uppercase block mb-1",
                                                            children: "EMBASSY COMPLIANT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 845,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-1.5 leading-snug",
                                                            children: "Flight & Hotel Bookings"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 848,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs text-stone-600 leading-relaxed font-light",
                                                            children: "Embassy-compliant live flight hold itineraries with active GDS PNR codes and confirmed hotel vouchers for visa submission."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 851,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 844,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 836,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "px-5 pb-5 pt-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#apply",
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0b6e52] group-hover:text-[#0f8a66] transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: "Inquire Service"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 861,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "transition-transform group-hover:translate-x-1",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 862,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 857,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 856,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 835,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "relative h-40 sm:h-44 w-full overflow-hidden bg-stone-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/services/hajj-umrah.webp",
                                                        alt: "Hajj & Umrah Pilgrimage Services",
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 871,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 870,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[10px] font-bold tracking-wider text-amber-800 uppercase block mb-1",
                                                            children: "PILGRIMAGE SUPPORT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 878,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-1.5 leading-snug",
                                                            children: "Hajj & Umrah Services"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 881,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs text-stone-600 leading-relaxed font-light",
                                                            children: "Nusuk permit assistance, Umrah e-visas, Hajj registration for UAE expats, Holy City hotels, and transport coordination."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 884,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 877,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 869,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "px-5 pb-5 pt-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#apply",
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0b6e52] group-hover:text-[#0f8a66] transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: "Inquire Service"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 894,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "transition-transform group-hover:translate-x-1",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 895,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 890,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 889,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 868,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "relative h-40 sm:h-44 w-full overflow-hidden bg-stone-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/services/holiday-packages.webp",
                                                        alt: "Customized Holiday Packages",
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 904,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 903,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[10px] font-bold tracking-wider text-amber-800 uppercase block mb-1",
                                                            children: "TAILOR-MADE VACATION"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 911,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-1.5 leading-snug",
                                                            children: "Customized Holiday Packages"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 914,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs text-stone-600 leading-relaxed font-light",
                                                            children: "Boutique international vacation packages including curated hotel stays, flight bookings, transfers, and private tours."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 917,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 910,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 902,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "px-5 pb-5 pt-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#apply",
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0b6e52] group-hover:text-[#0f8a66] transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: "Inquire Service"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 927,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "transition-transform group-hover:translate-x-1",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 928,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 923,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 922,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 901,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "relative h-40 sm:h-44 w-full overflow-hidden bg-stone-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/services/travel-insurance.webp",
                                                        alt: "Travel Insurance",
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 937,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 936,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[10px] font-bold tracking-wider text-amber-800 uppercase block mb-1",
                                                            children: "EMBASSY APPROVED"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 944,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-1.5 leading-snug",
                                                            children: "Travel Medical Insurance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 947,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs text-stone-600 leading-relaxed font-light",
                                                            children: "Embassy-approved €30,000+ travel medical insurance policies tailored for Schengen and worldwide visa approvals."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 950,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 943,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 935,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "px-5 pb-5 pt-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#apply",
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0b6e52] group-hover:text-[#0f8a66] transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: "Inquire Service"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 960,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "transition-transform group-hover:translate-x-1",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 961,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 956,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 955,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 934,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "relative h-40 sm:h-44 w-full overflow-hidden bg-stone-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/services/visa-eligibility.webp",
                                                        alt: "Visa Eligibility",
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 970,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 969,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[10px] font-bold tracking-wider text-amber-800 uppercase block mb-1",
                                                            children: "EXPRESS ASSESSMENT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 977,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-1.5 leading-snug",
                                                            children: "Visa Eligibility"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 980,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs text-stone-600 leading-relaxed font-light",
                                                            children: "Check your application readiness in 60s."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 983,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 976,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 968,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "px-5 pb-5 pt-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#quick-check-card",
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0b6e52] group-hover:text-[#0f8a66] transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: "Check Eligibility"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 993,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "transition-transform group-hover:translate-x-1",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 994,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 989,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 988,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 967,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                            lineNumber: 734,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                    lineNumber: 721,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                lineNumber: 720,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "documents",
                className: "jsx-4c3226a5b4c3c4ec" + " " + "py-20 lg:py-28 bg-[#fdfbf7] border-y border-stone-200/80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4c3226a5b4c3c4ec" + " " + "max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-center max-w-3xl mx-auto mb-12 sm:mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs font-semibold uppercase tracking-widest text-[#0b6e52] bg-emerald-100/90 px-3.5 py-1 rounded-full border border-emerald-200/60",
                                    children: "CHECKLIST BY APPLICANT TYPE"
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1006,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] mt-3",
                                    children: "Required Documents for Spain Visa"
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1009,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-stone-600 text-sm sm:text-base mt-3 font-light leading-relaxed max-w-2xl mx-auto",
                                    children: "Select your employment status to filter exact document requirements formatted for Consulate approval."
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1012,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white border border-stone-200/90 shadow-xs rounded-2xl max-w-3xl mx-auto",
                                    children: [
                                        {
                                            id: 0,
                                            label: "Employees & Salaried",
                                            icon: "💼"
                                        },
                                        {
                                            id: 1,
                                            label: "Business Owners & Partners",
                                            icon: "🏢"
                                        },
                                        {
                                            id: 2,
                                            label: "Golden Visa & Freelancers",
                                            icon: "⭐"
                                        },
                                        {
                                            id: 3,
                                            label: "Dependents & Students",
                                            icon: "🎓"
                                        }
                                    ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveDocTab(tab.id),
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + `flex-1 min-w-[140px] sm:min-w-0 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${activeDocTab === tab.id ? "bg-[#0b6e52] text-white shadow-md scale-102" : "text-stone-700 hover:text-[#0b6e52] hover:bg-stone-50"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: tab.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1032,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: tab.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1033,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, tab.id, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1024,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1017,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                            lineNumber: 1005,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c3226a5b4c3c4ec" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 animate-fadeIn",
                            children: [
                                activeDocTab === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs",
                                                            children: "📘"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1046,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3",
                                                            children: "1. Passport & Photos"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1049,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-2.5 text-xs text-stone-600 font-light leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1051,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Passport with min. 6 months validity & 2 blank pages"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1051,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1051,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1052,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "2 recent passport photographs (white background, Schengen spec)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1052,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1052,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1053,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Copies of previous Schengen, US, or UK visas"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1053,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1053,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1050,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1045,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider",
                                                    children: "Mandatory Standard"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1056,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1044,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs",
                                                            children: "🏢"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1061,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3",
                                                            children: "2. Employer NOC Letter"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1064,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-2.5 text-xs text-stone-600 font-light leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1066,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Valid UAE Residence Visa copy (min. 3 months validity)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1066,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1066,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1067,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Original NOC letter stating position, salary, join date & approved leave"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1067,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1067,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1068,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Official company stamp & authorized signatory signature"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1068,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1068,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1065,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1060,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider",
                                                    children: "Employment Proof"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1071,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1059,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs",
                                                            children: "💳"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1076,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3",
                                                            children: "3. Personal Bank Statement"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1079,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-2.5 text-xs text-stone-600 font-light leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1081,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "6 months original UAE bank statement stamped by bank"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1081,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1081,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1082,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Regular monthly salary credit transactions"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1082,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1082,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1083,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Min. closing balance covering travel budget (~AED 15,000+)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1083,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1083,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1080,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1075,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider",
                                                    children: "Financial Proof"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1086,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1074,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs",
                                                            children: "✈️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1091,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3",
                                                            children: "4. Complete Travel File"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1094,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-2.5 text-xs text-stone-600 font-light leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1096,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Confirmed roundtrip flight reservation (Provided by Eshaare)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1096,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1096,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1097,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Confirmed hotel voucher bookings for full stay duration"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1097,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1097,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1098,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Schengen travel medical insurance (€30,000 policy included)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1098,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1098,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1095,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1090,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider",
                                                    children: "Included in Package"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1101,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1089,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1042,
                                    columnNumber: 15
                                }, this),
                                activeDocTab === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs",
                                                            children: "📘"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1111,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3",
                                                            children: "1. Passport & Emirates ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1112,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-2.5 text-xs text-stone-600 font-light leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1114,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Original passport with min. 6 months validity"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1114,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1114,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1115,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Valid UAE Residence Visa & Emirates ID copy"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1115,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1115,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1116,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "2 Schengen specification photos"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1116,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1116,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1113,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1110,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider",
                                                    children: "Identity Standard"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1119,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1109,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs",
                                                            children: "📄"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1124,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3",
                                                            children: "2. Trade License & MOA"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1125,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-2.5 text-xs text-stone-600 font-light leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1127,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Valid UAE Trade License copy showing applicant name"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1127,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1127,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1128,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Memorandum of Association (MOA) / Share Certificate"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1128,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1128,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1129,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Self-signed business introduction letter"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1129,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1129,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1126,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1123,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider",
                                                    children: "Business Proof"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1132,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1122,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs",
                                                            children: "💳"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1137,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3",
                                                            children: "3. Company & Personal Bank"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1138,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-2.5 text-xs text-stone-600 font-light leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1140,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "6 months personal bank statement stamped by bank"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1140,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1140,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1141,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "6 months company corporate bank statement (Recommended)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1141,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1141,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1142,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Healthy cashflow & financial solvency proof"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1142,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1142,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1139,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1136,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider",
                                                    children: "Financial Proof"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1145,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs",
                                                            children: "✈️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1150,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3",
                                                            children: "4. Flight, Hotel & Insurance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1151,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-2.5 text-xs text-stone-600 font-light leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1153,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Confirmed roundtrip flight itinerary reservation"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1153,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1153,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1154,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Confirmed hotel vouchers or business invitation letter"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1154,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1154,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1155,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "€30,000 Schengen insurance policy voucher"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1155,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1155,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1152,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider",
                                                    children: "Included in Package"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1158,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1148,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1107,
                                    columnNumber: 15
                                }, this),
                                activeDocTab === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs",
                                                            children: "⭐"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1168,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3",
                                                            children: "1. Passport & Golden Visa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1169,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-2.5 text-xs text-stone-600 font-light leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1171,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Passport with min. 6 months validity & 2 blank pages"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1171,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1171,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1172,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Valid 5/10-year UAE Golden Visa copy or Freelance permit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1172,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1172,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1173,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "2 recent passport photographs (Schengen spec)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1173,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1173,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1170,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1167,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider",
                                                    children: "Residency Privilege"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1176,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1166,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs",
                                                            children: "📝"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1181,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3",
                                                            children: "2. Declaration Cover Letter"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1182,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-2.5 text-xs text-stone-600 font-light leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1184,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Self-declaration letter detailing trip purpose & dates"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1184,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1184,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1185,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Freelance work contract / client proof (if applicable)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1185,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1185,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1186,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Previous Schengen visa travel history copies"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1186,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1186,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1183,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1180,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider",
                                                    children: "Cover Letter"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1189,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs",
                                                            children: "💳"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1194,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3",
                                                            children: "3. Personal Bank Statement"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1195,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-2.5 text-xs text-stone-600 font-light leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1197,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "3 to 6 months stamped UAE personal bank statement"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1197,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1197,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1198,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Healthy ending balance demonstrating financial means"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1198,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1198,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1199,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Proof of property investment or assets (Optional booster)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1199,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1199,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1196,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1193,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider",
                                                    children: "Financial Proof"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1202,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1192,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs",
                                                            children: "✈️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1207,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3",
                                                            children: "4. Itinerary & Insurance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1208,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-2.5 text-xs text-stone-600 font-light leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1210,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Confirmed roundtrip flight reservation voucher"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1210,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1210,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1211,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Hotel accommodation reservations (Provided)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1211,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1211,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1212,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Compliant €30,000 Schengen travel insurance"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1212,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1212,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1209,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1206,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider",
                                                    children: "Included in Package"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1215,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1205,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1164,
                                    columnNumber: 15
                                }, this),
                                activeDocTab === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs",
                                                            children: "📘"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1225,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3",
                                                            children: "1. Passport & Dependent Visa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1226,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-2.5 text-xs text-stone-600 font-light leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1228,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Original passport with min. 6 months validity"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1228,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1228,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1229,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Valid UAE Dependent Residence Visa copy"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1229,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1229,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1230,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "2 Schengen specification photographs"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1230,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1230,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1227,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1224,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider",
                                                    children: "Identity Proof"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1233,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1223,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs",
                                                            children: "🎓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1238,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3",
                                                            children: "2. Sponsor Documents & NOC"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1239,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-2.5 text-xs text-stone-600 font-light leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1241,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Sponsor passport & valid UAE visa copy"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1241,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1241,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1242,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Sponsor NOC & Financial Guarantee letter"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1242,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1242,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1243,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "University/School NOC letter (for students)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1243,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1243,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1240,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1237,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider",
                                                    children: "Sponsorship Proof"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1246,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1236,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs",
                                                            children: "💳"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1251,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3",
                                                            children: "3. Sponsor Bank Statement"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1252,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-2.5 text-xs text-stone-600 font-light leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1254,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "6 months original UAE bank statement of the sponsor"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1254,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1254,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1255,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Proof of sufficient balance for all traveling family members"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1255,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1255,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1256,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Attested birth/marriage certificates (if required)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1256,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1256,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1253,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1250,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider",
                                                    children: "Financial Guarantee"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1259,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1249,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs",
                                                            children: "✈️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1264,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3",
                                                            children: "4. Complete Travel File"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1265,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-2.5 text-xs text-stone-600 font-light leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1267,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Confirmed flight reservation covering all travelers"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1267,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1267,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1268,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Family hotel bookings covering full stay duration"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1268,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1268,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[#0b6e52] font-bold shrink-0 mt-0.5",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1269,
                                                                            columnNumber: 62
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                                            children: "Schengen travel medical insurance policy"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                            lineNumber: 1269,
                                                                            columnNumber: 129
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1269,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1266,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1263,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider",
                                                    children: "Included in Package"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1272,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1262,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1221,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                            lineNumber: 1040,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                    lineNumber: 1004,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                lineNumber: 1003,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "process",
                className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-[#0c1f17] text-white py-20 lg:py-28 border-y border-emerald-900/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4c3226a5b4c3c4ec" + " " + "max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-center max-w-3xl mx-auto mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800",
                                    children: "SIMPLE 5-STEP JOURNEY"
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1284,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-3",
                                    children: "How We Get Your Spain Visa Approved"
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1287,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-emerald-200/80 text-sm sm:text-base mt-3 font-light",
                                    children: "Our structured process ensures accuracy, speed, and complete peace of mind."
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1290,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                            lineNumber: 1283,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c3226a5b4c3c4ec" + " " + "hidden lg:grid grid-cols-5 gap-4 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute top-1/2 left-10 right-10 h-0.5 bg-emerald-800 -translate-y-6 z-0"
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1298,
                                    columnNumber: 13
                                }, this),
                                [
                                    {
                                        step: "01",
                                        title: "Free Consultation",
                                        desc: "Send your details. Our expert reviews your eligibility and advises exact documents required."
                                    },
                                    {
                                        step: "02",
                                        title: "Document Review",
                                        desc: "We rigorously verify your passport, NOC, and bank statements to fix potential errors."
                                    },
                                    {
                                        step: "03",
                                        title: "Form & Flight File",
                                        desc: "We generate official forms, confirmed flight reservations, hotel vouchers, and insurance."
                                    },
                                    {
                                        step: "04",
                                        title: "BLS Appointment",
                                        desc: "We secure your appointment slot at BLS Dubai/Abu Dhabi and prep you for biometrics."
                                    },
                                    {
                                        step: "05",
                                        title: "Passport & Visa",
                                        desc: "Track status in real-time until your stamped passport with Spain Schengen visa is delivered."
                                    }
                                ].map((st, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "relative z-10 bg-[#081812] border border-emerald-900/60 p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-500 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "w-12 h-12 rounded-xl bg-[#0b6e52] text-white font-serif-dm text-lg font-bold flex items-center justify-center mb-4 shadow-lg shadow-emerald-950",
                                                    children: st.step
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1329,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-white mb-2",
                                                    children: st.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1332,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs text-emerald-100/70 leading-relaxed",
                                                    children: st.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1333,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1328,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 1327,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                            lineNumber: 1296,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c3226a5b4c3c4ec" + " " + "lg:hidden space-y-6 relative overflow-hidden before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-emerald-800",
                            children: [
                                {
                                    step: "01",
                                    title: "Free Consultation",
                                    desc: "Send your details. Our expert reviews your eligibility and advises exact documents required."
                                },
                                {
                                    step: "02",
                                    title: "Document Review",
                                    desc: "We rigorously verify your passport, NOC, and bank statements to fix potential errors."
                                },
                                {
                                    step: "03",
                                    title: "Form & Flight File",
                                    desc: "We generate official forms, confirmed flight reservations, hotel vouchers, and insurance."
                                },
                                {
                                    step: "04",
                                    title: "BLS Appointment",
                                    desc: "We secure your appointment slot at BLS Dubai/Abu Dhabi and prep you for biometrics."
                                },
                                {
                                    step: "05",
                                    title: "Passport & Visa",
                                    desc: "Track status in real-time until your stamped passport with Spain Schengen visa is delivered."
                                }
                            ].map((st, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "relative flex items-start gap-4 pl-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-10 h-10 rounded-xl bg-[#0b6e52] text-white font-serif-dm font-bold flex items-center justify-center shrink-0 z-10",
                                            children: st.step
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1369,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-[#081812] border border-emerald-900/60 p-5 rounded-xl flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-white mb-1",
                                                    children: st.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1373,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs text-emerald-100/70 leading-relaxed",
                                                    children: st.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1374,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1372,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1368,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                            lineNumber: 1340,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                    lineNumber: 1282,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                lineNumber: 1281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-4c3226a5b4c3c4ec" + " " + "py-20 lg:py-28 bg-[#fdfbf7] border-y border-stone-200/80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4c3226a5b4c3c4ec" + " " + "max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4c3226a5b4c3c4ec" + " " + "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "lg:col-span-6 space-y-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs font-bold uppercase tracking-widest text-[#b89568]",
                                                children: "OPERATIONAL EXCELLENCE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 1389,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] mt-2.5 leading-tight",
                                                children: "Why UAE Residents Choose Eshaare Tours"
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 1392,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "text-stone-600 text-sm sm:text-base mt-3.5 leading-relaxed font-light",
                                                children: "Navigating visa applications demands speed, accuracy, and absolute transparency. Eshaare Tours combines deep regulatory knowledge with physical doorstep services to deliver a frictionless experience."
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 1395,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 1388,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-6 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-4 sm:gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#163c2e] text-white font-sans-dm font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-xs mt-0.5",
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 1404,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#1a1a1a] leading-snug",
                                                                children: "Dossier Audit & Consultation"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 1408,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed font-light",
                                                                children: "Our specialists thoroughly audit your documents against embassy checklists to prevent rejection risks."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 1411,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 1407,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 1403,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-4 sm:gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#163c2e] text-white font-sans-dm font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-xs mt-0.5",
                                                        children: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 1419,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#1a1a1a] leading-snug",
                                                                children: "Urgent Appointment Slot Tracking"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 1423,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed font-light",
                                                                children: "24/7 express tracking captures early VFS and embassy submission slots as soon as they open."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 1426,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 1422,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 1418,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-4 sm:gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#163c2e] text-white font-sans-dm font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-xs mt-0.5",
                                                        children: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 1434,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#1a1a1a] leading-snug",
                                                                children: "Active GDS Flight & Hotel Holds"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 1438,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed font-light",
                                                                children: "Receive verifiable flight hold itineraries with live PNR codes that satisfy strict embassy verification requirements."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 1441,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 1437,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 1433,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "flex items-start gap-4 sm:gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#163c2e] text-white font-sans-dm font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-xs mt-0.5",
                                                        children: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 1449,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#1a1a1a] leading-snug",
                                                                children: "Doorstep Courier Across 7 Emirates"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 1453,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed font-light",
                                                                children: "Enjoy hassle-free home/office document pickup and stamped passport delivery anywhere in the UAE."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 1456,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 1452,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 1448,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 1401,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 1387,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "lg:col-span-6 flex flex-col gap-5 sm:gap-6 pt-2 lg:pt-24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 border border-stone-200/80 shadow-md aspect-[4/3] sm:aspect-[16/10] w-full group",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/why-choose-us/why-choose-us-main.webp",
                                            alt: "Why UAE Residents Choose Eshaare Tours",
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1468,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 1467,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-md border border-stone-200/80 flex items-center gap-4 sm:gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-stone-200 shrink-0 border border-stone-200/60",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/why-choose-us/why-choose-us-advisor.webp",
                                                    alt: "Licensed Dubai Consultancy Advisor",
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 !w-full !h-full !object-cover !object-center"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1478,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 1477,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4c3226a5b4c3c4ec",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#b89568]",
                                                        children: "DEDICATED SPECIALIST SUPPORT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 1485,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#1a1a1a] mt-0.5",
                                                        children: "Licensed Dubai Consultancy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 1488,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs text-stone-600 mt-1 leading-relaxed font-light",
                                                        children: "Our travel advisors provide personalized, step-by-step guidance to ensure every application file is complete and embassy-compliant."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 1491,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 1484,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 1476,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 1465,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                        lineNumber: 1385,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                    lineNumber: 1384,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                lineNumber: 1383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-[#0a1f17] text-white py-16 lg:py-24 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "apply",
                        className: "jsx-4c3226a5b4c3c4ec"
                    }, void 0, false, {
                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                        lineNumber: 1503,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4c3226a5b4c3c4ec" + " " + "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-[#0f291e] border border-emerald-800/60 rounded-3xl p-8 sm:p-12 shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-center max-w-2xl mx-auto mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800",
                                            children: "START YOUR APPLICATION TODAY"
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1507,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-4",
                                            children: "Ready to start your Spain journey?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1510,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-emerald-200/80 text-sm sm:text-base mt-3",
                                            children: "Fill out the quick inquiry form below or chat directly with our Spain visa specialists."
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1513,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1506,
                                    columnNumber: 13
                                }, this),
                                bottomFormSubmitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-[#081812] border border-emerald-800 rounded-2xl p-8 max-w-xl mx-auto text-center space-y-4 shadow-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-14 h-14 bg-[#0b6e52] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1521,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif text-xl font-bold text-white",
                                            children: "Consultation Request Received!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1524,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-sm text-emerald-200/90",
                                            children: "Thank you! Our Spain visa specialist will review your details and call you shortly to assist with your application."
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1527,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setBottomFormSubmitted(false),
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs text-emerald-400 font-semibold underline pt-2 cursor-pointer hover:text-emerald-300",
                                            children: "Submit another inquiry"
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1530,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1520,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleBottomSubmit,
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto",
                                    children: [
                                        bottomError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "md:col-span-2 bg-red-900/60 border border-red-500/60 text-red-200 px-4 py-3 rounded-xl text-xs font-medium",
                                            children: bottomError
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1540,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "block text-xs font-medium text-emerald-200 mb-1",
                                                    children: "Full Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1546,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    placeholder: "e.g. Sarah Ahmed",
                                                    value: bottomFormData.fullName,
                                                    onChange: (e)=>setBottomFormData({
                                                            ...bottomFormData,
                                                            fullName: e.target.value
                                                        }),
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "w-full bg-[#081812] border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white placeholder-emerald-700 focus:outline-none focus:border-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1547,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1545,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "block text-xs font-medium text-emerald-200 mb-1",
                                                    children: "Phone / WhatsApp Number *"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1558,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    required: true,
                                                    placeholder: "+971 50 123 4567",
                                                    value: bottomFormData.phone,
                                                    onChange: (e)=>setBottomFormData({
                                                            ...bottomFormData,
                                                            phone: e.target.value
                                                        }),
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "w-full bg-[#081812] border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white placeholder-emerald-700 focus:outline-none focus:border-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1559,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1557,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "block text-xs font-medium text-emerald-200 mb-1",
                                                    children: "Email Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1570,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    placeholder: "sarah@example.com",
                                                    value: bottomFormData.email,
                                                    onChange: (e)=>setBottomFormData({
                                                            ...bottomFormData,
                                                            email: e.target.value
                                                        }),
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "w-full bg-[#081812] border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white placeholder-emerald-700 focus:outline-none focus:border-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1571,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1569,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "block text-xs font-medium text-emerald-200 mb-1",
                                                    children: "UAE Residence Location *"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1581,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: bottomFormData.residenceLocation,
                                                    onChange: (e)=>setBottomFormData({
                                                            ...bottomFormData,
                                                            residenceLocation: e.target.value
                                                        }),
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "w-full bg-[#081812] border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Dubai",
                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                            children: "Dubai"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1587,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Abu Dhabi",
                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                            children: "Abu Dhabi"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1588,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Sharjah",
                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                            children: "Sharjah"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1589,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Ajman / RAK / UAQ / Fujairah",
                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                            children: "Ajman / RAK / UAQ / Fujairah"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1590,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1582,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1580,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "md:col-span-2 pt-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isSubmittingBottom,
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "w-full bg-[#0b6e52] hover:bg-[#0f8a66] disabled:opacity-60 text-white font-semibold py-4 rounded-xl shadow-lg transition-all text-base flex items-center justify-center gap-2 group cursor-pointer",
                                                children: isSubmittingBottom ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-4c3226a5b4c3c4ec",
                                                    children: "Submitting Lead..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1601,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec",
                                                            children: "Apply for Spain Visa Now"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1604,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-5 h-5 group-hover:translate-x-1 transition-transform",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M14 5l7 7m0 0l-7 7m7-7H3",
                                                                className: "jsx-4c3226a5b4c3c4ec"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                lineNumber: 1606,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1605,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1603,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 1595,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1594,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1538,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "mt-8 text-center pt-6 border-t border-emerald-800/40 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs text-emerald-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-4c3226a5b4c3c4ec",
                                            children: "Or reach us instantly:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1616,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "flex flex-wrap items-center justify-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20want%20to%20apply%20for%20a%20Spain%20Visa",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/60 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: "💬 WhatsApp: +971 55 733 8429"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 1624,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1618,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:+971557338429",
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/60 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec",
                                                        children: "📞 Call Us: +971 55 733 8429"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 1630,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1626,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1617,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1615,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                            lineNumber: 1505,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                        lineNumber: 1504,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                lineNumber: 1502,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "destinations",
                className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-10 sm:pt-12 lg:pt-16 pb-16 lg:pb-20 bg-[#fdfbf7] border-t border-stone-200/80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4c3226a5b4c3c4ec" + " " + "max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-center max-w-3xl mx-auto mb-8 sm:mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs font-semibold uppercase tracking-widest text-[#0b6e52] bg-emerald-100/90 px-3.5 py-1 rounded-full border border-emerald-200/60",
                                    children: "GLOBAL DESTINATIONS"
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1642,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] mt-3",
                                    children: "Popular Global Destinations Covered"
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1645,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-stone-600 text-sm sm:text-base mt-3 font-light",
                                    children: "Seamless visa processing and curated itineraries for iconic international destinations."
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1648,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                            lineNumber: 1641,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c3226a5b4c3c4ec" + " " + "grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "md:col-span-5 flex flex-col gap-4 sm:gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 shadow-md hover:shadow-xl transition-all duration-300 h-56 sm:h-64 group border border-stone-200/60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/destinations/Global Destination 1.webp",
                                                    alt: "Global Destination 1",
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1659,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-5 flex flex-col justify-end z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-white font-serif-dm text-base sm:text-lg lg:text-xl font-bold",
                                                            children: "Kenya & East Africa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1665,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-stone-200 text-xs",
                                                            children: "Wildlife Safaris & Adventure"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1666,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1664,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1658,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "grid grid-cols-2 gap-4 sm:gap-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 shadow-md hover:shadow-xl transition-all duration-300 h-44 sm:h-52 group border border-stone-200/60",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/images/destinations/Global Destination 2.webp",
                                                            alt: "Global Destination 2",
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1673,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent p-3.5 flex flex-col justify-end z-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-white font-serif-dm text-sm sm:text-base font-bold",
                                                                    children: "Switzerland"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1679,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-stone-200 text-[10px]",
                                                                    children: "Alpine Escape"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1680,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1678,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1672,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 shadow-md hover:shadow-xl transition-all duration-300 h-44 sm:h-52 group border border-stone-200/60",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/images/destinations/Global Destination 3.webp",
                                                            alt: "Global Destination 3",
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1684,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent p-3.5 flex flex-col justify-end z-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-white font-serif-dm text-sm sm:text-base font-bold",
                                                                    children: "Japan"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1690,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-stone-200 text-[10px]",
                                                                    children: "Kyoto Heritage"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                                    lineNumber: 1691,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1689,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1683,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1671,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1656,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "md:col-span-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 shadow-md hover:shadow-xl transition-all duration-300 h-80 md:h-full min-h-[360px] md:min-h-[480px] group border border-stone-200/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/destinations/Global Destination 4.webp",
                                                alt: "Global Destination 4",
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 1700,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-5 flex flex-col justify-end z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "text-white font-serif-dm text-lg sm:text-xl lg:text-2xl font-bold",
                                                        children: "Norway Fjords"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 1706,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "text-stone-200 text-xs",
                                                        children: "Canyons & Northern Lights"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                        lineNumber: 1707,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                lineNumber: 1705,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 1699,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1698,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "md:col-span-4 flex flex-col gap-4 sm:gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 shadow-md hover:shadow-xl transition-all duration-300 h-48 sm:h-56 group border border-stone-200/60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/destinations/Global Destination 5.webp",
                                                    alt: "Global Destination 5",
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1716,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent p-4 flex flex-col justify-end z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-white font-serif-dm text-base sm:text-lg font-bold",
                                                            children: "Austria & Alps"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1722,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-stone-200 text-xs",
                                                            children: "Snow Treks & Resorts"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1723,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1721,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1715,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 shadow-md hover:shadow-xl transition-all duration-300 h-52 sm:h-60 group border border-stone-200/60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/destinations/Global Destination 6.webp",
                                                    alt: "Global Destination 6",
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1729,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent p-4 flex flex-col justify-end z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-white font-serif-dm text-base sm:text-lg font-bold",
                                                            children: "France & Paris"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1735,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-stone-200 text-xs",
                                                            children: "Lakes & Gardens"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                            lineNumber: 1736,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1734,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1728,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1713,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                            lineNumber: 1654,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                    lineNumber: 1640,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                lineNumber: 1639,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "faq",
                className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-10 sm:pt-12 lg:pt-16 pb-16 lg:pb-20 bg-[#f8f6f2] border-t border-stone-200/80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4c3226a5b4c3c4ec" + " " + "max-w-6xl mx-auto px-4 sm:px-8 lg:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c3226a5b4c3c4ec" + " " + "text-center max-w-3xl mx-auto mb-8 sm:mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs font-semibold uppercase tracking-widest text-[#0b6e52] bg-emerald-100/90 px-3.5 py-1 rounded-full border border-emerald-200/60",
                                    children: "FREQUENTLY ASKED QUESTIONS"
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1748,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] mt-3",
                                    children: "Spain Visa FAQs for UAE Residents"
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1751,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "text-stone-600 text-sm sm:text-base mt-3 font-light leading-relaxed",
                                    children: "Everything you need to know before applying for your Spain Schengen visa."
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1754,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                            lineNumber: 1747,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c3226a5b4c3c4ec" + " " + "space-y-3.5",
                            children: faqs.map((faq, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:border-emerald-700/30 hover:shadow-md transition-all duration-300 overflow-hidden group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleFaq(idx),
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "w-full text-left px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-base sm:text-lg font-bold text-[#063024] group-hover:text-[#0b6e52] transition-colors leading-snug",
                                                    children: faq.q
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1769,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-4c3226a5b4c3c4ec" + " " + `w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-sans-dm text-xs font-bold transition-all duration-300 ${openFaq === idx ? "bg-[#0b6e52] text-white rotate-180 shadow-xs" : "bg-[#f4f8f6] text-[#0b6e52] group-hover:bg-[#0b6e52] group-hover:text-white"}`,
                                                    children: openFaq === idx ? "−" : "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                                    lineNumber: 1772,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1765,
                                            columnNumber: 17
                                        }, this),
                                        openFaq === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c3226a5b4c3c4ec" + " " + "px-6 pb-5 pt-3.5 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-stone-100/80 bg-[#fdfbf7]/60 animate-fadeIn",
                                            children: faq.a
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1782,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1761,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                            lineNumber: 1759,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                    lineNumber: 1746,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                lineNumber: 1745,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-4c3226a5b4c3c4ec" + " " + "relative py-24 lg:py-32 bg-stone-900 text-white overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/spain/Gibralfaro .webp",
                                alt: "Andalusia Landscape Spain",
                                fill: true,
                                className: "object-cover opacity-35",
                                sizes: "100vw"
                            }, void 0, false, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 1795,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute inset-0 bg-gradient-to-t from-[#0c1f17] via-[#0c1f17]/70 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 1802,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                        lineNumber: 1794,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4c3226a5b4c3c4ec" + " " + "max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 text-center relative z-10 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-700/50",
                                children: "START YOUR SCHENGEN EXPERIENCE"
                            }, void 0, false, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 1806,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight",
                                children: "Spain is waiting."
                            }, void 0, false, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 1809,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed",
                                children: "Let our Dubai visa specialists take care of the paperwork, appointment booking, and file verification. Speak with us today."
                            }, void 0, false, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 1812,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "pt-4 flex flex-col sm:flex-row items-center justify-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#apply",
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "w-full sm:w-auto bg-[#0b6e52] hover:bg-[#0f8a66] text-white font-semibold px-8 py-4 rounded-xl shadow-xl transition-all text-base",
                                        children: "Book Free Visa Consultation"
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 1816,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20want%20to%20apply%20for%20a%20Spain%20Visa",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "jsx-4c3226a5b4c3c4ec" + " " + "w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-8 py-4 rounded-xl backdrop-blur-md transition-all text-base flex items-center justify-center gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-4c3226a5b4c3c4ec",
                                            children: "Chat on WhatsApp"
                                        }, void 0, false, {
                                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                            lineNumber: 1828,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                        lineNumber: 1822,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 1815,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                        lineNumber: 1805,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                lineNumber: 1793,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom, 0px))"
                },
                className: "jsx-4c3226a5b4c3c4ec" + " " + "lg:hidden fixed bottom-0 inset-x-0 z-[9999] bg-white border-t border-stone-200/90 px-3 py-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] flex items-center justify-between gap-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#quick-check-card",
                        className: "jsx-4c3226a5b4c3c4ec" + " " + "flex-1 min-w-0 h-11 bg-[#0b6e52] hover:bg-[#0f8a66] active:scale-[0.98] text-white text-xs sm:text-sm font-bold rounded-xl text-center shadow-sm flex items-center justify-center gap-1.5 transition-all truncate",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "truncate",
                                children: "Apply Now"
                            }, void 0, false, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 1844,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "shrink-0",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 1845,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                        lineNumber: 1840,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20want%20to%20apply%20for%20a%20Spain%20Visa",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "jsx-4c3226a5b4c3c4ec" + " " + "flex-1 min-w-0 h-11 bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] text-white text-xs sm:text-sm font-bold rounded-xl text-center shadow-sm flex items-center justify-center gap-1.5 transition-all truncate",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "jsx-4c3226a5b4c3c4ec" + " " + "truncate",
                            children: "💬 WhatsApp Chat"
                        }, void 0, false, {
                            fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                            lineNumber: 1853,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                        lineNumber: 1847,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                lineNumber: 1836,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4c3226a5b4c3c4ec" + " " + "hidden lg:flex fixed bottom-8 right-8 z-50 items-end gap-3 pointer-events-auto",
                children: [
                    showChatBubble && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4c3226a5b4c3c4ec" + " " + "hidden lg:flex items-center gap-2.5 bg-white text-stone-800 text-xs font-medium px-4 py-2.5 rounded-2xl shadow-xl border border-stone-200/90 transition-all max-w-xs relative animate-bounce",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowChatBubble(false),
                                "aria-label": "Close Chat Suggestion",
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "text-stone-400 hover:text-stone-600 font-bold text-xs p-0.5 cursor-pointer",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 1861,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-4c3226a5b4c3c4ec",
                                children: "Have questions? Chat with our Dubai visa expert live!"
                            }, void 0, false, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 1868,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                        lineNumber: 1860,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20have%20questions%20about%20Spain%20Schengen%20Visa",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Chat on WhatsApp",
                        className: "jsx-4c3226a5b4c3c4ec" + " " + "w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 relative group shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "w-8 h-8 fill-current",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
                                    className: "jsx-4c3226a5b4c3c4ec"
                                }, void 0, false, {
                                    fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                    lineNumber: 1879,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 1878,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-4c3226a5b4c3c4ec" + " " + "absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                                lineNumber: 1881,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                        lineNumber: 1871,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
                lineNumber: 1858,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/visa-services/spain-visa-from-uae/page.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
_s(SpainVisaPage, "nFLYqin/i02Lfx1Qoz2uWcxZZtw=");
_c = SpainVisaPage;
var _c;
__turbopack_context__.k.register(_c, "SpainVisaPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_visa-services_spain-visa-from-uae_page_tsx_0944isa._.js.map