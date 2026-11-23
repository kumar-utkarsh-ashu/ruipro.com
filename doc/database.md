# RUIPRO Database Architecture and Content Schema

## Document Information
- Document: Database and Content Schema
- File Reference: doc/database.md
- Version: 1.0.0
- Status: Approved for Planning Phase

---

## 1. Architecture Overview
RUIPRO website operates primarily as a content showcase and inbound lead generation platform. All purchasing and checkout states are externalized to Shopify (ruipro.store) and Amazon.

Therefore, the database schema is optimized for:
- Fast read access and caching.
- Rich product metadata (bandwidth, length options, certifications, connectors).
- Historical editorial news archive preservation (articles from 2018 to 2026).
- Customer inquiry capture and distribution routing.

---

## 2. Content Schema Specifications

### 2.1 Product Showcase Schema (Custom Post Type: ruipro_product)
- Post Title (VARCHAR 255): Full commercial product title.
- Post Name / Slug (VARCHAR 200): SEO-optimized URL handle.
- Product Tagline (VARCHAR 255): One-sentence technical summary.
- Product Categories (Custom Taxonomy: ruipro_product_cat):
  - HDMI Cables (Armored, Detachable, Standard Optical)
  - DisplayPort Cables (Detachable, Gaming Optical)
  - Modules and Extenders (DP to HDMI, RJ45 to MPO)
  - Bulk Fiber and Wall Plates (MPO Multimode, Keystone Plates)
- Feature Badges (Array of VARCHAR): 8K@60Hz, 48Gbps, HDMI Forum ATC Certified, CL2 In-Wall Rated, Armored Steel, Detachable.
- Gallery Images (Array of Image IDs): Featured hero image plus 4 to 8 high-definition angle photos.
- Technical Specifications Meta:
  - Bandwidth (VARCHAR 50): e.g., 48Gbps (12Gbps x 4 channels)
  - Resolution and Refresh Rate (VARCHAR 100): 8K@60Hz, 4K@120Hz, 10K@30Hz
  - Connector Type (VARCHAR 100): HDMI Type A Male to Male / Detachable Micro HDMI / DisplayPort 1.4
  - Cable Outer Diameter (VARCHAR 50): 4.8mm
  - Available Lengths (Array of VARCHAR): 3m (10ft), 5m (16ft), 10m (33ft), 15m (50ft), 20m (65ft), 30m (100ft), up to 300m
  - Armored Core (BOOLEAN): Stainless steel armored spiral structure
  - Power Consumption (VARCHAR 50): Under 250mW (No external power needed)
  - Jacket Rating (VARCHAR 50): PVC / TPE / CL2 In-Wall Rated
  - Audio Format Support (VARCHAR 100): eARC, ARC, Dolby Atmos, DTS:X
- Outbound Purchase Endpoints:
  - Official Shopify URL (TEXT): Direct deep link to ruipro.store product page.
  - Amazon US Listing URL (TEXT): Direct ASIN link to Amazon listing.
  - Distributor Inquiry URL (TEXT): Relative link to doc/feature-structure.md distributor portal.

### 2.2 9 Key Showcase Products Inventory

| ID | Product Title | Primary Category | Max Bandwidth | Key Highlight | Outbound Shopify Handle |
| :--- | :--- | :--- | :--- | :--- | :--- |
| P01 | RUIPRO 8K Detachable Full Fiber Armored HDMI 2.1 Cable | HDMI Cables | 48Gbps | Detachable head fits small conduits | ruipro-8k-gen4ak-detachable-full-fiber-armored-hdmi-cable |
| P02 | RUIPRO 8K Armored Full Fiber Optic HDMI 2.1 Cable | HDMI Cables | 48Gbps | Heavy-duty crush-proof steel armor | ruipro-8k-armored-full-fiber-optic-hdmi-2-1-cable |
| P03 | RUIPRO 8K Detachable Full Fiber Armored DisplayPort Cable | DisplayPort | 32.4Gbps | DP 1.4 high refresh gaming | 8k-detachable-full-fiber-optic-armored-displayport-cable |
| P04 | RUIPRO 8K DisplayPort to HDMI Detachable Modules | Modules | 48Gbps | Interchangeable connector ends | 8k-displayport-to-hdmi-detachable-modules |
| P05 | RUIPRO MPO Female to Female Fiber Optic Cable 7-Core OM3 | Bulk Fiber | 100Gbps+ | Pure optical trunk cable | ruipro-mpo-female-to-female-fiber-optic-cable-7-core-type-a-om3-multimode |
| P06 | RUIPRO Keystone Wall Plate with MPO Coupler | Wall Plates | N/A | Clean architectural in-wall finish | keystone-wall-plate-with-mpo-coupler |
| P07 | RUIPRO 8K HDMI Fiber Cable CL2 Rated | HDMI Cables | 48Gbps | Building safety code compliance | 8k-hdmi-fiber-cable-cl2-rated |
| P08 | RUIPRO 8K HDMI Fiber Cable Standard | HDMI Cables | 48Gbps | Ultra-flexible flagship optical core | 8k-hdmi-fiber-cable |
| P09 | RUIPRO 8K Fiber HDMI Cable 48Gbps Certified | HDMI Cables | 48Gbps | Official HDMI Forum ATC Certified | ruipro-8k-fiber-hdmi-cable-48gbps-certified |

### 2.3 News and Editorial Schema (Post Type: post)
- Post ID and Slug: Preserves historical URLs from existing site.
- Publication Date: Original publication timestamp preserved (2018 to 2026).
- Post Title: News headline.
- Featured Image: High-resolution cover photo.
- Post Category: Awards, Product Releases, Technical Certifications, Video Reviews.
- Video Embed URL: YouTube video link for review articles.
- Content Body: Full formatted HTML article content.

### 2.4 Customer Inquiry and Lead Schema (Table: ruipro_inquiries)
- inquiry_id: INT AUTO_INCREMENT PRIMARY KEY
- full_name: VARCHAR(100) NOT NULL
- email_address: VARCHAR(150) NOT NULL
- inquiry_subject: VARCHAR(200) NOT NULL
- inquiry_category: ENUM('General Support', 'Distributor Inquiry', 'Custom Length Order', 'Technical Question', 'Warranty')
- message_body: TEXT NOT NULL
- user_country: VARCHAR(80)
- submission_timestamp: DATETIME DEFAULT CURRENT_TIMESTAMP
- ip_address_hash: VARCHAR(64) (anonymized for privacy compliance)
- status: ENUM('New', 'Under Review', 'Responded', 'Archived') DEFAULT 'New'

---

## 3. Data Integrity and Indexing Rules
- Unique Slugs: Unique index on post_name for fast routing.
- Fast Filter Index: Composite index on (post_type, post_status, menu_order) for instant catalog sorting.
- Privacy Compliance: No payment card or sensitive financial data is stored in the WordPress database.
