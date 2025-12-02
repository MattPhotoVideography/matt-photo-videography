import services from "@/content/services.json";
import site from "@/content/site.json";
import Section from "@/components/Section";
import Schema from "@/components/Schema";
import { serviceJsonLd } from "@/lib/jsonld";

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = services.find(s => s.slug === params.slug);
  return { title: service ? service.title : "Service", description: service?.summary };
}

// simple formatter: split into paragraphs; lines that start with "- " become list items
function renderAnswer(text) {
  const paragraphs = text.split("\n").filter(Boolean);
  return paragraphs.map((p, i) => {
    if (p.startsWith("- ")) {
      // wrap single bullet as list item
      return <li key={i}>{p.slice(2)}</li>;
    }
    if (p.startsWith("### ")) {
      return <h3 key={i}>{p.slice(4)}</h3>;
    }
    return <p key={i}>{p}</p>;
  });
}

export default function ServicePage({ params }) {
  const service = services.find(s => s.slug === params.slug);
  if (!service) return <div className="container py-20">Service not found.</div>;

  const faqs = service.faqs?.length
    ? service.faqs
    : [{ q: "How do I book?", a: "Use the contact form or call/email—booking is by appointment only." }];

  return (
    <>
      <Schema json={serviceJsonLd(service, site)} />
      <Section title={service.title} subtitle={service.summary}>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="prose-custom">
              <p>Every session includes a planning call, gentle direction, and hand-edited images delivered in a private gallery.</p>
              <h2>How it works</h2>

              {faqs.map((f, i) => (
                <div key={i} className="mb-6">
                  <strong>{f.q}</strong>
                  <div className="mt-2">
                    <ul className="list-disc pl-6">
                      {renderAnswer(f.a)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="border border-gray-200 rounded-2xl p-6 h-fit">
            <div className="font-semibold">Book this service</div>
            <p className="text-gray-600 mt-2">
              Call <a className="underline" href={`tel:${site.phone}`}>{site.phone}</a> or email{" "}
              <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
            <a href="/contact" className="inline-block mt-4 px-4 py-2 rounded-2xl bg-brand text-white">
              Request availability
            </a>
          </aside>
        </div>
      </Section>
    </>
  );
}
