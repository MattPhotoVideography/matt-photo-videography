import Section from "@/components/Section";
import services from "@/content/services.json";
import Link from "next/link";

export const metadata = { title: "Services" };

export default function Services() {
  return (
    <Section title="Services" subtitle="Thoughtfully designed sessions for every story.">
      <div className="grid md:grid-cols-3 gap-4">
        {services.map(s => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="block border border-gray-200 rounded-2xl p-6 hover:shadow-sm">
            <div className="text-lg font-semibold">{s.title}</div>
            <div className="text-gray-600 mt-1">{s.summary}</div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
