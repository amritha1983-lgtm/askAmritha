import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | AskAmritha",
  description: "Learn how AskAmritha collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans selection:bg-gold/25">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
        
        {/* Navigation / Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal/60 hover:text-gold transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="border-b border-taupe/30 pb-8 mb-12">
          <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold mb-4 tracking-tight leading-none">
            Privacy Policy
          </h1>
          <p className="text-charcoal/50 text-xs uppercase tracking-widest font-semibold">
            Effective Date: {currentDate} | Website: askamritha.com
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-sm sm:prose max-w-none text-charcoal/80 space-y-8 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              1. Introduction
            </h2>
            <p>
              AskAmritha respects your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, submit an enquiry, contact us on WhatsApp, or use our AI-powered product photography, ad creative, and brand visual services.
            </p>
            <p>
              By using our website or contacting us, you agree to the terms of this Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              2. Information We Collect
            </h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Full name</li>
              <li>Business name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>WhatsApp number</li>
              <li>Service package selected</li>
              <li>Project message or enquiry details</li>
              <li>Product photos or brand references shared by you</li>
              <li>Social media handles or website links shared by you</li>
              <li>Payment-related confirmation details, if applicable</li>
              <li>Basic website usage data such as browser type, device type, and pages visited</li>
            </ul>
            <p>We do not intentionally collect sensitive personal information unless you voluntarily provide it.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              3. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Respond to enquiries</li>
              <li>Discuss service requirements</li>
              <li>Create AI-powered product visuals, ad creatives, and brand content</li>
              <li>Share pricing, samples, updates, and service-related communication</li>
              <li>Deliver completed visuals</li>
              <li>Improve our website, services, and client experience</li>
              <li>Maintain business records</li>
              <li>Comply with legal or regulatory requirements, if applicable</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              4. Product Photos and Brand Materials
            </h2>
            <p>
              When you share product photos, logos, brand colours, references, or other creative materials with AskAmritha, we use them only for the purpose of creating the requested visual content.
            </p>
            <p>We do not claim ownership of your original product photos, logos, or brand assets.</p>
            <p>We may request your permission before using any final work for portfolio, social media, case studies, or promotional purposes.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              5. WhatsApp and Third-Party Communication
            </h2>
            <p>
              If you contact us through WhatsApp, email, Instagram, or any other third-party platform, your communication may also be subject to that platform’s own privacy policy.
            </p>
            <p>AskAmritha is not responsible for the privacy practices of third-party platforms.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              6. Payment Information
            </h2>
            <p>
              If payment is required, we may use third-party payment services or UPI/payment links. We do not store your card, bank, or UPI PIN details.
            </p>
            <p>Payment confirmations may be stored for business and accounting records.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              7. Cookies and Website Analytics
            </h2>
            <p>Our website may use cookies or basic analytics tools to understand visitor behaviour and improve the website.</p>
            <p>Cookies may help us understand which pages are visited, which device or browser is used, and how users interact with the website. You can disable cookies in your browser settings.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              8. Data Sharing
            </h2>
            <p>We do not sell your personal information.</p>
            <p>We may share limited information only when needed with:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Service providers who help us run the website, forms, analytics, email, or hosting</li>
              <li>Payment service providers</li>
              <li>Legal or regulatory authorities, if required by law</li>
              <li>Tools used to create or deliver requested AI visuals</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              9. Data Storage and Security
            </h2>
            <p>
              We take reasonable steps to protect your information from unauthorized access, misuse, loss, or disclosure. However, no online system is completely secure. You share information with us at your own discretion.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              10. Data Retention
            </h2>
            <p>We keep your information only for as long as needed for providing services, responding to enquiries, maintaining business records, legal, tax, or accounting purposes, and resolving disputes.</p>
            <p>You may request deletion of your personal information by contacting us.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              11. Your Rights
            </h2>
            <p>Subject to applicable law, you may request to access your personal information, correct inaccurate information, update your contact details, withdraw consent, or request deletion of your data.</p>
            <p>
              To make a request, email us at:{" "}
              <a href="mailto:info@askamritha.com" className="text-gold hover:underline font-semibold">
                info@askamritha.com
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              12. Children’s Privacy
            </h2>
            <p>AskAmritha’s services are intended for businesses and individuals above 18 years of age. We do not knowingly collect personal information from children.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              13. Links to Other Websites
            </h2>
            <p>Our website may contain links to external websites. We are not responsible for the content, privacy practices, or policies of those external websites.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              14. Changes to This Privacy Policy
            </h2>
            <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date.</p>
          </section>

          <section className="space-y-3 pt-6 border-t border-taupe/30">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal">
              15. Contact Us
            </h2>
            <div className="text-xs space-y-1 mt-2 text-charcoal/60">
              <p className="font-bold text-charcoal">AskAmritha</p>
              <p>Email: <a href="mailto:info@askamritha.com" className="text-gold hover:underline">info@askamritha.com</a></p>
              <p>Website: askamritha.com</p>
              <p>Location: India</p>
            </div>
          </section>

        </article>
      </div>
    </div>
  );
}
