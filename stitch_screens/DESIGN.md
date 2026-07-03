---
name: AskAmritha Design System
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#4e4639'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#7f7667'
  outline-variant: '#d1c5b4'
  surface-tint: '#775a19'
  primary: '#775a19'
  on-primary: '#ffffff'
  primary-container: '#c5a059'
  on-primary-container: '#4e3700'
  inverse-primary: '#e9c176'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#615e57'
  on-tertiary: '#ffffff'
  tertiary-container: '#a9a59c'
  on-tertiary-container: '#3d3b34'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea5'
  primary-fixed-dim: '#e9c176'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5d4201'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e7e2d8'
  tertiary-fixed-dim: '#cac6bd'
  on-tertiary-fixed: '#1d1c16'
  on-tertiary-fixed-variant: '#494740'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md-mobile:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-lg: 48px
  stack-md: 24px
  stack-sm: 12px
---

## Brand & Style
The design system is crafted to evoke the feeling of a high-end fashion editorial or a luxury boutique workshop. It targets discerning small business owners in the artisanal skincare, jewelry, and lifestyle sectors who require an AI partner that understands "craft" rather than just "code."

The visual style is **Sophisticated Minimalism** with a **Tactile** edge. It prioritizes expansive whitespace (airiness), deliberate hierarchy, and high-contrast typography. The emotional response should be one of calm confidence, precision, and timelessness. By blending classic serif elegance with modern functionalism, the system positions the product as an essential tool for premium brand storytelling.

## Colors
The palette is grounded in a warm, "paper-like" cream base to avoid the sterile feel of pure white, ensuring the product photography stands out in a natural, organic environment.

- **Primary (#C5A059):** A muted Gold used exclusively for primary actions, success states, and subtle premium accents.
- **Secondary (#1A1A1A):** An "Off-Black" for high-contrast typography and icon work, providing a sharp, authoritative anchor.
- **Tertiary (#F5F0E6):** A soft Beige for sectioning and subtle depth, mimicking the layering of fabric or stone.
- **Surface (#FDFBF7):** The "Warm Cream" canvas that provides the core background for the entire application.

## Typography
The typography strategy relies on the tension between the expressive, high-contrast strokes of **Playfair Display** and the clinical, geometric precision of **Inter**.

Headlines should be treated as editorial elements—large and unapologetic. Use `display-lg` for hero sections and key marketing moments. Body text follows a generous line-height (1.6) to ensure maximum readability and a relaxed, premium pace. The `label-caps` style is used for small metadata, overlines, and navigation items to provide a sense of structured organization.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain the "editorial" feel of a curated lookbook, while transitioning to a flexible fluid system on mobile.

- **Desktop:** 12-column grid with 64px outer margins. Content is strictly centered.
- **Mobile:** 4-column grid with 20px margins.
- **Rhythm:** Spacing should always feel intentional. When in doubt, increase the `stack` spacing. Use `stack-lg` to separate distinct thematic sections and `stack-md` for grouping related elements like text and its associated CTA.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Ambient Shadows** rather than harsh borders. 

Since the base is a warm cream, depth is achieved by placing cards of the same color over it, but adding an extremely soft, diffused shadow (Blur: 30px, Opacity: 4%, Color: #1A1A1A). This creates a "hovering" effect as if photos are resting on a surface. Sectioning is handled by the subtle shift from Warm Cream (#FDFBF7) to Soft Beige (#F5F0E6) for a non-intrusive visual break.

## Shapes
A **Rounded** shape language (8px to 12px) is used to soften the high-contrast typography, making the interface feel approachable and modern. 

- **Cards & Primary Containers:** Use `rounded-lg` (16px) for a substantial, premium feel.
- **Buttons & Inputs:** Use the base `rounded` (8px) to maintain a crisp, professional silhouette.
- **Image Previews:** Use `rounded-xl` (24px) for featured product shots to emphasize their status as "objects of art."

## Components
- **Buttons:** Primary buttons use the Gold (#C5A059) background with white or black text. They should have a minimum height of 48px to ensure they are tap-friendly. Hover states should slightly deepen the gold tone. Secondary buttons are "Ghost" style with a 1px border of #1A1A1A.
- **Cards:** Cards should be borderless, utilizing the ambient shadow defined in the Elevation section. They are the primary vehicle for displaying product photos and AI-generated results.
- **Input Fields:** Use a subtle Soft Beige (#F5F0E6) fill with a bottom-only border (1px, #1A1A1A) to mimic high-end stationery or registration forms.
- **Chips/Badges:** Small, pill-shaped elements with the `label-caps` typography style. Used for categorizing product types (e.g., "SKINCARE", "JEWELRY").
- **Featured Component (The "Studio View"):** A specialized container for the AI photo editor, using a slightly darker version of the beige background to focus the user's eye on the brightly lit product photo in the center.