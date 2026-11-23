# RUIPRO Brand Showcase - Comprehensive QA Testing Specification & Security Vulnerability Assessment

## Document Information
- Document Type: Quality Assurance Test Sheet, Testing Methodology & Penetration Security Audit
- Version: 1.3.0
- Application: RUIPRO Official Brand Showcase Website
- Repository: https://github.com/kumar-utkarsh-ashu/ruipro.com
- Author: Antigravity QA Testing & Security Engineering Expert
- Date: 2026-11-23
- Compliance Standards: WCAG 2.1 AA, OWASP Top 10 (2021), ISO/IEC 25010 Software Quality Standards

---

## 1. Domain, Platform Scope & User Role Mapping

### 1.1 Industry and Domain Context
- Industry: High-End Audio/Visual (AV) Hardware, Active Optical Cables (AOC), Consumer Electronics, Professional Cinema & Commercial Broadcasting.
- Primary Business Objective: Authoritative brand showcase, technical proof-of-engineering, distributor recruitment, product catalog exploration, and lead generation.
- Decoupled Commercial Architecture: The showcase site contains zero on-site shopping carts, checkout engines, payment gateways, or customer financial data storage. All direct purchases are fulfilled outbound via:
  - Official Direct-to-Consumer Store: `https://ruipro.store/` (Shopify)
  - Verified Regional Marketplaces: Amazon US Storefront
  - Authorized Global Distributor Network: 39 regional distributors across APAC, EMEA, and Americas.

### 1.2 Platform Scope
- Frontend Framework: Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/Radix-based accessible UI primitives.
- Static Site Generation (SSG): 34 pre-rendered static routes with incremental client hydration.
- Target Production Environment: SiteGround WordPress hosting (Avada framework) / Next.js Vercel Edge Runtime.
- Device Matrix: Responsive breakpoint compliance across:
  - Mobile: 320px to 480px (iOS Safari, Android Chrome)
  - Tablet: 768px to 1024px (iPadOS, Android Tablet landscape/portrait)
  - Desktop / Ultrawide: 1280px, 1440px, 1920px, 2560px (macOS Safari/Chrome, Windows Edge/Chrome).

### 1.3 User Roles and Permission Levels
1. Role 1: General Visitor / AV Enthusiast (Public / Unauthenticated)
   - Capabilities: Browse catalog, inspect 4K/8K technical specs, compare cable lengths/models, read news articles, watch embedded YouTube technical benchmarks, trigger outbound purchase links.
2. Role 2: Prospective B2B Distributor / Custom AV Installer (Commercial Inquirer)
   - Capabilities: Access dedicated distributor inquiry form, download technical compliance certificates (HDMI Forum ATC, CE, RoHS, FCC), submit business partnership applications.
3. Role 3: Press / Media / Reviewer
   - Capabilities: Access Media Room, download brand assets and press releases, review laboratory testing documentation.
4. Role 4: Content Manager / Site Operator (Elevated Admin)
   - Capabilities: Update product catalog metadata, add new press releases, configure outbound affiliate/store URLs, review submitted distributor inquiries.

---

## 2. Testing Methodologies & Frameworks

### 2.1 Unit Testing Strategy
- Scope: Isolated helper functions, string formatters, query parsers, and pure UI components.
- Tooling: Jest + React Testing Library.
- Key Targets:
  - Product metadata parsing and attribute filtering (e.g. HDMI 2.1 vs DisplayPort vs USB-C).
  - Outbound URL generator ensuring secure query parameters and `rel="noopener noreferrer"`.
  - Contact form field validators (RFC 5322 email regex, international phone regex, required fields).

### 2.2 Integration Testing Strategy
- Scope: Multi-component interactions, modal workflows, client navigation transitions.
- Key Targets:
  - Hero Carousel slide cycling, hover pause, clickthrough to product detail routes.
  - Certificate modal state management: backdrop click, Escape key dismiss, PDF preview rendering.
  - Category filtering across 9 products on the `/products` catalog page.
  - Contact form submission feedback loop: client-side validation, loading state, simulated success banner.

### 2.3 Test-Driven Development (TDD) Approach
For iterative enhancements, tests precede implementation using the Red-Green-Refactor cycle:
1. Red Phase: Write a failing test asserting component behavior (e.g., verifying that missing an email in the distributor form produces an `aria-invalid="true"` alert).
2. Green Phase: Implement the minimum code required to satisfy the assertion.
3. Refactor Phase: Optimize code cleanliness, accessibility tree semantics, and bundle footprint without altering test outcomes.

---

## 3. Comprehensive Structured Test Case Sheet

