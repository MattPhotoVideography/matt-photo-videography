# Matt Photo Videography — Website Starter

A clean, SEO-friendly Next.js + Tailwind starter for a photography business.

## Quick start (Replit)
1. Create a new **Node.js** Replit.
2. Upload everything in this folder to the repl.
3. Run `npm install` (Packages tab) then `npm run dev` to preview.
4. Replace placeholders in `content/` and `/public/images` with your real content.
5. Set your domain to point at the Replit project and deploy.
6. Visit `/sitemap.xml` and submit the site in Google Search Console.

## Where to put your content
- Logo: `public/images/logo.png`
- Open Graph: `public/images/og-cover.jpg`
- Portfolio photos: `public/images/portfolio/...`
- Edit business info: `content/site.json`
- Services list: `content/services.json`
- Testimonials: `content/testimonials.json`
- Blog posts (Markdown): `content/blog/*.md`

## SEO
- JSON-LD (LocalBusiness + Service) is injected automatically.
- Accessible headings, alt text, and lazy-loaded images.
- `app/sitemap.js` and `app/robots.js` are ready to go.

## Contact form
- The contact form posts to Formspree. Create a Formspree project and replace the `action` URL in `app/contact/page.jsx`.

## Fonts & design
- Headings: Playfair Display; Body: Inter. Warm amber accent for subtle calls to action. Adjust in `tailwind.config.js` and `app/layout.jsx` if desired.
