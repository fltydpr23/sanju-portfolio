import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanjana Vijai | Art Therapy for Neurodivergent Children",
  description: "A safe place where your child will be understood. Art therapy, sensory play, and emotional expression for neurodivergent children in a premium therapeutic environment.",
};

import SmoothScroll from "@/components/ui/SmoothScroll";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import SensoryPreloader from "@/components/ui/SensoryPreloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col font-sans text-charcoal bg-sand dark:bg-charcoal dark:text-sand transition-colors duration-1000">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SensoryPreloader />
          <div className="noise-overlay dark:opacity-[0.02]"></div>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
