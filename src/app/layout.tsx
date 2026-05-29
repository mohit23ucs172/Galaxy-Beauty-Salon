import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import CursorGlow from "@/components/ui/CursorGlow";
import LoadingScreen from "@/components/ui/LoadingScreen";
import OfferBanner from "@/components/ui/OfferBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Galaxy Beauty Salon | Premium Salon in Maharajganj",
  description:
    "Experience beautiful transformations at Galaxy Beauty Salon, Maharajganj. Expert makeup artists, skincare specialists, and hair stylists — where art meets natural beauty.",
  keywords:
    "beauty salon, makeup artist, skincare, hair styling, Galaxy Beauty Salon, Maharajganj, Uttar Pradesh, bridal makeup",
  openGraph: {
    title: "Galaxy Beauty Salon",
    description: "Where Art Meets Natural Beauty",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased">
        <LoadingScreen />
        <OfferBanner />
        <ScrollProgressBar />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
