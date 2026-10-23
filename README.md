# Intelligent Builder Portfolio

Build a polished, responsive personal profile / portfolio website for a Nigerian AI engineer and founder behind ShadowSpark Technologies.

Design direction:
- Dark, modern, premium AI/engineering aesthetic.
- Deep charcoal/black background, subtle grid/noise, restrained electric-blue/violet accents.
- Clean typography, large confident hero, smooth but lightweight motion.
- Mobile-first and excellent on desktop.
- Avoid cliché hacker visuals and avoid fake metrics.

Site structure:
1. Sticky minimal nav: Home, About, Skills, Projects, Current Focus, Contact.
2. Hero:
   - Public name: "Stephen Chijioke Okoronkwo"
   - Headline: "AI Systems Architect · Full-Stack Developer · Founder"
   - Supporting line: builds AI automation, backend platforms, agentic systems, and practical products for African businesses.
   - Primary CTA: "View Projects"
   - Secondary CTA: "Contact Me"
   - A compact availability/status chip: "Building ShadowSpark Technologies"
3. About section:
   - Concise, credible biography focused on systems architecture, AI agents, backend engineering, cloud, product execution, and founder work.
   - Mention Nigeria as base, without precise home address.
4. Skills / stack:
   - AI Agents & Automation
   - Next.js / TypeScript
   - Node.js
   - Python
   - PostgreSQL / Prisma
   - Redis / Queues
   - APIs & Backend Architecture
   - Vercel / Render / Railway / GCP
   - Multi-tenant SaaS
   - Security-minded engineering
5. Featured projects:
   - ShadowSpark Technologies — AI operating system / WhatsApp AI and automation for African fintech/business workflows.
   - ShadowSpark Production — multi-tenant backend/API platform, authentication, payments, queues, RAG, security hardening.
   - Lodgist — hospitality/property product currently in development.
   - SpringBank Website — banking demo with Next.js, Prisma, auth, customer/admin flows.
   Each project card should show focus, tech tags, and a neutral status label such as Active / In Development / Demo.
6. Current Focus:
   - WhatsApp AI product
   - Production backend reliability
   - Agentic developer workflows
   - Shipping revenue-ready SaaS
7. Short principles section:
   - Evidence before assumptions
   - Build, test, verify
   - Automate repeatable work
   - Security and tenant isolation by design
8. Contact section:
   - Keep email/social destinations as editable placeholders rather than inventing links.
   - Include buttons for GitHub, LinkedIn, Email, and ShadowSpark website, clearly marked for later linking if no URL is supplied.
9. Footer with name and current year.

Implementation:
- Use React/TypeScript/Tailwind/shadcn where useful.
- No backend/database required.
- Accessible semantic HTML, keyboard focus states, strong contrast.
- Add SEO title/description and social meta placeholders.
- Make all profile text easy to edit from one data/config file if practical.
- Do not expose private emails, phone numbers, birth dates, home addresses, or other sensitive data.
- Do not claim qualifications or employment history not stated above.
- Deliver a complete runnable site with a working preview.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://intelligent-builder-portfolio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fb5e8d4a-0dcd-4261-b7a4-66cc066f1b43).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
