"use client";

import React from "react";
import { CheckCircle2, MessageSquare } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export default function Pricing() {
  const handleSelectPack = (packName: string) => {
    // If contact form is present, scroll to contact form and pre-fill input if possible
    const contactForm = document.getElementById("contact");
    const serviceSelect = document.getElementById("service-select") as HTMLSelectElement;
    
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
      if (serviceSelect) {
        // Find best match in service options
        if (packName.includes("Trial")) {
          serviceSelect.value = "Trial Pack";
        } else if (packName.includes("Essential")) {
          serviceSelect.value = "Essential Pack";
        } else if (packName.includes("Growth")) {
          serviceSelect.value = "Brand Growth";
        } else {
          serviceSelect.value = "Bespoke Enterprise";
        }
        // Dispatch event so React form state updates
        serviceSelect.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  };

  const getWhatsAppLink = (packName: string) => {
    const msg = `Hi Amritha, I would like to enquire about the "${packName}" for my business. Please share details!`;
    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="pricing" className="py-24 bg-beige/35 px-6 md:px-16 border-y border-taupe/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-xl mx-auto flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">
            SIMPLE PACKAGES
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-charcoal font-bold">
            Choose Your Visual Pack
          </h2>
          <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed font-sans">
            Start with a small trial pack or choose a larger visual pack for product launches, Instagram content, ads, and website visuals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {BUSINESS_CONFIG.pricing.map((pack) => (
            <div
              key={pack.id}
              className={`bg-ivory rounded-3xl p-8 flex flex-col gap-6 shadow-[0_10px_35px_rgba(31,28,26,0.02)] border transition-all duration-300 relative ${
                pack.popular
                  ? "border-gold ring-2 ring-gold/25 -translate-y-2 md:-translate-y-3"
                  : "border-taupe/30 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(31,28,26,0.05)]"
              }`}
            >
              {pack.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-white text-[9px] tracking-widest font-bold px-4 py-1.5 rounded-full shadow-md">
                  MOST POPULAR
                </span>
              )}

              <div className="flex flex-col gap-2">
                <h3 className="font-serif-heading text-xl font-bold text-charcoal">
                  {pack.name}
                </h3>
                <p className="text-charcoal/60 text-xs leading-relaxed min-h-[40px]">
                  {pack.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1 border-b border-taupe/20 pb-4 flex-wrap">
                {pack.period === "Starting from" ? (
                  <>
                    <span className="text-charcoal/50 text-xs font-semibold mr-1">Starting from</span>
                    <span className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
                      {pack.price}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
                      {pack.price}
                    </span>
                    {pack.period && (
                      <span className="text-charcoal/50 text-xs">/{pack.period}</span>
                    )}
                  </>
                )}
              </div>

              <ul className="flex flex-col gap-3 flex-grow font-sans">
                {pack.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-charcoal/70">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2 mt-auto">
                <button
                  onClick={() => handleSelectPack(pack.name)}
                  className={`w-full py-3 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 active:scale-95 shadow-md ${
                    pack.popular
                      ? "bg-espresso hover:bg-espresso/90 text-white shadow-espresso/15"
                      : "border border-espresso text-espresso hover:bg-espresso hover:text-white"
                  }`}
                >
                  {pack.cta}
                </button>
                <a
                  href={getWhatsAppLink(pack.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full text-[10px] uppercase tracking-wider font-semibold text-charcoal/60 hover:text-gold hover:bg-cream/45 border border-transparent transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]/10" />
                  Chat via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
