import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Panel",
    template: "%s · Panel",
  },
  description: "Internal dashboard panel.",
  // This is an internal dashboard panel, not a public marketing site — keep it
  // out of search entirely instead of doing any SEO/GEO work.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Providers>
          <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
