// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // tells Next to emit static HTML/CSS/JS
  images: { unoptimized: true } // only if you use next/image; you’re mostly using <img>, so safe
};
export default nextConfig;
