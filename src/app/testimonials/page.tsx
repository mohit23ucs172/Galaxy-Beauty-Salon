import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsSection from "@/components/sections/StatsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Galaxy Beauty Salon",
  description: "Read what our happy clients say about Galaxy Beauty Salon, Maharajganj. Real reviews from real women.",
};

export default function TestimonialsPage() {
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
              ✦ Client Love
            </p>
            <h1 className="font-playfair text-5xl sm:text-6xl font-medium text-white mb-4 leading-tight">
              What They Say
            </h1>
            <p className="font-cormorant text-xl font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
              Honest words from the women we have had the honour to serve.
            </p>
          </div>
        </div>
        <TestimonialsSection />
        <StatsSection />
      </main>
      <Footer />
    </>
  );
}
