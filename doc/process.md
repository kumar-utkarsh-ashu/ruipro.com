# RUIPRO Engineering Process and Quality Assurance Lifecycle

## Document Information
- Document: Development Process and QA
- File Reference: doc/process.md
- Version: 1.0.0
- Status: Approved for Planning Phase

---

## 1. Engineering Process Lifecycle

The project lifecycle is organized into structured milestones with explicit quality gates:

```
[Phase 1: Architecture and UI/UX Planning]
  - Persona definition, screen blueprints, CTA mapping, gap analysis
  - Milestone Gate: Client approval of Phase 1 planning docs
          |
          v
[Phase 2: Interactive Prototype Execution]
  - Next.js, Tailwind, and shadcn component prototype
  - Responsive validation (Mobile, Tablet, Desktop)
  - Milestone Gate: Interactive prototype verification
          |
          v
[Phase 3: Staging Build on Mobrilz Server]
  - WordPress Avada theme configuration and custom child development
  - Content population (9 products, 17 news items, about story, contact)
  - Milestone Gate: Functional staging readiness
          |
          v
[Phase 4: Client Review and Consolidated Revision Cycles]
  - Up to 3-4 consolidated review rounds
  - Systematic change tracking and issue resolution
  - Milestone Gate: Final client sign-off and approval
          |
          v
[Phase 5: SiteGround Live Migration and Launch]
  - Zero-downtime deployment, caching optimization, SEO verification
  - 20 hours post-launch warranty and distributor onboarding
```

---

## 2. Task Execution Protocol (IMET Standard)
Every technical task follows the IMET standard:
1. I (Input): Gather inputs, customer specifications, assets, and dependencies.
2. M (Mission): Define specific mission parameters and criteria of acceptance.
3. E (Execute): Implement changes surgically, one task at a time.
4. T (Testing): Run automated checks, visual tests, and functional verification.

---

## 3. Client Revision Protocol
To maintain delivery momentum within the agreed 18-20 working day timeline:
- Consolidated Rounds: Client feedback is collected in consolidated batches (Rounds 1 through 4) rather than ad-hoc piecemeal requests.
- Feedback Matrix: Client submits feedback using a standardized issue log containing: Page, Element, Observed State, Desired State, and Priority.
- Turnaround SLA: Each revision round is acknowledged within 24 hours and implemented within 48 to 72 hours depending on scope.

---

## 4. Quality Assurance and Testing Checklist

### 4.1 Cross-Browser and Cross-Device Matrix
- Desktop Browsers: Google Chrome (Windows/macOS), Safari (macOS), Mozilla Firefox, Microsoft Edge.
- Mobile Devices: Apple iPhone Safari (iOS 16+), Android Google Chrome (Samsung, Pixel).
- Tablet Devices: Apple iPad Safari, Android Tablet Chrome.
- Responsive Viewports Tested:
  - Mobile Small: 375px x 667px
  - Mobile Large: 414px x 896px
  - Tablet Portrait: 768px x 1024px
  - Tablet Landscape / Small Desktop: 1024px x 768px
  - Standard Desktop: 1440px x 900px
  - Ultra-Wide Desktop: 1920px x 1080px

### 4.2 Functional Testing Items
- Header Navigation:
  - Logo click returns to Homepage.
  - Desktop menu links navigate to correct page anchors/routes.
  - Mobile menu hamburger opens drawer cleanly without body scroll bleeding.
  - Announcement bar links open active promotions.
  - Outbound "Shop Now" button opens ruipro.store in new tab with proper rel attributes.
- Product Catalog and Detail Pages:
  - Category filters update the visible product list immediately.
  - Product cards display accurate badge, title, specs, and price indicator.
  - Product detail page displays high-resolution thumbnail switcher.
  - All outbound "Buy on Official Store" buttons route to exact Shopify product handles.
  - "Buy on Amazon" buttons route to verified Amazon US ASIN.
  - "Distributor Inquiry" links route directly to Contact Form with pre-selected category.
- News and Editorial Engine:
  - All 17 historical news posts load with original publication dates and images.
  - YouTube embeds play smoothly in responsive 16:9 aspect ratio containers.
  - Category filters (Awards, Releases, Testing) filter posts without page reload errors.
- Contact and Inquiry Form:
  - Field validation prevents empty submissions.
  - Email format validation rejects malformed email strings.
  - Submission triggers success notification message without page reload crash.
  - Regional distributor notice for China/Hong Kong/Macao displays clear contact details.
- Universal Footer:
  - Copyright statement displays current year.
  - Social media links (Facebook group, Instagram, TikTok) open in new tabs with rel="noopener noreferrer".
  - Quick links route to all major pages.

### 4.3 SEO and Performance Checklist
- Canonical URLs match destination protocols.
- Meta titles and meta descriptions present on all routes.
- OpenGraph image tags configured for social sharing.
- Structured data (Schema.org) validates on Google Rich Results Test without critical errors.
- Image assets served in WebP format with width and height attributes to eliminate layout shifts (CLS = 0.00).
- Local hosting of Google Fonts to eliminate third-party DNS latency.
