import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        {/* Trust strip embedded right below hero */}
        <section className="py-8 bg-beige/40 border-y border-taupe/30 px-6 md:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6 text-charcoal/80">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span>No Studio Needed</span>
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span>No Models Required</span>
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span>48-Hour Staging</span>
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span>Instagram &amp; Ad Ready</span>
            </div>
          </div>
        </section>
        
        <Services />
        <Portfolio />
        <BeforeAfter />
        <Pricing />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
