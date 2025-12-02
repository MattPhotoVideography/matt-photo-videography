import Section from "@/components/Section";
import portfolio from "@/content/portfolio.json";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = { title: "Portfolio" };

export default function Portfolio() {
  return (
    <Section title="Portfolio" subtitle="Curated selections across sessions.">
      <GalleryGrid images={portfolio.images} />
    </Section>
  );
}
