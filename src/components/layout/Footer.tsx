"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, MapPin, Phone, Mail, ArrowRight, Sparkles } from "lucide-react";

const navGroups = [
  {
    title: "Studio",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Gallery", href: "/gallery" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Bridal Makeup", href: "/services#makeup" },
      { label: "Skincare", href: "/services#skincare" },
      { label: "Hair Styling", href: "/services#hair" },
      { label: "Nail Artistry", href: "/services#nails" },
      { label: "Luxury Spa", href: "/services#spa" },
    ],
  },
  {
    title: "Visit Us",
    links: [
      { label: "Book Appointment", href: "/booking" },
      { label: "Pricing", href: "/pricing" },
      { label: "Membership", href: "/pricing#membership" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D0505 0%, #1A0A0A 40%, #0D0505 100%)",
      }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-1 opacity-60"
        style={{
          background: "linear-gradient(to right, transparent, #B76E79, transparent)",
        }}
      />

      {/* Background radial */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #B76E79 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      {/* Newsletter bar */}
      <div
        className="relative border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-2 mb-2 justify-center lg:justify-start">
                <Sparkles size={14} className="text-rosegold" style={{ color: "#B76E79" }} />
                <span className="font-sans text-xs tracking-widest uppercase font-light" style={{ color: "#B76E79" }}>
                  Stay Connected
                </span>
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-white">
                Get Exclusive Beauty Tips &
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #F7E7CE 0%, #B76E79 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Member-Only Offers
                </span>
              </h3>
            </div>

            <div className="w-full lg:w-auto">
              <div className="flex gap-0 max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3.5 rounded-l-full text-sm font-sans font-light outline-none"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRight: "none",
                    color: "white",
                  }}
                />
                <button
                  className="px-6 py-3.5 rounded-r-full text-sm font-medium text-white whitespace-nowrap flex items-center gap-2 group"
                  style={{
                    background: "linear-gradient(135deg, #B76E79 0%, #8B6F6F 100%)",
                  }}
                >
                  Subscribe
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <p className="font-sans text-xs text-center lg:text-left mt-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/galaxy-logo.jpg"
                alt="Galaxy Beauty Salon"
                width={56}
                height={56}
                className="rounded-full object-cover flex-shrink-0"
                style={{ border: "2px solid rgba(183,110,121,0.4)", boxShadow: "0 0 20px rgba(183,110,121,0.25)" }}
              />
              <div>
                <h2 className="font-playfair text-2xl font-semibold text-white leading-tight">
                  Galaxy
                </h2>
                <p className="font-cormorant text-sm tracking-[0.3em] uppercase font-light" style={{ color: "#B76E79" }}>
                  Beauty Salon
                </p>
              </div>
            </div>

            <p className="font-sans text-sm leading-relaxed font-light" style={{ color: "rgba(255,255,255,0.45)" }}>
              Where art meets natural beauty. Luxury beauty services delivered
              by certified professionals who treat beauty as a true art form.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              {[
                { icon: MapPin, text: "Mazar Gali, Near Bus Station, Maharajganj, UP 273303" },
                { icon: Phone, text: "+91 73804 89240" },
                { icon: Mail, text: "galaxy._salon on Instagram" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={14} style={{ color: "#B76E79", marginTop: 2, flexShrink: 0 }} />
                  <span className="font-sans text-sm font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/galaxy._salon" },
                { Icon: Youtube, href: "https://www.youtube.com/@galaxybeautysalon" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(183,110,121,0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(183,110,121,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  <Icon size={15} className="text-white/60" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="font-sans text-xs tracking-widest uppercase font-semibold" style={{ color: "#B76E79" }}>
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm font-light transition-colors duration-200 group flex items-center gap-0"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(247,231,206,0.9)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)";
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-14 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="font-sans text-xs font-light" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2025 Galaxy Beauty Salon. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/contact" },
              { label: "Terms of Service", href: "/contact" },
              { label: "Cookie Policy", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-sans text-xs font-light transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.25)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(183,110,121,0.8)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.25)"; }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/917068247380"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 8px 30px rgba(37,211,102,0.4)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </footer>
  );
}
