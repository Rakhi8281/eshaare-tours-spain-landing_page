"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SpainVisaPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeDocTab, setActiveDocTab] = useState<number>(0);
  const [showChatBubble, setShowChatBubble] = useState<boolean>(true);

  // Controlled form values for instant sanitization & validation
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    residenceLocation: "Dubai",
  });
  const [heroError, setHeroError] = useState("");
  const [isSubmittingHero, setIsSubmittingHero] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [bottomFormData, setBottomFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    residenceLocation: "Dubai",
  });
  const [bottomError, setBottomError] = useState("");
  const [isSubmittingBottom, setIsSubmittingBottom] = useState(false);
  const [bottomFormSubmitted, setBottomFormSubmitted] = useState(false);

  const validateLead = (data: { fullName: string; phone: string; email: string }) => {
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
  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHeroError("");

    const error = validateLead(formData);
    if (error) {
      setHeroError(error);
      return;
    }

    setIsSubmittingHero(true);
    const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

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
        keyword: urlParams?.get("utm_term") || urlParams?.get("keyword") || "",
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        setHeroError(result.error || result.message || "Failed to submit lead. Please try again.");
        return;
      }

      setFormSubmitted(true);
      setFormData({ fullName: "", phone: "", email: "", residenceLocation: "Dubai" });
    } catch (err) {
      console.error("Failed to post hero lead:", err);
      setHeroError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmittingHero(false);
    }
  };

  // Bottom Form Submit Handler
  const handleBottomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBottomError("");

    const error = validateLead(bottomFormData);
    if (error) {
      setBottomError(error);
      return;
    }

    setIsSubmittingBottom(true);
    const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

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
        keyword: urlParams?.get("utm_term") || urlParams?.get("keyword") || "",
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        setBottomError(result.error || result.message || "Failed to submit lead. Please try again.");
        return;
      }

      setBottomFormSubmitted(true);
      setBottomFormData({ fullName: "", phone: "", email: "", residenceLocation: "Dubai" });
    } catch (err) {
      console.error("Failed to post bottom lead:", err);
      setBottomError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmittingBottom(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How long does it take to process a Spain Schengen visa from the UAE?",
      a: "The standard processing time for a Spain Schengen visa at BLS International UAE is typically 15 calendar days from the date of your appointment. During peak travel seasons (summer and holidays), processing may take up to 20-30 days, so we recommend applying at least 4-6 weeks before your intended travel date.",
    },
    {
      q: "Can UAE expat residents apply for a Spain visa in Dubai or Abu Dhabi?",
      a: "Yes! Any non-UAE citizen holding a valid UAE Residence Visa (with at least 3 months validity remaining after returning from the Schengen area) can apply through BLS Spain Visa Application Centres in Dubai or Abu Dhabi.",
    },
    {
      q: "Do I need to visit the BLS application center in person for biometrics?",
      a: "If you have not submitted Schengen biometric data (fingerprints and photo) within the last 59 months, you must attend the BLS center in person. If your biometrics were collected within the past 59 months for a previous Schengen visa, our team can submit your application on your behalf.",
    },
    {
      q: "What is the minimum bank balance required for a Spain Schengen Visa?",
      a: "Spain requires applicants to demonstrate sufficient financial means of approximately €113.40 (approx. AED 450) per day per person, with a minimum required balance of €1,020.60 (approx. AED 4,100) per applicant regardless of stay duration. We recommend maintaining a steady 3 to 6-month bank statement with sufficient funds.",
    },
    {
      q: "What documents are included in Eshaare Tours' Spain Visa Package?",
      a: "Our comprehensive package includes complete application form filling, priority BLS appointment booking assistance, document verification & translation check, flight itinerary reservation, confirmed hotel bookings, Schengen-compliant travel insurance policy (€30,000 cover), and customized cover letter preparation.",
    },
    {
      q: "What happens if my Spain visa application gets rejected?",
      a: "With Eshaare Tours, our thorough pre-submission audit maximizes your approval probability. In the rare event of a refusal, we analyze the official refusal letter, correct any discrepancies, and assist you in filing a fast-track appeal or re-application.",
    },
  ];

  return (
    <div
      className="min-h-screen font-sans selection:bg-[#0b6e52] selection:text-white overflow-x-clip w-full max-w-full pb-24 lg:pb-0"
      style={{
        backgroundColor: "#f8f6f2",
        color: "#1a1a1a",
        fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Import Google Fonts directly */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display:ital@0;1&family=Great+Vibes&display=swap');
        
        html {
          scroll-behavior: smooth;
        }

        .font-serif-dm {
          font-family: 'DM Serif Display', Georgia, serif;
        }
        .font-sans-dm {
          font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
        }
        .font-great-vibes {
          font-family: 'Great Vibes', cursive;
        }
      `}</style>


      {/* 2. NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs text-stone-900 transition-all">
        <div className="w-full max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12 h-14 sm:h-18 flex items-center justify-between gap-3">
          {/* Official Eshaare Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink min-w-0">
            <img
              src="/fox-logo.webp"
              alt="Eshaare Tours logo"
              style={{ height: "26px", width: "auto", objectFit: "contain" }}
              className="sm:!h-8 lg:!h-14 shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-none text-left min-w-0">
              <span
                className="font-bold text-[#063024] block transition-colors duration-300 text-base sm:text-xl lg:text-2xl leading-none whitespace-nowrap"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                }}
              >
                Eshaare Tours
              </span>
              <span className="text-[7.5px] sm:text-[9px] tracking-tight sm:tracking-[0.16em] uppercase text-[#0b6e50] font-bold block mt-0.5 whitespace-nowrap overflow-hidden">
                Connecting Dreams Into Destinations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#063024]">
            <a href="#services" className="hover:text-[#0b6e52] transition-colors">
              Visa Services
            </a>
            <a href="#documents" className="hover:text-[#0b6e52] transition-colors">
              Requirements
            </a>
            <a href="#process" className="hover:text-[#0b6e52] transition-colors">
              Process
            </a>
            <a href="#destinations" className="hover:text-[#0b6e52] transition-colors">
              Destinations
            </a>
            <a href="#contact" className="hover:text-[#0b6e52] transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20want%20to%20apply%20for%20a%20Spain%20Visa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#063024] font-medium hover:text-[#0b6e52] flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-stone-300 hover:border-[#0b6e52] transition-all"
            >
              <svg className="w-4 h-4 fill-current text-[#0b6e52]" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Support
            </a>
            <a
              href="#apply"
              style={{ color: "#ffffff" }}
              className="bg-[#0b6e52] hover:bg-[#0f8a66] !text-white text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Start Application
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button (Circular style like reference image) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f1f5f3] hover:bg-[#e3eae6] text-[#063024] flex items-center justify-center focus:outline-none transition-colors shadow-2xs"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-4 pb-6 space-y-4 shadow-xl animate-fadeIn">
            <nav className="flex flex-col space-y-3 font-medium text-base text-[#063024]">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0b6e52] py-2 border-b border-stone-100"
              >
                Visa Services
              </a>
              <a
                href="#documents"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0b6e52] py-2 border-b border-stone-100"
              >
                Requirements
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0b6e52] py-2 border-b border-stone-100"
              >
                Process
              </a>
              <a
                href="#destinations"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0b6e52] py-2 border-b border-stone-100"
              >
                Destinations
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0b6e52] py-2 border-b border-stone-100"
              >
                Contact
              </a>
            </nav>
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#apply"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: "#ffffff" }}
                className="w-full bg-[#0b6e52] hover:bg-[#0f8a66] !text-white text-white text-center font-semibold py-3 rounded-lg shadow-md cursor-pointer"
              >
                Start Application
              </a>
              <a
                href="https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20want%20to%20apply%20for%20a%20Spain%20Visa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-stone-300 text-[#063024] text-center font-medium py-2.5 rounded-lg flex items-center justify-center gap-2"
              >
                <span>💬 Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative bg-[#06241b] text-white pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-10 lg:pb-24 overflow-hidden">
        {/* Architectural Background Image & Reduced Dark Green Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/spain/madrid-royal-palace.webp"
            alt="Spain Plaza Architecture"
            fill
            priority
            className="object-cover object-right sm:object-center opacity-85"
            sizes="100vw"
          />
          {/* Reduced gradient: softer green overlay so background architectural details show through while text stays sharp */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06241b]/90 via-[#06241b]/55 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#06241b]/70 via-transparent to-[#06241b]/20"></div>
        </div>

        <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* High-Impact Google Reviews Social Proof Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/70 bg-amber-400/10 text-amber-300 text-xs font-semibold backdrop-blur-xs">
                <span className="font-bold text-white">5.0</span>
                <span className="flex text-amber-400 text-xs tracking-tighter">★★★★★</span>
                <span className="text-stone-200 font-medium">Google Reviews</span>
              </div>

              {/* Gold & Emerald Eyebrow Pill Badge */}
              <div className="block sm:inline-flex items-center gap-2 px-4 py-1 rounded-full border border-emerald-500/60 text-emerald-300 text-[11px] font-bold uppercase tracking-widest bg-[#0b6e52]/40 backdrop-blur-xs">
                SPAIN VISA FROM UAE
              </div>

              {/* Main H1 Headline (DM Serif Display with Clamp sizing) */}
              <h1
                className="font-serif-dm font-bold tracking-tight text-white leading-[1.1]"
                style={{ fontSize: "clamp(38px, 5.2vw, 64px)" }}
              >
                Your Spain journey starts here.
              </h1>

              {/* Subtext Paragraph (DM Sans - Spacious max-w) */}
              <p className="font-sans-dm text-stone-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
                Professional visa application assistance for UAE residents — from document review and application preparation to appointment guidance.
              </p>

              {/* Dual Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#quick-check-card"
                  className="bg-[#0b6e52] hover:bg-[#0f8a66] text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                >
                  <span>Start Your Spain Visa Application</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20want%20to%20apply%20for%20a%20Spain%20Visa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Trust Badges / Checkmarks Footer Row */}
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-amber-200/90">
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-400 font-bold">✔</span>
                  <span>100% Document Verification</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-400 font-bold">✔</span>
                  <span>Fast-Track BLS Appointment</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-400 font-bold">✔</span>
                  <span>Transparent Pricing</span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Lead Generation Form Card */}
            <div id="quick-check-card" className="lg:col-span-5 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
              <div className="bg-white/98 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-2xl text-stone-900 border border-stone-200/80 w-full max-w-md relative z-20">
                <div className="mb-5 text-left">
                  <h3 className="font-serif-dm text-xl sm:text-2xl font-bold text-[#063024] tracking-tight">
                    UAE Resident Quick Check
                  </h3>
                  <p className="font-sans-dm text-xs text-stone-500 mt-1 leading-relaxed">
                    Share your details and our team will get in touch.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-[#0b6e52] text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                      ✓
                    </div>
                    <h4 className="font-serif-dm text-lg font-bold text-[#063024]">
                      Inquiry Received!
                    </h4>
                    <p className="font-sans-dm text-xs text-stone-600">
                      Thank you! Our Spain Visa specialist will review your details and contact you within 15 minutes.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-[#0b6e52] font-semibold underline pt-1 cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="space-y-4 font-sans-dm">
                    {heroError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-3.5 py-2.5 rounded-xl text-xs font-medium">
                        {heroError}
                      </div>
                    )}

                    {/* Input 1: Full Name */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mohammed Al Mansoori"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#0b6e52] focus:bg-white transition-all shadow-2xs"
                      />
                    </div>

                    {/* Input 2: Phone Number */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#0b6e52] focus:bg-white transition-all shadow-2xs"
                      />
                    </div>

                    {/* Input 3: Email Address */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#0b6e52] focus:bg-white transition-all shadow-2xs"
                      />
                    </div>

                    {/* Input 4: UAE Residence Location */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                        UAE Residence Location *
                      </label>
                      <select
                        value={formData.residenceLocation}
                        onChange={(e) => setFormData({ ...formData, residenceLocation: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-[#0b6e52] focus:bg-white transition-all cursor-pointer shadow-2xs"
                      >
                        <option value="Dubai">Dubai</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman / RAK / UAQ / Fujairah">Ajman / RAK / UAQ / Fujairah</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmittingHero}
                        className="w-full bg-[#0b6e52] hover:bg-[#0f8a66] active:scale-[0.99] disabled:opacity-60 text-white font-semibold py-3.5 px-5 rounded-xl text-center text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                      >
                        {isSubmittingHero ? (
                          <span>Submitting Lead...</span>
                        ) : (
                          <>
                            <span>Get Free Visa Consultation</span>
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Footer Disclaimer */}
                    <p className="text-[10px] text-stone-400 text-center pt-1 font-normal">
                      Your details are handled with care and confidentiality.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST STRIP */}
      <section className="bg-white border-y border-stone-200/80 py-3.5 sm:py-4">
        <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            <div className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-[#f8f6f2] transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#f8f6f2] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif-dm text-sm sm:text-base font-bold text-[#1a1a1a] leading-tight">Expert Visa Guidance</h3>
                <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-snug">
                  Dedicated Schengen specialists guiding you through every requirement step-by-step.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-[#f8f6f2] transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#f8f6f2] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif-dm text-sm sm:text-base font-bold text-[#1a1a1a] leading-tight">Clear Documentation</h3>
                <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-snug">
                  Rigorous document auditing prevents common embassy refusal triggers before submission.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-[#f8f6f2] transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#f8f6f2] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif-dm text-sm sm:text-base font-bold text-[#1a1a1a] leading-tight">Dedicated Support</h3>
                <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-snug">
                  Real-time status updates and end-to-end concierge support across Dubai and Abu Dhabi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SPAIN DESTINATION SECTION */}
      <section className="pt-8 sm:pt-10 lg:pt-12 pb-16 lg:pb-20 max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Column (Left) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0b6e52] bg-emerald-100/80 px-3 py-1 rounded-full">
              DESTINATION HIGHLIGHT
            </span>
            <h2 className="font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] leading-tight">
              Explore Spain: From Madrid to Costa del Sol
            </h2>
            <p className="text-stone-700 text-base leading-relaxed">
              Spain offers an unrivaled blend of golden beaches, historic palaces, world-renowned culinary arts, and vibrant Mediterranean culture. Whether you plan to admire Antoni Gaudí’s architectural wonders in Barcelona, visit the Royal Palace of Madrid, or relax along Andalusia’s sun-kissed coastlines—your dream trip is just one visa away.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">
              With a Spain Schengen Visa issued through Eshaare Tours, you gain entry to Spain as well as unrestricted travel access across all 29 European Schengen member states.
            </p>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-stone-300 text-center sm:text-left">
              <div className="p-2.5 sm:p-3 rounded-lg bg-white border border-stone-200 min-w-0 shadow-xs">
                <span className="block font-serif-dm text-base sm:text-xl font-bold text-[#0b6e52]">90 Days</span>
                <span className="text-[11px] sm:text-xs text-stone-500 block leading-tight mt-0.5">Max Stay</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-lg bg-white border border-stone-200 min-w-0 shadow-xs">
                <span className="block font-serif-dm text-base sm:text-xl font-bold text-[#0b6e52]">29 States</span>
                <span className="text-[11px] sm:text-xs text-stone-500 block leading-tight mt-0.5">Schengen Access</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-lg bg-white border border-stone-200 min-w-0 shadow-xs">
                <span className="block font-serif-dm text-base sm:text-xl font-bold text-[#0b6e52]">15 Days</span>
                <span className="text-[11px] sm:text-xs text-stone-500 block leading-tight mt-0.5">Processing Time</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 text-[#0b6e52] font-semibold text-sm hover:text-[#0f8a66] transition-colors group"
              >
                <span>Plan Your Spain Trip With Us</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image Editorial Column (Right) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/spain/spain.webp"
                  alt="Madrid Royal Palace Spain"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">
                  Capital City
                </span>
                <h3 className="font-serif-dm text-2xl font-bold mt-1">Royal Palace of Madrid</h3>
                <p className="text-xs text-stone-300 mt-1">
                  Immerse yourself in centuries of royal history and majestic plazas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROFESSIONAL VISA & TRAVEL SOLUTIONS (MULTI-SERVICE GRID) */}
      <section id="services" className="bg-[#f8f6f2] pt-10 sm:pt-12 lg:pt-16 pb-16 lg:pb-20 border-y border-stone-200/80">
        <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0b6e52] bg-emerald-100/90 px-3.5 py-1 rounded-full border border-emerald-200/60">
              OUR SERVICES & SOLUTIONS
            </span>
            <h2 className="font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] mt-3">
              Professional Visa & Travel Solutions
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-3 font-light leading-relaxed">
              Comprehensive end-to-end guidance tailored for UAE residents seeking seamless global mobility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {/* Service 1: Doorstep Visa Service */}
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-stone-200">
                  <img
                    src="/images/services/doorstep-visa.webp"
                    alt="Doorstep Visa Service"
                    className="absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase block mb-1">
                    DOORSTEP SERVICE
                  </span>
                  <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-1.5 leading-snug">
                    Doorstep Visa Service
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    Complete document collection, dossier auditing, and stamped passport delivery at your home or office across the 7 Emirates.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-0">
                <a
                  href="#apply"
                  className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0b6e52] group-hover:text-[#0f8a66] transition-colors"
                >
                  <span>Inquire Service</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Service 2: Worldwide Visa Assistance */}
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-stone-200">
                  <img
                    src="/images/services/worldwide-visa.webp"
                    alt="Worldwide Visa Assistance"
                    className="absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase block mb-1">
                    GLOBAL FILING
                  </span>
                  <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-1.5 leading-snug">
                    Worldwide Visa Assistance
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    End-to-end guidance and filing for tourist, business, and student visas for Schengen, UK, USA, GCC, Asia, and Oceania.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-0">
                <a
                  href="#apply"
                  className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0b6e52] group-hover:text-[#0f8a66] transition-colors"
                >
                  <span>Inquire Service</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Service 3: Express VFS Slot Booking */}
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-stone-200">
                  <img
                    src="/images/services/vfs-slot-booking.webp"
                    alt="Express VFS Slot Booking"
                    className="absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase block mb-1">
                    PRIORITY TRACKING
                  </span>
                  <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-1.5 leading-snug">
                    Express VFS Slot Booking
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    24/7 express tracking of VFS and embassy systems to capture urgent or early biometric submission slots as soon as they open.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-0">
                <a
                  href="#apply"
                  className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0b6e52] group-hover:text-[#0f8a66] transition-colors"
                >
                  <span>Inquire Service</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Service 4: Verifiable Flight & Hotel Bookings */}
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-stone-200">
                  <img
                    src="/images/services/flight-hotel-booking.webp"
                    alt="Verifiable Flight & Hotel Bookings"
                    className="absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase block mb-1">
                    EMBASSY COMPLIANT
                  </span>
                  <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-1.5 leading-snug">
                    Flight & Hotel Bookings
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    Embassy-compliant live flight hold itineraries with active GDS PNR codes and confirmed hotel vouchers for visa submission.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-0">
                <a
                  href="#apply"
                  className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0b6e52] group-hover:text-[#0f8a66] transition-colors"
                >
                  <span>Inquire Service</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Service 5: Hajj & Umrah Pilgrimage Services */}
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-stone-200">
                  <img
                    src="/images/services/hajj-umrah.webp"
                    alt="Hajj & Umrah Pilgrimage Services"
                    className="absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase block mb-1">
                    PILGRIMAGE SUPPORT
                  </span>
                  <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-1.5 leading-snug">
                    Hajj & Umrah Services
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    Nusuk permit assistance, Umrah e-visas, Hajj registration for UAE expats, Holy City hotels, and transport coordination.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-0">
                <a
                  href="#apply"
                  className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0b6e52] group-hover:text-[#0f8a66] transition-colors"
                >
                  <span>Inquire Service</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Service 6: Customized Holiday Packages */}
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-stone-200">
                  <img
                    src="/images/services/holiday-packages.webp"
                    alt="Customized Holiday Packages"
                    className="absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase block mb-1">
                    TAILOR-MADE VACATION
                  </span>
                  <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-1.5 leading-snug">
                    Customized Holiday Packages
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    Boutique international vacation packages including curated hotel stays, flight bookings, transfers, and private tours.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-0">
                <a
                  href="#apply"
                  className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0b6e52] group-hover:text-[#0f8a66] transition-colors"
                >
                  <span>Inquire Service</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Service 7: Travel Insurance */}
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-stone-200">
                  <img
                    src="/images/services/travel-insurance.webp"
                    alt="Travel Insurance"
                    className="absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase block mb-1">
                    EMBASSY APPROVED
                  </span>
                  <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-1.5 leading-snug">
                    Travel Medical Insurance
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    Embassy-approved €30,000+ travel medical insurance policies tailored for Schengen and worldwide visa approvals.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-0">
                <a
                  href="#apply"
                  className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0b6e52] group-hover:text-[#0f8a66] transition-colors"
                >
                  <span>Inquire Service</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Service 8: Visa Eligibility */}
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-stone-200">
                  <img
                    src="/images/services/visa-eligibility.webp"
                    alt="Visa Eligibility"
                    className="absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase block mb-1">
                    EXPRESS ASSESSMENT
                  </span>
                  <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-1.5 leading-snug">
                    Visa Eligibility
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    Check your application readiness in 60s.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-0">
                <a
                  href="#quick-check-card"
                  className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0b6e52] group-hover:text-[#0f8a66] transition-colors"
                >
                  <span>Check Eligibility</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REQUIRED DOCUMENTS SECTION (TABBED INTERFACE) */}
      <section id="documents" className="py-20 lg:py-28 bg-[#fdfbf7] border-y border-stone-200/80">
        <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0b6e52] bg-emerald-100/90 px-3.5 py-1 rounded-full border border-emerald-200/60">
              CHECKLIST BY APPLICANT TYPE
            </span>
            <h2 className="font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] mt-3">
              Required Documents for Spain Visa
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-3 font-light leading-relaxed max-w-2xl mx-auto">
              Select your employment status to filter exact document requirements formatted for Consulate approval.
            </p>

            {/* Interactive Document Tabs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white border border-stone-200/90 shadow-xs rounded-2xl max-w-3xl mx-auto">
              {[
                { id: 0, label: "Employees & Salaried", icon: "💼" },
                { id: 1, label: "Business Owners & Partners", icon: "🏢" },
                { id: 2, label: "Golden Visa & Freelancers", icon: "⭐" },
                { id: 3, label: "Dependents & Students", icon: "🎓" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDocTab(tab.id)}
                  className={`flex-1 min-w-[140px] sm:min-w-0 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${activeDocTab === tab.id
                      ? "bg-[#0b6e52] text-white shadow-md scale-102"
                      : "text-stone-700 hover:text-[#0b6e52] hover:bg-stone-50"
                    }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 animate-fadeIn">
            {activeDocTab === 0 && (
              <>
                {/* Employee Card 1 */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs">
                      📘
                    </div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3">1. Passport & Photos</h3>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-light leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Passport with min. 6 months validity & 2 blank pages</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>2 recent passport photographs (white background, Schengen spec)</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Copies of previous Schengen, US, or UK visas</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider">Mandatory Standard</div>
                </div>
                {/* Employee Card 2 */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs">
                      🏢
                    </div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3">2. Employer NOC Letter</h3>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-light leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Valid UAE Residence Visa copy (min. 3 months validity)</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Original NOC letter stating position, salary, join date & approved leave</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Official company stamp & authorized signatory signature</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider">Employment Proof</div>
                </div>
                {/* Employee Card 3 */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs">
                      💳
                    </div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3">3. Personal Bank Statement</h3>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-light leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>6 months original UAE bank statement stamped by bank</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Regular monthly salary credit transactions</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Min. closing balance covering travel budget (~AED 15,000+)</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider">Financial Proof</div>
                </div>
                {/* Employee Card 4 */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs">
                      ✈️
                    </div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3">4. Complete Travel File</h3>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-light leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Confirmed roundtrip flight reservation (Provided by Eshaare)</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Confirmed hotel voucher bookings for full stay duration</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Schengen travel medical insurance (€30,000 policy included)</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider">Included in Package</div>
                </div>
              </>
            )}

            {activeDocTab === 1 && (
              <>
                {/* Business Owner Card 1 */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs">📘</div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3">1. Passport & Emirates ID</h3>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-light leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Original passport with min. 6 months validity</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Valid UAE Residence Visa & Emirates ID copy</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>2 Schengen specification photos</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider">Identity Standard</div>
                </div>
                {/* Business Owner Card 2 */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs">📄</div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3">2. Trade License & MOA</h3>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-light leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Valid UAE Trade License copy showing applicant name</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Memorandum of Association (MOA) / Share Certificate</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Self-signed business introduction letter</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider">Business Proof</div>
                </div>
                {/* Business Owner Card 3 */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs">💳</div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3">3. Company & Personal Bank</h3>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-light leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>6 months personal bank statement stamped by bank</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>6 months company corporate bank statement (Recommended)</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Healthy cashflow & financial solvency proof</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider">Financial Proof</div>
                </div>
                {/* Business Owner Card 4 */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs">✈️</div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3">4. Flight, Hotel & Insurance</h3>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-light leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Confirmed roundtrip flight itinerary reservation</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Confirmed hotel vouchers or business invitation letter</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>€30,000 Schengen insurance policy voucher</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider">Included in Package</div>
                </div>
              </>
            )}

            {activeDocTab === 2 && (
              <>
                {/* Golden Visa Card 1 */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs">⭐</div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3">1. Passport & Golden Visa</h3>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-light leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Passport with min. 6 months validity & 2 blank pages</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Valid 5/10-year UAE Golden Visa copy or Freelance permit</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>2 recent passport photographs (Schengen spec)</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider">Residency Privilege</div>
                </div>
                {/* Golden Visa Card 2 */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs">📝</div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3">2. Declaration Cover Letter</h3>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-light leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Self-declaration letter detailing trip purpose & dates</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Freelance work contract / client proof (if applicable)</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Previous Schengen visa travel history copies</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider">Cover Letter</div>
                </div>
                {/* Golden Visa Card 3 */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs">💳</div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3">3. Personal Bank Statement</h3>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-light leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>3 to 6 months stamped UAE personal bank statement</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Healthy ending balance demonstrating financial means</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Proof of property investment or assets (Optional booster)</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider">Financial Proof</div>
                </div>
                {/* Golden Visa Card 4 */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs">✈️</div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3">4. Itinerary & Insurance</h3>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-light leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Confirmed roundtrip flight reservation voucher</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Hotel accommodation reservations (Provided)</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Compliant €30,000 Schengen travel insurance</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider">Included in Package</div>
                </div>
              </>
            )}

            {activeDocTab === 3 && (
              <>
                {/* Dependent Card 1 */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs">📘</div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3">1. Passport & Dependent Visa</h3>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-light leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Original passport with min. 6 months validity</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Valid UAE Dependent Residence Visa copy</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>2 Schengen specification photographs</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider">Identity Proof</div>
                </div>
                {/* Dependent Card 2 */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs">🎓</div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3">2. Sponsor Documents & NOC</h3>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-light leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Sponsor passport & valid UAE visa copy</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Sponsor NOC & Financial Guarantee letter</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>University/School NOC letter (for students)</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider">Sponsorship Proof</div>
                </div>
                {/* Dependent Card 3 */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs">💳</div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3">3. Sponsor Bank Statement</h3>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-light leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>6 months original UAE bank statement of the sponsor</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Proof of sufficient balance for all traveling family members</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Attested birth/marriage certificates (if required)</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider">Financial Guarantee</div>
                </div>
                {/* Dependent Card 4 */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f4f8f6] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4 shadow-2xs">✈️</div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] mb-3">4. Complete Travel File</h3>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-light leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Confirmed flight reservation covering all travelers</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Family hotel bookings covering full stay duration</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#0b6e52] font-bold shrink-0 mt-0.5">•</span><span>Schengen travel medical insurance policy</span></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-stone-100 text-[10px] sm:text-[11px] font-bold text-[#b89568] uppercase tracking-wider">Included in Package</div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 8. APPLICATION PROCESS SECTION */}
      <section id="process" className="bg-[#0c1f17] text-white py-20 lg:py-28 border-y border-emerald-900/40">
        <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
              SIMPLE 5-STEP JOURNEY
            </span>
            <h2 className="font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-3">
              How We Get Your Spain Visa Approved
            </h2>
            <p className="text-emerald-200/80 text-sm sm:text-base mt-3 font-light">
              Our structured process ensures accuracy, speed, and complete peace of mind.
            </p>
          </div>

          {/* Desktop Horizontal Process Flow */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative">
            {/* Connecting line behind steps */}
            <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-emerald-800 -translate-y-6 z-0"></div>

            {[
              {
                step: "01",
                title: "Free Consultation",
                desc: "Send your details. Our expert reviews your eligibility and advises exact documents required.",
              },
              {
                step: "02",
                title: "Document Review",
                desc: "We rigorously verify your passport, NOC, and bank statements to fix potential errors.",
              },
              {
                step: "03",
                title: "Form & Flight File",
                desc: "We generate official forms, confirmed flight reservations, hotel vouchers, and insurance.",
              },
              {
                step: "04",
                title: "BLS Appointment",
                desc: "We secure your appointment slot at BLS Dubai/Abu Dhabi and prep you for biometrics.",
              },
              {
                step: "05",
                title: "Passport & Visa",
                desc: "Track status in real-time until your stamped passport with Spain Schengen visa is delivered.",
              },
            ].map((st, i) => (
              <div key={i} className="relative z-10 bg-[#081812] border border-emerald-900/60 p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-500 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0b6e52] text-white font-serif-dm text-lg font-bold flex items-center justify-center mb-4 shadow-lg shadow-emerald-950">
                    {st.step}
                  </div>
                  <h3 className="font-serif-dm text-base sm:text-lg font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs text-emerald-100/70 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Process Timeline */}
          <div className="lg:hidden space-y-6 relative overflow-hidden before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-emerald-800">
            {[
              {
                step: "01",
                title: "Free Consultation",
                desc: "Send your details. Our expert reviews your eligibility and advises exact documents required.",
              },
              {
                step: "02",
                title: "Document Review",
                desc: "We rigorously verify your passport, NOC, and bank statements to fix potential errors.",
              },
              {
                step: "03",
                title: "Form & Flight File",
                desc: "We generate official forms, confirmed flight reservations, hotel vouchers, and insurance.",
              },
              {
                step: "04",
                title: "BLS Appointment",
                desc: "We secure your appointment slot at BLS Dubai/Abu Dhabi and prep you for biometrics.",
              },
              {
                step: "05",
                title: "Passport & Visa",
                desc: "Track status in real-time until your stamped passport with Spain Schengen visa is delivered.",
              },
            ].map((st, i) => (
              <div key={i} className="relative flex items-start gap-4 pl-2">
                <div className="w-10 h-10 rounded-xl bg-[#0b6e52] text-white font-serif-dm font-bold flex items-center justify-center shrink-0 z-10">
                  {st.step}
                </div>
                <div className="bg-[#081812] border border-emerald-900/60 p-5 rounded-xl flex-1">
                  <h3 className="font-serif-dm text-base sm:text-lg font-bold text-white mb-1">{st.title}</h3>
                  <p className="text-xs text-emerald-100/70 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY ESHAARE SECTION (ENHANCED OPERATIONAL EXCELLENCE) */}
      <section className="py-20 lg:py-28 bg-[#fdfbf7] border-y border-stone-200/80">
        <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Heading & Numbered List */}
            <div className="lg:col-span-6 space-y-7">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#b89568]">
                  OPERATIONAL EXCELLENCE
                </span>
                <h2 className="font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] mt-2.5 leading-tight">
                  Why UAE Residents Choose Eshaare Tours
                </h2>
                <p className="text-stone-600 text-sm sm:text-base mt-3.5 leading-relaxed font-light">
                  Navigating visa applications demands speed, accuracy, and absolute transparency. Eshaare Tours combines deep regulatory knowledge with physical doorstep services to deliver a frictionless experience.
                </p>
              </div>

              {/* 4 Numbered Feature Items */}
              <div className="space-y-6 pt-2">
                {/* Item 1 */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#163c2e] text-white font-sans-dm font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#1a1a1a] leading-snug">
                      Dossier Audit & Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed font-light">
                      Our specialists thoroughly audit your documents against embassy checklists to prevent rejection risks.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#163c2e] text-white font-sans-dm font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#1a1a1a] leading-snug">
                      Urgent Appointment Slot Tracking
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed font-light">
                      24/7 express tracking captures early VFS and embassy submission slots as soon as they open.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#163c2e] text-white font-sans-dm font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#1a1a1a] leading-snug">
                      Active GDS Flight & Hotel Holds
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed font-light">
                      Receive verifiable flight hold itineraries with live PNR codes that satisfy strict embassy verification requirements.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#163c2e] text-white font-sans-dm font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    4
                  </div>
                  <div>
                    <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#1a1a1a] leading-snug">
                      Doorstep Courier Across 7 Emirates
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed font-light">
                      Enjoy hassle-free home/office document pickup and stamped passport delivery anywhere in the UAE.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Stacked Media Cards */}
            <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 pt-2 lg:pt-24">
              {/* Top Main Image Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 border border-stone-200/80 shadow-md aspect-[4/3] sm:aspect-[16/10] w-full group">
                <img
                  src="/images/why-choose-us/why-choose-us-main.webp"
                  alt="Why UAE Residents Choose Eshaare Tours"
                  className="absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom Specialist Support Highlight Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-md border border-stone-200/80 flex items-center gap-4 sm:gap-5">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-stone-200 shrink-0 border border-stone-200/60">
                  <img
                    src="/images/why-choose-us/why-choose-us-advisor.webp"
                    alt="Licensed Dubai Consultancy Advisor"
                    className="absolute inset-0 !w-full !h-full !object-cover !object-center"
                  />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#b89568]">
                    DEDICATED SPECIALIST SUPPORT
                  </span>
                  <h3 className="font-serif-dm text-base sm:text-lg font-bold text-[#1a1a1a] mt-0.5">
                    Licensed Dubai Consultancy
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed font-light">
                    Our travel advisors provide personalized, step-by-step guidance to ensure every application file is complete and embassy-compliant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. APPLICATION CTA BANNER & LEAD FORM */}
      <section id="contact" className="bg-[#0a1f17] text-white py-16 lg:py-24 relative overflow-hidden">
        <div id="apply"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#0f291e] border border-emerald-800/60 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
                START YOUR APPLICATION TODAY
              </span>
              <h2 className="font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-4">
                Ready to start your Spain journey?
              </h2>
              <p className="text-emerald-200/80 text-sm sm:text-base mt-3">
                Fill out the quick inquiry form below or chat directly with our Spain visa specialists.
              </p>
            </div>

            {/* Application Lead Form */}
            {bottomFormSubmitted ? (
              <div className="bg-[#081812] border border-emerald-800 rounded-2xl p-8 max-w-xl mx-auto text-center space-y-4 shadow-xl">
                <div className="w-14 h-14 bg-[#0b6e52] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h4 className="font-serif text-xl font-bold text-white">
                  Consultation Request Received!
                </h4>
                <p className="text-sm text-emerald-200/90">
                  Thank you! Our Spain visa specialist will review your details and call you shortly to assist with your application.
                </p>
                <button
                  onClick={() => setBottomFormSubmitted(false)}
                  className="text-xs text-emerald-400 font-semibold underline pt-2 cursor-pointer hover:text-emerald-300"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleBottomSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {bottomError && (
                  <div className="md:col-span-2 bg-red-900/60 border border-red-500/60 text-red-200 px-4 py-3 rounded-xl text-xs font-medium">
                    {bottomError}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-emerald-200 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Ahmed"
                    value={bottomFormData.fullName}
                    onChange={(e) => setBottomFormData({ ...bottomFormData, fullName: e.target.value })}
                    className="w-full bg-[#081812] border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white placeholder-emerald-700 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-emerald-200 mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={bottomFormData.phone}
                    onChange={(e) => setBottomFormData({ ...bottomFormData, phone: e.target.value })}
                    className="w-full bg-[#081812] border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white placeholder-emerald-700 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-emerald-200 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="sarah@example.com"
                    value={bottomFormData.email}
                    onChange={(e) => setBottomFormData({ ...bottomFormData, email: e.target.value })}
                    className="w-full bg-[#081812] border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white placeholder-emerald-700 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-emerald-200 mb-1">UAE Residence Location *</label>
                  <select
                    value={bottomFormData.residenceLocation}
                    onChange={(e) => setBottomFormData({ ...bottomFormData, residenceLocation: e.target.value })}
                    className="w-full bg-[#081812] border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="Dubai">Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="Ajman / RAK / UAQ / Fujairah">Ajman / RAK / UAQ / Fujairah</option>
                  </select>
                </div>

                <div className="md:col-span-2 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmittingBottom}
                    className="w-full bg-[#0b6e52] hover:bg-[#0f8a66] disabled:opacity-60 text-white font-semibold py-4 rounded-xl shadow-lg transition-all text-base flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {isSubmittingBottom ? (
                      <span>Submitting Lead...</span>
                    ) : (
                      <>
                        <span>Apply for Spain Visa Now</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            <div className="mt-8 text-center pt-6 border-t border-emerald-800/40 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs text-emerald-300">
              <span>Or reach us instantly:</span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20want%20to%20apply%20for%20a%20Spain%20Visa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/60 transition-colors"
                >
                  <span>💬 WhatsApp: +971 55 733 8429</span>
                </a>
                <a
                  href="tel:+971557338429"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/60 transition-colors"
                >
                  <span>📞 Call Us: +971 55 733 8429</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10.5. POPULAR GLOBAL DESTINATIONS COVERED (BENTO GRID GALLERY) */}
      <section id="destinations" className="pt-10 sm:pt-12 lg:pt-16 pb-16 lg:pb-20 bg-[#fdfbf7] border-t border-stone-200/80">
        <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0b6e52] bg-emerald-100/90 px-3.5 py-1 rounded-full border border-emerald-200/60">
              GLOBAL DESTINATIONS
            </span>
            <h2 className="font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] mt-3">
              Popular Global Destinations Covered
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-3 font-light">
              Seamless visa processing and curated itineraries for iconic international destinations.
            </p>
          </div>

          {/* Asymmetric Bento Grid matching user reference design */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
            {/* Left Column (Spans 5/12 on desktop) */}
            <div className="md:col-span-5 flex flex-col gap-4 sm:gap-5">
              {/* Top Landscape Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 shadow-md hover:shadow-xl transition-all duration-300 h-56 sm:h-64 group border border-stone-200/60">
                <img
                  src="/images/destinations/Global Destination 1.webp"
                  alt="Global Destination 1"
                  className="absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-5 flex flex-col justify-end z-10">
                  <h3 className="text-white font-serif-dm text-base sm:text-lg lg:text-xl font-bold">Kenya & East Africa</h3>
                  <span className="text-stone-200 text-xs">Wildlife Safaris & Adventure</span>
                </div>
              </div>

              {/* Bottom 2 Split Cards */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 shadow-md hover:shadow-xl transition-all duration-300 h-44 sm:h-52 group border border-stone-200/60">
                  <img
                    src="/images/destinations/Global Destination 2.webp"
                    alt="Global Destination 2"
                    className="absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent p-3.5 flex flex-col justify-end z-10">
                    <h3 className="text-white font-serif-dm text-sm sm:text-base font-bold">Switzerland</h3>
                    <span className="text-stone-200 text-[10px]">Alpine Escape</span>
                  </div>
                </div>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 shadow-md hover:shadow-xl transition-all duration-300 h-44 sm:h-52 group border border-stone-200/60">
                  <img
                    src="/images/destinations/Global Destination 3.webp"
                    alt="Global Destination 3"
                    className="absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent p-3.5 flex flex-col justify-end z-10">
                    <h3 className="text-white font-serif-dm text-sm sm:text-base font-bold">Japan</h3>
                    <span className="text-stone-200 text-[10px]">Kyoto Heritage</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column (Tall Portrait Card - Spans 3/12 on desktop) */}
            <div className="md:col-span-3">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 shadow-md hover:shadow-xl transition-all duration-300 h-80 md:h-full min-h-[360px] md:min-h-[480px] group border border-stone-200/60">
                <img
                  src="/images/destinations/Global Destination 4.webp"
                  alt="Global Destination 4"
                  className="absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-5 flex flex-col justify-end z-10">
                  <h3 className="text-white font-serif-dm text-lg sm:text-xl lg:text-2xl font-bold">Norway Fjords</h3>
                  <span className="text-stone-200 text-xs">Canyons & Northern Lights</span>
                </div>
              </div>
            </div>

            {/* Right Column (Spans 4/12 on desktop) */}
            <div className="md:col-span-4 flex flex-col gap-4 sm:gap-5">
              {/* Top Landscape Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 shadow-md hover:shadow-xl transition-all duration-300 h-48 sm:h-56 group border border-stone-200/60">
                <img
                  src="/images/destinations/Global Destination 5.webp"
                  alt="Global Destination 5"
                  className="absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent p-4 flex flex-col justify-end z-10">
                  <h3 className="text-white font-serif-dm text-base sm:text-lg font-bold">Austria & Alps</h3>
                  <span className="text-stone-200 text-xs">Snow Treks & Resorts</span>
                </div>
              </div>

              {/* Bottom Landscape Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 shadow-md hover:shadow-xl transition-all duration-300 h-52 sm:h-60 group border border-stone-200/60">
                <img
                  src="/images/destinations/Global Destination 6.webp"
                  alt="Global Destination 6"
                  className="absolute inset-0 !w-full !h-full !object-cover !object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent p-4 flex flex-col justify-end z-10">
                  <h3 className="text-white font-serif-dm text-base sm:text-lg font-bold">France & Paris</h3>
                  <span className="text-stone-200 text-xs">Lakes & Gardens</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section id="faq" className="pt-10 sm:pt-12 lg:pt-16 pb-16 lg:pb-20 bg-[#f8f6f2] border-t border-stone-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0b6e52] bg-emerald-100/90 px-3.5 py-1 rounded-full border border-emerald-200/60">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] mt-3">
              Spain Visa FAQs for UAE Residents
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-3 font-light leading-relaxed">
              Everything you need to know before applying for your Spain Schengen visa.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:border-emerald-700/30 hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                >
                  <span className="font-serif-dm text-base sm:text-lg font-bold text-[#063024] group-hover:text-[#0b6e52] transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-sans-dm text-xs font-bold transition-all duration-300 ${openFaq === idx
                        ? "bg-[#0b6e52] text-white rotate-180 shadow-xs"
                        : "bg-[#f4f8f6] text-[#0b6e52] group-hover:bg-[#0b6e52] group-hover:text-white"
                      }`}
                  >
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-3.5 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-stone-100/80 bg-[#fdfbf7]/60 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA BANNER */}
      <section className="relative py-24 lg:py-32 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/spain/Gibralfaro .webp"
            alt="Andalusia Landscape Spain"
            fill
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f17] via-[#0c1f17]/70 to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-700/50">
            START YOUR SCHENGEN EXPERIENCE
          </span>
          <h2 className="font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
            Spain is waiting.
          </h2>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Let our Dubai visa specialists take care of the paperwork, appointment booking, and file verification. Speak with us today.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#apply"
              className="w-full sm:w-auto bg-[#0b6e52] hover:bg-[#0f8a66] text-white font-semibold px-8 py-4 rounded-xl shadow-xl transition-all text-base"
            >
              Book Free Visa Consultation
            </a>
            <a
              href="https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20want%20to%20apply%20for%20a%20Spain%20Visa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-8 py-4 rounded-xl backdrop-blur-md transition-all text-base flex items-center justify-center gap-2"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>


      {/* 14. STICKY MOBILE BOTTOM ACTION BAR */}
      <div
        className="lg:hidden fixed bottom-0 inset-x-0 z-[9999] bg-white border-t border-stone-200/90 px-3 py-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] flex items-center justify-between gap-2.5"
        style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <a
          href="#quick-check-card"
          className="flex-1 min-w-0 h-11 bg-[#0b6e52] hover:bg-[#0f8a66] active:scale-[0.98] text-white text-xs sm:text-sm font-bold rounded-xl text-center shadow-sm flex items-center justify-center gap-1.5 transition-all truncate"
        >
          <span className="truncate">Apply Now</span>
          <span className="shrink-0">→</span>
        </a>
        <a
          href="https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20want%20to%20apply%20for%20a%20Spain%20Visa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-0 h-11 bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] text-white text-xs sm:text-sm font-bold rounded-xl text-center shadow-sm flex items-center justify-center gap-1.5 transition-all truncate"
        >
          <span className="truncate">💬 WhatsApp Chat</span>
        </a>
      </div>

      {/* 15. FLOATING WHATSAPP WIDGET WITH LIVE CHAT BUBBLE (Desktop only) */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-50 items-end gap-3 pointer-events-auto">
        {showChatBubble && (
          <div className="hidden lg:flex items-center gap-2.5 bg-white text-stone-800 text-xs font-medium px-4 py-2.5 rounded-2xl shadow-xl border border-stone-200/90 transition-all max-w-xs relative animate-bounce">
            <button
              onClick={() => setShowChatBubble(false)}
              className="text-stone-400 hover:text-stone-600 font-bold text-xs p-0.5 cursor-pointer"
              aria-label="Close Chat Suggestion"
            >
              ✕
            </button>
            <span>Have questions? Chat with our Dubai visa expert live!</span>
          </div>
        )}
        <a
          href="https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20have%20questions%20about%20Spain%20Schengen%20Visa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 relative group shrink-0"
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white animate-pulse"></span>
        </a>
      </div>
    </div>
  );
}
