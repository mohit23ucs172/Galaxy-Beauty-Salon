"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Scissors, Heart, Star, Droplets, Sun } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Bridal Makeup",
    subtitle: "Signature Collection",
    desc: "Flawless, long-lasting bridal looks crafted to make your most important day unforgettable.",
    price: "From ₹8,000",
    duration: "3–4 hrs",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    tag: "Most Popular",
  },
  {
    icon: Droplets,
    title: "Skincare Ritual",
    subtitle: "Premium Facial",
    desc: "Medical-grade facials tailored to your skin type using luxury European skincare brands.",
    price: "From ₹3,500",
    duration: "60–90 min",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    tag: null,
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    subtitle: "Expert Cut & Color",
    desc: "Precision cuts, balayage, and colour transformations by certified master stylists.",
    price: "From ₹2,000",
    duration: "1–3 hrs",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    tag: null,
  },
  {
    icon: Heart,
    title: "Luxury Spa",
    subtitle: "Body & Soul",
    desc: "Full-body relaxation rituals combining aromatherapy, hot stone massage, and body wraps.",
    price: "From ₹5,000",
    duration: "2 hrs",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
    tag: "New",
  },
  {
    icon: Star,
    title: "Nail Artistry",
    subtitle: "Gel & Extension",
    desc: "Custom nail art, gel extensions, and luxury manicure/pedicure experiences.",
    price: "From ₹1,500",
    duration: "45–90 min",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    tag: null,
  },
  {
    icon: Sun,
    title: "Party Glam",
    subtitle: "Event Makeup",
    desc: "Striking looks for parties, photoshoots, and special occasions designed to photograph beautifully.",
    price: "From ₹4,500",
    duration: "90 min",
    image: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=600&q=80",
    tag: null,
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#FDFAF6" }}>
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,196,184,0.5) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(183,110,121,0.4) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: "rgba(183,110,121,0.08)",
              border: "1px solid rgba(183,110,121,0.2)",
            }}
          >
            <Sparkles size={12} className="text-rosegold" />
            <span
              className="text-xs tracking-[0.25em] uppercase font-sans font-light"
              style={{ color: "#B76E79" }}
            >
              Our Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight"
            style={{ color: "#1A1A1A" }}
          >
            Premium Services
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
              Crafted for You
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-cormorant text-xl max-w-2xl mx-auto leading-relaxed font-light"
            style={{ color: "#8B6F6F" }}
          >
            Every service is a bespoke experience — designed around your unique
            beauty, delivered with uncompromising expertise.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-white tracking-wide transition-all duration-300 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #1A1A1A 0%, #2D1B1B 100%)",
            }}
          >
            View All Services
            <span style={{color:"#B76E79"}}>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const { icon: Icon } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(232,196,184,0.3)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 20px 60px rgba(183,110,121,0.15), 0 4px 20px rgba(0,0,0,0.06)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,10,10,0.7) 0%, transparent 60%)",
          }}
        />

        {/* Tag */}
        {service.tag && (
          <div
            className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs text-white font-medium"
            style={{ background: "rgba(183,110,121,0.9)" }}
          >
            {service.tag}
          </div>
        )}

        {/* Icon overlay */}
        <div
          className="absolute bottom-3 left-4 w-9 h-9 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Icon size={15} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase font-light" style={{ color: "#B76E79" }}>
              {service.subtitle}
            </p>
            <h3 className="font-playfair text-xl font-medium mt-0.5" style={{ color: "#1A1A1A" }}>
              {service.title}
            </h3>
          </div>
        </div>

        <p className="font-sans text-sm leading-relaxed mb-4 font-light" style={{ color: "#8B6F6F" }}>
          {service.desc}
        </p>

        <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(232,196,184,0.4)" }}>
          <span className="font-playfair text-base font-semibold" style={{ color: "#1A1A1A" }}>
            {service.price}
          </span>
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs" style={{ color: "#B76E79" }}>
              ⏱ {service.duration}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs px-4 py-2 rounded-full font-medium text-white transition-all"
              style={{
                background: "linear-gradient(135deg, #B76E79 0%, #8B6F6F 100%)",
              }}
              onClick={() => { window.location.href = "/booking"; }}
            >
              Book
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
