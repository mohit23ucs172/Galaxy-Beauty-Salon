"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check, Sparkles, Crown, Star, Zap, Tag, Flame } from "lucide-react";
import { getActiveOffer } from "@/components/ui/OfferBanner";

const plans = [
  {
    id: "essential",
    name: "Essential",
    icon: Star,
    tagline: "Perfect for occasional visits",
    monthlyPrice: 2999,
    yearlyPrice: 1999,
    gradient: "linear-gradient(135deg, #F5EDE3 0%, #E8C4B8 100%)",
    textColor: "#1A1A1A",
    featured: false,
    light: true,
    features: [
      "1 facial per month",
      "10% off all services",
      "Priority booking",
      "Complimentary consultation",
      "Birthday treat (₹500 credit)",
    ],
    notIncluded: ["Home visits", "Dedicated artist", "VIP lounge access"],
  },
  {
    id: "luxe",
    name: "Luxe",
    icon: Sparkles,
    tagline: "Our most popular plan",
    monthlyPrice: 5999,
    yearlyPrice: 4499,
    gradient: "linear-gradient(135deg, #1A0A0A 0%, #2D1515 100%)",
    textColor: "#FFFFFF",
    featured: true,
    light: false,
    features: [
      "2 facials per month",
      "20% off all services",
      "Priority booking + express lane",
      "Dedicated makeup artist",
      "Monthly hair treatment",
      "VIP lounge access",
      "Quarterly gift hamper",
      "Birthday treat (₹1500 credit)",
    ],
    notIncluded: ["Home visits"],
  },
  {
    id: "elite",
    name: "Elite",
    icon: Crown,
    tagline: "The ultimate experience",
    monthlyPrice: 9999,
    yearlyPrice: 7999,
    gradient: "linear-gradient(135deg, #2D1515 0%, #1A0A0A 100%)",
    textColor: "#FFFFFF",
    featured: false,
    light: false,
    features: [
      "Unlimited facials",
      "30% off all services",
      "24/7 priority booking",
      "Personal dedicated artist",
      "Weekly hair treatment",
      "VIP lounge + welcome drink",
      "Monthly gift hamper",
      "Home visit (2x/month)",
      "Birthday treat (₹3000 credit)",
      "Free annual photoshoot",
    ],
    notIncluded: [],
  },
];

