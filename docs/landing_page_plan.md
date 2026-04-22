# Contextive Landing Page — Complete Plan

## 1. Product Summary

**Name:** Contextive
**Domain:** anomalsky.com (NOTE: domain is still anomalsky.com — consider purchasing contextive domain later)
**Logo:** `landing-page/docs/logo.png` — gradient blue-to-green wordmark with checkmark integrated into "ive"
**Tagline (working):** Record-level data quality for text data at scale

**What it does:** Detects semantically broken records in large text datasets — records that pass all standard checks (nulls, schema, formatting) but are just wrong. A job title containing "01/2019 - Present", a company name field showing "John Smith", an organization name in a person's first_name column.

**How:** ML anomaly detection (embeddings + clustering + isolation forest) generates candidates → LLM verifies and removes false positives → Clustered Excel report showing what types of bad data exist, how many, and where.

**Positioning:** Consulting-first. Paid pilot scans. No self-serve SaaS yet.

**Target customers:** Companies scraping/acquiring big data volumes (B2B data providers, HR tech, web scrapers). They track record count, not record quality. Current interested companies: ZoomInfo, Revelio Labs.

**Competition:** Near-zero for text data. Monte Carlo, Anomalo, Soda, Great Expectations — all schema/freshness/distribution-level. Soda is the only one developing record-level text quality, and they're early. Some teams have custom pipelines. Most do manual spot-checks or nothing.

---

## 2. Design Decisions (Confirmed)

| Decision | Choice |
|----------|--------|
| **Page type** | Single scrollable landing page |
| **Color scheme** | Light theme — white background, subtle grays, blue accent |
| **Logo** | Contextive wordmark from `logo.png` (gradient blue-to-green, checkmark in "ive") |
| **A/B testing** | Full page variants (problem-first vs results-first) |
| **Booking** | Google Calendar appointment scheduling embedded via iframe |
| **Booking URL** | `https://calendar.app.google/LrpnDjLc4rtAWfDFA` |
| **Analytics** | PostHog (project ID: 377722, region: US) |
| **Founder section** | No photo, no name, no LinkedIn — removed entirely |
| **Pricing** | Visible on page — $3,500 pilot scan |
| **Contact method** | Google Calendar embed (no separate contact form) |

---

## 3. Page Structure (Single-Page Landing)

```
┌─────────────────────────────────────┐
│  Nav: Logo | How It Works | Results │
│        | Pricing | Book a Call       │
├─────────────────────────────────────┤
│                                     │
│            HERO SECTION             │
│   Headline + Subheadline + CTA      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│          PROBLEM SECTION            │
│   "The records your checks miss"    │
│   Static examples table             │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         HOW IT WORKS                │
│   3-step visual: Embed → Score →    │
│   Verify → Report                   │
│                                     │
├─────────────────────────────────────┤
│                                     │
│          USE CASES                  │
│   B2B Data / HR & Recruiting /      │
│   Web Scraping / Compliance         │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         RESULTS / PROOF             │
│   Metrics + Testimonials            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│           PRICING                   │
│   Pilot Scan card with price        │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         CTA / BOOKING               │
│   Google Calendar embed (iframe)    │
│                                     │
├─────────────────────────────────────┤
│         Footer                      │
│   © 2026 Contextive | email         │
└─────────────────────────────────────┘
```

**Removed:** About/Founder section.

---

## 4. Section Content — Variant A: "Problem-First"

This variant leads with the pain point. Speaks to data engineers who've seen these issues.

### 4.1 Hero

**Headline:**
> Your data passes every check. It's still wrong.

**Subheadline:**
> Contextive finds semantically broken records in text data — the ones that look valid but aren't. Job titles that are dates, company names that are people, first names that are organizations. ML detects candidates. LLM removes false positives. You get a report.

**CTA Button:** `Book a Pilot Scan`

### 4.2 Problem — "The records your checks miss"

Static table showing real anonymized examples:

