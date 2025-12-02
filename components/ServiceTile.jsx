// components/ServiceTile.jsx
import Link from "next/link";
import Image from "next/image";

export default function ServiceTile({
  title,
  slug,
  imgSrc,
  imgAlt,
  priority = false,
}) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group relative block overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring"
    >
      {/* Background image */}
      <div className="relative aspect-[4/3]">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          priority={priority}
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/35 transition-colors" />
      </div>

      {/* Centered text + button */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h3 className="text-white drop-shadow text-xl md:text-2xl font-semibold">
          {title}
        </h3>
        <span className="mt-3 inline-block rounded-xl bg-white/80 px-4 py-2 text-sm font-medium text-ink group-hover:bg-white transition-colors">
          Explore
        </span>
      </div>
    </Link>
  );
}
