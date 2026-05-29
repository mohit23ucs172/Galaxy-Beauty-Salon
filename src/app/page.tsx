import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import GallerySection from "@/components/sections/GallerySection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import VideoShowcase from "@/components/sections/VideoShowcase";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import MembershipPerks from "@/components/sections/MembershipPerks";
import FAQSection from "@/components/sections/FAQSection";
import BookingSection from "@/components/sections/BookingSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <AboutSection />
        <GallerySection />
        <BeforeAfterSection />
        <VideoShowcase />
        <TestimonialsSection />
        <PricingSection />
        <MembershipPerks />
        <FAQSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
