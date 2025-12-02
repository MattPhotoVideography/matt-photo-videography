import Section from "@/components/Section";
import GalleryCarousel from "@/components/GalleryCarousel";
import Schema from "@/components/Schema";
import { localBusinessJsonLd, faqJsonLd, breadcrumbsJsonLd } from "@/lib/jsonld";
import site from "@/content/site.json";
import portfolio from "@/content/portfolio.json";
import Link from "next/link";
import Image from "next/image";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ServiceTile from "@/components/ServiceTile";

export const dynamic = "force-static";

/** --- Small data sets for homepage teasers --- **/
const processSteps = [
  { title: "Initial Consultation", body: "We’ll chat about your vision, preferences, schedule, and what matters most so we can tailor a session that feels personal." },
  { title: "Planning the Details", body: "We’ll choose location(s), wardrobe cues, and any special touches. I’ll handle logistics and timing so you can relax." },
  { title: "Session Day", body: "A calm, guided experience—natural direction and space to breathe. Great for in-home newborns or outdoor family sessions." },
  { title: "Photo Selection", body: "Afterwards, I curate the best images that tell your story honestly and beautifully." },
  { title: "Careful Editing", body: "Each selection is hand-edited to look natural, polished, and timeless—no heavy filters." },
  { title: "Final Delivery", body: "Your gallery arrives digitally, with optional high-quality prints or albums. Ready to share and treasure." }
];

const faqs = [
  { q: "Where do sessions take place?", a: "In-home for comfort (great for newborns), studio-style setups, or outdoors around Edmonton." },
  { q: "How do we prep for newborn/family photos?", a: "I’ll send simple prep tips. Warm room + feed before newborns; coordinated neutrals for families photograph beautifully." },
  { q: "What if baby/toddler gets fussy?", a: "No stress—patience and gentle pacing are part of my approach. Breaks as needed so little ones stay comfortable." },
  { q: "When do we get photos?", a: "Most galleries within 2–3 weeks depending on project size—carefully curated and hand-edited." }
];

