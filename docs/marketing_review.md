# Qualantic Landing Page — Marketing & SEO Review

**Date:** 2026-04-19
**Reviewer:** Marketing/SEO specialist perspective
**Status:** Pre-launch (page not yet shared with prospects)

---

## Context

- **Product:** Qualantic — record-level semantic data quality for text data
- **Offer:** $3,500 one-time pilot data scan
- **Primary buyer:** B2B data providers (companies that aggregate/sell contact and company data at scale)
- **GTM channel:** LinkedIn cold outreach + page link
- **Competitive positioning:** Implicit (don't name competitors, show the gap)
- **Social proof source:** Anonymized ZoomInfo PoC ("a major B2B data provider")

---

## Real Numbers from the PoC (Anonymized)

These numbers come from the `resume_title_c_level` pipeline run (2026-04-06), verified by human researchers.

| Metric | Value | Landing page framing |
|--------|-------|---------------------|
| Raw records scanned | 18.1M | "18 million records" |
| Unique values analyzed | 1.7M | Use if needed |
| Top suspicious clusters reviewed | 200 | "Top 200 clusters" |
| Clusters confirmed actionable | 198 / 200 | **99% precision** |
| False positive clusters | 2 / 200 | "Only 1% false positive rate" |
| Records reclassified (wrong tag) | ~23,000 | "23,000 records corrected" |
| Records removed (not job titles) | ~1,900 | "1,900 records removed" |
| % clusters = wrong classification | 76% | |
| % clusters = not job titles at all | 8% | |
| % clusters = needs row-by-row review | 22.5% | |

### Compelling anonymized examples (for the page)

**Not job titles at all (found in `job_title` field):**

| Value | What it actually is |
|-------|---------------------|
| `Chief 2019` | A date, not a title |
| `Presents` | A word fragment, not a role |
| `Booster Club President` | A volunteer role, not a corporate title |
| `Presidente Da Câmara (1948-1951)` | Historical political record with dates |
| `President of Physics and Astronomy Club` | A student club role |
| `Founding Team. Sales and Partnerships` | A role description, not a title |

**Wrong classification (tagged as director-level, but aren't):**

| Value | Why it's wrong |
|-------|---------------|
| `Chief Press Officer for Europe and Russia` | Press role, not executive |
| `Chief Cook and Bottle Washer` | Humorous self-description |
| `ITF International Chief Umpire` | Sports official |
| `Toastmasters Club President` | Volunteer organization role |
| `AIESEC Local Committee President` | Student organization |
| `Coordinador De Construcción Alta Presión` | Spanish word "Presión" (pressure) matched "President" |

**Note:** For the landing page, anonymize the domain. Instead of "C-level," frame as "Director-level" or "management level" classification — it's more universally understood and doesn't reveal the client's specific use case.

---

## What's Working Well

1. **The problem table is the strongest asset.** Showing real examples like "THC Pharmacy" in `first_name` is immediately visceral. Anyone who works with data gets it in 2 seconds.

2. **Pricing transparency.** $3,500 visible on the page is bold and correct for consulting-first positioning. Pre-qualifies leads and signals confidence.

3. **A/B testing infrastructure.** PostHog + cookie-based variants is a smart setup for this stage.

4. **"How it works" you provide / you receive framing.** Reduces perceived effort for the buyer.

5. **Google Calendar embed.** Removes friction from booking — no "contact us" form with a 3-day response time.

---

## Critical Issues

### Issue 1: Brand Name Confusion (Trust Killer)

**Current state:**
- Logo file shows "Contextive"
- Page copy says "Qualantic"
- Domain is `anomalsky.com`
- Footer email: `contact@qualantic.com`
- Booking fallback email: `contact@anomalsky.com`

**Impact:** A visitor who sees one name in the logo, another in the copy, and a third in the URL will bounce. For cold LinkedIn outreach, the recipient sees the URL in the link preview — `anomalsky.com` doesn't match "Qualantic" at all.

**Fix (before first DM):**
- [ ] Update logo to say "Qualantic"
- [ ] Unify all emails to `contact@qualantic.com`
- [ ] Buy `qualantic.com` (or `.io` / `.ai`) and point DNS to Vercel
- [ ] Until domain is ready, do NOT share the page in outreach

---

### Issue 2: Headlines Are Weak

**Variant A current:** "Data quality for text. You are home."

**Problem:** "You are home" is a hospitality metaphor. Your buyer is a Head of Data Research at a data aggregator. They need authority and specificity, not warmth. This reads like an Airbnb tagline, not a B2B data quality tool.

**Variant B current:** "You check your text data quality. But do you really know what's inside?"

**Problem:** Too long, too vague. The subheadline is 3 sentences (~50 words) before the CTA. Research shows ~5 seconds to hook a B2B buyer.

**Suggested Variant A (problem-first, technical buyers):**

> **Your data passes every check. It's still wrong.**
>
> 18 million records. 99% looked clean. 25,000 weren't. Qualantic finds semantically broken records that schema checks, null checks, and distribution monitoring can't catch.

**Suggested Variant B (results-first, decision-makers):**

> **We scanned 18M records for a major data provider. 25,000 were wrong. None were flagged by their existing tools.**
>
> Job titles that were dates. Person names in company fields. Organization names filed as people. One scan. One report. Every issue clustered and explained.

**Why this works for LinkedIn cold outreach:** The person you're DMing sees a specific, verifiable claim before they even click. It's not marketing speak — it's a case study compressed into a headline.

---

### Issue 3: Zero Social Proof

The "Sound familiar?" section has three scenario cards with generic descriptions. There are no testimonials, no customer logos, no metrics, no case study references.

For a $3,500 consulting offer from an unknown brand, trust is everything. An unknown brand asking for $3,500 with no proof = very hard sell.

**Fix:** Add an anonymized case study section using real PoC numbers.

**Suggested section: "Pilot Results — Major B2B Data Provider"**

> We scanned 18 million job title records for a major B2B data provider. Their existing data quality tools showed everything was clean.

| What we scanned | What we found | Researcher verdict |
|---|---|---|
| 18M job title records | 200 anomaly clusters surfaced | 99% confirmed actionable |
| | 76% had wrong classification tags | Corrected in bulk |
| | 8% weren't job titles at all | Removed from production |
| | Only 1% false positive rate | 2 clusters out of 200 |

Then 3-4 compelling anonymized examples:

| Found in `job_title` | What it actually is |
|---|---|
| `Chief 2019` | A year, not a title |
| `Presents` | A word fragment, not a role |
| `Booster Club President` | Volunteer role, not a corporate title |
| `Founding Team. Sales and Partnerships` | Role description, not a title |

> *These records passed null checks, schema validation, and freshness monitoring. They were in production for years.*

---

### Issue 4: Use Cases Too Broad for Cold Outreach

The page equally weights 4 verticals: B2B data providers, HR, web scraping, compliance.

For cold LinkedIn outreach to B2B data companies, the page should feel like it was built specifically for them. A VP of Data at ZoomInfo or Revelio Labs needs to think: "This person understands my exact problem."

**Fix:**
- Make B2B data provider the **hero use case** (first, biggest, with the case study)
- Demote other 3 to a smaller "Also works for..." row below
- Or create separate landing pages per vertical later

---

### Issue 5: "How It Works" Misses Proof Points

The current section frames it as a process (you provide / you receive) but doesn't answer the cold outreach question: "Why should I trust this?"

**Suggested reframe:**

> **How it works**
>
> 1. **You send us a dataset** — CSV or database access, up to 1M records, up to 3 text columns
> 2. **ML scans every record** — Embeddings + clustering + anomaly detection find semantically broken values. No rules to write.
> 3. **AI verifies each finding** — LLM reviews every candidate to remove false positives. 99% precision on verified clusters.
> 4. **You get a report in 5 days** — Clustered findings, AI-generated explanations, ready for your team to review and act on.

Adding "99% precision" and "No rules to write" inside the process steps converts skeptics faster.

---

### Issue 6: No Competitive Differentiation

The page never explicitly addresses: "Why can't I just write SQL rules?" or "How is this different from what my data observability tool already does?"

The strategic context doc nails this (semantic vs statistical), but the page doesn't make the comparison.

**Fix (implicit positioning, no names):**

Strengthen the problem section copy:

> Your data observability platform monitors volume, freshness, schema, and distributions. Everything looks green. But inside those records, a job title says "Chief 2019" and a person's name field contains "Booster Club President." **These aren't statistical anomalies. They're semantic ones. And no dashboard will ever catch them.**

This implicitly says: "Monte Carlo, Anomalo, Great Expectations — they can't do this." Without naming anyone.

---

### Issue 7: SEO Is Nearly Absent

- No blog, no content pages
- Target keywords ("record level data quality," "text data quality") have near-zero search volume
- No structured data (JSON-LD)
- Meta description is generic

**For LinkedIn outreach, SEO is secondary** — but when someone Googles "Qualantic" after seeing your DM, the meta description is what they see in the search result. It needs to reinforce the DM's message.

**Current meta title:** `Qualantic — Record-Level Data Quality for Text Data`

**Recommended meta title:**
> Qualantic — Find Broken Records Your Data Quality Tools Miss

**Recommended meta description:**
> ML + AI scans millions of text records to find semantic errors invisible to schema checks and distribution monitoring. 99% precision. Results in 5 days. Starting at $3,500.

**Long-term SEO keywords to target** (when blog/content is added):

| Term | Search volume | Relevance | Note |
|------|--------------|-----------|------|
| data quality tools | High | Broad | Long-tail variants winnable |
| data quality monitoring | High | Strong | Differentiator: what monitoring *misses* |
| data observability | Growing fast | Strong | Position as "the layer observability misses" |
| data quality audit | Medium | Direct match | Maps to $3,500 pilot |
| data quality consulting | Medium | Direct match | Maps to service model |
| bad data detection | Low-medium | High intent | High conversion potential |
| data quality for AI | Growing | Emerging | AI-readiness angle |

**Not worth targeting** (near-zero volume):
- "record level data quality"
- "text data quality"
- "semantic anomaly detection"
- "data quality for text columns"

These are technically accurate but not how buyers search.

---

## Smaller Fixes

### Pricing CTA
**Current:** "Book a Pilot Call"
**Better:** "See What's Hiding in Your Data — $3,500" — in cold outreach, the recipient already knows the price from the page, so the CTA should reaffirm value, not just action.

### "5 business days" is a strong differentiator
Consulting firms take weeks. Elevate this — add it to the hero subheadline. Consider: "Results in 5 days, not 5 weeks."

### Remove the upsell hint
"Need more? Let's talk about implementation & managed service options." — remove this for now. One offer, one price, one CTA. Upsell conversations happen on the call.

### Mobile calendar embed
Test the Google Calendar iframe on mobile. iframes in mobile browsers can be janky. Add a fallback "Book on Google Calendar" button link for mobile users.

### Human signal
Add a one-line founder credibility statement. Not a photo or bio section — something like:
> "Built by a data quality engineer who's scanned 100M+ records at major B2B data companies."

Cold outreach from an unknown brand needs *some* human signal. The prospect is about to spend $3,500 with someone they found on LinkedIn.

---

## Action Plan (Priority Order)

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 1 | Fix brand consistency (logo, emails, domain) | Trust | Medium |
| 2 | Rewrite headlines with real PoC numbers | Hook rate | Low |
| 3 | Add anonymized case study section | Conversion | Medium |
| 4 | Narrow focus to B2B data provider buyer | Relevance | Low |
| 5 | Reframe "How it works" with proof points | Credibility | Low |
| 6 | Update meta title + description | LinkedIn preview | Low |
| 7 | Sharpen implicit competitive positioning | Differentiation | Low |
| 8 | Small fixes (CTA, mobile, human signal) | Polish | Low |

### Before first LinkedIn DM checklist

- [ ] Logo says "Qualantic" (not "Contextive")
- [ ] `qualantic.com` domain bought and pointing to Vercel
- [ ] All emails unified to `contact@qualantic.com`
- [ ] Headlines rewritten with real numbers
- [ ] Case study section with anonymized PoC results
- [ ] Meta title/description updated for LinkedIn preview
- [ ] Page tested on mobile (especially calendar embed)
- [ ] One human credibility line added somewhere visible

---

## Competitive Landscape Notes

### Direct competitors (record/row-level text quality)

| Competitor | What they do | Gap vs Qualantic |
|------------|-------------|-----------------|
| **Soda RAD/MAD** | Record-level anomaly detection with ML. "Coming soon" for Enterprise. Published research (NeurIPS). | Focuses on drift detection across all data types, not semantic text analysis specifically. Requires platform adoption. Qualantic is a one-shot service, no integration needed. |
| **Anomalo** | AI-driven unstructured data monitoring (beta since July 2024). | Platform play, requires integration. Text analysis is one feature among many. Qualantic is specialist + service model. |
| **Monte Carlo** | Data observability leader. Recently added AI-powered checks for unstructured fields. | Aggregate/statistical monitoring. Record-level text quality is not their core. They catch freshness/volume/schema issues. |
| **Great Expectations / dbt tests** | Rule-based data quality. Requires writing rules manually. | Can't catch semantic anomalies — you'd need to enumerate every possible bad pattern. The whole point of Qualantic is that you don't write rules. |

### Positioning statement (for internal use)

> Your data observability tools catch when data is late, missing, or structurally wrong. Qualantic catches when data is there, looks valid, but is semantically broken — wrong values in right columns, at scale, with no rules to write.

### Why the market timing is right

- Data quality management reclaimed #1 priority in the 2026 Data/BI/Analytics Trend Monitor
- ~80% of companies estimate 50-90% of their data is unstructured
- Poor data quality costs US businesses $3.1 trillion annually / $12.9-15M per organization (Gartner)
- Soda's RAD is "coming soon" — the market recognizes the need but solutions are immature
- AI/LLM adoption makes data quality more critical (garbage in = hallucinations out)
- B2B data decay rate: 22-70% annually — the problem gets worse, not better

---

## LinkedIn Outreach Notes

Since the GTM is cold LinkedIn DMs with a page link, the page needs to work as a **landing page for a specific DM**, not a general-purpose website.

### What the DM prospect sees

1. Your DM in their inbox (first impression)
2. The URL preview card (meta title + description + OG image)
3. The hero section if they click through
4. They scroll or bounce within 5-10 seconds

### Implications for the page

- The **meta title/description** is your second headline (shows in the LinkedIn link preview)
- The **hero** must immediately validate what the DM promised
- **Social proof** (case study numbers) must be above the fold or within first scroll
- The **CTA** should be low-friction (15-min call, not "buy now")
- **Price visible** is correct — it filters out non-serious leads

### Suggested DM → page flow

**DM template idea:**
> Hey [Name], I built an ML pipeline that scans text columns at scale and finds semantic errors that data quality tools miss entirely. Ran it on 18M records for a [industry] company — found 25,000 broken records their tools never flagged. 99% confirmed by researchers.
>
> Would be curious if this is relevant for [their company]'s data. Quick overview: [qualantic.com]

**What the page must deliver when they click:**
1. Immediately confirm the claim (headline with numbers)
2. Show the proof (case study table)
3. Show examples they recognize (the anomaly examples)
4. Make it easy to act ($3,500, book a 15-min call)
