import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web Design, SEO & Reputation Management Agency London | NetTrackers",
  description:
    "NetTrackers is a full-service digital agency in London delivering web design, SEO, online reputation management, and bespoke software for UK businesses. No contracts. Real results.",
  keywords: [
    "web design agency london",
    "SEO agency london",
    "digital agency UK",
    "online reputation management",
    "bespoke software development",
    "full-service digital agency",
    "web design UK",
    "SEO services UK",
  ],
  authors: [{ name: "NetTrackers", url: "https://nettrackers.co.uk" }],
  creator: "NetTrackers",
  publisher: "NetTrackers",
  metadataBase: new URL("https://nettrackers.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://nettrackers.co.uk",
    title: "Web Design, SEO & Reputation Management Agency London | NetTrackers",
    description:
      "NetTrackers is a full-service digital agency in London delivering web design, SEO, online reputation management, and bespoke software for UK businesses.",
    siteName: "NetTrackers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design, SEO & Reputation Management Agency London | NetTrackers",
    description:
      "Full-service digital agency in London. Web design, SEO, ORM and bespoke software. No contracts. Real results.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://nettrackers.co.uk/#organization",
      name: "NetTrackers",
      url: "https://nettrackers.co.uk",
      logo: "https://nettrackers.co.uk/logo.png",
      description:
        "Full-service digital agency in London delivering web design, SEO, online reputation management, and bespoke software for UK businesses.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "26 Bunning Way",
        addressLocality: "London",
        postalCode: "N7 9UN",
        addressCountry: "GB",
      },
      email: "hello@nettrackers.co.uk",
      areaServed: [
        "London",
        "Manchester",
        "Birmingham",
        "Leeds",
        "Bristol",
        "Edinburgh",
        "Glasgow",
        "Liverpool",
        "Sheffield",
        "Nottingham",
      ],
      serviceType: [
        "Web Design",
        "SEO Services",
        "Online Reputation Management",
        "CRM Development",
        "ERP Development",
      ],
      priceRange: "£££",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a full-service digital agency do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A full-service digital agency handles web design, SEO, reputation management, and software development under one roof. Rather than hiring four separate specialists, you get one team with one strategy — all focused on the same commercial goal.",
          },
        },
        {
          "@type": "Question",
          name: "How much does web design cost in the UK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A professional business website from NetTrackers starts from £3,000. E-commerce builds typically range from £8,000 to £25,000, depending on scope. Every project is fixed-price before we start — no surprises.",
          },
        },
        {
          "@type": "Question",
          name: "How long does SEO take to show results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most clients see initial ranking movement within 3 months. Meaningful lead growth typically comes between months 4 and 8.",
          },
        },
        {
          "@type": "Question",
          name: "Do you tie clients into long-term contracts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We operate month-to-month with no minimum contract. You stay because the results are working — not because you are contractually obligated to.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-bg text-white antialiased`}>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
