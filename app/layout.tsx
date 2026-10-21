import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breaxo Tech - Enterprise Software, AI Systems & IT Solutions",
  description:
    "Breaxo Tech is an AI-native technology company that builds scalable web platforms, custom AI systems, integrations, ERPs, and cloud infrastructure. We find the problem. We engineer the solution.",
  keywords:
    "software development, custom AI systems, web platforms, IT solutions, systems integration, cloud architecture, ERP, scalable software, AI automation",
  authors: [{ name: "Breaxo Tech" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://breax.otech.workers.dev/",
    title: "Breaxo Tech - Your Problem. Our Engineering.",
    description:
      "We find the problem. We engineer the solution. Scalable web platforms, custom AI systems, integrations, ERPs, and cloud architecture.",
    images: [{ url: "https://breax.otech.workers.dev/breaxo-logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breaxo Tech - We find the problem. We engineer the solution.",
    description:
      "An AI-native technology company building scalable web platforms, custom AI systems, integrations, ERPs, and cloud infrastructure.",
    images: ["https://breax.otech.workers.dev/breaxo-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Breaxo Tech",
              url: "https://breax.otech.workers.dev",
              logo: "https://breax.otech.workers.dev/breaxo-logo.png",
              slogan: "We find the problem. We engineer the solution.",
              description:
                "An AI-native technology company that builds scalable web platforms, custom AI systems, integrations, ERPs, and cloud infrastructure.",
              email: "breaxotech.contact@gmail.com",
              knowsAbout: [
                "Scalable Web Platforms",
                "Custom AI Systems & Automation",
                "Systems Integration & Data Sync",
                "ERP & Business Operations",
                "Cloud Architecture & APIs",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