export default function Home() {
  return (
    <>
      {/* Structured data */}
      <Schema json={localBusinessJsonLd(site)} />
      <Schema json={faqJsonLd(faqs)} />
      <Schema json={breadcrumbsJsonLd([{ name: "Home", url: `${site.url}/` }])} />
      <Schema
        json={{
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "name": "Behind the Lens: Our Photography Process",
          "description": "A quick look at how Matt Photo Videography plans, lights, and directs relaxed sessions in Edmonton.",
          "thumbnailUrl": [`${site.url}/images/posters/process.jpg`],
          "uploadDate": "2025-12-01",   // update to actual date
          "duration": "PT1M30S",        // update to actual duration
          "contentUrl": `${site.url}/videos/process.mp4`,
          "embedUrl": `${site.url}/#process-video`
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/hero/hero-main.webp"
          alt="Newborn resting under a soft blanket — lifestyle studio portrait in Edmonton"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-brand-light/40 mix-blend-soft-light pointer-events-none" />
        <div className="relative z-10">
          <div className="container min-h-[60vh] md:min-h-[70vh] flex items-center">
            <div className="w-full text-center text-white max-w-3xl mx-auto">
              <p className="uppercase tracking-widest text-white/80 text-sm md:text-base">
                {site.businessName}
              </p>
              <h1
                className="
                  mt-3
                  font-normal tracking-tight
                  text-white leading-tight
                  text-[clamp(2rem,5vw,4.25rem)]
                "
              >
                Edmonton Photography by
                <span className="block">Matt Photo Videography</span>
              </h1>


              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Link
                  href="/portfolio"
                  className="px-5 py-3 rounded-2xl bg-brand text-white hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-ring"
                >
                  View Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-3 rounded-2xl border border-white/40 text-white hover:border-brand focus:outline-none focus:ring-2 focus:ring-brand-ring"
                >
                  Book a Session
                </Link>
              </div>

              <div className="mt-6 text-sm text-white/80">
                Call <a className="underline" href={`tel:${site.phone}`}>{site.phone}</a> or{" "}
                email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1) SERVICES */}
      <Section title="Services" subtitle="From newborn sessions to commercial brand stories.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceTile
            title="Newborn Photography"
            slug="newborn"
            imgSrc="/images/services/newborn.webp"
            imgAlt="Newborn baby in a woven basket with soft blankets during studio session in Edmonton"
            priority
          />
          <ServiceTile
            title="Maternity Photography"
            slug="maternity"
            imgSrc="/images/services/maternity.webp"
            imgAlt="Expecting mother in elegant dress posing for a maternity portrait"
          />
          <ServiceTile
            title="Graduation Photography"
            slug="graduation"
            imgSrc="/images/services/graduation.webp"
            imgAlt="Graduate posing with a cap and gown"
          />
          <ServiceTile
            title="Family Photography"
            slug="family"
            imgSrc="/images/services/family.webp"
            imgAlt="Family portrait outdoors in Edmonton river valley during fall colors"
          />
          <ServiceTile
            title="Baby / Milestone"
            slug="baby-milestone"
            imgSrc="/images/services/baby-milestone.webp"
            imgAlt="Smiling baby during milestone session on neutral studio backdrop"
          />
          <ServiceTile
            title="Engagement / Wedding"
            slug="engagement"
            imgSrc="/images/services/engagement.webp"
            imgAlt="Engagement couple under greenery archway with a scenic waterfront view"
          />
        </div>

        <div className="mt-6">
          <a href="/services" className="underline">See all services</a>
        </div>
      </Section>

      {/* 2) ABOUT MATT */}
      <Section tone="dim" title="About Matt" subtitle="Professional Photographer & Videographer">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1">
            <Image
              src="/images/about/matt-portrait.jpg"
              alt="Matt, Edmonton photographer, smiling on a trail between rock formations"
              width={900}
              height={1200}
              className="w-full h-auto rounded-2xl object-cover ring-1 ring-black/5 shadow-sm"
              sizes="(min-width: 768px) 28vw, 90vw"
            />
          </div>

          <div className="md:col-span-2">
            <div className="prose-custom">
              <p>
                Hi! Welcome to our website. My name is Matt and I’m a passionate photographer and videographer serving Edmonton and the surrounding communities. I began my career in the arts through both photography and professional videography, capturing documentaries and creating live-action animations that became multi-episode series.Photography has always had a special place in my heart. Over the past 20 years, I’ve dedicated myself to creating images that families treasure for a lifetime—one frame at a time.
              </p>
              <a href="/about" className="inline-block mt-3 underline">Read the full story</a>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200/70 p-6 bg-white">
              <div className="font-semibold text-ink">Booking</div>
              <p className="text-sm text-gray-700 mt-2">
                By appointment only. Call or email, or send a request on the contact page.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-3 px-4 py-2 rounded-2xl bg-brand !text-white hover:bg-brand-dark
                           focus:outline-none focus:ring-2 focus:ring-brand-ring"
              >
                Request availability
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 3) FEATURED WORK */}
      <Section tone="default" title="Featured Work-Discover My Gallery of Moments" subtitle="A few recent favourites.">
        <GalleryCarousel images={portfolio.images} />
        <div className="mt-6">
          <a href="/portfolio" className="underline">See full portfolio</a>
        </div>
      </Section>

      {/* 4) OUR PROCESS */}
      <Section tone="default" title="Our Process" subtitle="Natural, simple, and thoughtfully guided from start to finish.">
        <ol className="grid md:grid-cols-3 gap-4">
          {processSteps.slice(0, 3).map((s, i) => (
            <li key={i} className="p-6 rounded-2xl border border-gray-200 bg-white">
              <div className="text-lg font-semibold">{i + 1}. {s.title}</div>
              <p className="text-gray-700 mt-2">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6"><a href="/process" className="underline">See the full process</a></div>
      </Section>

      {/* 5) KIND WORDS */}
      <Section tone="tint" title="Kind Words" subtitle="Real notes from recent sessions.">
        <TestimonialCarousel />
      </Section>

      {/* 6) FAQ */}
      <Section tone="tint" title="FAQ" subtitle="A few quick answers.">
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 border border-gray-200 rounded-2xl bg-white">
              <div className="font-semibold">{f.q}</div>
              <p className="text-gray-700 mt-2">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-6"><a href="/faq" className="underline">Read all FAQs</a></div>
      </Section>

      {/* 7) BEHIND THE LENS */}
      <Section title="Behind the Lens" subtitle="Stories, sessions, and simple tips.">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left: intro + video */}
          <div className="md:col-span-2 text-gray-700">
            <p>
              From prepping for newborn sessions to creating relaxed family portraits, the blog shares
              practical ideas and a peek at the process.
            </p>

            {/* Process video */}
            <div id="process-video" className="mt-6">
              <div className="relative w-full max-w-3xl">
                <div className="aspect-video overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10 bg-black">
                  <video
                    className="h-full w-full"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/posters/process.jpg"   // add this file
                  >
                    <source src="/videos/process.mp4" type="video/mp4" />  {/* add this file */}
                    {/* Optional captions for accessibility/SEO */}
                    <track
                      kind="captions"
                      srcLang="en"
                      label="English"
                      src="/captions/process.en.vtt"      // add this file if you have captions
                      default
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  A quick look at how we plan, light, and direct so sessions feel calm and natural.
                </p>
              </div>
            </div>
          </div>

          {/* Right: static latest posts */}
          <div className="rounded-2xl border border-gray-200 p-6 bg-white">
            <div className="font-semibold">Latest posts</div>
            <ul className="mt-3 space-y-1 text-sm list-disc pl-4">
              <li>
                <Link className="underline" href="/blog/newborn-photography-edmonton-prep">
                  Newborn Photography in Edmonton: How to Get Ready
                </Link>
              </li>
              <li>
                <Link className="underline" href="/blog/what-to-wear-family-photos-edmonton">
                  What to Wear for Family Photos
                </Link>
              </li>
              <li>
                <Link className="underline" href="/blog/personalize-family-photos-edmonton">
                  How to Personalize Your Family Photos in Edmonton
                </Link>
              </li>
            </ul>
            <Link href="/blog" className="inline-block mt-3 underline">
              Explore the blog
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

// (Unused currently, safe to keep/remove)
function ServiceCard({ slug, title }) {
  return (
    <a
      href={`/services/${slug}`}
      className="block border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition"
    >
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-gray-600 mt-1">Learn more</div>
    </a>
  );
}
