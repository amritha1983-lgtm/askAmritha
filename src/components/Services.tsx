import React from "react";
import { Camera, Sparkles, Layers, ArrowUpRight } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Camera":
        return <Camera className="w-8 h-8 text-gold" />;
      case "Sparkles":
        return <Sparkles className="w-8 h-8 text-gold" />;
      case "Layers":
        return <Layers className="w-8 h-8 text-gold" />;
      default:
        return <Camera className="w-8 h-8 text-gold" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-beige/35 px-6 md:px-16 border-y border-taupe/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Intro Panel */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">
              WHAT WE CREATE
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-charcoal font-bold leading-tight">
              AI Product Photos, Ads &amp; Brand Visuals
            </h2>
            <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed font-sans">
              We help small businesses turn simple product photos into premium visuals for Instagram, websites, catalogues, and ads — without arranging expensive photoshoots.
            </p>
            <a
              href="#pricing"
              className="group text-gold font-semibold text-sm inline-flex items-center gap-1 border-b border-gold w-fit pb-1 hover:text-espresso hover:border-espresso transition-all duration-200"
            >
              Get a Trial Pack
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-250" />
            </a>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {BUSINESS_CONFIG.services.map((service) => (
              <div
                key={service.id}
                className="bg-ivory p-8 rounded-2xl shadow-[0_10px_30px_rgba(31,28,26,0.02)] border border-taupe/30 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(31,28,26,0.06)] transition-all duration-350 flex flex-col"
              >
                <div className="p-3 bg-cream rounded-xl w-fit mb-6">
                  {getIcon(service.icon)}
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[11px] font-semibold text-charcoal/60 leading-normal">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
