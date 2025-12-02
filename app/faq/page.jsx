import Section from "@/components/Section";
export const metadata = { title: "FAQ" };
const faqs = [
  { q: "Where do your photography sessions take place?", a: "I specialize in in-home sessions for comfort—especially great for newborns and toddlers. I can also arrange a studio-style setup or outdoor locations around Edmonton." },
  { q: "How do I prepare for my newborn or family photos?", a: "I’ll send simple prep tips. For newborns, a warm room and a feed right before we begin helps keep them cozy. For families, coordinated neutral outfits and a relaxed vibe photograph beautifully." },
  { q: "What if my baby or toddler gets fussy during the shoot?", a: "No stress—patience and gentle pacing are part of my approach. We take breaks as needed so little ones stay comfortable." },
  { q: "How long does it take to receive my photos?", a: "Most galleries are delivered within 2–3 weeks depending on the project size. I carefully select and hand‑edit the best images." },
  { q: "Do you offer prints or albums?", a: "Yes—archival quality prints and custom albums are available on request. Digital files are always included." },
  { q: "How far in advance should I book?", a: "Earlier is better, especially for newborns and seasonal shoots. If you have a specific date in mind, reach out to secure it." },
  { q: "What if I need to reschedule?", a: "I understand life happens—please let me know as soon as possible and we’ll find a new date that works." }
];
export default function FAQ() {
  return (
    <Section title="Frequently Asked Questions" subtitle="Answers to common questions about sessions, delivery, and booking.">
      <div className="grid md:grid-cols-2 gap-4">
        {faqs.map((f, i) => (
          <div key={i} className="p-6 border border-gray-200 rounded-2xl bg-white">
            <div className="font-semibold">{f.q}</div>
            <p className="text-gray-700 mt-2">{f.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
