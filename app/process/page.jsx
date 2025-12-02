import Section from "@/components/Section";
export const metadata = { title: "Our Process" };
const steps = [
  { title: "Initial Consultation", body: "We will start with a quick chat, either online or in person, to discuss your vision, style, and what you want the final images to feel like." },
  { title: "Planning & Creative Direction", body: "I will help you plan locations, outfits, props, and the overall creative direction. We will use reference images to make sure we are fully aligned." },
  { title: "Booking and Preparation", body: "Once the date is set, I will send you a preparation guide so you know exactly how to get ready. This will include outfit tips, timing, and any special details to bring." },
  { title: "The Photoshoot", body: "You will be able to relax and enjoy the experience. I will guide you through poses and candid moments while keeping the session fun, comfortable, and natural." },
  { title: "Editing & Retouching", body: "After the shoot, I will select the best images and edit them to match your chosen aesthetic. I will enhance color, lighting, and details while keeping the real you." },
  { title: "Final Delivery", body: "Your finished gallery will be delivered through an online platform for easy viewing, downloading, and sharing. Prints or additional edits will be available anytime." }
];
export default function Process() {
  return (
    <Section title="Our Process" subtitle="Natural, simple, and thoughtfully guided from start to finish.">
      <ol className="space-y-4">
        {steps.map((s, i) => (
          <li key={i} className="p-6 rounded-2xl border border-gray-200 bg-white">
            <div className="text-lg font-semibold">{i+1}. {s.title}</div>
            <p className="text-gray-700 mt-2">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
