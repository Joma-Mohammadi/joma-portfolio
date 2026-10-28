import type { Metadata, Viewport } from "next";
import { Bebas_Neue, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-config";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { publicFileExists } from "@/lib/public-file";

const display = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const body = Outfit({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: { default: `${siteConfig.name} | ${siteConfig.title}`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050612" },
    { media: "(prefers-color-scheme: light)", color: "#f4f6fc" },
  ],
};

// Runs before first paint: stored choice, else system preference. Prevents theme flash.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var r=document.documentElement;r.classList.add(d?'dark':'light');r.style.colorScheme=d?'dark':'light';}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cvHref = publicFileExists(siteConfig.cv.path) ? siteConfig.cv.path : null;

  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${mono.variable} ${body.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen font-body">
        <a
          href="#content"
          className="sr-only z-50 rounded-md bg-surface px-4 py-2 text-fg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <div aria-hidden className="bg-scene" />
        <Sidebar cvHref={cvHref} />
        <MobileNavigation cvHref={cvHref} />
        <main id="content" className="relative z-10 lg:pl-[205px]">
          {children}
        </main>
      </body>
    </html>
  );
}
