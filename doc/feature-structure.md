# RUIPRO UI/UX Architecture and Screen-by-Screen Specification

## Document Information
- Document: UI/UX Feature Structure and Screen Specifications
- File Reference: doc/feature-structure.md
- Version: 1.0.0
- Status: Approved for Planning Phase

---

## 1. User Types and Personas

### Persona A: The High-End Home Theater Enthusiast (Mark, 42)
- Profile: Home theater hobbyist with a 4K/8K laser projector and Dolby Atmos setup. Equipment rack located 30 to 50 feet away in a closet.
- Primary Pain Point: Signal dropouts, black screens, and HDMI handshake failures when running 4K@120Hz or 8K HDR over long distances.
- Goal on RUIPRO: Confirm that RUIPRO cables deliver true 48Gbps uncompressed signal over long runs without flicker. Find the right length and click through to purchase on Shopify or Amazon.
- Desired Content: Customer testimonials (e.g. Wiley Hodges review), HDMI Forum ATC certificates, technical bandwidth ratings, and clear length selector.

### Persona B: The Professional AV Installer and Commercial Integrator (David, 38)
- Profile: AV system integrator installing conference rooms, broadcast studios, medical visualization suites, and luxury residential projects.
- Primary Pain Point: Pulling thick cables through tight in-wall conduits, damaged connector heads during installation, and meeting building fire safety codes.
- Goal on RUIPRO: Review detachable connector technology (micro-HDMI / MPO heads that pull easily through conduits), CL2 in-wall fire ratings, and crush-proof steel armor.
- Desired Content: Engineering diagrams, MPO modular wall plates, conduit pull specifications, downloadable spec sheets, and distributor pricing inquiries.

### Persona C: The Competitive Gamer and Content Creator (Alex, 26)
- Profile: Esports gamer and video creator running high-refresh PC setups, PS5, Xbox Series X, and OLED displays.
- Primary Pain Point: Frame stutters, input lag, screen tearing, and incompatibility with RTX 4080/4090 GPUs.
- Goal on RUIPRO: Verify 4K@120Hz / 4K@144Hz / 8K@60Hz support, VRR, ALLM, and DisplayPort 1.4 options. Outbound link to purchase quickly.
- Desired Content: Gaming banners, YouTube video reviews, latency-free optical architecture explanation.

### Persona D: The Regional Distributor and International Reseller (Elena, 48)
- Profile: Electronics distributor in Europe, Australia, Latin America, or the Middle East looking to distribute RUIPRO optical cables.
- Primary Pain Point: Seeking brand credibility, factory manufacturing capacity, certifications, and direct contact with brand leadership.
- Goal on RUIPRO: Validate SUNIIN TECHNOLOGY background (11 years, 37 employees, 39 distributors, 315,000+ users), inspect certifications, and submit partnership application.
- Desired Content: Distributor banner, awards list, company history, authorized distributor directory, and dedicated B2B contact form.

---

## 2. Universal Navigation Architecture

### 2.1 Universal Header (Persistent across all pages)
- Top Notification / Utility Bar:
  - Left: "Looking to become an authorized RUIPRO distributor? Click here" (Links to Contact Page with Distributor Inquiry anchor).
  - Right: Quick link to "Official Store: ruipro.store" with external icon (Opens in new tab).
