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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-charcoal bg-sand">
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}
