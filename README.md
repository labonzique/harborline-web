# Harborline Systems — Website

The marketing site for **Harborline Systems**, a founder-led digital operations
agency for local service businesses in Greater Philadelphia.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**. Calm, premium,
matte palette with a warm-gold accent. No CMS in this first version — content
lives in typed files under [`content/`](content) and [`lib/site.ts`](lib/site.ts).

---

## Tech stack

| Area              | Choice                                            |
| ----------------- | ------------------------------------------------- |
| Framework         | Next.js 14 (App Router, RSC)                      |
| Language          | TypeScript                                        |
| Styling           | Tailwind CSS + CSS variable design tokens         |
| Components         | Custom components + Radix UI (accordion)          |
| Forms             | React Hook Form + Zod validation                  |
| Animation         | Framer Motion (subtle, reduced-motion aware)      |
| Icons             | Lucide                                            |
| Fonts             | Inter (body) + Plus Jakarta Sans (display)        |

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. (Optional) configure environment variables
cp .env.example .env.local

# 3. Run the dev server
npm run dev
# → http://localhost:3000
```

### Scripts

| Script          | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the local dev server           |
| `npm run build` | Production build                     |
| `npm run start` | Run the production build locally     |
| `npm run lint`  | Lint with ESLint (next/core-web-vitals) |

---

## Environment variables

Everything has a safe default, so the site runs locally with no setup. See
[`.env.example`](.env.example) for the full list.

| Variable                  | Purpose                                                                 |
| ------------------------- | ----------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`    | Absolute base URL for SEO / OpenGraph / sitemap. Set to your domain.    |
| `NEXT_PUBLIC_BOOKING_URL` | Calendly / Cal.com link. When set, "Book a time" buttons link to it.   |
| `EMAIL_PROVIDER`          | `resend` or `sendgrid`. Unset = submissions are logged to the console.  |
| `RESEND_API_KEY`          | API key when `EMAIL_PROVIDER=resend`.                                    |
| `SENDGRID_API_KEY`        | API key when `EMAIL_PROVIDER=sendgrid`.                                  |
| `CONTACT_TO_EMAIL`        | Where contact submissions are delivered.                                |
| `CONTACT_FROM_EMAIL`      | From address for notification emails.                                   |

> **Never commit real keys.** `.env.local` is git-ignored.

---

## Connecting the contact form to email

The contact form posts to [`app/api/contact/route.ts`](app/api/contact/route.ts),
which validates input with the shared Zod schema and then delivers the message.

**Until you configure a provider, submissions are validated and logged to the
server console** — so the form works end-to-end in development.

To send real email:

1. Pick a provider and set the env vars in `.env.local`:
   ```bash
   EMAIL_PROVIDER=resend
   RESEND_API_KEY=re_xxxxxxxx
   CONTACT_TO_EMAIL=hello@harborlinesystems.com
   CONTACT_FROM_EMAIL=website@yourdomain.com   # must be a verified sender
   ```
2. The route already includes working `fetch`-based calls for **Resend** and
   **SendGrid** (no extra dependency required). Inline comments also show the
   official SDK approach if you prefer (`npm install resend` /
   `npm install @sendgrid/mail`).
3. Verify your sending domain with the provider before going live.

The form also includes a hidden honeypot field (`company_website`) for basic
spam protection.

---

## Booking (Calendly / Cal.com)

Set `NEXT_PUBLIC_BOOKING_URL` to your scheduling link. When present, the contact
page shows a **Book a Free Consultation** button that opens it. When absent, the
booking card shows a graceful "coming soon" message and visitors use the form.

To embed an inline Calendly widget later, replace the booking card in
[`app/contact/page.tsx`](app/contact/page.tsx).

---

## Editing content

No CMS — content is centralized and typed for easy editing:

| File                                         | Controls                                       |
| -------------------------------------------- | ---------------------------------------------- |
| [`lib/site.ts`](lib/site.ts)                 | Company name, email, navigation, CTAs, region  |
| [`content/services.ts`](content/services.ts) | The six service categories (Services page)     |
| [`content/process.ts`](content/process.ts)   | The five process steps                         |
| [`content/home.ts`](content/home.ts)         | Home problem points, positioning, local points |
| [`content/beliefs.ts`](content/beliefs.ts)   | About-page belief cards                         |
| [`content/contact-options.ts`](content/contact-options.ts) | Contact form options (needs, budget, timeline) |

Page copy that is specific to one page lives inline in that page file under
[`app/`](app).

### Design tokens

Colors, radius, and gradients are defined as CSS variables in
[`app/globals.css`](app/globals.css) and mapped to Tailwind utilities in
[`tailwind.config.ts`](tailwind.config.ts). Change the palette in one place
(`:root`) and it updates site-wide:

```css
--background   /* warm off-white     */
--foreground   /* deep warm charcoal */
--muted        /* light matte panel  */
--border       /* muted warm border  */
--card         /* card surface       */
--gold         /* matte gold accent  */
--dark         /* dark silver-gray sections */
```

---

## Project structure

```
app/
  layout.tsx            Root layout: fonts, header, footer, metadata
  page.tsx              Home
  services/page.tsx     Services (expandable categories)
  process/page.tsx      Process (5-step timeline)
  about/page.tsx        About
  contact/page.tsx      Contact (form + sidebar)
  api/contact/route.ts  Contact form handler (email integration point)
  opengraph-image.tsx   Generated social-share image
  sitemap.ts / robots.ts
components/
  layout/               Header, footer, container, logo
  sections/             Page hero, section header, cards, accordion, CTA, diagram
  contact/              Contact form
  ui/                   Button, accordion primitives
  motion/               Reveal (scroll animation)
content/                Typed content data
lib/                    site config, utils, contact schema
```

---

## Deployment

The site is a standard Next.js app and deploys cleanly to **Vercel**, **Netlify**,
or any Node host.

### Vercel (recommended)

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add the environment variables from `.env.example` in **Project → Settings →
   Environment Variables**.
4. Deploy. Vercel auto-detects Next.js — no extra config needed.

### Netlify

1. Import the repo at [app.netlify.com](https://app.netlify.com).
2. Build command: `npm run build` · Publish: handled by the Next.js runtime
   (install the official **@netlify/plugin-nextjs** if prompted).
3. Add the environment variables, then deploy.

### Self-hosted

```bash
npm run build
npm run start   # serves on port 3000
```

---

## Notes & placeholders

These are intentional placeholders for the first version — search the codebase
for them when you are ready to finalize:

- **Email delivery** is logged to the console until a provider is configured.
- **Booking link** falls back to the contact form until `NEXT_PUBLIC_BOOKING_URL`
  is set.
- **Phone number** (`siteConfig.phonePlaceholder`) is a placeholder and is not
  shown publicly yet.
- **Domain** defaults to `https://harborlinesystems.com`; override with
  `NEXT_PUBLIC_SITE_URL`.

No fake testimonials, client logos, case studies, or before/after sections are
included by design. The structure is ready to add real ones later (e.g. a `/work`
route and a testimonials component) once there is closed client work to show.
