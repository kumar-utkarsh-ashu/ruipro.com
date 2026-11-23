# RUIPRO Brand Showcase Website Redesign - Master Plan and Documentation

## Version Information
- Current Version: Version 1.1.0
- Phase: Phase 2 - Interactive Prototype Engineering (Next.js, Tailwind, shadcn)
- Date: 2026-11-23
- Author: Antigravity Development Team

---

## 1. Project Overview and Objectives
The core objective is to redesign and re-architect the official brand showcase website for RUIPRO (https://ruipro.com/) on WordPress. The redesigned site will reflect the modern, high-performance visual identity of the active Shopify e-commerce store (https://ruipro.store/), while acting as an authoritative brand showcase, catalog explorer, distributor portal, and lead generation engine.

All purchasing transactions remain decoupled from the WordPress showcase site: product call-to-actions (CTAs) link outbound directly to dedicated Shopify product pages or verified Amazon listings.

---

## 2. IMET Planning Framework
All work on this project strictly follows the IMET structure:
- I (Input): Requirements, assets, client briefs, and user stories.
- M (Mission): Clear objective and definition of done for the current task.
- E (Execute): Step-by-step execution of one isolated task at a time.
- T (Testing): Verification, automated lint/build checks, visual validation, and QA.

---

## 3. Version History Ledger
- Version 1.0.0 (2026-11-23): Initial creation of comprehensive project architecture, UI/UX specifications, database models, technical stack selection, deployment runbooks, modular breakdown, and test plans across the doc directory.
- Version 1.1.0 (2026-11-23): Transition to Phase 2 Prototype implementation in GitHub connected repository. Ingestion of 9 flagship product datasets, high-resolution imagery, historical news archive (17 posts), and engineering of Next.js 14 App Router prototype with Tailwind CSS and reusable shadcn components.

---

## 4. Documentation Directory Structure
All project documentation files reside inside the doc directory using dynamic relative paths:
- doc/readme.md: Master plan, version ledger, and project governance (this file).
- doc/index.md: Master documentation index and quick reference map.
- doc/technology.md: Complete technical stack for WordPress production and Next.js/Tailwind prototype.
- doc/database.md: Data architecture, custom post types, metadata fields, and relational mapping.
- doc/deployment.md: Staging, client review, SiteGround production deployment, and CI/CD pipelines.
- doc/process.md: Engineering workflow, consolidated revision cycles, QA checklist, and approval gates.
- doc/feature-structure.md: Comprehensive UI/UX architecture, user personas, screen layouts, CTA maps, and wireframe specs.
- doc/modules.md: Component library specifications, interface props, and responsive design patterns.

---

## 5. Scope Boundaries
### In Scope
- Universal responsive navigation header and footer across all pages.
- Homepage: Hero banner carousel, brand story, product highlights, technology features, application scenarios, trust metrics, customer reviews, and distributor teaser.
- About Us: Corporate profile (SUNIIN TECHNOLOGY), brand history, technology milestones, core values, and official certification showcase.
- Product Showcase Catalog: Categorized product grid displaying 9 flagship cables and accessories with feature badges and filtering.
- Individual Product Detail Showcase: High-definition image gallery, product highlights, complete technical specification tables, package contents, and outbound purchase buttons linking to ruipro.store or Amazon.
- News and Editorial Section: Listing grid with category filters, detailed article reader, embedded YouTube reviews, and pagination.
- Contact and Distributor Portal: Interactive inquiry form, US corporate headquarters details, China/Hong Kong/Macao distributor notice, and global distributor directory.
- Up to 3-4 consolidated client revision rounds.
- Production deployment to client SiteGround hosting via collaborator access.

### Out of Scope
- Native on-site e-commerce checkout, shopping cart, payment gateways, and order management (all checkout handled on ruipro.store or Amazon).
- Custom graphic banner design and bespoke 3D rendering (quoted separately upon request).
- Domain registration and third-party hosting subscription billing fees.

---

## 6. Execution Protocol
- Every command or execution must state an Execution Summary: Version header.
- Execute one single task at a time.
- Test and verify completion before proceeding to the next task.
- Automated verification against tester checklist and zero character anomalies.