| Test ID | User Role | Feature / Module | Functionality to be Tested | Test Type | Expected Outcome | Status | Tested By | Comments / Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-NAV-001** | All | Universal Header | Desktop Navigation Bar Rendering | Functional | Logo, 4 primary links (Home, Products, About, News), Contact CTA, and Official Store external button display cleanly. | Done | QA Lead | Validated on desktop breakpoints. |
| **TC-NAV-002** | All | Universal Header | Mobile Hamburger Menu Toggle | Functional / Responsive | Clicking hamburger opens mobile drawer smoothly without layout shift; body scrolling is locked while open. | Done | QA Lead | Verified on viewport 375px. |
| **TC-NAV-003** | All | Universal Header | Active Route Highlighting | Functional | Nav link matching the active pathname receives orange bottom border `#F16D2C`. | Done | QA Lead | Works across /about, /products, /news, /contact. |
| **TC-NAV-004** | All | Universal Footer | Copyright & Dynamic Links | Functional | Footer displays current year, company legal name (SUNIIN TECHNOLOGY), social links, and valid page anchors. | Done | QA Lead | Universal across all 34 routes. |
| **TC-HERO-001** | Visitor | Hero Carousel | Banner Image Rendering & Aspect Ratio | Visual / Unit | 6 banners render at 2000x821 aspect ratio without distortion or text truncation. | Done | QA Lead | Text is baked into banner artwork, no clashing HTML overlay. |
| **TC-HERO-002** | Visitor | Hero Carousel | Automated Rotation Interval | Functional | Slides auto-advance every 6000ms in sequence; resets cleanly upon manual pagination click. | Done | QA Lead | Verified with timer hook. |
| **TC-HERO-003** | Visitor | Hero Carousel | Hover Pause State | Functional / Edge | Hovering cursor over hero carousel pauses the automated 6000ms rotation timer; resumes on mouse leave. | Done | QA Lead | Prevents accidental navigation during inspection. |
| **TC-HERO-004** | Visitor | Hero Carousel | Slide Pagination Dots | Functional | Clicking dot 4 immediately brings slide 4 into view and applies active width `w-8 bg-[#F16D2C]`. | Done | QA Lead | Smooth CSS opacity transition. |
| **TC-HERO-005** | Visitor | Hero Carousel | Direct Banner Clickthrough | Integration | Clicking any banner navigates directly to the corresponding product detail route or category. | Done | QA Lead | Validated for all 6 slides. |
| **TC-STRIP-001** | B2B User | Distributor Strip | Zero Whitespace Margin | Visual / Layout | Distributor bar sits directly flush beneath the Hero Carousel with exactly 0px vertical gap. | Done | QA Lead | Verified in Version 1.2.2. |
| **TC-STRIP-002** | B2B User | Distributor Strip | Anchor Link Routing | Functional | Clicking "Click here" navigates to `/contact#distributor` and scrolls smoothly to the partnership inquiry section. | Done | QA Lead | Target anchor exists in DOM. |
| **TC-CAT-001** | Visitor | Catalog Index | Product Grid Rendering | Functional | All 9 products display with title, category badge, key spec badges, price, and thumbnail. | Done | QA Lead | Pre-rendered via SSG. |
| **TC-CAT-002** | Visitor | Catalog Index | Category Filter Buttons | Functional / TDD | Clicking "HDMI Cables" filters list to 5 items; "DisplayPort" filters to 2 items; "All" restores 9 items. | Done | QA Lead | Instant client-side state filter. |
| **TC-CAT-003** | Visitor | Catalog Index | Image Fallback on Error | Negative / Edge | If product image fails to load, component renders a styled fallback placeholder with brand logo. | Done | QA Lead | Tested with invalid image URL. |
| **TC-PROD-001** | Buyer | Product Detail | Gallery Thumbnail Switching | Functional | Clicking thumbnail 3 updates the main preview image with smooth transition and correct aspect ratio. | Done | QA Lead | Tested across all 9 products (4 photos each). |
| **TC-PROD-002** | Buyer | Product Detail | Outbound Shopify Purchase CTA | Integration | Clicking "Buy on Ruipro Store" opens `https://ruipro.store/products/...` in a new tab with `rel="noopener noreferrer"`. | Done | QA Lead | Preserves user session on showcase site. |
| **TC-PROD-003** | Buyer | Product Detail | Outbound Amazon Purchase CTA | Integration | Clicking "Buy on Amazon US" opens verified Amazon storefront product ASIN in a new tab with `target="_blank"`. | Done | QA Lead | Link verified against live ASIN catalog. |
| **TC-PROD-004** | Visitor | Product Detail | Technical Specifications Table | Functional | Complete specs table renders (Bandwidth, Resolution, Jacket Rating, Armor, Outer Diameter, Power Consumption). | Done | QA Lead | Accurate optical engineering data. |
| **TC-PROD-005** | Visitor | Product Detail | Invalid Product Slug Handling | Negative / Edge | Requesting `/products/non-existent-cable` renders a polished 404 page with a return-to-catalog button. | Done | QA Lead | Next.js `notFound()` handler verified. |
| **TC-CERT-001** | B2B User | About / Compliance | Certificate Gallery Grid | Functional | Displays 7 official certifications (HDMI Forum ATC 8K/4K, CE, RoHS, FCC, REACH, ISO9001). | Done | QA Lead | Thumbnails load crisply. |
| **TC-CERT-002** | B2B User | About / Compliance | Interactive Certificate Modal | Functional | Clicking any certificate opens an accessible modal with full-size preview, document ID, and download link. | Done | QA Lead | Focus trap and backdrop blur active. |
| **TC-CERT-003** | B2B User | About / Compliance | Modal Keyboard Accessibility | A11y / Unit | Pressing the Escape key immediately closes the active certificate modal and restores focus to the trigger card. | Done | QA Lead | WCAG 2.1 keyboard compliance. |
| **TC-NEWS-001** | Visitor | News Archive | 17 Historical Posts Rendering | Functional | All 17 historical news posts render with thumbnail, category badge, publication date, and excerpt. | Done | QA Lead | Data imported from historical archive. |
| **TC-NEWS-002** | Visitor | News Archive | YouTube Video Embedding | Integration | News articles referencing YouTube reviews render responsive 16:9 iframe players with lazy loading. | Done | QA Lead | `loading="lazy"` attribute verified. |
| **TC-FORM-001** | B2B User | Contact Form | Valid Form Submission | Functional | Filling valid Name, Email, Inquiry Type, and Message displays green confirmation notice. | Done | QA Lead | Simulated API endpoint returns 200. |
| **TC-FORM-002** | Visitor | Contact Form | Empty Required Fields | Negative / TDD | Submitting empty form highlights invalid inputs in red with descriptive error messages. | Done | QA Lead | HTML5 & JS dual validation. |
| **TC-FORM-003** | Visitor | Contact Form | Malformed Email Address | Negative / Edge | Entering `user@domain` or `user..name@domain.com` triggers "Please provide a valid business email address". | Done | QA Lead | RFC 5322 regex test passed. |
| **TC-FORM-004** | Visitor | Contact Form | XSS Script Injection in Textarea | Security / Neg | Submitting `<script>alert('XSS')</script>` is safely escaped and neutralized by React virtual DOM. | Done | Security | No script execution in DOM. |
| **TC-FORM-005** | Visitor | Contact Form | Rapid Double-Click Submission | Edge / Concurrency | Clicking submit twice rapidly triggers disabled button state, preventing duplicate request dispatch. | Done | QA Lead | `isSubmitting` state guard. |
| **TC-CALL-001** | All | Media Room Strip | Zero Whitespace Margin | Visual / Layout | Dark callout strip sits flush against the Universal Footer with 0px white space. | Done | QA Lead | Verified in Version 1.2.2. |

