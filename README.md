# AskAmritha E-Commerce Visuals Studio

AskAmritha is a premium, mobile-first responsive website built with **Next.js 15 (App Router)**, **React 19**, and **Tailwind CSS v4** to offer premium AI-powered product photography, ad creatives, and brand visuals for small businesses, boutiques, skincare brands, jewelry brands, and Instagram stores.

---

## 🚀 Key Features

* 📱 **Mobile-First Responsive Design**: Optimized for 360px, 390px, 768px, 1024px, and desktop widths.
* 💬 **Sticky WhatsApp CTA**: Floating pulse WhatsApp button and context CTAs built dynamically.
* 📋 **Contact Form**: Frontend validation, prefilled selection linked from pricing cards, and ready to hook up to Formspree, Resend, or EmailJS.
* 🖼️ **Local Assets**: Serves pre-rendered premium product mockups directly from the `public/` assets folder.
* ⚡ **Performance & SEO**: Leverages `next/font/google` for Playfair Display & Inter to prevent layout shifts. Includes SEO metadata tags, favicon, and Open Graph sharing setup.

---

## 🛠️ Getting Started

### Prerequisites
* Node.js v18.17.0 or higher
* npm

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## ⚙️ Configuration & Customization

All contact coordinates, WhatsApp numbers, email IDs, service packages, and pricing tiers are centralized in a single configuration file for easy maintenance:

📍 **[`src/config/business.ts`](file:///c:/Users/camri/Documents/Amritha/Antigravity%20workspace/askAmritha/src/config/business.ts)**

To update details:
* **WhatsApp Number**: Update `whatsappNumber` (e.g. `"+918004567890"` with country code, no space or symbols).
* **WhatsApp Pre-filled message**: Update `whatsappMessage`.
* **Email & Address**: Update `email` and `address` fields.
* **Pricing & Services**: Customize service features, prices, CTAs, and popularity badges inside the array.

---

## 🌐 Custom Domain & Vercel Deployment

This project is fully ready for deployment on **Vercel** and mapping to the custom domain **`askamritha.com`**.

### Step 1: Deploy to Vercel
1. Push this codebase to your GitHub/GitLab/Bitbucket repository.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your repository.
4. Keep the default build settings (Next.js preset) and click **Deploy**.

### Step 2: Connect the Custom Domain `askamritha.com`
1. In your Vercel Project Dashboard, navigate to **Settings** > **Domains**.
2. Click **Add** and enter `askamritha.com`.
3. Vercel will provide the DNS records. Update them at your domain registrar:
   * **CNAME** record for `www.askamritha.com` pointing to `cname.vercel-dns.com`.
   * **A** record for the apex domain `askamritha.com` pointing to `76.76.21.21`.
4. Vercel will automatically generate Let's Encrypt SSL certificates for you.
