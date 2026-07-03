import React from "react";
import { UploadCloud, Palette, Wand2, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Send Photo",
      description: "Send a clear product photo from your phone.",
      icon: <UploadCloud className="w-6 h-6 text-gold" />,
    },
    {
      num: "02",
      title: "Choose Style",
      description: "Select the mood, background, colours, and visual direction.",
      icon: <Palette className="w-6 h-6 text-gold" />,
    },
    {
      num: "03",
      title: "We Create",
      description: "We create premium AI visuals with polished lighting, styling, and backgrounds.",
      icon: <Wand2 className="w-6 h-6 text-gold" />,
    },
    {
      num: "04",
      title: "Receive & Use",
      description: "Get high-resolution visuals ready for Instagram, ads, websites, and catalogues.",
      icon: <CheckCircle2 className="w-6 h-6 text-gold" />,
    },
  ];

  return (
    <section className="py-20 bg-cream px-6 md:px-16 border-t border-taupe/15">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-xl mx-auto flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">
            The Process
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-charcoal font-bold">
            From Product Photo to Premium Visual
          </h2>
          <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed font-sans">
            Send your product photo, choose a visual style, and receive premium images ready for Instagram, ads, websites, and catalogues.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Horizontal Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[1px] bg-taupe/35 -z-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center gap-6 group"
              >
                <div className="relative w-24 h-24 bg-ivory rounded-full flex items-center justify-center border border-taupe/30 shadow-[0_4px_15px_rgba(31,28,26,0.02)] group-hover:scale-105 group-hover:border-gold transition-all duration-300">
                  {step.icon}
                  {/* Step number badge */}
                  <span className="absolute -top-1 -right-1 bg-espresso text-white text-[9px] font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                    {step.num}
                  </span>
                </div>
                <div className="flex flex-col gap-2 max-w-xs">
                  <h3 className="font-serif-heading text-lg font-bold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="text-charcoal/60 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
