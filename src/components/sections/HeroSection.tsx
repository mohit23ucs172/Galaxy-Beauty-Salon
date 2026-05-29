"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Sparkles, Star, ArrowDown, Calendar, Clock, ChevronRight } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1560066984-138daaa8dbb2?w=1920&q=90",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=90",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=90",
];

const floatingElements = [
  { x: "10%", y: "25%", size: 80, delay: 0, duration: 7 },
  { x: "85%", y: "15%", size: 50, delay: 1.5, duration: 9 },
  { x: "70%", y: "75%", size: 65, delay: 0.8, duration: 8 },
  { x: "20%", y: "80%", size: 40, delay: 2, duration: 6 },
];

const stats = [
  { value: "5K+", label: "Happy Clients" },
  { value: "12+", label: "Years Experience" },
  { value: "98%", label: "Satisfaction" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Image carousel
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mouse glow tracking
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 + 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] max-h-[1000px] overflow-hidden"
    >
      {/* Mouse glow effect */}
      <motion.div
        className="fixed pointer-events-none z-10 rounded-full opacity-20 mix-blend-screen"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(183,110,121,0.8) 0%, transparent 70%)",
          left: mousePos.x - 250,
          top: mousePos.y - 250,
          transition: "left 0.6s ease-out, top 0.6s ease-out",
        }}
      />

      {/* Background images with parallax */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <AnimatePresence mode="sync">
          {heroImages.map((img, i) =>
            i === currentImage ? (
              <motion.div
                key={img}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt="Luxury beauty"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Layered gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,5,5,0.85) 0%, rgba(15,5,5,0.5) 40%, rgba(15,5,5,0.3) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,3,3,0.9) 0%, transparent 40%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(183,110,121,0.12) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      {/* Floating decorative orbs */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: el.x,
            top: el.y,
            width: el.size,
            height: el.size,
            background:
              "radial-gradient(circle, rgba(183,110,121,0.25) 0%, rgba(232,196,184,0.08) 60%, transparent 100%)",
            border: "1px solid rgba(183,110,121,0.15)",
          }}
          animate={{
            y: [-12, 12, -12],
            x: [-6, 6, -6],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-20 h-full flex flex-col justify-center"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: Text content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                custom={0}
                className="inline-flex items-center gap-2"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: "rgba(183,110,121,0.15)",
                    border: "1px solid rgba(183,110,121,0.3)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Sparkles size={13} className="text-blush" />
                  <span className="text-blush text-xs tracking-[0.25em] uppercase font-light font-sans">
                    Maharajganj&apos;s Premier Beauty Salon
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={11} fill="#B76E79" className="text-rosegold" />
                  ))}
                  <span className="text-white/50 text-xs ml-1 font-sans">5.0</span>
                </div>
              </motion.div>

              {/* Headline */}
              <div className="overflow-hidden">
                <motion.h1
                  variants={textVariants}
                  initial="hidden"
                  animate={isLoaded ? "visible" : "hidden"}
                  custom={1}
                  className="font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-white leading-[1.05] tracking-tight"
                >
                  Where Art
                  <br />
                  <span
                    className="italic"
                    style={{
                      background: "linear-gradient(135deg, #F7E7CE 0%, #E8C4B8 50%, #B76E79 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Meets Natural Beauty
                  </span>
                </motion.h1>
              </div>

              {/* Subheadline */}
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                custom={2}
                className="font-cormorant text-xl text-white/60 max-w-lg leading-relaxed font-light"
              >
                Discover transformative beauty experiences crafted for every
                woman. Expert artists, premium care, and results that speak for themselves.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                custom={3}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/booking"
                  className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #B76E79 0%, #8B6F6F 100%)",
                  }}
                >
                  <span className="relative z-10 tracking-wide">Book Your Session</span>
                  <ChevronRight size={15} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      background: "linear-gradient(135deg, #E8C4B8 0%, #B76E79 100%)",
                    }}
                  />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
                  style={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Explore Services
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                custom={4}
                className="flex gap-8 pt-2"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="font-playfair text-2xl font-semibold"
                      style={{
                        background: "linear-gradient(135deg, #F7E7CE 0%, #B76E79 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {stat.value}
                    </span>
                    <span className="font-sans text-xs text-white/40 tracking-wide uppercase mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Glassmorphism booking card */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={isLoaded ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="rounded-2xl p-6 sm:p-7"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(30px)",
                  WebkitBackdropFilter: "blur(30px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="font-playfair text-lg text-white font-medium">
                      Quick Booking
                    </h3>
                    <p className="font-sans text-xs text-white/40 mt-0.5 tracking-wide">
                      Reserve your spot in 60 seconds
                    </p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(183,110,121,0.2)" }}
                  >
                    <Sparkles size={16} className="text-rosegold" />
                  </div>
                </div>

                {/* Service selector */}
                <div className="space-y-3 mb-5">
                  <label className="font-sans text-xs text-white/50 tracking-widest uppercase">
                    Select Service
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Makeup", "Skincare", "Hair", "Nails"].map((s, i) => (
                      <motion.button
                        key={s}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium transition-all duration-200 ${
                          i === 0
                            ? "text-white"
                            : "text-white/50 hover:text-white/80"
                        }`}
                        style={{
                          background: i === 0
                            ? "linear-gradient(135deg, rgba(183,110,121,0.6), rgba(139,111,111,0.6))"
                            : "rgba(255,255,255,0.05)",
                          border: i === 0
                            ? "1px solid rgba(183,110,121,0.4)"
                            : "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-2 mb-3">
                  <label className="font-sans text-xs text-white/50 tracking-widest uppercase">
                    Date & Time
                  </label>
                  <div className="flex gap-2">
                    <button
                      className="flex-1 flex items-center gap-2 px-3 py-3 rounded-xl text-white/60 text-xs transition-colors hover:text-white/80"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <Calendar size={13} className="text-rosegold" />
                      Select Date
                    </button>
                    <button
                      className="flex-1 flex items-center gap-2 px-3 py-3 rounded-xl text-white/60 text-xs transition-colors hover:text-white/80"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <Clock size={13} className="text-rosegold" />
                      Select Time
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="my-4 h-px"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />

                {/* Book button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl text-sm font-medium text-white tracking-wide relative overflow-hidden group"
                  style={{
                    background: "linear-gradient(135deg, #B76E79 0%, #8B6F6F 100%)",
                    boxShadow: "0 8px 30px rgba(183,110,121,0.4)",
                  }}
                >
                  <a href="/booking" style={{color:"white",textDecoration:"none"}}>Book Appointment →</a>
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, #E8C4B8 0%, #B76E79 100%)",
                    }}
                  />
                </motion.button>

                <p className="font-sans text-center text-xs text-white/25 mt-3 tracking-wide">
                  Free cancellation up to 24 hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Image indicators */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className="transition-all duration-500"
            style={{
              width: i === currentImage ? 24 : 6,
              height: 6,
              borderRadius: 3,
              background: i === currentImage
                ? "#B76E79"
                : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-sans rotate-90 origin-center mb-2">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/40"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