- Main Navigation Bar:
  - Brand Logo: High-resolution RUIPRO brand logo with link to Homepage ("/").
  - Desktop Navigation Links:
    - Home ("/")
    - About Us ("/about")
    - Products ("/products") with dropdown previewing categories:
      - 8K Armored HDMI Cables
      - Detachable Fiber Cables
      - DisplayPort 1.4 Optical Cables
      - MPO Fiber and Wall Plates
    - News & Updates ("/news")
    - Contact Us ("/contact")
  - Header Actions:
    - Search Bar / Quick Finder modal
    - Primary CTA Button: "Shop Official Store" (Outbound link to https://ruipro.store/collections/all, style: Solid Blue, high contrast, target="_blank", rel="noopener noreferrer")
  - Mobile Menu Trigger:
    - Hamburger icon displaying accessible slide-over drawer navigation.
    - Preserves exact same link hierarchy, distributor link, and prominent "Shop Official Store" CTA.

### 2.2 Universal Footer (Persistent across all pages)
- Top Section: Newsletter and Brand Assurance
  - Headline: "Engineered for Pure Light Transmission"
  - Subhead: "Subscribe for new product announcements, firmware compatibility updates, and trade show schedules."
  - Email input field with "Subscribe" button.
- Columns Grid:
  - Column 1: Brand Profile
    - RUIPRO Logo
    - Company description: "RUIPRO is a leading fiber optic connectivity brand under SUNIIN TECHNOLOGY CO., LIMITED. Delivering zero-loss audio and video transmission for home theaters, gaming, and commercial AV since 2015."
    - Headquarters: Las Vegas, NV, USA | Factory: SUNIIN Technology Center.
  - Column 2: Product Showcase Quick Links
    - 8K Detachable Armored HDMI 2.1
    - 8K Armored Pure Fiber HDMI 2.1
    - 8K Detachable DisplayPort 1.4
    - DisplayPort to HDMI Modules
    - MPO OM3 Multimode Cables
    - Keystone Wall Plates with MPO
  - Column 3: Corporate and Support
    - About RUIPRO and SUNIIN
    - Quality Certifications (HDMI ATC, CE, RoHS)
    - Company News and Awards
    - Global Distributor Network
    - Contact and Technical Support
  - Column 4: Authorized Purchasing Channels
    - Official Online Store: ruipro.store
    - Amazon US Official Flagship Store
    - Mainland China and Regional Notice
    - Warranty and Support Policy
  - Column 5: Follow Us and Social Community
    - Facebook Community Group (Opens in new tab)
    - Instagram Official Profile (Opens in new tab)
    - TikTok Channel (Opens in new tab)
- Bottom Bar:
  - Copyright notice: "(C) 2026 RUIPRO / SUNIIN TECHNOLOGY CO., LIMITED. All Rights Reserved."
  - Links: Privacy Policy, Terms of Service, Sitemap.

---

## 3. Screen-by-Screen UI/UX Specifications

### Screen 1: Homepage ("/")
- Section 1.1: Hero Banner Carousel (Full width responsive slider)
  - Slide 1: Detachable DisplayPort Optical Cable ("Next-Gen High Refresh Gaming") -> CTA: "Explore DP Cables"
  - Slide 2: Detachable HDMI 2.1 Optical Cable ("Conduit-Friendly 8K Installation") -> CTA: "Explore Detachable HDMI"
  - Slide 3: Commercial Conference Room AV ("Zero Signal Drop Over 300 Meters") -> CTA: "Commercial Solutions"
  - Slide 4: Ultra Gaming 48Gbps 4K@120Hz ("Zero Latency, Flawless Sync") -> CTA: "Shop Gaming Range"
  - Slide 5: Home Theater Pure Light ("Dolby Vision and Atmos True Experience") -> CTA: "Home Theater Solutions"
  - Slide 6: DisplayPort 1.4 Armor Series ("Ruggedized Optical Performance") -> CTA: "View Catalog"
  - Controls: Next/Prev arrows, pagination indicator dots, auto-play with pause on hover.
- Section 1.2: Distributor Opportunity Callout Strip
  - Text: "Looking forward to becoming a RUIPRO distributor? Join our growing international network."
  - Button CTA: "Apply for Distribution" -> Links to /contact#distributor.
- Section 1.3: Brand Introduction and Optical Advantage
  - Headline: "Welcome to the Official RUIPRO Website"
  - Copy: Full brand presentation highlighting active optical cables, full-fiber solutions, and detachable systems.
  - Optical Advantage Feature Grid (4 columns):
    - Icon 1: 48Gbps Uncompressed Bandwidth (Zero compression, 8K@60Hz / 4K@120Hz).
    - Icon 2: Zero EMI / RFI Interference (Pure optical transmission immune to power cables).
    - Icon 3: Long Distance Runs (Flawless transmission up to 300 meters / 1000 feet).
    - Icon 4: Armored Stainless Steel Core (Crush resistance, tensile durability, bend flexibility).
- Section 1.4: Flagship Product Showcase (Interactive 4-Card Highlight)
  - Card 1: RUIPRO 8K Gen4AK Detachable Full Fiber Armored HDMI Cable -> "Shop on ruipro.store"
  - Card 2: RUIPRO 8K Detachable Full Fiber Armored DisplayPort Cable -> "Shop on ruipro.store"
  - Card 3: RUIPRO 8K HDMI Fiber Cable Standard -> "Shop on ruipro.store"
  - Card 4: RUIPRO 8K HDMI Fiber Cable CL2 In-Wall Rated -> "Shop on ruipro.store"
  - Bottom CTA: "View Complete 9-Product Showcase" -> Links to /products.
- Section 1.5: Brand Metrics and Trust Numbers
  - Metric 1: 11+ Years of Establishment
  - Metric 2: 37+ Dedicated Engineering and Support Staff
  - Metric 3: 39+ International Authorized Distributors
  - Metric 4: 315,000+ Cumulative Happy Customers Worldwide
- Section 1.6: Real-World Applications Grid
  - Card 1: Home Theaters & Multi-Room AV (Projectors, OLED TVs, Dolby Atmos)
  - Card 2: Commercial AV & Boardrooms (Video walls, conference presentation hubs)
  - Card 3: Broadcast & Production Studios (Zero frame loss, live monitoring)
  - Card 4: Medical Imaging & Command Centers (Extreme reliability, zero latency)
- Section 1.7: Core Brand Values
  - "To continue on as the best HDMI Fibre cable leaders in our field"
  - "We have the best know-how and equipment currently available"
  - "Be up to date with AV trends & produce the best cables possible"
  - "To produce the best HDMI Fibre cables on the planet"
- Section 1.8: Verified Enthusiast Reviews and Testimonials
  - Review 1: Wiley Hodges (15m Ruipro Cable, Apple TV 4K + LG OLED problem solver)
  - Review 2: Rob Lewis (10m Ruipro Cable, Oppo 4K UHD 60FPS flawless benchmark)
  - Review 3: OLED Enthusiast (50ft HDMI Fiber Cable, zero flicker over long distance)
- Section 1.9: Latest News, Awards, and Video Reviews Teaser
  - 3-card news grid showing latest release, EZYHD distributor award, and YouTube unboxing video.
  - CTA: "Browse All News and Press Releases" -> Links to /news.

---

### Screen 2: About Us Page ("/about")
- Section 2.1: Hero Header
  - Headline: "Pioneering Optical AV Connectivity Since 2015"
  - Subtitle: "The history, engineering philosophy, and quality standards behind RUIPRO and SUNIIN TECHNOLOGY."
- Section 2.2: Corporate Profile & SUNIIN Heritage
  - Company overview detailing SUNIIN TECHNOLOGY CO., LIMITED origins.
  - The evolution from initial HDMI fiber cables in 2016 to current 48Gbps 8K Gen4AK modular systems.
- Section 2.3: Engineering Philosophy & Technical Mastery
  - Focus on practical installation needs: long distance, slim routing, detachable connectors, and durability.
  - Quality assurance testing equipment and factory manufacturing standards.
- Section 2.4: Core Values & Mission
  - 4 core brand pillars presented in structured visual cards.
- Section 2.5: Official Certifications and Compliance Vault
  - Introduction to compliance standards.
  - Document Cards:
    - HDMI Forum ATC Certificate (SNAOC21V101A series in 7.6m, 10m, and 15m)
    - SUNIIN HDMI Adopter Official License (Valid through July 30, 2027)
    - CE-EMC Electromagnetic Compatibility Compliance
    - RoHS European Environmental Safety Certification
    - POPs-SCCP Chemical Safety Test Report
  - Interactive Action: Modal preview and download links for verified verification.
- Section 2.6: Global Distributor Network & Trade Shows
  - Recap of international presence: Hong Kong Electronics Fair, ISE Barcelona, InfoComm.
  - Call to action for potential distribution partners.

---

### Screen 3: Product Showcase Catalog Page ("/products")
- Section 3.1: Catalog Header & Introduction
  - Headline: "RUIPRO Flagship Fiber Optic Showcase"
  - Subhead: "Browse our 9 core high-performance cables, detachable systems, and installation accessories."
- Section 3.2: Filter and View Controls
  - Filter Tabs: All Products (9) | 8K HDMI Cables (5) | DisplayPort 1.4 (2) | Modules & Wall Plates (2)
  - Specification Tag Filter: 48Gbps | Detachable | Armored | CL2 Rated | In-Wall
- Section 3.3: Product Catalog Grid (3x3 on desktop, 2x2 on tablet, 1 col on mobile)
  - Product Card Details for all 9 Products:
    - Product Badge (e.g. "HDMI 2.1 ATC Certified", "Detachable Armored", "Ultra High Speed")
    - High-resolution product image with hover zoom
    - Title with link to detailed specification view
    - Technical bullet highlights: Max resolution, bandwidth, jacket rating
    - Primary CTA: "Buy on Official Store" -> Outbound link to ruipro.store product handle
    - Secondary CTA: "View Full Specs" -> Opens product detail modal or anchor view
- Section 3.4: Comparison Matrix Table
  - Side-by-side comparison of 8K Gen4AK Detachable vs Armored HDMI vs Standard HDMI vs CL2 In-Wall.
  - Rows: Max Bandwidth, Conductor, Steel Armor, Detachable Connector, CL2 In-Wall, Length Range, Best For.
- Section 3.5: Architectural Installation Note
  - Guidance on pulling detachable MPO connectors through 3/4 inch conduits without risking connector pin damage.

---

### Screen 4: Product Detail Template ("/products/[handle]")
- Section 4.1: Product Overview Top Section
  - Left: Multi-angle image gallery with interactive thumbnail selector and zoom lens.
  - Right:
    - Certification badge and category breadcrumb.
    - Full product commercial title.
    - Quick spec pills (48Gbps, 8K@60Hz / 4K@120Hz, Dynamic HDR, eARC).
    - Length options available: 3m, 5m, 10m, 15m, 20m, 30m, up to 300m.
    - Key Features list (bullet points from Shopify product documentation).
    - Primary Action Button: "Buy on Official Store (ruipro.store)" (Opens in new tab).
    - Secondary Action Button: "Check on Amazon US" (Opens in new tab).
    - B2B Action Link: "Request Custom Length or Bulk Distributor Quote" (Links to Contact Form).
- Section 4.2: In-Depth Technical Specification Table
  - Tab 1: Video and Audio Features (8K, 4K, eARC, ALLM, VRR, HDR10+, Dolby Vision).
  - Tab 2: Cable Construction (Armored steel spiral, 4-core optical fiber, 7-core copper auxiliary).
  - Tab 3: Electrical & Optical Specifications (Optical laser wavelength 850nm, power consumption < 250mW).
  - Tab 4: Package Contents & Installation Guidelines (Tx/Rx directional markers, pulling capsule).
- Section 4.3: Application Scenarios & Setup Diagram
  - Connection diagram illustrating Source (Tx) to Display (Rx) routing.
- Section 4.4: Related Products Recommendations (3-card carousel).

---

### Screen 5: News & Editorial Archive ("/news")
- Section 5.1: Newsroom Header
  - Headline: "RUIPRO News, Awards & Product Releases"
  - Subtitle: "Official announcements, distributor honors, technical milestones, and independent media reviews."
- Section 5.2: Category Filter Bar
  - Filters: All News (17) | Awards & Honors | Product Releases | Technical Certifications | Video Reviews
- Section 5.3: Editorial Grid Layout
  - Featured Article (Top hero banner):
    - Example: 2022 EZYHD Distributor Sales Award or HDMI Forum ATC Certification announcement.
  - Regular Post Cards:
    - Date badge (e.g. "January 5th, 2022")
    - Post title
    - Excerpt text
    - Visual thumbnail or embedded YouTube video trigger
    - Read More button
- Section 5.4: Preserved 17 Historical Posts Coverage
  - Includes all historical articles, images, and embedded video reviews dating from 2018 to 2022+ as specified in project brief.

---

### Screen 6: News Detail Article Template ("/news/[slug]")
- Section 6.1: Article Header
  - Category badge, publication date, title, and social share buttons.
- Section 6.2: Featured Media Container
  - High-definition article photograph or responsive 16:9 YouTube video player.
- Section 6.3: Article Content Body
  - Full formatted prose, quotation blocks, and technical images.
- Section 6.4: Navigation & Related News
  - Previous Post / Next Post navigation links.
  - Back to All News button.

---

### Screen 7: Contact Us & Global Distributor Directory ("/contact")
- Section 7.1: Contact Header
  - Headline: "Get in Touch with RUIPRO"
  - Subhead: "Technical support, distribution inquiries, custom project requests, and general questions."
- Section 7.2: Two-Column Contact Layout
  - Left Column: Corporate & Direct Channels
    - United States Headquarters Address:
      101 Convention Center Dr Ste 900, Las Vegas, NV 89109
    - WhatsApp Business Direct: +86 182 6783 3801
    - Customer Support Email: support@ruipro.com
    - Operating Hours: Monday - Friday, 9:00 AM - 6:00 PM PST
  - Right Column: Interactive Inquiry Form
    - Your Name (Text input, required)
    - Your Email Address (Email input, required)
    - Inquiry Type Dropdown:
      - Distributor / Reseller Application
      - Technical Support & Troubleshooting
      - Custom Length Cable Request
      - General Question
    - Subject (Text input, required)
    - Your Message (Textarea, required)
    - Submit Inquiry Button (Active state, loading state, success banner upon submit)
- Section 7.3: Regional Distribution Notice (Mainland China, Hong Kong & Macao)
  - Dedicated highlighted alert box:
    - "Mainland China, Hong Kong & Macao Official Distributor Notice"
    - "At this time, direct sales from ruipro.com or ruipro.store do not ship to Mainland China, Hong Kong, or Macao. To ensure warranty support, customers in these regions must contact our authorized partner:"
    - Partner: Guangzhou Kejun Technology Co., Ltd. (Guangzhou Kejun Keji Youxian Gongsi)
    - Phone / WeChat: 13602763839
    - Email: gztopsound@hotmail.com
    - Notice: Purchases from unauthorized third parties are not eligible for regional warranty service.
- Section 7.4: International Distributor Inquiry Directory
  - Australia & New Zealand: EZYHD (Leading Distributor Award Winner)
  - Spain, Italy, Finland, Israel, Paraguay, Brazil: Regional inquiry routing through contact form.

---

## 4. CTA and Outbound Link Matrix

| Element / CTA Label | Screen Location | Target URL / Destination | Link Type | Attributes |
| :--- | :--- | :--- | :--- | :--- |
| "Shop Official Store" | Universal Header (Desktop + Mobile) | https://ruipro.store/collections/all | Outbound | target="_blank" rel="noopener noreferrer" |
| "Become a Distributor" | Header Utility Strip | /contact#distributor | Internal | Local smooth scroll |
| "Explore DP Cables" | Homepage Hero Slide 1 | /products?cat=displayport | Internal | Route filter |
| "Explore Detachable HDMI" | Homepage Hero Slide 2 | /products?cat=detachable-hdmi | Internal | Route filter |
| "Commercial Solutions" | Homepage Hero Slide 3 | /products?cat=modules | Internal | Route filter |
| "Buy on ruipro.store" | Product Showcase Cards (P01-P09) | https://ruipro.store/collections/all/products/[handle] | Outbound | target="_blank" rel="noopener noreferrer" |
| "Buy on Amazon US" | Product Detail Pages | https://www.amazon.com/dp/B0BTGG3GTF?th=1 | Outbound | target="_blank" rel="noopener noreferrer" |
| "Submit Inquiry" | Contact Form | API Endpoint / WPForms handler | POST Action | Non-reloading AJAX submission |
| "Facebook Community" | Universal Footer | https://www.facebook.com/groups/ruipro.official | Outbound | target="_blank" rel="noopener noreferrer" |
| "Instagram Official" | Universal Footer | https://www.instagram.com/ruipro.official | Outbound | target="_blank" rel="noopener noreferrer" |
| "TikTok Official" | Universal Footer | https://www.tiktok.com/@ruipro1direct | Outbound | target="_blank" rel="noopener noreferrer" |

---

## 5. Layout Gap Analysis and Mitigation Strategy

### Identified Gap 1: Outbound E-Commerce Disconnect
- Risk: Customers visiting the brand showcase may feel confused when clicking "Buy" and landing on ruipro.store or Amazon without advance expectation.
- Mitigation: Place a clear badge and label on every purchase CTA: "Buy on Official Store (ruipro.store)" and "Buy on Amazon US", along with an external link indicator icon. In the header and footer, clearly state: "Showcase & Specifications Site - Purchases fulfilled on ruipro.store".

### Identified Gap 2: Regional Territory Exclusions (China/Hong Kong/Macao)
- Risk: Customers in China/Hong Kong attempting to buy via US Shopify links and failing at checkout.
- Mitigation: Dedicated high-visibility information card on the Contact Us page and footer explicitly detailing Guangzhou Kejun Technology Co., Ltd. contact details (Tel/WeChat: 13602763839).

### Identified Gap 3: Technical Conduit Installation Inquiries
- Risk: Professional installers need to know if the detachable connector head fits inside standard 3/4-inch conduit tubes.
- Mitigation: Create a dedicated "Conduit & Installation Specs" accordion on all detachable cable product detail pages showing the exact 12.5mm outer diameter and pull-capsule diagram.

### Identified Gap 4: Mobile Viewport Clutter on Spec Tables
- Risk: 48Gbps technical matrices with 8 columns overflow mobile screens, causing horizontal scrolling and poor readability.
- Mitigation: Implement responsive card-based layout transformations on mobile devices (<768px), converting table rows into vertical key-value pairs while maintaining full multi-column comparison tables on desktop.

---

## 6. Responsive Viewport Strategy
- No separate mobile/desktop tab toggles: Layouts adapt naturally using fluid CSS Grid, Flexbox, and Tailwind breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px).
- Navigation Header: Sticky compact header with touch-friendly 44px tap targets on mobile.
- Typography Scale: Fluid type scale using clamp() to guarantee optimal legibility from 375px smartphones to 1920px 4K displays.
