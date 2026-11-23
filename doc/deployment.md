# RUIPRO Deployment and Hosting Operations Manual

## Document Information
- Document: Deployment and Hosting Guide
- File Reference: doc/deployment.md
- Version: 1.0.0
- Status: Approved for Planning Phase

---

## 1. Environment Topology

The project involves three distinct operating environments:

```
[Local Development]
  - Next.js / Tailwind Prototype (Interactive UI/UX verification)
  - Local WordPress Sandbox (Avada Child Theme engineering)
          |
          v
[Staging Server - Mobrilz Staging]
  - Private staging domain (e.g., https://staging.mobrilz.com/ruipro)
  - Isolated database and media library
  - Password-protected client review environment
  - Consolidated revision testing (3-4 rounds)
          |
          v
[Production Server - SiteGround Hosting]
  - Live production domain (https://ruipro.com/)
  - Deployed via SiteGround Collaborator Access
  - Cloudflare CDN and SiteGround Optimizer active
  - Zero downtime migration protocol
```

---

## 2. Deployment Stages and Procedures

### Stage 1: Prototype Preview Deployment (Netlify / Vercel)
- Objective: Provide immediate interactive UI/UX preview to validate responsive behavior, card hierarchies, outbound links, and navigation across devices.
- Build Script: npm run build
- Execution Command: Local development preview via npm run dev
- Configuration:
  - Framework Preset: Next.js
  - Node Version: 18.x or 20.x LTS
  - Output Directory: .next
  - Environment Variables: Public URLs for store endpoints and contact emails

### Stage 2: Staging Build on Mobrilz Staging Server
- Domain: Subdomain or staging directory on Mobrilz infrastructure
- Database: MySQL database isolated from production
- Access Controls: Basic Auth / htaccess password barrier preventing search engine indexing (noindex, nofollow)
- Content Milestones:
  - Step 1: Baseline installation of WordPress and Avada theme
  - Step 2: Deployment of ruipro-custom-child theme and template files
  - Step 3: Migration of historical news posts (preserving slugs, dates, videos)
  - Step 4: Product catalog population for 9 core products
  - Step 5: High-resolution banner and application image optimization
  - Step 6: Client review round 1 through round 4

### Stage 3: Production Live Migration (SiteGround)
- Prerequisite: Written client sign-off on staging environment and receipt of SiteGround collaborator access.
- Migration Steps:
  1. Full site and database backup of existing ruipro.com on SiteGround.
  2. Snapshot export of staging WordPress environment using WP Migrate DB / Duplicator Pro.
  3. Import into SiteGround staging slot or collaborator workspace.
  4. Database search and replace: Replace staging URLs with https://ruipro.com/.
  5. Asset and media path verification.
  6. Configuration of SiteGround Optimizer:
     - Dynamic Caching: Enabled
     - Memcached: Active
     - HTML, CSS, JS Minification: Enabled
     - WebP image delivery: Enabled
  7. SSL certificate verification (Let's Encrypt Wildcard SSL).
  8. Submission of updated XML sitemap to Google Search Console.
  9. 48-hour live monitoring and 20 hours of post-launch warranty support.

---

## 3. Rollback and Disaster Recovery Protocol
- Automated Daily Backups: SiteGround automated rolling 30-day backups.
- Manual Pre-Deploy Snapshot: Full file archive and SQL dump stored securely prior to any file override.
- Rollback Time: Under 15 minutes to restore the previous stable production snapshot in the event of an unexpected fault.

---

## 4. Security Hardening
- HTTPS Redirection: 301 strict transport security redirection.
- Spam Defense: Form endpoints protected by reCAPTCHA v3 / Honeypot.
- Admin Protection: Two-factor authentication on wp-admin and XML-RPC disabled.
