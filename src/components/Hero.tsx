import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-24 pb-12 flex items-center bg-cream px-6 md:px-16 overflow-hidden"
    >
      {/* Dynamic background decoration */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] rounded-full bg-rose/10 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[30vw] h-[30vw] rounded-full bg-gold/5 blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Copy */}
        <div className="lg:col-span-6 flex flex-col gap-6 animate-fade-in z-10">
          <div className="flex items-center gap-2 text-gold tracking-[0.2em] font-semibold text-xs uppercase">
            <Sparkles className="w-4 h-4 text-gold fill-gold/20" />
            <span>ASKAMRITHA AI VISUAL STUDIO</span>
          </div>

          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold leading-[1.1] tracking-tight">
            Premium Product Photos &amp; Ad Creatives Without{" "}
            <span className="italic text-gold font-normal">Expensive Photoshoots</span>
          </h1>

          <p className="text-charcoal/70 text-base sm:text-lg max-w-lg leading-relaxed font-sans">
            Create premium product photos, ad creatives, and brand visuals for Instagram, websites, catalogues, and ads — without arranging costly photoshoots.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#portfolio"
              className="bg-espresso hover:bg-espresso/90 text-white font-semibold text-sm px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-200 shadow-lg shadow-espresso/15 active:scale-95"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#pricing"
              className="border border-espresso/45 hover:bg-espresso hover:text-white text-espresso font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200 active:scale-95"
            >
              Get a Trial Pack
            </a>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-charcoal/10 ring-1 ring-taupe/20 group">
            <Image
              src="/images/hero.png"
              alt="AskAmritha AI Product Photography"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Resolution Badge */}
          <div className="absolute -bottom-6 left-4 sm:-left-6 bg-ivory p-5 sm:p-6 rounded-2xl shadow-xl border border-taupe/30 flex flex-col gap-1 max-w-[220px] transition-transform duration-300 hover:-translate-y-1">
            <span className="text-[10px] text-gold tracking-widest font-semibold uppercase">
              LUXURY STANDARD
            </span>
            <span className="font-serif-heading text-lg sm:text-xl font-bold text-charcoal">
              4K Editorial Quality
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
