"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ananya Verma",
    role: "Bride, October 2024",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    rating: 5,
    text: "I cried when I saw myself in the mirror on my wedding day. Priya understood exactly what I wanted — natural but elevated. Every single photo is perfect. Galaxy Beauty Salon made my day unforgettable.",
    service: "Bridal Makeup",
    location: "Maharajganj",
  },
  {
    id: 2,
    name: "Meera Kapoor",
    role: "Regular Client",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    rating: 5,
    text: "I have been coming here for 3 years and the consistency is remarkable. My skin has genuinely transformed since I started the monthly facial ritual. The team remembers your preferences — that personal touch means everything.",
    service: "Skincare Ritual",
    location: "Nautanwa",
  },
  {
    id: 3,
    name: "Shreya Gupta",
    role: "Makeup Artist",
    avatar: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&q=80",
    rating: 5,
    text: "As a fellow makeup artist I have very high standards. Galaxy Beauty Salon exceeded all of them. The products, the technique, the attention to skin prep — it is genuinely world-class. I now refer all my clients here.",
    service: "Editorial Makeup",
    location: "Gorakhpur",
  },
  {
    id: 4,
    name: "Pooja Rani",
    role: "Corporate Client",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&q=80",
    rating: 5,
    text: "I come every month for my hair treatment and blow-dry. The quality is absolutely consistent and the ambiance makes it feel like a real luxury retreat. Worth every rupee.",
    service: "Hair Treatment",
    location: "Maharajganj",
  },
  {
    id: 5,
    name: "Divya Sharma",
    role: "Event Host",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    rating: 5,
    text: "For my TEDx talk I needed to look sharp on camera under harsh lighting. Riya nailed the brief completely. My makeup lasted 8 hours and looked flawless in every recording. Absolutely professional.",
    service: "Event Makeup",
    location: "Maharajganj",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((p) => (p + dir + testimonials.length) % testimonials.length);
    startAuto();
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.97 }),
  };

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "#F5EDE3" }}
      ref={ref}
    >
      {/* Decorative */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,196,184,0.6) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(183,110,121,0.5) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: "rgba(183,110,121,0.1)", border: "1px solid rgba(183,110,121,0.25)" }}
          >
            <Star size={12} fill="#B76E79" style={{ color: "#B76E79" }} />
            <span className="font-sans text-xs tracking-[0.25em] uppercase font-light" style={{ color: "#B76E79" }}>
              Client Love
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight"
            style={{ color: "#1A1A1A" }}
          >
            Words from Our
            <br />
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #B76E79 0%, #E8C4B8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Happy Clients
            </span>
          </motion.h2>
        </div>

        {/* Featured review */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <FeaturedReview review={testimonials[current]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav arrows */}
          <button
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: "white",
              border: "1px solid rgba(183,110,121,0.2)",
              boxShadow: "0 4px 20px rgba(183,110,121,0.12)",
            }}
          >
            <ChevronLeft size={18} style={{ color: "#B76E79" }} />
          </button>

          <button
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #B76E79, #8B6F6F)",
              boxShadow: "0 4px 20px rgba(183,110,121,0.3)",
            }}
          >
            <ChevronRight size={18} className="text-white" />
          </button>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); startAuto(); }}
              className="transition-all duration-400"
              style={{
                width: i === current ? 24 : 7,
                height: 7,
                borderRadius: 4,
                background: i === current ? "#B76E79" : "rgba(183,110,121,0.25)",
              }}
            />
          ))}
        </div>

        {/* Mini cards strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14"
        >
          {testimonials.slice(0, 4).map((review, i) => (
            <MiniReviewCard
              key={review.id}
              review={review}
              isActive={i === current}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedReview({ review }: { review: (typeof testimonials)[0] }) {
  return (
    <div
      className="relative rounded-3xl p-8 lg:p-12 overflow-hidden"
      style={{
        background: "white",
        boxShadow: "0 30px 80px rgba(183,110,121,0.12), 0 8px 30px rgba(0,0,0,0.06)",
      }}
    >
      {/* Big quote mark */}
      <div
        className="absolute top-6 right-8 opacity-8"
        style={{ opacity: 0.07 }}
      >
        <Quote size={120} style={{ color: "#B76E79" }} />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={16}
            fill={s <= review.rating ? "#B76E79" : "none"}
            style={{ color: "#B76E79" }}
          />
        ))}
      </div>

      {/* Text */}
      <blockquote className="font-cormorant text-2xl lg:text-3xl leading-relaxed font-light mb-8 max-w-3xl"
        style={{ color: "#1A1A1A" }}
      >
        &ldquo;{review.text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={review.avatar}
          alt={review.name}
          className="w-14 h-14 rounded-full object-cover"
          style={{ border: "3px solid rgba(183,110,121,0.3)" }}
        />
        <div>
          <p className="font-playfair text-lg font-medium" style={{ color: "#1A1A1A" }}>
            {review.name}
          </p>
          <p className="font-sans text-sm font-light" style={{ color: "#8B6F6F" }}>
            {review.role} · {review.location}
          </p>
        </div>

        <div className="ml-auto hidden sm:block">
          <span
            className="font-sans text-xs px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(183,110,121,0.08)",
              border: "1px solid rgba(183,110,121,0.2)",
              color: "#B76E79",
            }}
          >
            {review.service}
          </span>
        </div>
      </div>
    </div>
  );
}

function MiniReviewCard({
  review,
  isActive,
  onClick,
}: {
  review: (typeof testimonials)[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="text-left rounded-2xl p-4 transition-all duration-300 w-full"
      style={{
        background: isActive ? "white" : "rgba(255,255,255,0.5)",
        border: isActive
          ? "1px solid rgba(183,110,121,0.3)"
          : "1px solid rgba(183,110,121,0.1)",
        boxShadow: isActive
          ? "0 8px 30px rgba(183,110,121,0.12)"
          : "none",
      }}
    >
      <div className="flex gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={10}
            fill={s <= review.rating ? "#B76E79" : "none"}
            style={{ color: "#B76E79" }}
          />
        ))}
      </div>
      <p
        className="font-sans text-xs leading-relaxed line-clamp-3 font-light"
        style={{ color: isActive ? "#1A1A1A" : "#8B6F6F" }}
      >
        {review.text}
      </p>
      <div className="flex items-center gap-2 mt-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={review.avatar}
          alt={review.name}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="font-sans text-xs font-medium" style={{ color: "#1A1A1A" }}>
          {review.name.split(" ")[0]}
        </span>
      </div>
    </button>
  );
}
