// app/services/page.jsx
import Link from "next/link";

const services = [
  {
    slug: "newborn",
    title: "Newborn Photography",
    desc: "Gentle, cozy sessions at home to capture those first days.",
    accent: "from-rose-200/30 to-pink-100/30",
    icon: "👶",
  },
  {
    slug: "baby-milestone",
    title: "Baby / Milestone",
    desc: "Smiles, rolls, first steps, and birthday fun—short milestone sessions at home.",
    accent: "from-sky-200/30 to-cyan-100/30",
    icon: "🎂",
  },
  {
    slug: "maternity",
    title: "Maternity Photography",
    desc: "Elegant portraits celebrating this season of life.",
    accent: "from-violet-200/30 to-fuchsia-100/30",
    icon: "🤰",
  },
  {
    slug: "family",
    title: "Family Photography",
    desc: "Relaxed, candid sessions outdoors or at home.",
    accent: "from-emerald-200/30 to-green-100/30",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    slug: "graduation",
    title: "Graduation Photography",
    desc: "Cap-and-gown and editorial-style portraits to celebrate your achievement.",
    accent: "from-amber-200/30 to-yellow-100/30",
    icon: "🎓",
  },
  {
    slug: "engagement",
    title: "Engagement",
    desc: "Romantic sessions in meaningful locations with natural, guided posing.",
    accent: "from-indigo-200/30 to-blue-100/30",
    icon: "💍",
  },
];

export const metadata = {
  title: "Services",
  description: "Thoughtfully designed sessions for every story.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header band—blend so paper shows */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-r from-brand/10 via-transparent to-sky-200/10 mix-blend-soft-light" />
        <div className="container py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Services</h1>
          <p className="mt-3 text-gray-700 max-w-2xl">
            Thoughtfully designed sessions for every story.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="container pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={[
                "group relative rounded-2xl ring-1 ring-black/5 overflow-hidden transition-all duration-300",
                // translucent so the paper is visible
                "bg-white/70 [@supports(backdrop-filter:blur(0))]:backdrop-blur-sm [@supports(backdrop-filter:blur(0))]:bg-white/55",
                "hover:shadow-lg hover:shadow-black/5 hover:ring-black/10",
              ].join(" ")}
            >
              {/* soft accent glow that blends with paper */}
              <div
                className={[
                  "pointer-events-none absolute inset-0 -z-10",
                  "bg-gradient-to-br", s.accent,
                  "mix-blend-soft-light",
                ].join(" ")}
              />
              <div className="p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl leading-none">{s.icon}</span>
                  <h2 className="text-lg md:text-xl font-semibold">{s.title}</h2>
                </div>
                <p className="mt-2 text-gray-700">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-brand">
                  <span className="font-medium">Learn more</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 20 20" fill="currentColor"
                  >
                    <path d="M10.75 3.75a.75.75 0 0 1 1.5 0v8.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3.75z" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
