"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export default function WhatsAppButton() {
  const encodedMessage = encodeURIComponent(BUSINESS_CONFIG.whatsappMessage);
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 stroke-[2]" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-semibold tracking-wide font-sans">
        Chat with Us
      </span>
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10 group-hover:opacity-0 transition-opacity"></span>
    </a>
  );
}
