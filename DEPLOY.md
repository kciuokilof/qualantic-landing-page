# Deployment Guide — Qualantic Landing Page

## Prerequisites

- GitHub account
- Vercel account (free tier works — sign up at https://vercel.com with your GitHub)
- Domain `anomalsky.com` (you already own this)
- Access to your domain registrar's DNS settings

---

## Step 1: Push to GitHub

```bash
cd landing-page/site

# Create a new repo on GitHub first:
# Go to https://github.com/new → name it "qualantic-landing" → DON'T initialize with README

# Then connect and push:
git remote add origin git@github.com:YOUR_USERNAME/qualantic-landing.git
git add -A
git commit -m "Landing page with A/B testing"
git branch -M main
git push -u origin main
```

## Step 2: Deploy on Vercel

1. Go to https://vercel.com/new
2. Click **"Import Git Repository"**
3. Select the `qualantic-landing` repo you just pushed
4. Vercel auto-detects Next.js — no config changes needed
5. Click **Deploy**

Vercel will give you a URL like `qualantic-landing-abc123.vercel.app`. Test both variants:
- Open in incognito → you get randomly assigned A or B
- To force a variant: open browser console → `document.cookie = "ab-variant=b"` → refresh

## Step 3: Connect your domain

### In Vercel:
1. Go to your project → **Settings** → **Domains**
2. Add `anomalsky.com`
3. Vercel will show you the DNS records to add

### In your domain registrar (Cloudflare / GoDaddy / etc):
Add these DNS records:

| Type | Name | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

(Vercel will show the exact values — use those if different from above.)

SSL is automatic — Vercel provisions a certificate once DNS propagates.

## Step 4: Verify

After DNS propagates (5 min to 48 hours, usually ~10 min):

1. Visit `https://anomalsky.com` — should load the landing page
2. Open PostHog (https://us.posthog.com) → check for `variant_assigned` events
3. Test both variants by toggling the cookie in dev tools
4. Verify the Google Calendar booking embed works

---

## How the A/B Test Works

| | Variant A (Engineers) | Variant B (Management) |
|---|---|---|
| **Angle** | Technical / problem-first | Business impact / outcomes-first |
| **Hero** | "Semantic data quality for text columns at scale" | "Your data passes every check. But do you trust what's inside?" |
| **Subheadline** | Mentions embeddings, anomaly detection, LLM validation | Mentions customer trust, compliance risk, cost |
| **Section order** | Problem → How → Use Cases → Pricing | Results → Problem → How → Pricing |
| **CTA** | "Book a Pilot Call" | "See How It Works" |

**Assignment:** Cookie-based 50/50 random split. Sticky for 90 days.

**Tracked events (PostHog):**
- `variant_assigned` — which variant they got
- `cta_click` — which CTA, where on page, which variant
- `booking_section_viewed` — scrolled to calendar
- Pageviews + page leaves (automatic)

---

## Environment Variables

No env vars needed for deployment. PostHog token is hardcoded (it's a public frontend token, this is fine).

If you later want to change the PostHog project, edit:
`src/lib/posthog-provider.tsx`

---

## Ongoing: Auto-deploys

Every `git push` to `main` triggers a new Vercel deployment automatically. Just push changes and they go live in ~30 seconds.

```bash
# After making changes:
cd landing-page/site
git add -A
git commit -m "Update variant copy"
git push
```
