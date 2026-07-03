import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, Phone, MapPin } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export default function Footer() {
  return (
    <footer className="w-full bg-cream text-charcoal border-t border-taupe/30 px-6 md:px-16 pt-20 pb-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-taupe/30 pb-16">
        
        {/* Brand Info */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <Link href="#home" className="flex items-center gap-2 relative h-24 w-24">
            <Image
              src="/logo-transparent.png"
              alt={BUSINESS_CONFIG.name}
              fill
              className="object-contain object-left"
            />
          </Link>
          <p className="text-charcoal/70 text-sm leading-relaxed max-w-xs">
            Helping small businesses create premium AI-powered product photos, ad creatives, and brand visuals for Instagram, websites, catalogues, and ads.
          </p>
          <div className="flex gap-4">
            <a
              href={BUSINESS_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-beige/30 flex items-center justify-center hover:bg-espresso hover:text-white text-gold transition-all duration-200"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href={BUSINESS_CONFIG.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-beige/30 flex items-center justify-center hover:bg-espresso hover:text-white text-gold transition-all duration-200"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={`https://${BUSINESS_CONFIG.domain}`}
              className="w-9 h-9 rounded-full bg-beige/30 flex items-center justify-center hover:bg-espresso hover:text-white text-gold transition-all duration-200"
              aria-label="Website"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services Links */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">
            Services
          </span>
          <div className="flex flex-col gap-2.5 text-xs text-charcoal/75">
            <a href="#services" className="hover:text-gold transition-colors duration-200">
              AI Product Photography
            </a>
            <a href="#services" className="hover:text-gold transition-colors duration-200">
              AI Ad Creatives
            </a>
            <a href="#services" className="hover:text-gold transition-colors duration-200">
              Brand Visual Packs
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">
            Company
          </span>
          <div className="flex flex-col gap-2.5 text-xs text-charcoal/75">
            <a href="#portfolio" className="hover:text-gold transition-colors duration-200">
              Portfolio
            </a>
            <a href="#pricing" className="hover:text-gold transition-colors duration-200">
              Packages
            </a>
            <a href="#contact" className="hover:text-gold transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">
            Contact
          </span>
          <div className="flex flex-col gap-3 text-xs text-charcoal/75">
            <a
              href={`mailto:${BUSINESS_CONFIG.email}`}
              className="flex items-center gap-2.5 hover:text-gold transition-colors duration-200"
            >
              <Mail className="w-4 h-4 text-gold/80" />
              <span>{BUSINESS_CONFIG.email}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-gold transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-gold/80" />
              <span>WhatsApp: {BUSINESS_CONFIG.phone}</span>
            </a>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold/80 mt-0.5" />
              <span>{BUSINESS_CONFIG.address}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
        <span className="text-[10px] uppercase tracking-widest font-medium text-charcoal/50">
          © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All Rights Reserved.
        </span>
        <div className="flex gap-6 text-[10px] uppercase tracking-widest font-medium text-charcoal/50">
          <Link href="/privacy" className="hover:text-gold transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gold transition-colors duration-200">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
