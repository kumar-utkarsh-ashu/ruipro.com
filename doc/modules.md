# RUIPRO Modular Architecture and Component Library Specifications

## Document Information
- Document: Modules and Reusable Components
- File Reference: doc/modules.md
- Version: 1.0.0
- Status: Approved for Planning Phase

---

## 1. Modular Design System Overview

To guarantee complete consistency between the brand showcase and the ruipro.store visual design, components are architected as modular, reusable building blocks.

Design Tokens:
- Color Palette:
  - Primary Brand Blue: #0066cc / #0d6efd
  - Dark Navy Surface: #0a1128 / #0f172a
  - Clean Background: #ffffff / #f8fafc
  - Card Border / Line: #e2e8f0
  - Text Primary: #0f172a
  - Text Muted: #64748b
  - Accent Gold / Badge: #f59e0b
- Typography:
  - Headings: DM Sans (Bold, 600, 700)
  - Body / Specifications: Inter (Regular 400, Medium 500)
- Corner Radius: 8px (default cards), 9999px (pill badges and rounded buttons)

---

## 2. Component Catalog

### Module M01: Universal Navigation Header (UniversalHeader)
- Purpose: Sticky, accessible navigation bar persistent across all pages.
- Props / Contract:
  - currentRoute: string
  - announcementText: string
  - storeUrl: string
- Sub-components:
  - AnnouncementStrip: Top thin notification bar with distributor quick-link.
  - DesktopNavMenu: Horizontal navigation with active link highlighting.
  - MobileNavDrawer: Slide-over mobile drawer with hamburger toggle, accessible ARIA attributes, and backdrop blur.
  - ExternalStoreButton: Highlighted CTA button with outbound icon.

### Module M02: Universal Footer (UniversalFooter)
- Purpose: Comprehensive site closure, brand credentialing, directory links, and social community hub.
- Props / Contract:
  - socialLinks: Array<{ platform: string, url: string }>
  - currentYear: number
- Sub-components:
  - FooterBrandSummary: Corporate profile and US headquarters details.
  - FooterLinksGroup: Categorized links (Products, Corporate, Authorized Channels).
  - SocialMediaBar: Facebook community, Instagram, and TikTok links opening in new tab.
  - RegionalNoticeSnippet: Brief disclaimer for China/Hong Kong/Macao authorized sales.

### Module M03: Hero Banner Carousel (HeroCarousel)
- Purpose: Engaging, full-width showcase of flagship applications (Home Theater, Gaming, Conference).
- Props / Contract:
  - slides: Array<{ id: string, image: string, headline: string, subhead: string, ctaText: string, ctaLink: string }>
  - autoPlayInterval: number (default: 5000ms)
- Features: Smooth cross-fade or slide transition, responsive image sizing, swipe gestures on touch screens.

### Module M04: Product Showcase Card (ProductCard)
- Purpose: High-impact display card for catalog listings and homepage teaser.
- Props / Contract:
  - id: string
  - title: string
  - category: string
  - badgeText: string (e.g., "8K@60Hz 48Gbps", "Detachable Armored")
  - imageSrc: string
  - keyFeatures: string[]
  - storeUrl: string
  - amazonUrl?: string
  - detailUrl: string
- Layout:
  - Top: Badge indicator and high-res image with subtle hover zoom.
  - Middle: Category label, bold product title, and 3 key feature pills.
  - Bottom: "Buy on Official Store" primary button and "View Specs" secondary link.

### Module M05: Technical Specifications Table (TechSpecsMatrix)
- Purpose: Dense, readable tabular presentation of cable engineering parameters.
- Props / Contract:
  - specs: Array<{ parameter: string, value: string, highlight?: boolean }>
- Responsive Behavior: Converts from two-column table on desktop into clean key-value card stacks on mobile devices.

### Module M06: Certificate and Compliance Viewer (CertificateViewer)
- Purpose: Interactive showcase of HDMI Forum ATC testing certifications, CE, and RoHS reports.
- Props / Contract:
  - certificates: Array<{ title: string, issuingBody: string, validityDate: string, docUrl: string, previewImage: string }>
- Actions: In-browser preview modal and direct PDF download trigger.

### Module M07: Customer Reviews Carousel (ReviewBlock)
- Purpose: Authentic community validation from real AV enthusiasts and forum posters.
- Props / Contract:
  - reviews: Array<{ author: string, title: string, text: string, cableUsed: string, rating: number }>
- Content: Built-in testimonials from Wiley Hodges, Rob Lewis, and long-run OLED reviewers.

### Module M08: Interactive Contact & Lead Form (ContactInquiryForm)
- Purpose: Clean input capture for general inquiries and international distributor applications.
- Fields:
  - name: string
  - email: string
  - category: 'Distributor' | 'Support' | 'Custom Cable' | 'General'
  - subject: string
  - message: string
- State Management: Form validation, client-side error states, submitting loading spinner, and success message banner.

### Module M09: News & Press Listing Grid (NewsGrid)
- Purpose: Chronological archive of awards, firmware notes, product launches, and YouTube reviews.
- Props / Contract:
  - articles: Array<{ id: string, date: string, title: string, excerpt: string, imageUrl?: string, youtubeUrl?: string, slug: string }>
  - activeFilter: string
  - onFilterChange: (category: string) => void
- Features: Responsive video container (16:9 aspect ratio) for YouTube reviews, image zoom on hover.

---

## 3. Reusability Matrix Across Screens

| Module Name | Homepage | About Us | Products Catalog | Product Detail | News Archive | Contact Page |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| M01 UniversalHeader | Yes | Yes | Yes | Yes | Yes | Yes |
| M02 UniversalFooter | Yes | Yes | Yes | Yes | Yes | Yes |
| M03 HeroCarousel | Yes | No | No | No | No | No |
| M04 ProductCard | Yes (4 items) | No | Yes (9 items) | Yes (Related) | No | No |
| M05 TechSpecsMatrix | No | No | Yes (Comparison) | Yes (Full) | No | No |
| M06 CertificateViewer| No | Yes | Yes (Badge) | Yes (Badge) | Yes (ATC News)| No |
| M07 ReviewBlock | Yes | Yes | No | Yes | No | No |
| M08 ContactInquiryForm| Teaser CTA | Teaser CTA | Bulk Quote CTA | Custom CTA | No | Yes (Full) |
| M09 NewsGrid | Teaser (3) | No | No | No | Yes (17) | No |
