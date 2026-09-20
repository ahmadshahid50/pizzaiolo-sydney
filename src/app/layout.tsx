import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, localBusinessSchema, websiteSchema } from "@/lib/schema";
import { site, tracking } from "@/data/site";
import "./globals.css";

/** Display face — a warm, slightly characterful serif for headings. */
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

/** Text face — neutral, highly legible at small sizes. */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Woodfire Pizza Catering Sydney | Fresh and Handmade",
    template: `%s | ${site.fullName}`,
  },
  description:
    "Enjoy authentic, fresh woodfire pizza catering Sydney events need with Pizzaiolo Woodfire Pizza—delivering artisan pizzas cooked to perfection at your location.",
  applicationName: site.fullName,
  alternates: { canonical: "/" },
  verification: { google: tracking.googleSiteVerification },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: site.url,
    siteName: site.fullName,
    title: "Woodfire Pizza Catering Sydney | Fresh and Handmade",
    description: site.description,
    images: [
      {
        url: "/images/og-pizzaiolo-woodfire-catering.jpg",
        width: 1200,
        height: 630,
        alt: "Flames inside the Pizzaiolo woodfire oven with a pizza on the peel",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: "/images/branding/pizzaiolo-logo.png", type: "image/png" }],
    apple: [{ url: "/images/branding/pizzaiolo-logo.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a09",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-cream-50"
        >
          Skip to content
        </a>

        <Header />
        <main id="main">{children}</main>
        <Footer />

        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />

        {/*
          Google Ads conversion tracking, carried across from the existing
          site. Removing this would silently break the client's ad reporting.
        */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${tracking.googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${tracking.googleAdsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
