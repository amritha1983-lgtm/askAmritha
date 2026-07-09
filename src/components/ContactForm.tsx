"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, HelpCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "Trial Pack",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.businessName.trim()) tempErrors.businessName = "Business Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "59d85fd3-8f46-48b4-8478-bd32b9da1ef3",
          subject: `New Enquiry from ${formData.name} (${formData.businessName})`,
          from_name: formData.name,
          name: formData.name,
          businessName: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      const resData = await response.json();

      if (response.status === 200 && resData.success) {
        setStatus("success");
        setFormData({
          name: "",
          businessName: "",
          email: "",
          phone: "",
          service: "Trial Pack",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const faqs = [
    {
      q: "Do I need to courier my product to you?",
      a: "No. You can send clear product photos from your phone. We use those photos to create premium AI-powered visuals.",
    },
    {
      q: "What is the turnaround time?",
      a: "Trial Pack delivery is usually within 48 hours. Larger packs may take 3–5 business days depending on the number of visuals.",
    },
    {
      q: "Can I choose my own brand styling and colors?",
      a: "Yes. You can share your preferred colours, mood, background style, or reference images, and we will create visuals based on that direction.",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-beige/35 px-6 md:px-16 scroll-mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct CTA & FAQs */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-gold">
                Enquiry
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-4xl text-charcoal font-bold leading-tight">
                Ready to Make Your Product Look Premium?
              </h2>
              <p className="text-charcoal/70 text-sm leading-relaxed max-w-md font-sans">
                Fill out the form or message us on WhatsApp to discuss your product photos, ad creatives, or brand visuals.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba56] text-white font-semibold text-sm px-6 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-200 shadow-md w-full sm:w-fit active:scale-95"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                Chat on WhatsApp
              </a>
            </div>

            {/* FAQs */}
            <div className="border-t border-taupe/30 pt-8 mt-4 flex flex-col gap-6">
              <h3 className="font-serif-heading text-xl font-bold text-charcoal flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-gold" />
                Frequently Asked Questions
              </h3>
              <div className="flex flex-col gap-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <h4 className="text-xs sm:text-sm font-semibold text-charcoal">
                      {faq.q}
                    </h4>
                    <p className="text-charcoal/65 text-xs leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-ivory p-8 sm:p-10 rounded-3xl border border-taupe/30 shadow-[0_10px_35px_rgba(31,28,26,0.02)]">
              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-12 gap-4 animate-fade-in">
                  <div className="p-4 bg-gold/10 rounded-full text-gold">
                    <CheckCircle2 className="w-12 h-12 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif-heading text-2xl font-bold text-charcoal">
                    Enquiry Received
                  </h3>
                  <p className="text-charcoal/70 text-sm max-w-sm">
                    Thank you! We will review your details and reach out to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-xs font-semibold text-gold underline hover:text-espresso"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[11px] uppercase tracking-wider font-semibold text-charcoal/60">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`bg-cream/40 border-b border-taupe/40 focus:border-gold py-2.5 px-1 text-sm outline-none transition-colors ${
                          errors.name ? "border-red-500" : ""
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && <span className="text-[10px] text-red-500">{errors.name}</span>}
                    </div>

                    {/* Business Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="businessName" className="text-[11px] uppercase tracking-wider font-semibold text-charcoal/60">
                        Business Name
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        id="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className={`bg-cream/40 border-b border-taupe/40 focus:border-gold py-2.5 px-1 text-sm outline-none transition-colors ${
                          errors.businessName ? "border-red-500" : ""
                        }`}
                        placeholder="Your brand name"
                      />
                      {errors.businessName && (
                        <span className="text-[10px] text-red-500">{errors.businessName}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[11px] uppercase tracking-wider font-semibold text-charcoal/60">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`bg-cream/40 border-b border-taupe/40 focus:border-gold py-2.5 px-1 text-sm outline-none transition-colors ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <span className="text-[10px] text-red-500">{errors.email}</span>}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-[11px] uppercase tracking-wider font-semibold text-charcoal/60">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`bg-cream/40 border-b border-taupe/40 focus:border-gold py-2.5 px-1 text-sm outline-none transition-colors ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                        placeholder="+91 XXXXX XXXXX"
                      />
                      {errors.phone && <span className="text-[10px] text-red-500">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Service Required */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service-select" className="text-[11px] uppercase tracking-wider font-semibold text-charcoal/60">
                      Service Package
                    </label>
                    <select
                      name="service"
                      id="service-select"
                      value={formData.service}
                      onChange={handleChange}
                      className="bg-cream/40 border-b border-taupe/40 focus:border-gold py-2.5 px-1 text-sm outline-none transition-colors cursor-pointer"
                    >
                      <option value="Trial Pack">Trial Pack (₹999)</option>
                      <option value="Starter Pack">Starter Pack (₹2,499)</option>
                      <option value="Brand Growth Pack">Brand Growth Pack (Starting from ₹9,999)</option>
                      <option value="Monthly Content Pack">Monthly Content Pack (Custom)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[11px] uppercase tracking-wider font-semibold text-charcoal/60">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`bg-cream/40 border-b border-taupe/40 focus:border-gold py-2.5 px-1 text-sm outline-none resize-none transition-colors ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      placeholder="Tell us about your product, style, and how many visuals you need"
                    />
                    {errors.message && <span className="text-[10px] text-red-500">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-fit px-8 py-4 bg-espresso hover:bg-espresso/95 disabled:bg-espresso/70 text-white font-semibold text-sm rounded-full flex items-center justify-center gap-2 transition-all duration-200 mt-2 shadow-lg active:scale-95"
                  >
                    <span>{status === "submitting" ? "Submitting..." : "Send Enquiry"}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  {status === "error" && (
                    <span className="text-xs text-red-500 text-center mt-2">
                      Something went wrong. Please try again or chat on WhatsApp.
                    </span>
                  )}
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