| Column | Value | What's Wrong |
|--------|-------|-------------|
| `job_title` | `01/2019 - Present` | Date range parsed as job title |
| `first_name` | `THC Pharmacy` | Organization, not a person |
| `company_name` | `John Smith` | Person name in company field |
| `job_title` | `Classification Cutsoms Brokarage` | Garbled / spelling errors |
| `first_name` | `Nephrology` | Medical specialty, not a name |
| `region` | `United States` | Country in a region field |

Below the table:
> These records pass null checks. They pass schema validation. They pass freshness monitoring. They exist in your production database right now.

### 4.3 How It Works

Three-step visual flow:

**Step 1: Embed**
Text values are converted to semantic vectors. Similar values cluster together. Anomalies stand out.

**Step 2: Score & Cluster**
ML algorithms (Isolation Forest, distance-based, HDBSCAN) identify candidates. Records are grouped into anomaly clusters by type.

**Step 3: Verify & Report**
LLM reviews each candidate to remove false positives. You receive a report: which clusters of bad data exist, how many records, and what type of issue.

### 4.4 Use Cases

Cards/tabs for each vertical:

**B2B Data Providers**
You aggregate millions of company and contact records from diverse sources. When a LinkedIn scrape puts a person's name in the employer field, or a data vendor sends org names in the first_name column, those records ship to your customers. Contextive catches them before they do.

**HR & Recruiting Data**
Job title normalization across millions of profiles means records where date ranges, company names, or gibberish end up in the title field. Standard validation can't distinguish "Senior Engineer" from "BSNL Alwar IFA" — but semantic analysis can.

**Web Scraping Operations**
Scraping at scale means column shifts, parsing errors, and field contamination. When your scraper grabs 10M records and 0.3% have the wrong data in the wrong column, that's 30,000 broken records your aggregated metrics will never reveal.

**Compliance & Data Governance**
Regulatory reporting depends on record accuracy, not just completeness. When a sanctions screening system has entity types wrong, or a KYC field contains data from an adjacent column, the consequences go beyond data quality.

### 4.5 Results / Social Proof

**Metrics bar:**
- `50x` — Manual review acceleration (from 1K to 50K rows/day)
- `99%` — Cluster verification accuracy (only 1% false positive rate on verified clusters)
- `0.3%` — Typical anomaly rate that hides in plain sight

**Testimonials** (placeholder, to be updated with real ones):

> "Previously we manually validated 1,000 rows a day. Now we're close to 50,000. The pipeline does the heavy lifting."
> — Data Quality Lead, B2B Data Company

> "We used to measure data size. Now we know what's inside."
> — Head of Data, Enterprise Data Provider

> "We were aggregating blind. Contextive showed us what was actually in our columns."
> — Senior Data Engineer

### 4.6 Pricing

Single card, clean:

```
┌──────────────────────────────────┐
│        PILOT DATA SCAN           │
│                                  │
│           $3,500                 │
│                                  │
│  ✓ One dataset, up to 3          │
│    text columns                  │
│  ✓ Up to 2M unique records       │
│  ✓ Full anomaly report           │
│    with clustered findings       │
│  ✓ 30-min walkthrough call       │
│  ✓ Results in 5 business days    │
│                                  │
│    [ Book Your Pilot Scan ]      │
│                                  │
│  Need more? Let's talk about     │
│  implementation & managed        │
│  service options.                │
└──────────────────────────────────┘
```

### 4.7 Booking / CTA

Google Calendar appointment scheduling embedded as iframe.

**Booking URL:** `https://calendar.app.google/LrpnDjLc4rtAWfDFA`

Headline above:
> Ready to see what's hiding in your data?

Sub-text:
> Book a 15-minute call. We'll discuss your dataset and whether a pilot scan makes sense.

### 4.8 Footer

`© 2026 Contextive | contact@anomalsky.com`

---

## 5. Section Content — Variant B: "Results-First"

This variant leads with proof and numbers. Speaks to decision-makers who want to see impact first.

### 5.1 Hero

**Headline:**
> 50,000 records verified per day. 99% accuracy.

