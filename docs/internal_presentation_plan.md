# Anomalsky — Internal Presentation Plan

**Audience:** Mixed (leadership, data ops, data engineering)
**Duration:** 10–15 minutes + live report demo
**Goal:** Pitch for adoption — get buy-in, access to more datasets, expand to more columns/domains, integrate into workflows
**Status:** PoC completed on C-level job title data

---

## Slide-by-Slide Outline

---

### Slide 1 — Title

**Title:** Anomalsky: Record-Level Semantic Data Quality
**Subtitle:** Finding the broken records that your checks already pass
**Footer:** [Your name] · [Team] · [Date]

**Speaker notes:**
Keep this simple. The subtitle does the work — it immediately frames the gap.

---

### Slide 2 — The Problem

**Title:** Your aggregate checks say everything is fine

**Content — two columns:**

Left column ("What we monitor today"):
- Volume & freshness
- Schema validation
- Null / format checks
- Distribution drift
- Regex rules

Right column ("What slips through"):
- A `job_title` that says `01/2019 - Present`
- A `first_name` that says `THC Pharmacy`
- A `company_name` that says `John Smith`
- A `job_title` that says `Classification Cutsoms Brokarage`
- A `first_name` that says `Nephrology`

**Bottom line (bold):** These records pass every check we have. They are in production right now.

**Speaker notes:**
The left column is what we're good at — and we are good at it. But there's a class of issues that is structurally invisible to aggregate monitoring. These are individual records where the data is semantically wrong — the value doesn't belong in that column, or it doesn't make sense given other fields. They're sparse, so they don't move distributions. They're valid strings, so they pass format checks. But they're obviously broken to any human who reads them.

---

### Slide 3 — Why This Matters at ZoomInfo

**Title:** Semantic record errors at our scale

**Content — 3 bullet points with brief explanations:**

1. **Customer-facing impact** — Broken records ship to customers, degrade their models, trigger support escalations. A single wrong job title in a sales intelligence feed undermines trust.

2. **Manual review doesn't scale** — A reviewer can check hundreds of records a day. We have millions. Spot-checking 1,000 rows tells us almost nothing about the other 999,000.

3. **This is a missing layer** — We have strong observability for schema, freshness, volume, distributions. But we have no systematic way to ask: "Does this individual record actually make sense?"

**Speaker notes:**
This isn't about replacing what we do today. It's about adding a layer that addresses a specific class of issues we currently have no tooling for. The key insight: most high-impact data quality failures are local and contextual rather than global and statistical. Asking "did this column drift?" misses the question "does this individual row still make sense?"

---

### Slide 4 — What Anomalsky Does

**Title:** Unsupervised semantic anomaly detection, record by record

**Content — 4-step pipeline diagram (horizontal flow):**

```
[Embed] → [Score] → [Validate] → [Report]
```

**Step 1 — Embed:** Text values are converted into semantic vectors. Similar values end up close together. Unusual values stand out.

**Step 2 — Score:** Unsupervised anomaly detection (Isolation Forest, distance-based, HDBSCAN clustering) flags records that deviate from learned patterns. No rules, no dictionaries.

**Step 3 — Validate:** An LLM reviews the top-scoring anomalies. It confirms or rejects each one, and explains what's wrong in plain language. This controls false positives.

**Step 4 — Report:** Findings are grouped into named clusters — patterns of bad data — with AI descriptions, example records, and columns for human review.

**Speaker notes:**
The key design decisions: (1) We embed text to capture meaning, not just string patterns. (2) We use unsupervised ML so we don't need labeled training data — the system learns what "normal" looks like for each column. (3) The LLM is used selectively on top-ranked anomalies, not the full dataset — this is what makes it scalable. (4) Results are clustered and described so reviewers see patterns, not random rows.

---

### Slide 5 — PoC Results: C-Level Job Titles

**Title:** What we found in 1.7M executive job titles

**Content — key stats in large numbers + donut chart:**

