# D.M Human Resource Management Consultancy — Website

MVP marketing/lead-generation website for D.M Human Resource Management Consultancy
(Calamba, Laguna, Philippines), built to the client spec: Home, Services, About, and
Contact, with a short consultation inquiry form as the primary conversion path.

Built with Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # ESLint
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values you have:

- `RESEND_API_KEY` — **required before launch.** Without it, consultation form
  submissions are only logged to the server console, not emailed. Sign up at
  [resend.com](https://resend.com), verify a sending domain, and set this.
- `CONTACT_TO_EMAIL` — where inquiries are sent. Defaults to
  `dmhrmanagementconsultancy@gmail.com`.
- `CONTACT_FROM_EMAIL` — the "from" address Resend sends as. Defaults to a
  Resend sandbox sender; replace once a domain is verified in Resend.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — optional Google Analytics 4 Measurement ID
  (`G-XXXXXXXXXX`). Leave blank to disable analytics.

## Architecture Notes

- **No CMS/admin.** Per project decision, all copy (services, About, credentials,
  etc.) is hardcoded in `src/data/services.ts` and `src/lib/constants.ts`, and in
  the page/section components under `src/app` and `src/components`. Content
  changes are made by editing code and redeploying.
- **Leads go to email only**, via the `/api/contact` route and Resend. There is no
  database and no lead-management dashboard in this MVP (see spec section 33 —
  descoped by client decision).
- **Analytics**: a lightweight GA4 wrapper (`src/lib/analytics.ts`) tracks the
  primary conversion event (`consultation_request`) plus CTA clicks, phone/
  WhatsApp/Messenger clicks, and page views (`src/components/RouteAnalytics.tsx`).
  Wire it up by setting `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

## Deployment (Vercel)

1. Import this repository into Vercel.
2. Add the environment variables above in Project Settings → Environment
   Variables (at minimum `RESEND_API_KEY` before going live).
3. Deploy. No other configuration is required.

## Outstanding Client Assets

The site currently uses placeholders for anything the client hasn't provided yet
(see spec section 37). Before launch, swap in:

- [ ] Official D.M HR Consultancy logo file (currently a text-based placeholder
      in `src/components/Logo.tsx`)
- [ ] Dominic Mora's professional photo (currently an initials avatar in
      `src/components/sections/MeetFounder.tsx` and `src/app/about/page.tsx`)
- [ ] Team / office photos, if applicable
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
