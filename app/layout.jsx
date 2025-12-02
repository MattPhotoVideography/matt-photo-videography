// app/layout.jsx
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import site from "@/content/site.json";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.businessName} — ${site.tagline}`, template: `%s | ${site.businessName}` },
  description: "Professional photography and videography serving Edmonton and surrounding areas.",
  openGraph: {
    title: site.businessName,
    description: "Professional photography and videography in Alberta.",
    url: site.url,
    siteName: site.businessName,
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
    locale: "en_CA",
    type: "website",
  },
  alternates: { canonical: site.url },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
