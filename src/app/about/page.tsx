import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Galaxy Beauty Salon",
  description: "Learn the story behind Galaxy Beauty Salon — founded in 2012 in Maharajganj with a passion for natural beauty and expert artistry.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div
          className="relative py-20 text-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1A0A0A 0%, #2D1515 50%, #1A0A0A 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(183,110,121,0.12) 0%, transparent 60%)",
          }} />
          <div className="relative max-w-3xl mx-auto px-4">
            <p className="font-sans text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#B76E79" }}>
              ✦ Est. 2012
            </p>
            <h1 className="font-playfair text-5xl sm:text-6xl font-medium text-white mb-4 leading-tight">
              Our Story
            </h1>
            <p className="font-cormorant text-xl font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
              A decade of making women feel extraordinary in Maharajganj.
            </p>
          </div>
        </div>
        <AboutSection />
        <StatsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
