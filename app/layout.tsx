import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";

import "./globals.css";
import { SITE } from "@/lib/data";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-geist-mono",
});

const TITLE = `${SITE.name} — ${SITE.role}`;
const DESCRIPTION =
  "Personal portfolio of Zein Hammad Marhabah, a frontend engineer based in Jakarta, Indonesia, specializing in the React ecosystem.";

export const metadata: Metadata = {
  // Base for resolving relative URLs (OG image, canonical, etc.).
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    // Sub-pages set just their name; the tab shows "Resume — Zein …".
    template: `%s — ${SITE.name}`,
  },
  description: DESCRIPTION,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: [
    "Zein Hammad Marhabah",
    "frontend engineer",
    "React",
    "Next.js",
    "TypeScript",
    "web developer",
    "Jakarta",
    "Indonesia",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
    // app/opengraph-image.tsx is picked up automatically.
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@zeinhm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "pAMvEEuAeXb-mrR4L6PcIHtur_1B0mzu8hTZAn0XoX4",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B1322" },
    { media: "(prefers-color-scheme: light)", color: "#F3F4F7" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={geistMono.variable}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <SiteNav />
            <main className="w-full flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
