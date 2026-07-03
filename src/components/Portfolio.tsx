import React from "react";
import Image from "next/image";
import { BUSINESS_CONFIG } from "@/config/business";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-cream px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-xl mx-auto flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">
            Domains of Craft
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-charcoal font-bold">
            Bespoke Visuals for Premium Brands
          </h2>
          <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed">
            Discover how we style, stage, and render high-converting imagery across luxury product sectors.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_CONFIG.categories.map((cat) => (
            <div
              key={cat.name}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border border-taupe/10"
            >
              <Image
                src={cat.path}
                alt={`${cat.name} AI Product Photography`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-90 transition-opacity duration-300 pointer-events-none" />
              
              {/* Content Panel */}
              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col gap-1 z-10 pointer-events-none">
                <span className="text-[10px] tracking-widest font-semibold text-rose/90 uppercase">
                  Category
                </span>
                <h3 className="font-serif-heading text-xl font-bold tracking-wide">
                  {cat.name}
                </h3>
              </div>

              {/* Decorative Border Frame on Hover */}
              <div className="absolute inset-4 border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