---

## 4. Edge Cases, Negative Scenarios & Administrative Controls

### 4.1 Client-Side Performance & Network Latency
- Slow 3G Emulation:
  - Banners utilize Next.js unoptimized static caching to avoid third-party image transformation latency.
  - Critical font stylesheets (`Inter` and `Cabinet Grotesk` fallback) load with `font-display: swap` to prevent FOIT (Flash of Invisible Text).
- Broken External Store Links:
  - If Shopify store endpoint experiences an outage, the showcase catalog remains 100% operational because data is statically rendered on-site.
  - Amazon US backup button provides redundancy for product acquisition.

### 4.2 Accessibility & Keyboard Traversal (WCAG 2.1 AA)
- Focus Indicator: All interactive links and form inputs display a distinct orange outline (`focus:ring-2 focus:ring-[#F16D2C]`).
- Screen Reader Accessibility:
  - Navigation drawer contains `aria-expanded` and `aria-label="Toggle navigation menu"`.
  - Carousel next/prev controls contain descriptive `aria-label="Previous Slide"` and `aria-label="Next Slide"`.
  - Modals implement `role="dialog"` with `aria-modal="true"`.

### 4.3 Administrative & Content Operations (WordPress Production Target)
- Role Hierarchy:
  - Administrator: Full theme, plugin, and server access via SiteGround cPanel.
  - Editor: Add/modify catalog products, edit news articles, update technical specification sheets.
  - Author: Draft news articles (requires Editor approval before publishing).
- Elevated Privilege Controls:
  - Enforce two-factor authentication (2FA) on all `/wp-admin` logins.
  - Restrict file modification (`define('DISALLOW_FILE_EDIT', true);` in `wp-config.php`).
  - Disable XML-RPC interface (`xmlrpc.php`) to block brute-force credential amplification attacks.

