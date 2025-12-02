import site from "@/content/site.json";
export default function sitemap() {
  const urls = ["", "/about", "/portfolio", "/services", "/blog", "/contact", "/privacy", "/faq", "/process", "/behind-the-lens"];
  const serviceUrls = ["/services/newborn","/services/baby","/services/family","/services/maternity","/services/toddler","/services/graduation","/services/commercial"];
  const now = new Date().toISOString();
  return [...urls, ...serviceUrls].map(p => ({ url: site.url + p, lastModified: now, changeFrequency: "weekly", priority: p === "" ? 1.0 : 0.7 }));
}
