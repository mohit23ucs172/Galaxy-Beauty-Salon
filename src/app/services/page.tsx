import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import FAQSection from "@/components/sections/FAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Galaxy Beauty Salon",
  description: "Explore our full range of beauty services — bridal makeup, skincare, hair styling, nails, and spa treatments in Maharajganj.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page hero */}
        <div
          className="relative py-20 text-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1A0A0A 0%, #2D1515 50%, #1A0A0A 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(183,110,121,0.12) 0%, transparent 60%)",
          }} />
          <div className="relative max-w-3xl mx-auto px-4">
            <p className="font-sans text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#B76E79" }}>
              ✦ What We Offer
            </p>
            <h1 className="font-playfair text-5xl sm:text-6xl font-medium text-white mb-4 leading-tight">
              Our Services
            </h1>
            <p className="font-cormorant text-xl font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
              Every service crafted with care, skill, and premium products.
            </p>
          </div>
        </div>
        <ServicesSection />
        <StatsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