// Individual service prices (for seasonal discount display)
const serviceRates = [
  { name: "Bridal Makeup", base: 8000, icon: "💍" },
  { name: "Skincare Facial", base: 3500, icon: "✨" },
  { name: "Hair Styling", base: 2000, icon: "✂️" },
  { name: "Luxury Spa", base: 5000, icon: "🧖" },
  { name: "Nail Artistry", base: 1500, icon: "💅" },
  { name: "Party Glam", base: 4500, icon: "🎉" },
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isYearly, setIsYearly] = useState(false);
  const [activeOffer, setActiveOffer] = useState<ReturnType<typeof getActiveOffer>>(null);

  useEffect(() => {
    setActiveOffer(getActiveOffer());
  }, []);

  const discountPct = activeOffer?.discount ?? 0;

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "#FDFAF6" }}
      ref={ref}
    >
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none rounded-full"
        style={{ width: 800, height: 400, background: "radial-gradient(ellipse, rgba(183,110,121,0.07) 0%, transparent 70%)", filter: "blur(60px)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 pointer-events-none rounded-full"
        style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(232,196,184,0.15) 0%, transparent 70%)", filter: "blur(50px)" }}
        animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Seasonal offer callout ── */}
        <AnimatePresence>
          {activeOffer && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-10 rounded-2xl overflow-hidden"
              style={{ background: activeOffer.color, boxShadow: "0 8px 40px rgba(183,110,121,0.25)" }}
            >
              <div className="px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.2)" }}>
                    <Flame size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-playfair text-lg font-semibold text-white">{activeOffer.label} — {activeOffer.discount}% OFF</p>
                    <p className="font-sans text-sm text-white/80 font-light">{activeOffer.message}</p>
                  </div>
                </div>
                <Link href="/booking"
                  className="flex-shrink-0 px-6 py-2.5 rounded-full font-sans text-sm font-bold transition-all hover:scale-105"
                  style={{ background: "rgba(255,255,255,0.25)", color: "white", border: "1px solid rgba(255,255,255,0.4)" }}
                >
                  {activeOffer.cta} →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <div className="text-center mb-14 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: "rgba(183,110,121,0.08)", border: "1px solid rgba(183,110,121,0.2)" }}
          >
            <Zap size={12} style={{ color: "#B76E79" }} />
            <span className="font-sans text-xs tracking-[0.25em] uppercase font-light" style={{ color: "#B76E79" }}>
              Membership Plans
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight"
            style={{ color: "#1A1A1A" }}
          >
            Invest in Your
            <br />
            <span className="italic" style={{
              background: "linear-gradient(135deg, #B76E79 0%, #E8C4B8 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Best Self</span>
          </motion.h2>

          {/* Monthly / Yearly toggle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-0 px-2 py-2 rounded-full"
            style={{ background: "rgba(183,110,121,0.06)", border: "1px solid rgba(183,110,121,0.15)" }}
          >
            <button
              onClick={() => setIsYearly(false)}
              className="px-5 py-2 rounded-full text-sm font-medium font-sans transition-all duration-300"
              style={!isYearly
                ? { background: "white", color: "#1A1A1A", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }
                : { color: "#8B6F6F" }}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className="px-5 py-2 rounded-full text-sm font-medium font-sans transition-all duration-300 flex items-center gap-2"
              style={isYearly
                ? { background: "white", color: "#1A1A1A", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }
                : { color: "#8B6F6F" }}
            >
              Yearly
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(183,110,121,0.15)", color: "#B76E79" }}>
                Save 25%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 + 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={plan.featured ? "-mt-4 md:-mt-6" : ""}
            >
              <PricingCard plan={plan} isYearly={isYearly} discountPct={discountPct} />
            </motion.div>
          ))}
        </div>

        {/* ── Individual service rates with seasonal discount ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <h3 className="font-playfair text-2xl font-medium" style={{ color: "#1A1A1A" }}>
                À La Carte Rates
              </h3>
              <p className="font-sans text-sm font-light mt-1" style={{ color: "#8B6F6F" }}>
                {discountPct > 0
                  ? `${activeOffer?.label} — ${discountPct}% off applied automatically at booking`
                  : "No membership required. Book any service individually."}
              </p>
            </div>
            {discountPct > 0 && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: "rgba(183,110,121,0.1)", border: "1px solid rgba(183,110,121,0.25)" }}>
                <Tag size={12} style={{ color: "#B76E79" }} />
                <span className="font-sans text-xs font-semibold" style={{ color: "#B76E79" }}>
                  {discountPct}% OFF active
                </span>
              </div>
            )}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceRates.map((s, i) => {
              const discounted = Math.round(s.base * (1 - discountPct / 100));
              const hasDiscount = discountPct > 0;
              return (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.06 }}
                  whileHover={{ y: -3 }}
                  className="rounded-xl p-5 flex items-center justify-between transition-all duration-300"
                  style={{
                    background: "white",
                    border: "1px solid rgba(183,110,121,0.15)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(183,110,121,0.12)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(183,110,121,0.3)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(183,110,121,0.15)"; }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{s.icon}</span>
                    <div>
                      <p className="font-sans text-sm font-medium" style={{ color: "#1A1A1A" }}>{s.name}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="font-playfair text-base font-semibold" style={{ color: hasDiscount ? "#B76E79" : "#1A1A1A" }}>
                          ₹{discounted.toLocaleString()}
                        </span>
                        {hasDiscount && (
                          <span className="font-sans text-xs line-through" style={{ color: "#8B6F6F" }}>
                            ₹{s.base.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <Link href="/booking"
                    className="text-xs px-3 py-1.5 rounded-full font-medium font-sans transition-all hover:scale-105"
                    style={{ background: "rgba(183,110,121,0.1)", color: "#B76E79", border: "1px solid rgba(183,110,121,0.2)" }}
                  >
                    Book
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center font-sans text-sm font-light mt-8"
          style={{ color: "#8B6F6F" }}
        >
          All memberships auto-renew. Cancel anytime with 30 days notice. No joining fee.
        </motion.p>
      </div>
    </section>
  );
}

function PricingCard({
  plan, isYearly, discountPct,
}: {
  plan: (typeof plans)[0]; isYearly: boolean; discountPct: number;
}) {
  const Icon = plan.icon;
  const basePrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const price = discountPct > 0 ? Math.round(basePrice * (1 - discountPct / 100)) : basePrice;
  const hasDiscount = discountPct > 0;

  const subColor = plan.featured || !plan.light ? "rgba(255,255,255,0.45)" : "#8B6F6F";
  const divBg = plan.featured || !plan.light ? "rgba(255,255,255,0.1)" : "rgba(183,110,121,0.15)";
  const checkBg = plan.featured || !plan.light ? "rgba(183,110,121,0.3)" : "rgba(183,110,121,0.12)";
  const checkColor = plan.featured || !plan.light ? "#E8C4B8" : "#B76E79";
  const featColor = plan.featured || !plan.light ? "rgba(255,255,255,0.75)" : "#5A4040";

  return (
    <motion.div
      whileHover={{ y: plan.featured ? -4 : -6 }}
      transition={{ duration: 0.3 }}
      className="relative h-full rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: plan.gradient,
        border: plan.featured ? "1px solid rgba(183,110,121,0.5)" : "1px solid rgba(183,110,121,0.15)",
        boxShadow: plan.featured
          ? "0 30px 80px rgba(183,110,121,0.25), 0 8px 30px rgba(0,0,0,0.15)"
          : "0 8px 30px rgba(0,0,0,0.06)",
      }}
    >
      {plan.featured && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <div className="px-5 py-1.5 rounded-b-xl text-xs font-medium font-sans tracking-wide text-white"
            style={{ background: "linear-gradient(135deg, #B76E79 0%, #8B6F6F 100%)" }}>
            ✦ Most Popular
          </div>
        </div>
      )}

      {/* Seasonal discount badge on card */}
      {hasDiscount && (
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold"
          style={{ background: "rgba(255,100,50,0.9)", color: "white" }}>
          -{discountPct}%
        </div>
      )}

      <div className="p-7 flex flex-col h-full relative" style={{ paddingTop: plan.featured ? 32 : 28 }}>
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
              style={{ background: plan.featured ? "rgba(183,110,121,0.25)" : "rgba(183,110,121,0.1)", border: `1px solid ${plan.featured ? "rgba(183,110,121,0.4)" : "rgba(183,110,121,0.2)"}` }}>
              <Icon size={18} style={{ color: plan.featured ? "#E8C4B8" : "#B76E79" }} />
            </div>
            <h3 className="font-playfair text-2xl font-semibold" style={{ color: plan.textColor }}>{plan.name}</h3>
            <p className="font-sans text-xs font-light mt-0.5" style={{ color: subColor }}>{plan.tagline}</p>
          </div>
        </div>

        {/* Price with animated toggle */}
        <div className="mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${isYearly}-${discountPct}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-end gap-1">
                <span className="font-sans text-xs font-light" style={{ color: subColor, marginBottom: 6 }}>₹</span>
                <span className="font-playfair text-5xl font-semibold leading-none" style={{ color: plan.textColor }}>
                  {price.toLocaleString()}
                </span>
                <span className="font-sans text-sm font-light pb-1" style={{ color: subColor }}>/mo</span>
              </div>
              {hasDiscount && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-sans text-xs line-through" style={{ color: subColor }}>₹{basePrice.toLocaleString()}</span>
                  <span className="font-sans text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(255,100,50,0.2)", color: plan.light ? "#E05A00" : "#FFB399" }}>
                    Save {discountPct}%
                  </span>
                </div>
              )}
              {isYearly && (
                <p className="font-sans text-xs mt-1" style={{ color: plan.featured ? "rgba(232,196,184,0.7)" : "#B76E79" }}>
                  Billed ₹{(price * 12).toLocaleString()}/year
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="h-px mb-6" style={{ background: divBg }} />

        <ul className="space-y-3 flex-1 mb-7">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: checkBg }}>
                <Check size={9} style={{ color: checkColor, strokeWidth: 3 }} />
              </div>
              <span className="font-sans text-sm font-light" style={{ color: featColor }}>{f}</span>
            </li>
          ))}
          {plan.notIncluded.map((f) => (
            <li key={f} className="flex items-start gap-3 opacity-35">
              <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(0,0,0,0.1)" }}>
                <span className="text-xs leading-none">–</span>
              </div>
              <span className="font-sans text-sm font-light line-through" style={{ color: subColor }}>{f}</span>
            </li>
          ))}
        </ul>

        <Link href="/booking">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3.5 rounded-xl text-sm font-medium font-sans tracking-wide text-center cursor-pointer transition-all duration-300"
            style={plan.featured
              ? { background: "linear-gradient(135deg, #B76E79 0%, #E8C4B8 100%)", color: "#1A1A1A", boxShadow: "0 8px 30px rgba(183,110,121,0.4)" }
              : { background: "transparent", border: "1px solid rgba(183,110,121,0.4)", color: plan.light ? "#B76E79" : "rgba(232,196,184,0.8)" }}
          >
            {plan.featured ? "Start Luxe Membership" : `Choose ${plan.name}`}
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