| Stat | Value |
|------|-------|
| Unique titles scanned | **1.7M** |
| Clusters flagged | **200** |
| Clusters requiring action | **199 / 200** |
| Records corrected in bulk | **80,000** |
| Records removed from production | **6,000** |

**Donut chart (same as landing page):**
- **76%** — Wrong leadership tags. Real titles that didn't belong in the executive category. Tags corrected in bulk — 80K records updated.
- **18%** — Needed row-by-row review. Mixed clusters where some records were valid and others weren't. Sent to domain experts for individual classification.
- **6%** — Not job titles at all. Dates, word fragments, descriptions — data that should never have been in a title field. 6K records removed.

**Speaker notes:**
This was our first real run. We scanned the full set of titles tagged as C-level/senior leadership. The system grouped similar anomalies into 200 clusters. Domain experts reviewed them. 199 out of 200 required action — only one cluster turned out to be clean data. These records had been in production for years, passing all existing checks.

---

### Slide 6 — What "Bad Data" Looked Like

**Title:** Examples from the scan

**Table with real examples:**

| Value Found | What's Wrong |
|-------------|-------------|
| Chief 2019 | A year fragment, not a title |
| Presents | Word fragment, not a role |
| Booster Club President | Volunteer role, not corporate executive |
| Founding Team. Sales and Partnerships | Role description, not a title |
| President of Physics and Astronomy Club | Student club role — detected via company context (university) |

**Callout box:**
"President of Physics and Astronomy Club" looks like a valid title in isolation. The system flagged it because the company field showed a university — **cross-column context reveals what single-column checks miss.**

**Speaker notes:**
These are actual records from our data. Note the range: some are obvious junk (word fragments, dates), some are valid titles that just don't belong in the C-level category (volunteer roles, student clubs), and some require cross-column reasoning to catch. The last example is particularly interesting — the title alone looks fine, but combined with the company context, it's clearly not an executive role. This is what makes the semantic approach different from regex or dictionary checks.

---

### Slide 7 — Live Report Demo

**Title:** [Switch to Excel] Walking through an Anomalsky report

**Demo script:**

1. **Cluster Overview tab** — Show the list of clusters: name, AI-generated description, anomaly rate, size, example records. Point out how clusters group similar issues together — reviewers see patterns, not random rows.

2. **Record Details tab** — Drill into 2–3 interesting clusters. Show individual records with:
   - The flagged value
   - Context columns (company, etc.)
   - AI explanation of what's wrong
   - Review columns for domain expert annotations

3. **Highlight cross-column detection** — Find the university/club president example. Show how the system used company context.

4. **Show the 76% bulk-action cluster** — Demonstrate how one cluster type (wrong leadership tags) led to 80K corrections. This is the efficiency argument: one cluster review = thousands of records fixed.

**Speaker notes:**
This is the most important part. Let the report speak for itself. The audience should see: (a) findings are organized and described, not a raw dump; (b) AI explanations make each cluster immediately understandable; (c) the review process is straightforward — domain experts annotate, decisions apply to whole clusters. Keep this to ~5 minutes.

---

### Slide 8 — How Onboarding Works

**Title:** Getting started takes 15 minutes

**Content — simple two-column layout:**

**What you provide:**
- Your dataset (CSV or BigQuery access, up to 1M records)
- Column descriptions — what each column should contain (e.g., "job titles", "person first names")
- A 15-minute kickoff call — we align on what "bad data" means for your use case

**What you receive:**
- Cluster Overview — named groups of bad data with AI descriptions, sizes, example records
- Record Details — every flagged record with cluster, AI explanation, review columns
- A walkthrough call — we explain findings and discuss next steps

**Timeline:** Results in ~5 business days

**Footer:** Delivered as an Excel report — ready for your team to review, annotate, and act on.

**Speaker notes:**
The barrier to entry is very low. We need your data and a short conversation about what you're looking for. The output is a self-contained Excel report that domain experts can review without any tooling. After the first scan, the pipeline can be integrated into regular workflows — each new batch surfaces fresh clusters and auto-processes known patterns.

