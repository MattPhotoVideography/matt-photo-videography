// app/blog/[slug]/page.jsx
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { marked } from "marked";
import Section from "@/components/Section";

export const dynamic = "force-static";

export async function generateStaticParams() {
  // build routes from normalized slugs
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.description || undefined,
    alternates: post.canonical ? { canonical: post.canonical } : undefined,
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return <div className="container py-20">Not found</div>;

  const html = marked.parse(post.content || "");

  return (
    <Section title={post.title}>
      {post.date && (
        <p className="text-sm text-gray-500 mb-4">
          {new Date(post.date).toLocaleDateString()}
        </p>
      )}
      <article className="prose-custom" dangerouslySetInnerHTML={{ __html: html }} />
    </Section>
  );
}
