import type { Metadata, Viewport } from "next";
import { Geist, Newsreader, Oswald } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { themeInitScript } from "@/lib/theme-script";
import { site } from "@/content/site";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} — AI Production Readiness for RevOps`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.legalName,
  keywords: [
    "RevOps AI",
    "AI production readiness",
    "AI governance",
    "revenue operations",
    "grow revenue with AI",
    "reduce revenue operations cost",
    "AI pilot to production",
    "forecast accuracy",
    "lead scoring evaluation",
    "AI reliability retainer",
    "EU AI Act compliance",
    "Ezydrag",
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.legalName,
    title: `${site.legalName} — AI Production Readiness for RevOps`,
    description: site.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Revenue team working through a pipeline review",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} — AI Production Readiness for RevOps`,
    description: site.description,
    images: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff8ed" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1815" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  areaServed: "Worldwide",
  slogan: site.tagline,
  knowsAbout: [
    "Revenue operations (RevOps)",
    "AI production readiness",
    "AI governance and EU AI Act compliance",
    "AI evaluation and monitoring",
    "Revenue forecasting reliability",
    "Lead scoring evaluation",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${oswald.variable} ${geist.variable} ${newsreader.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-bg font-body text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