---

### Slide 9 — Where This Goes Next

**Title:** Beyond the PoC

**Content — 3 expansion directions:**

1. **More columns, more domains**
   - First names, last names (pipeline already prepared)
   - Company names, addresses, descriptions
   - Any text/categorical column where "does this value make sense?" matters

2. **Operational integration**
   - Run scans on every new data batch automatically
   - New members of already-flagged patterns are processed without re-review
   - Feedback loop with domain experts improves precision over time

3. **Cross-team adoption**
   - Any team at ZoomInfo that owns or processes text data
   - Data ingestion, enrichment, research, compliance

**Speaker notes:**
The PoC proved the concept works on one column of one dataset. The architecture is column-agnostic and configuration-driven — spinning up a new pipeline for a different column or domain is a config file and a prompt, not a code change. The `name_first` and `name_last` pipelines are already configured and ready to run. The real value scales with the number of columns and datasets we apply it to.

---

### Slide 10 — The Ask

**Title:** What I need from you

**Content — clear, numbered asks:**

1. **Try it on your data** — If you own text columns, give me a dataset and 15 minutes. I'll run a scan and show you what's there.

2. **Integration conversation** — If you see value after the first scan, let's discuss how to plug this into your existing pipeline as a recurring step.

3. **Feedback and domain expertise** — The system is only as good as the domain context we give it. Your knowledge of what "good data" looks like in your domain is the critical input.

**Bottom line:** One scan, one dataset, one conversation. That's it to start.

**Speaker notes:**
Keep the ask concrete and low-friction. You're not asking for budget or headcount — you're asking people to hand you a CSV and 15 minutes. The results will speak for themselves, just like they did with the C-level title scan. End with: "Who has a dataset they've always suspected has issues but never had a way to check systematically?"

---

## Appendix Slides (if needed for Q&A)

### Appendix A — Technical Architecture Detail

**Pipeline stages:**
1. **Ingest** — BigQuery/CSV, deduplication
2. **Embed** — Text embeddings (semantic vectors)
3. **Score** — UMAP dimensionality reduction + anomaly scoring (Isolation Forest, distance-based, HDBSCAN)
4. **Validate** — LLM verification of flagged records (adaptive batching, anomaly rate thresholds)
5. **Report** — Excel report with AI-generated cluster descriptions
6. **Export** — CERA Bulk integration for production corrections

### Appendix B — Cost & Scale

- LLM is used selectively (top anomalies only), not on full dataset — keeps cost manageable
- 1.7M records scanned end-to-end in a single pipeline run
- Configuration-driven: new column = new config file + prompt, not code changes

### Appendix C — Limitations (be upfront)

- False positives on rare but valid values (mitigated by LLM validation + human review)
- Needs sufficient "normal" data baseline (cold-start)
- Works best on text/categorical columns (not numeric)
- Embedding quality depends on domain representation
- Currently single-language optimized

---

## Presentation Tips

1. **Lead with the problem, not the tool.** Slides 2–3 should land before you mention Anomalsky. Everyone in the room should be nodding "yes, I've seen this" before you present the solution.

2. **Let the numbers do the talking.** 199/200 clusters requiring action is the single most powerful stat. Don't bury it — let it breathe on the slide.

3. **The live demo is the pitch.** The Excel report is tangible and immediately understandable. Spend more time here than on slides.

4. **End with a question, not a statement.** "Who has a dataset they've suspected has issues?" turns the audience into participants.

5. **Anticipate the "can't we just write rules?" question.** The answer: rules catch known patterns. This catches unknown patterns. The `President of Physics and Astronomy Club` example is your best response — no rule would catch that without the company context.

6. **Keep it 10 minutes of slides + 5 minutes of demo.** For a 15-minute slot, this is the right split. If you get more time, extend the demo, not the slides.
