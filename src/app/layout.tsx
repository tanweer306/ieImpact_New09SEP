import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
export const metadata: Metadata = {
  title: "ieIMPACT - Professional Real Estate Appraisal Data Entry Services",
  description: "24/7 professional data entry services for real estate appraisers. Boost productivity, reduce costs, and deliver faster results with ieIMPACT.",
  keywords: "real estate appraisal, data entry, appraisal services, real estate data, appraisal support",
  openGraph: {
    title: "ieIMPACT - Professional Real Estate Appraisal Data Entry Services",
    description: "24/7 professional data entry services for real estate appraisers. Boost productivity, reduce costs, and deliver faster results.",
    type: "website"
  }
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en" data-oid="b1jifow" suppressHydrationWarning>
      <body className="antialiased" data-oid="hqec2:a">
        {children}
        <Script type="module" strategy="afterInteractive" src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js" data-oid="zxbuq9a" />

      </body>
    </html>;
}