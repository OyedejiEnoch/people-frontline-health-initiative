# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People in underserved communities are the reason the organization exists, while the website primarily serves prospective donors, volunteers, institutional partners, public-health collaborators, and people evaluating PFHI's work.

## Product Purpose

People Frontline Health Initiative presents and supports community-driven public-health work across Africa. The website should make PFHI's mission understandable, establish trust, explain its connected program model, and give supporters a clear path to donate, volunteer, partner, or stay informed.

## Positioning

PFHI combines grassroots community relationships, public-health research, practical technology, and durable partnerships rather than treating outreach as a collection of isolated projects.

## Operating Context

Visitors may arrive with limited knowledge of PFHI and need to understand the mission quickly on mobile or desktop. The public website currently consists of a homepage, an About page, and a What We Do page.

## Capabilities and Constraints

- Next.js 16 App Router with React 19, TypeScript, Tailwind CSS 3, GSAP, Lenis, and Motion.
- The site is currently a static marketing frontend without a CMS, payment flow, CRM integration, analytics, or backend.
- Donation, volunteering, partnership, and newsletter actions must not imply completed integrations until those systems exist.
- Impact figures and field stories in `src/lib/content.ts` are explicitly marked as placeholders and must not be treated as verified claims.
- Motion must preserve readable static and reduced-motion fallbacks.

## Brand Commitments

- Name: People Frontline Health Initiative (PFHI).
- Core idea: healthcare is a right, not a privilege.
- Voice: compassionate, direct, evidence-minded, hopeful, and community-led.
- Existing visual assets include PFHI documentary-style community and outreach photography in `public/images/`.
- The approved website direction uses a black-and-white foundation with deep health green (`#087A45`) as the single primary color, Bricolage Grotesque display type, and Hanken Grotesk body type. Green is punctuation, not wallpaper; large surfaces stay white.
- Avoid generic medical-cross, globe, heart, or corporate-health symbolism.

## Evidence on Hand

- Program descriptions, mission, values, approach, involvement paths, and organization positioning in `src/lib/content.ts`.
- Nine local photographic assets in `public/images/`.
- No verified testimonials, partner logos, case studies, external certifications, or production impact dataset are present in the repository.

## Product Principles

1. Put people before institutional language.
2. Make the path from need to action easy to understand.
3. Earn trust with specific, verifiable evidence rather than inflated claims.
4. Treat communities as collaborators, not recipients.
5. Keep every invitation to support the work clear and respectful.

## Accessibility & Inclusion

The public-health audience is broad and may include visitors using assistive technology, reduced-motion preferences, small screens, slow connections, or increased text sizes. Core content and actions must remain available without motion-dependent interaction.
