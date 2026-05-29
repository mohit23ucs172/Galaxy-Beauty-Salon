"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Gift,
  Calendar,
  ShieldCheck,
  Percent,
  Headphones,
  Truck,
  Camera,
  Wine,
} from "lucide-react";

const perks = [
  {
    icon: Percent,
    title: "Exclusive Discounts",
    desc: "Up to 30% off every service, every visit. Savings that add up fast.",
    color: "rgba(183,110,121,0.12)",
    iconColor: "#B76E79",
  },
  {
    icon: Calendar,
    title: "Priority Booking",
    desc: "Skip the wait. Members get first access to slots and express check-in.",
    color: "rgba(232,196,184,0.2)",
    iconColor: "#8B6F6F",
  },
  {
    icon: Gift,
    title: "Monthly Gift Hampers",
    desc: "Curated luxury beauty products delivered to your door every month.",
    color: "rgba(247,231,206,0.4)",
    iconColor: "#B76E79",
  },
  {
    icon: ShieldCheck,
    title: "Product Guarantee",
    desc: "Only internationally certified, dermatologist-approved products on your skin.",
    color: "rgba(183,110,121,0.08)",
    iconColor: "#8B6F6F",
  },
  {
    icon: Headphones,
    title: "Personal Concierge",
    desc: "A dedicated beauty advisor available 7 days a week via WhatsApp.",
    color: "rgba(232,196,184,0.15)",
    iconColor: "#B76E79",
  },
  {
    icon: Truck,
    title: "Home Visit Services",
    desc: "Elite members enjoy professional services delivered to their home.",
    color: "rgba(183,110,121,0.1)",
    iconColor: "#8B6F6F",
  },
  {
    icon: Camera,
    title: "Free Annual Photoshoot",
    desc: "Elite members receive a complimentary professional portrait session yearly.",
    color: "rgba(247,231,206,0.35)",
    iconColor: "#B76E79",
  },
  {
    icon: Wine,
    title: "VIP Lounge Access",
    desc: "Relax in our exclusive members-only lounge with complimentary beverages.",
    color: "rgba(139,80,90,0.1)",
    iconColor: "#8B6F6F",
  },
];

export default function MembershipPerks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1A0A0A 0%, #2D1515 50%, #1A0A0A 100%)",
      }}
      ref={ref}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(183,110,121,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(183,110,121,1) 0, rgba(183,110,121,1) 1px, transparent 0, transparent 50%)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: "rgba(183,110,121,0.14)",
              border: "1px solid rgba(183,110,121,0.3)",
            }}
          >
            <Gift size={12} style={{ color: "#B76E79" }} />
            <span
              className="font-sans text-xs tracking-[0.25em] uppercase font-light"
              style={{ color: "#B76E79" }}
            >
              Member Benefits
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl font-medium text-white leading-tight"
          >
            Every Member
            <br />
            <span
              className="italic"
              style={{
                background:
                  "linear-gradient(135deg, #F7E7CE 0%, #E8C4B8 45%, #B76E79 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Feels Like Royalty
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-cormorant text-xl max-w-xl mx-auto font-light"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Beyond the treatments — membership comes with a lifestyle.
          </motion.p>
        </div>

        {/* Perks grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.07 + 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group rounded-2xl p-5 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(183,110,121,0.3)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 10px 40px rgba(183,110,121,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: perk.color }}
                >
                  <Icon size={18} style={{ color: perk.iconColor }} />
                </div>
                <h4
                  className="font-playfair text-base font-medium text-white mb-2"
                >
                  {perk.title}
                </h4>
                <p
                  className="font-sans text-xs font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {perk.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-14 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "rgba(183,110,121,0.08)",
            border: "1px solid rgba(183,110,121,0.2)",
          }}
        >
          <div>
            <h3 className="font-playfair text-2xl font-medium text-white mb-1">
              Not sure which plan fits you?
            </h3>
            <p
              className="font-sans text-sm font-light"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Book a free 15-minute consultation — we will recommend the perfect
              plan for your lifestyle.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 px-7 py-3.5 rounded-full text-sm font-medium font-sans text-white tracking-wide"
            style={{
              background: "linear-gradient(135deg, #B76E79 0%, #8B6F6F 100%)",
              boxShadow: "0 6px 24px rgba(183,110,121,0.3)",
            }}
          >
            <a href="/contact" style={{color:"white",textDecoration:"none"}}>Free Consultation →</a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
