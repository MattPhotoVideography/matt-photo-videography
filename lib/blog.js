// lib/blog.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

function readAllFiles() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const fileSlug = file.replace(/\.mdx?$/, "");
      const slug = (data.slug || fileSlug).trim();
      return {
        slug,
        fileSlug,
        file,
        content,
        title: data.title || fileSlug,
        description: data.description || "",
        date: data.date || null,
        draft: !!data.draft,
        canonical: data.canonical || null,
      };
    });
}

export function getAllPosts() {
  return readAllFiles()
    .filter((p) => !p.draft)
    .sort((a, b) => (String(b.date || "")).localeCompare(String(a.date || "")));
}

export function getPostBySlug(slug) {
  const posts = readAllFiles();
  // match by front-matter slug first, then by filename (without extension)
  return posts.find((p) => p.slug === slug || p.fileSlug === slug) || null;
}
