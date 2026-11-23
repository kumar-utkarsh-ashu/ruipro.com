# RUIPRO Technical Architecture and Stack Specifications

## Document Information
- Document: Technology Architecture
- File Reference: doc/technology.md
- Version: 1.0.0
- Status: Approved for Planning Phase

---

## 1. Production Architecture (WordPress on SiteGround)

### 1.1 Core Platform
- CMS: WordPress 6.x LTS
- Hosting Environment: SiteGround Cloud Hosting (Managed WordPress)
- PHP Runtime: PHP 8.2+ with OPcache and JIT enabled
- Web Server: NGINX reverse proxy with Apache backend
- Database: MySQL 8.0 / MariaDB 10.6

### 1.2 WordPress Theme and Builder Framework
- Theme: Avada 7.x (Client incumbent theme as per brief)
- Child Theme: ruipro-custom-child (for custom CSS, template overrides, hooks, and clean upgradability)
- Page Builder: Avada Fusion Builder / Fusion Core
- CSS Framework in Child Theme: Modern flexbox and CSS grid with custom CSS custom properties aligned with ruipro.store
- Typography Engine: Google Fonts (Inter for body text, DM Sans for bold headings) loaded locally for GDPR compliance and ultra-fast rendering

### 1.3 Key Production Plugins
- Performance and Caching: SiteGround Optimizer (SG Optimizer) with Memcached, dynamic caching, Brotli compression, and WebP image generation
- SEO: Yoast SEO / Rank Math SEO for canonical tags, schema markup, OpenGraph tags, and XML sitemaps
- Forms: WPForms / Contact Form 7 with Google reCAPTCHA v3 / Cloudflare Turnstile spam protection and SMTP delivery
- Security: Wordfence Security / SiteGround Security with two-factor authentication, XML-RPC hardening, and brute-force protection
- Media Handling: WebP Converter for high-resolution product photography optimization

---

## 2. Interactive Prototype Architecture (Next.js / Tailwind / shadcn)

### 2.1 Framework and Tooling
- Framework: Next.js 14+ (App Router architecture)
- Language: TypeScript 5.x
- Styling: Tailwind CSS v3.4+
- Component Primitives: Radix UI primitives via shadcn/ui
- Icons: Lucide React (feather-style clean SVG line icons)
- Build System: Turbopack / Webpack 5
- Runtime: Node.js 18+ / 20+ LTS

### 2.2 Reusable Component Structure
- Header: Universal responsive navigation with desktop menu, mobile slide-out drawer, announcement bar, and outbound store link
- Footer: Universal responsive footer with brand summary, quick links, product categories, distributor notices, and social links (Facebook community, Instagram, TikTok)
- Layout: Root layout wrapping all routes with unified metadata, viewport configurations, and global font imports
- Outbound Tracking: Custom button components with built-in rel="noopener noreferrer", target="_blank", and analytics event triggers

### 2.3 Local Execution and Deployment Support
- Local Development: npm run dev starts local server on http://localhost:3000
- Production Build: npm run build produces optimized static export / standalone server package
- Preview Deployment: Zero-config deployment support on Vercel and Netlify via standard build commands

---

## 3. Asset and Media Pipeline

### 3.1 Source Assets Available
- Vector Logo: logo/RUIPRO_LOGO.png and logo/RUIPRO_R_LOGO_20190328.pdf
- Favicon: logo/Favicon/1.png.png
- High Resolution Banners (2000x821):
  - 01_banner-detachable-dp_2000x821_v2.png
  - 02_banner-detachable-hdmi_2000x821.png
  - 03_banner-conference-room_2000x821.png
  - 04_banner-hdmi-2-1-gaming_2000x821.png
  - 05_banner-home-theater-pure-light_2000x821.png
  - 06_banner-dp-1-4-gaming_2000x821.png
- Application Imagery: Additional Images/Amazon Product Application Images/ (home theater, studio, conference, medical scene, etc.)
- Technical Compliance Certificates: Certificates/ directory (HDMI ATC, CE-EMC, RoHS, SUNIIN adopter docs)

### 3.2 Optimization Standards
- Image Formats: WebP primary with PNG/JPEG fallbacks
- Maximum Banner File Size: 180 KB for web delivery
- Product Photos: 800x800 square and 1200x800 aspect ratio, lossless compression under 120 KB
- SVG Icons: Minified inline SVG code for zero layout shift

---

## 4. Performance and SEO Benchmarks
- Google PageSpeed Target: Mobile score greater than 85, Desktop score greater than 95
- Core Web Vitals:
  - Largest Contentful Paint (LCP): less than 2.0 seconds
  - First Input Delay (FID) / Interaction to Next Paint (INP): less than 150 ms
  - Cumulative Layout Shift (CLS): 0.00
- Structural Markup: Schema.org Product, Organization, BreadcrumbList, and WebSite JSON-LD microdata
