import React from "react";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-cream px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-xl mx-auto flex flex-col gap-4 animate-fade-in">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">
            The Transformation
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-charcoal font-bold">
            BEFORE &amp; AFTER
          </h2>
          <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed font-sans">
            Send us a simple product photo. We create premium visuals with polished lighting, styling, shadows, and backgrounds — ready for Instagram, ads, websites, and catalogues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          {/* Before Column */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-taupe/30 group">
            <div className="absolute top-4 left-4 z-10 bg-charcoal/60 backdrop-blur-md text-white text-[9px] tracking-widest font-bold px-3.5 py-1.5 rounded-full">
              YOUR RAW PHOTO
            </div>
            <div className="relative w-full aspect-square">
              <Image
                src="/images/before-exact.png"
                alt="Original unstyled phone photo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-102"
              />
            </div>
            {/* Soft highlight border */}
            <div className="absolute inset-0 border border-charcoal/5 pointer-events-none rounded-2xl" />
          </div>

          {/* After Column */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-gold/15 group">
            <div className="absolute top-4 left-4 z-10 bg-gold text-white text-[9px] tracking-widest font-bold px-3.5 py-1.5 rounded-full shadow-md">
              ASKAMRITHA VISUAL
            </div>
            <div className="relative w-full aspect-square">
              <Image
                src="/images/after-exact.png"
                alt="AI stage styled product photo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-102"
              />
            </div>
            {/* Center transformation indicator */}
            <div className="absolute bottom-6 right-6 z-10 bg-ivory p-3.5 rounded-full shadow-lg border border-taupe/35 text-gold hover:scale-105 active:scale-95 transition-all">
              <ArrowLeftRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
