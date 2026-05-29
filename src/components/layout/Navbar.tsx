"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Makeup", href: "/services#makeup" },
      { label: "Skincare", href: "/services#skincare" },
      { label: "Hair", href: "/services#hair" },
      { label: "Nails", href: "/services#nails" },
      { label: "Spa", href: "/services#spa" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Pricing", href: "/pricing" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      {/* Scroll-based background layer */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-20 z-40 pointer-events-none"
        style={{
          opacity: navOpacity,
          background:
            "linear-gradient(to bottom, rgba(26,10,10,0.95) 0%, rgba(26,10,10,0.85) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <Image
                  src="/galaxy-logo.jpg"
                  alt="Galaxy Beauty Salon"
                  width={52}
                  height={52}
                  className="rounded-full object-cover"
                  style={{
                    border: "2px solid rgba(183,110,121,0.5)",
                    boxShadow: "0 0 16px rgba(183,110,121,0.3)",
                  }}
                  priority
                />
              </motion.div>
              <div className="ml-2.5">
                <span className="font-playfair text-lg font-semibold text-white leading-tight tracking-wide block group-hover:text-champagne transition-colors duration-300">
                  Galaxy
                </span>
                <span className="font-cormorant text-[10px] tracking-[0.28em] text-blush uppercase font-light block">
                  Beauty Salon
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.submenu && handleDropdownEnter(link.label)
                  }
                  onMouseLeave={() => link.submenu && handleDropdownLeave()}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 font-sans text-sm font-light text-white/80 hover:text-champagne transition-all duration-300 tracking-wide group relative"
                  >
                    {link.label}
                    {link.submenu && (
                      <ChevronDown
                        size={12}
                        className={clsx(
                          "transition-transform duration-300",
                          activeDropdown === link.label ? "rotate-180" : ""
                        )}
                      />
                    )}
                    {/* Underline hover effect */}
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-rosegold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.submenu && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-44 rounded-xl overflow-hidden glass border border-white/10 shadow-2xl"
                        style={{
                          background: "rgba(26,10,10,0.95)",
                          backdropFilter: "blur(20px)",
                        }}
                      >
                        {link.submenu.map((item, i) => (
                          <motion.a
                            key={item.label}
                            href={item.href}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04 }}
                            className="block px-4 py-3 text-sm text-white/70 hover:text-champagne hover:bg-white/5 transition-all duration-200 font-light tracking-wide border-b border-white/5 last:border-0"
                          >
                            {item.label}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Right */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+917380489240"
                className="flex items-center gap-2 text-white/70 hover:text-champagne text-sm font-light transition-colors duration-300"
              >
                <Phone size={14} />
                <span>+91 73804 89240</span>
              </a>
              <Link
                href="/booking"
                className="relative px-5 py-2.5 rounded-full text-sm font-medium overflow-hidden group"
                style={{
                  background:
                    "linear-gradient(135deg, #B76E79 0%, #8B6F6F 100%)",
                }}
              >
                <span className="relative z-10 text-white tracking-wide">
                  Book Now
                </span>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #E8C4B8 0%, #B76E79 100%)",
                  }}
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{
              background: "rgba(20, 8, 8, 0.98)",
              backdropFilter: "blur(30px)",
            }}
          >
            {/* Decorative element */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, #B76E79 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
            />

            <div className="flex flex-col h-full px-8 pt-28 pb-12">
              <nav className="flex-1 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 font-playfair text-2xl text-white/80 hover:text-champagne transition-colors duration-300 border-b border-white/8"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <a
                  href="tel:+917380489240"
                  className="flex items-center gap-3 text-white/60 text-sm"
                >
                  <Phone size={16} />
                  +91 73804 89240
                </a>
                <Link
                  href="/booking"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-4 rounded-full text-white font-medium text-sm tracking-wide"
                  style={{
                    background:
                      "linear-gradient(135deg, #B76E79 0%, #8B6F6F 100%)",
                  }}
                >
                  Book Appointment
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
