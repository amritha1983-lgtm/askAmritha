import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | AskAmritha",
  description: "Read the terms and rules of using AskAmritha services.",
};

export default function TermsOfService() {
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
            Terms of Service
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
              Welcome to AskAmritha. These Terms of Service explain the rules for using our website and services.
            </p>
            <p>
              AskAmritha provides AI-powered product photography, ad creatives, brand visuals, AI model visuals, and related digital design services for small businesses, product brands, boutiques, creators, and individuals.
            </p>
            <p>
              By using our website, submitting an enquiry, making a payment, or using our services, you agree to these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              2. Services We Provide
            </h2>
            <p>AskAmritha may provide services such as:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>AI product photography</li>
              <li>AI lifestyle product visuals</li>
              <li>AI ad creatives</li>
              <li>Brand visual packs</li>
              <li>AI model and fashion visuals</li>
              <li>Social media content visuals</li>
              <li>Website and catalogue visuals</li>
              <li>Custom visual content packages</li>
            </ul>
            <p>The exact deliverables, price, timeline, and revisions will depend on the package or custom agreement selected.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              3. Client Responsibilities
            </h2>
            <p>To complete a project, you may need to provide:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Clear product photos</li>
              <li>Brand name and business details</li>
              <li>Logo, brand colours, or references if available</li>
              <li>Style preferences or mood references</li>
              <li>Product details and usage requirements</li>
              <li>Timely feedback and approvals</li>
            </ul>
            <p>You are responsible for ensuring that you have the right to use any product photo, logo, brand asset, reference image, or material you provide to us.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              4. Use of AI Tools
            </h2>
            <p>AskAmritha uses AI-powered tools and creative editing workflows to generate or enhance visual content.</p>
            <p>AI-generated outputs may vary depending on the quality of input images, references, product type, and selected style.</p>
            <p>While we aim to create premium and realistic visuals, we cannot guarantee that every AI-generated output will be identical to traditional photography or perfectly represent every minor product detail.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              5. Product Accuracy
            </h2>
            <p>Clients must review final visuals carefully before using them publicly. This is especially important for product labels, packaging text, ingredients, size/shape/colour accuracy, jewellery details, clothing patterns, ad claims, and regulated product details.</p>
            <p>AskAmritha is not responsible for losses caused by publishing visuals without client review and approval.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              6. Pricing and Payment
            </h2>
            <p>Prices may be listed on the website or shared directly through WhatsApp, email, or invoice.</p>
            <p>Unless otherwise agreed, work begins after payment confirmation. Trial packs and small packages may require full advance payment. Larger packages or custom arrangements may have custom partial payment schedules.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              7. Delivery Timeline
            </h2>
            <p>Delivery timelines depend on the package selected and the complexity of the work:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Trial Pack: usually within 48 hours</li>
              <li>Larger packs: usually 3–5 business days</li>
              <li>Custom or monthly packages: timeline agreed separately</li>
            </ul>
            <p>Timelines may change if client inputs, product photos, references, or feedback are delayed.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              8. Revisions
            </h2>
            <p>Each package may include a specific number of revision rounds. A revision means a reasonable adjustment to the created visual, such as minor styling, background, layout, colour, or correction changes.</p>
            <p>Revisions do not include a completely new concept, a new product image, major change in brand direction, or recreating the full project from scratch. Extra revisions may be chargeable.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              9. Cancellations and Refunds
            </h2>
            <p>Because AskAmritha provides custom digital creative services, payments are generally non-refundable once work has started.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              10. Ownership and Usage Rights
            </h2>
            <p>Once full payment is received, the client may use the final approved visuals for their business marketing (Instagram, website, catalogues, ads, WhatsApp, and social media content).</p>
            <p>AskAmritha retains the right to use general design methods, workflows, prompts, layout ideas, and non-client-specific creative techniques. Original design files, prompts, and internal working files are not included unless specifically agreed.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              11. Portfolio Usage
            </h2>
            <p>AskAmritha may request permission to showcase completed visuals in its portfolio, social media, website, or promotional material. If you do not want your project to be displayed publicly, please inform us before the project begins.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              12. Prohibited Uses
            </h2>
            <p>You may not use our services to create content that is illegal, misleading, fraudulent, harmful, hateful, abusive, defamatory, or infringing on intellectual property or third-party rights.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              13. No Guaranteed Sales or Results
            </h2>
            <p>We do not guarantee sales, leads, conversions, follower growth, ad performance, or business revenue. Results depend on many external marketing factors.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              14. Website Use
            </h2>
            <p>You agree not to misuse the website by attempting to hack, damage, or disrupt the website, or copying website content without permission.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              15. Third-Party Tools and Platforms
            </h2>
            <p>Our services may involve third-party tools (AI platforms, hosting, form tools, payment gateways, WhatsApp). AskAmritha is not responsible for interruptions, errors, or policies of third-party platforms.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              16. Limitation of Liability
            </h2>
            <p>To the maximum extent permitted by law, AskAmritha’s total liability for any claim related to a paid project will not exceed the amount paid by the client for that specific project.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              17. Indemnity
            </h2>
            <p>You agree to indemnify and hold AskAmritha harmless from claims, losses, or damages arising from materials you provide, your use of the final visuals, your breach of these terms, or any false product claims.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              18. Changes to These Terms
            </h2>
            <p>AskAmritha may update these Terms of Service from time to time. The latest version will be posted on this page with the updated effective date.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal mt-6">
              19. Governing Law
            </h2>
            <p>These Terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in India, unless otherwise required by applicable law.</p>
          </section>

          <section className="space-y-3 pt-6 border-t border-taupe/30">
            <h2 className="font-serif-heading text-xl font-bold text-charcoal">
              20. Contact Us
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
