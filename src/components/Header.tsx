"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-md h-18"
          : "bg-transparent h-20"
      } flex items-center justify-between px-6 md:px-16`}
    >
      {/* Logo */}
      <Link href="#home" className="flex items-center gap-2 relative h-20 w-20">
        <Image
          src="/logo-transparent.png"
          alt={BUSINESS_CONFIG.name}
          fill
          className="object-contain object-left"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs uppercase tracking-widest font-semibold text-charcoal/80 hover:text-gold transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <div className="hidden md:block">
        <a
          href="#pricing"
          className="bg-espresso hover:bg-espresso/90 text-white text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-full transition-all duration-200 shadow-md shadow-espresso/15 active:scale-95"
        >
          Trial Pack
        </a>
      </div>

      {/* Mobile Hamburger Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-charcoal hover:text-gold transition-colors duration-200"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-20 bg-cream z-30 flex flex-col items-center justify-start py-12 gap-8 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-lg font-serif-heading font-semibold text-charcoal hover:text-gold transition-colors duration-200 py-2 w-full text-center"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#pricing"
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-espresso hover:bg-espresso/90 text-white text-sm uppercase tracking-wider font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg active:scale-95"
        >
          Get Trial Pack
        </a>
      </div>
    </header>
  );
}
