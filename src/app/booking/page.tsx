import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingSection from "@/components/sections/BookingSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment | Galaxy Beauty Salon",
  description: "Book your beauty appointment at Galaxy Beauty Salon, Maharajganj. Choose your service, date, time, and artist in minutes.",
};

export default function BookingPage() {
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
              ✦ Reserve Your Seat
            </p>
            <h1 className="font-playfair text-5xl sm:text-6xl font-medium text-white mb-4 leading-tight">
              Book Appointment
            </h1>
            <p className="font-cormorant text-xl font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
              Takes less than 2 minutes. Free cancellation up to 24 hours before.
            </p>
          </div>
        </div>
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
