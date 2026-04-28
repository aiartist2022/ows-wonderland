# OWS Holdings — Cinematic Website

A dark, award-style multi-page site mirroring the reference: black backdrop, OWS red accents, umbrella hero, seven vibrant capability tiles, and heavy Framer Motion choreography throughout.

## Pages (TanStack Start routes)

```text
/                              Home — umbrella hero + capabilities + pillars + numbers + trusted-by
/about                         Founder story, mission, leadership, milestones timeline
/our-group                     Overview grid of all 7 businesses
/our-group/ows-automotive
/our-group/aj-industries
/our-group/aj-insurance-broker
/our-group/melt-live
/our-group/melt-media
/our-group/platform-health-club
/our-group/handy-bunch
/capabilities                  7 verticals + cross-vertical synergy map
/careers                       Culture, open roles, application CTA
/contact                       Form (saves to DB) + info
```

Each route gets unique `head()` metadata (title, description, og:title, og:description, og:image where applicable).

## Visual System

- **Palette**: pure black `#050505`, panel `#0a0a0a`, OWS red `#E11D2E`, white text, muted grey body. Per-brand accent colors (red, navy/gold, navy, purple, teal, green, amber).
- **Typography**: Inter Tight for display headlines (huge, condensed), Inter for body. Massive hero scale.
- **Hero (home)**: Dark Dubai skyline + reflective water, large black umbrella centered with red under-glow, "OWS HOLDINGS" lockup, taglines, animated scroll cue. Parallax on skyline + glow + umbrella.
- **Capabilities rail**: 7 vertical image-cards in a row that expand on hover (Framer Motion layout animations), each with its brand color accent.
- **Sub-brand pages**: brand-color hero, services grid, animated metric counters, client logos, cross-vertical synergy callouts, CTA.

## Motion (Framer Motion — cinematic & bold)

- Page transitions (fade + slight scale)
- Scroll-driven reveals (`whileInView`, staggered children)
- Parallax layers on every hero
- Magnetic buttons + hover tilt on capability cards
- Animated counters for "OWS by the Numbers"
- Infinite marquee for "Trusted By" client logos
- Custom red cursor follower on desktop
- Respects `prefers-reduced-motion`

## Reusable Components

`SiteHeader` (sticky, transparent → solid on scroll, red CTA, mobile drawer), `SiteFooter` (red CTA band + dark footer), `Hero` (variants), `CapabilityRail`, `PillarGrid`, `IndustryStrip`, `StatCounter`, `LogoMarquee`, `BrandPageShell`, `ContactForm`.

## Backend

Enable Lovable Cloud and create:

- `contact_submissions` table (id, name, email, company, phone, message, source_page, created_at) with RLS allowing anonymous insert only.
- `submitContact` server function — Zod-validated, inserts via admin client.
- `careers_applications` table for the Careers page (similar pattern, optional file upload deferred).

## Content

All copy and metrics drawn directly from the uploaded markdown briefs — taglines, services, key clients (RTA, DTC, Tawazun, ADMO, UAE Armed Forces, Etisalat, etc.), AED 500M+ savings, 14 countries, 3,000 employees, 10,000+ members.

## Imagery

Cinematic dark imagery per vertical (fleet workshop with red lighting, military vehicles at dusk, insurance shield motif, concert lights, media studio glow, gym at golden hour, technician in finished interior). Composite umbrella + skyline hero.

## Technical

- Install `framer-motion` (done in approval round — will reinstall if needed).
- Tailwind v4 design tokens extended in `styles.css` for OWS red + per-brand accents.
- Contact form: `createServerFn` + Zod + Supabase admin insert.
- Per-route `head()` for SEO, 404 + error boundaries already present, fully responsive (mobile drawer nav, stacked capability cards), accessibility (focus rings, alt text, reduced-motion).

Approve to build.