**Subheadline:**
> Contextive uses ML + LLM to detect broken text records that standard data quality tools miss entirely. No rules to write. No models to train. Send us your data, get a report.

**CTA Button:** `Start a Pilot Scan — $3,500`

### 5.2 Problem

Same content as Variant A, but reframed:

> **The $0 cost of ignoring record-level quality**
>
> When 0.3% of your records have wrong data in wrong columns, it looks like nothing in aggregate metrics. But in a 10M record dataset, that's 30,000 broken records shipping to customers, degrading ML models, or triggering support escalations.

Then the same examples table.

### 5.3 Remaining sections

Same as Variant A, with minor tone adjustments:
- **How It Works**: Same
- **Use Cases**: Same but ordered differently (put the prospect's most likely vertical first)
- **Results**: Moved to top, integrated into hero
- **Pricing**: Same card, but CTA says "Start Your Pilot" instead of "Book Your Pilot Scan"
- **Booking**: Same Google Calendar embed

---

## 6. A/B Testing Strategy

### What we're testing

| Element | Variant A | Variant B |
|---------|-----------|-----------|
| Hero angle | Problem-first ("Your data passes every check. It's still wrong.") | Results-first ("50,000 records verified per day. 99% accuracy.") |
| CTA text | "Book a Pilot Scan" | "Start a Pilot Scan — $3,500" |
| Page flow | Problem → How → Use Cases → Results → Pricing | Results → Problem → How → Use Cases → Pricing |
| Tone | Technical, speaks to engineers | Outcome-focused, speaks to leaders |

### Implementation

**Next.js middleware** for A/B testing:
- Cookie-based split (50/50)
- Persistent per-visitor (same visitor always sees same variant)
- PostHog feature flags for variant assignment + event tracking

### Metrics to track

1. **Primary:** Google Calendar booking rate (bookings / unique visitors)
2. **Secondary:** CTA click-through rate, scroll depth, time on page
3. **Tertiary:** Bounce rate per variant

### PostHog Configuration

- **Project ID:** 377722
- **Region:** US
- **Project token:** `phc_BfuzdSvms4QeaUMYQA2SC7h7epUL3Psj7xx7i3XqPeXJ`
- Track: `$pageview`, `cta_click`, `booking_click`, `scroll_depth`, `variant_assigned`

---

## 7. Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Framework** | Next.js 15 (App Router) | SSG for performance, middleware for A/B, React for components |
| **Styling** | Tailwind CSS 4 | Utility-first, fast iteration, great with Claude |
| **UI Components** | shadcn/ui | Beautiful, accessible, copy-paste (no dependency lock-in) |
| **Hosting** | Vercel | Free tier, auto-deploys from Git, edge functions for A/B |
| **Analytics** | PostHog (free tier) | Event tracking, A/B test analysis, session replay |
| **Booking** | Google Calendar Appointment Scheduling | Embedded iframe, already configured |
| **Email (domain)** | Google Workspace | Already purchased for anomalsky.com |
| **DNS** | Cloudflare (free) or domain registrar | Point anomalsky.com → Vercel |

### Directory structure

```
landing-page/
├── site/                      # Next.js project root
│   ├── app/
│   │   ├── layout.tsx         # Root layout, fonts, PostHog
│   │   ├── page.tsx           # Landing page (loads variant)
│   │   ├── variants/
│   │   │   ├── variant-a.tsx  # Problem-first layout
│   │   │   └── variant-b.tsx  # Results-first layout
│   │   └── globals.css
│   ├── components/
│   │   ├── hero.tsx
│   │   ├── problem-table.tsx
│   │   ├── how-it-works.tsx
│   │   ├── use-cases.tsx
│   │   ├── results.tsx
│   │   ├── pricing.tsx
│   │   ├── booking.tsx
│   │   ├── nav.tsx
│   │   └── footer.tsx
│   ├── lib/
│   │   ├── ab-test.ts         # Cookie-based A/B logic
│   │   └── posthog.ts         # PostHog client init
│   ├── middleware.ts           # A/B split assignment
│   ├── public/
│   │   ├── logo.png           # Contextive logo (copied from docs/)
│   │   └── og-image.png       # Open Graph preview
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── package.json
├── docs/
│   ├── landing_page_plan.md   # This file
│   ├── strategic_context.md
│   ├── itnial_doc.md
│   └── logo.png               # Source logo file
└── README.md                  # Setup & deploy instructions
```

---

## 8. Deployment Plan

### Step 1: Setup (one-time)

1. Create `landing-page/site/` directory with Next.js project
2. Add `landing-page/` to the main repo's `.gitignore`
3. Initialize a separate Git repo inside `landing-page/` for later upload
4. Connect to Vercel via GitHub when ready

### Step 2: DNS Configuration

1. In domain registrar: add Vercel's DNS records for anomalsky.com
2. Vercel project settings → Custom domain → anomalsky.com
3. Vercel auto-provisions SSL certificate
4. Keep MX records pointing to Google (for email)

### Step 3: Analytics

1. PostHog already configured (project 377722, US region)
2. Add project token to `.env.local`
3. Set up A/B test experiment in PostHog dashboard

### Step 4: Booking

1. Google Calendar appointment scheduling already configured
2. Embed URL: `https://calendar.app.google/LrpnDjLc4rtAWfDFA`
3. Embedded as iframe in the booking section

### Step 5: Go Live

1. Push to GitHub → Vercel auto-deploys
2. Verify anomalsky.com loads correctly
3. Verify A/B split works (check cookies)
4. Verify Google Calendar embed works
5. Verify PostHog events fire

---

## 9. SEO & Open Graph

### Meta tags

```
title: "Contextive — Record-Level Data Quality for Text Data"
description: "Find semantically broken records in your datasets. ML detects candidates, LLM removes false positives. Pilot scan starting at $3,500."
og:image: (custom OG image with the headline and logo)
```

### Target keywords (long-term)

- "record level data quality"
- "text data quality"
- "semantic anomaly detection"
- "data quality for text columns"
- "broken records detection"

These will matter more when blog/docs are added. For now, good meta tags help with LinkedIn link previews when you share the page.

---

## 10. Content Needed From You

| Item | Status | Notes |
|------|--------|-------|
| **Logo** | Done | `landing-page/docs/logo.png` — Contextive wordmark |
| **Pilot price** | Confirmed | $3,500 |
| **Pilot scope** | Confirmed | 1 dataset, up to 3 columns, up to 1M records, 5 business days |
| **Google Calendar** | Done | `https://calendar.app.google/LrpnDjLc4rtAWfDFA` |
| **PostHog** | Done | Project 377722, token provided, US region |
| **Real testimonials** | Later | Placeholder text included, replace when available |
| **Anonymized examples** | Confirm | Using examples from strategic_context.md — confirm which to use |
| **Domain (contextive)** | Consider | Currently anomalsky.com — may want to purchase contextive.com/io/ai |

---

## 11. Implementation Order

1. **Initialize Next.js project** with Tailwind + shadcn/ui
2. **Build shared components** (nav, footer, problem table, pricing card)
3. **Build Variant A** (problem-first) as the default page
4. **Build Variant B** (results-first) as the alternate
5. **Add A/B middleware** with cookie-based splitting
6. **Integrate PostHog** for analytics and A/B tracking
7. **Add Google Calendar embed** in the booking section
8. **Add SEO meta tags** and Open Graph image
9. **Deploy to Vercel** and connect domain
10. **Test everything** end-to-end

---

## 12. Future Additions (not now)

Out of scope for the initial landing page:

- **Blog**: SEO content about text data quality, case studies
- **Docs / API**: When the SaaS product is ready for self-serve
- **Pricing page**: When you have tiered plans (scan tokens, subscriptions)
- **Customer logos**: When you have permission to display them
- **Interactive demo**: Let visitors paste sample data and see anomalies (requires backend)
- **Changelog**: Show product momentum
- **Contextive domain**: Purchase contextive.com/.io/.ai when ready to rebrand the URL
