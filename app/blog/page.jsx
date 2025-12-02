// app/blog/page.jsx
import Link from "next/link";

export const dynamic = "force-static";

// TEMP: hard-coded list until lib/blog exists
const posts = [
  {
    slug: "newborn-photography-edmonton-prep",
    title: "Newborn Photography in Edmonton: How to Get Ready",
    date: "2025-09-10",
    description: "A simple checklist so your session feels easy and fun.",
  },
  {
    slug: "what-to-wear-family-photos-edmonton",
    title: "What to Wear for Family Photos",
    date: "2025-09-10",
    description: "Simple wardrobe ideas that photograph beautifully.",
  },
  {
    slug: "personalize-family-photos-edmonton",
    title: "How to Personalize Your Family Photos in Edmonton",
    date: "2025-09-10",
    description: "Make your session feel like you—props, locations, and more.",
  },
];

export default function BlogIndex() {
  return (
    <div className="container py-16">
      <h1 className="text-5xl font-semibold">Blog</h1>
      <p className="mt-2 text-gray-600">Short, practical posts for clients.</p>

      <div className="mt-10 space-y-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block rounded-2xl border border-gray-200 p-6 hover:shadow-sm"
          >
            <div className="text-xl font-semibold underline">{p.title}</div>
            {p.date ? (
              <div className="text-sm text-gray-500 mt-1">
                {new Date(p.date).toLocaleDateString()}
              </div>
            ) : null}
            {p.description ? (
              <p className="mt-2 text-gray-700">{p.description}</p>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
