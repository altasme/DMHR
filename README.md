# D.M Human Resource Management Consultancy — Website

MVP marketing/lead-generation website for D.M Human Resource Management Consultancy
(Calamba, Laguna, Philippines), built to the client spec: Home, Services, About, and
Contact. The primary conversion path is direct outreach — every "Book a Consultation"
CTA opens a pre-filled WhatsApp chat; the Contact page and floating contact button
offer WhatsApp, phone, email, and (once provided) Messenger as alternatives.

Built with Next.js (App Router) + TypeScript + Tailwind CSS v4, exported as a fully
static site (`output: "export"`) — no server, no backend, no database.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # static export to ./out
npm run lint    # ESLint
```

`npm run build` writes a plain static site to `./out` — every route (including
`sitemap.xml` and `robots.txt`) is pre-rendered HTML/JS/CSS with no server
required at runtime.

## Environment Variables

Copy `.env.example` to `.env.local` if you want analytics locally:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — optional Google Analytics 4 Measurement ID
  (`G-XXXXXXXXXX`). Leave blank to disable analytics.

Nothing else is required — there's no backend, so no other secrets exist.

## Architecture Notes

- **No CMS/admin, no backend, no form.** All copy (services, About, credentials,
  etc.) is hardcoded in `src/data/services.ts` and `src/lib/constants.ts`, and in
  the page/section components under `src/app` and `src/components`. Content
  changes are made by editing code and redeploying.
- **Leads happen via direct contact**, not a form: every "Book a Consultation"
  CTA (`src/components/BookConsultationCta.tsx`) opens WhatsApp with a pre-filled
  message. The Contact page and the floating contact button
  (`src/components/FloatingContact.tsx`) offer WhatsApp, phone, email, and
  Messenger (once its URL is provided) as alternatives. There is no lead
  database or dashboard in this MVP (see spec section 33 — descoped).
- **Analytics**: a lightweight GA4 wrapper (`src/lib/analytics.ts`) tracks CTA
  clicks and phone/WhatsApp/Messenger clicks, plus page views
  (`src/components/RouteAnalytics.tsx`). Wire it up by setting
  `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

## Deployment (Cloudflare Pages)

This is a static export, so it's a normal Cloudflare Pages project — no Workers,
no Functions, no adapter.

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**
   → pick this repository and branch.
2. Framework preset: **Next.js (Static HTML Export)**, or set manually:
   - Build command: `npm run build`
   - Build output directory: `out`
3. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` under environment variables if you want
   analytics (optional).
4. Deploy.

The static export in `out/` also works unchanged on any static host (Vercel,
Netlify, GitHub Pages, S3 + CloudFront, etc.) if that's ever needed instead.

## Outstanding Client Assets

The site currently uses placeholders for anything the client hasn't provided yet
(see spec section 37). Before launch, swap in:

- [x] Official D.M HR Consultancy logo — in place at `public/images/logo/`
      (icon mark + full lockup), used in the header, footer, favicon set,
      and structured data
- [x] Dominic Mora's professional photo — in place at
      `public/images/dominic-mora.jpg`, used on the About page and the
      homepage Founder/Consultant section
- [x] Hero photo — in place at `public/images/hero-team.jpg` (D.M team)
- [x] Open Graph / social share image — in place at
      `public/images/og-image.jpg`
- [ ] Team / office photos beyond the hero image, if applicable
- [ ] Client logos (in usable quality) + permission to display + confirmation of
      client status — a client-logos/testimonials section can then be added; none
      is included in this MVP since none was provided
- [ ] Testimonials, once supplied
- [ ] Facebook Messenger URL — set `messengerHref` in `src/lib/constants.ts` to
      enable the Messenger button in the floating contact widget and contact page
- [ ] Facebook / Instagram / LinkedIn URLs — set `SOCIAL_LINKS` in
      `src/lib/constants.ts`
- [ ] Supporting documentation for DTI / BIR / DOLE OSH credentials, if the client
      wants to publish more detail than the current factual statements
- [ ] Final production domain — update `SITE_URL` in `src/lib/constants.ts` (used
      for canonical URLs, sitemap, and Open Graph tags)
- [ ] Google Business Profile link, once available, for local SEO

## Content Compliance

Per spec section 32, the site avoids unverifiable superlative claims ("best,"
"No. 1," "guaranteed") and uses only the factual claims the client confirmed:
7+ years HR experience, 4+ years HR consultancy experience, 100+ clients
assisted, DTI/BIR registration, and DOLE OSH certification.