---

## 5. Security Vulnerability Breakdown & Penetration Testing Audit

*Acted as an independent penetration tester and application security auditor. The following vulnerabilities, exploit paths, and breaking points were identified across the architecture, codebase, and infrastructure surface without applying code patches:*

### 5.1 Client-Side & Frontend Attack Surface
- **External Outbound Link Reverse Tabnabbing Risk**:
  - Outbound links to external targets (Amazon storefront, Shopify store, social media channels) that specify `target="_blank"` without strict `rel="noopener noreferrer"` attributes permit malicious destination pages to access `window.opener.location`, enabling phishing redirection attacks.
- **Client-Side Form Replay and Spam Flooding**:
  - The public contact and distributor inquiry form currently lacks server-side rate limiting, CAPTCHA gating, or Proof-of-Work anti-bot challenges, allowing automated scripts to flood inquiry inboxes with spam or exhaust SMTP email quotas.
- **Form Payload Size Memory Exhaustion (DoS)**:
  - Textarea inputs for project inquiries lack an explicit client-side and server-side byte limit (e.g. 10,000 characters), exposing JSON parsers to memory exhaustion if megabyte-scale payloads are posted.
- **Third-Party IFrame Content Poisoning (YouTube Embeds)**:
  - Video review embeds use standard `iframe` targets without strict `sandbox="allow-scripts allow-same-origin allow-presentation"` attributes, potentially allowing framed third-party scripts to trigger unauthorized popups or read frame state.

### 5.2 Build Pipeline & Hosting Infrastructure (Next.js / Vercel / SiteGround)
- **Deployment Misconfiguration / Route Hijacking (Vercel 404 Route Exposure)**:
  - When an application points to a custom domain with missing project linking in Vercel, requests fall through to the Vercel edge router returning `x-vercel-error: NOT_FOUND`. If the project domain is deleted or unlinked on Vercel while DNS CNAME/A records still point to `cname.vercel-dns.com` or `76.76.21.21`, attackers can register the dangling domain on their own Vercel account, executing full subdomain takeover.
- **Missing HTTP Security Headers on Static Edge**:
  - The application lacks explicit `Content-Security-Policy` (CSP), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Permissions-Policy` headers in `next.config.js` or `.htaccess`, making the site susceptible to clickjacking within foreign iframes and MIME-type sniffing.
- **Information Disclosure via Source Maps**:
  - Production build settings without explicit `productionBrowserSourceMaps: false` can expose unminified TypeScript source code, directory structures, and comments to public inspection through browser DevTools.
- **CORS Misconfiguration on Static Assets & Documents**:
  - Certificate PDF downloads located in `public/docs/certificates/` are served without restrictive CORS headers, allowing arbitrary third-party domains to hotlink, scrape, or display proprietary laboratory test certificates.

### 5.3 WordPress Production Migration Attack Vectors (Target Architecture)
- **XML-RPC Brute Force Amplification (`/xmlrpc.php`)**:
  - Default WordPress installations expose `system.multicall` on XML-RPC, allowing attackers to test hundreds of password guesses in a single HTTP POST request, bypassing basic login throttling.
- **REST API User Enumeration (`/wp-json/wp/v2/users`)**:
  - Public WordPress REST endpoints expose active author user IDs and usernames by default, handing attackers verified credentials for targeted brute-force campaigns.
- **Avada Theme & Fusion Builder Plugin Vulnerabilities**:
  - Premium themes utilizing heavy shortcode builders have documented historical vulnerabilities related to AJAX nonce validation bypass, authenticated arbitrary file upload, and SQL injection in dynamic form builders if not pinned to verified LTS security patches.
- **Staging to Production Secret Leakage**:
  - Migration of database dumps from Mobrilz staging to SiteGround production risks exposing staging database credentials, testing API keys, or development email endpoints if search-and-replace routines are not cryptographically sanitized.

---

## 6. QA Execution Checklist & Sign-Off Matrix

- [x] Responsive layout verified across Mobile (375px), Tablet (768px), and Desktop (1440px).
- [x] Zero whitespace gaps achieved between Hero Carousel and Distributor Bar.
- [x] Zero whitespace gaps achieved between Media Room Callout and Universal Footer.
- [x] Full catalog of 9 products populated with high-res imagery, specs, and outbound store URLs.
- [x] 17 historical news posts and 7 laboratory certificates cataloged and functional.
- [x] 34/34 static routes compiled with zero build errors (`npm run build`).
- [ ] Vercel Dashboard project configuration verified for domain `ruipro.vercel.app`.
- [ ] Production security headers (CSP, HSTS, X-Frame-Options) deployed to edge server.
