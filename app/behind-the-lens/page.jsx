import Section from "@/components/Section";
import Link from "next/link";
export const metadata = { title: "Behind the Lens" };
export default function BehindTheLens() {
  return (
    <>
      <Section title="Behind the Lens" subtitle="Stories, sessions, and simple tips from the studio and on location.">
        <p className="text-gray-700 max-w-2xl">From prepping for newborn sessions to creating relaxed family portraits, this is where I share practical ideas and a peek at the process. Browse recent posts below or head to the full blog.</p>
        <div className="mt-6"><Link href="/blog" className="underline">Go to the Blog</Link></div>
      </Section>
    </>
  );
}
