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
    default: `${site.legalName} — Marketing AI Automation`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.legalName,
  keywords: [
    "marketing AI",
    "marketing automation",
    "campaign operations",
    "lead routing",
    "attribution agents",
    "Ezydrag",
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.legalName,
    title: `${site.legalName} — Marketing AI Automation`,
    description: site.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Marketing studio floor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} — Marketing AI Automation`,
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
  "@type": "Organization",
  name: site.legalName,
  url: site.url,
  email: site.email,
  description: site.description,
  areaServed: "Worldwide",
  slogan: site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${oswald.variable} ${geist.variable} ${newsreader.variable} h-full antialiased`}
    >
      <head>
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
