"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Sparkles, Tag } from "lucide-react";

// ─── CONFIGURE YOUR OFFERS HERE ───────────────────────────────────────────────
// Each offer has a start/end date range (month is 1-indexed), a label, and a discount %.
// Add or remove entries freely. The first matching offer wins.
const SEASONAL_OFFERS = [
  {
    id: "diwali",
    label: "🪔 Diwali Special",
    message: "Flat 25% off all services this Diwali season!",
    cta: "Book Now",
    discount: 25,
    startMonth: 10, startDay: 15,
    endMonth: 11, endDay: 5,
    color: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)",
  },
  {
    id: "holi",
    label: "🎨 Holi Offer",
    message: "Celebrate Holi with 20% off facials & hair treatments!",
    cta: "Grab Deal",
    discount: 20,
    startMonth: 3, startDay: 1,
    endMonth: 3, endDay: 20,
    color: "linear-gradient(135deg, #E91E8C 0%, #B76E79 50%, #9C27B0 100%)",
  },
  {
    id: "summer",
    label: "☀️ Summer Sale",
    message: "Beat the heat — 15% off skincare & spa packages all May & June!",
    cta: "Book Now",
    discount: 15,
    startMonth: 5, startDay: 1,
    endMonth: 6, endDay: 30,
    color: "linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FFD700 100%)",
  },
  {
    id: "navratri",
    label: "✨ Navratri Glow",
    message: "Look radiant this Navratri — 20% off bridal & party makeup!",
    cta: "Book Now",
    discount: 20,
    startMonth: 10, startDay: 1,
    endMonth: 10, endDay: 14,
    color: "linear-gradient(135deg, #B76E79 0%, #E8C4B8 50%, #B76E79 100%)",
  },
  {
    id: "wedding",
    label: "💍 Wedding Season",
    message: "Wedding season is here! 10% off all bridal packages.",
    cta: "Book Bridal",
    discount: 10,
    startMonth: 11, startDay: 15,
    endMonth: 12, endDay: 31,
    color: "linear-gradient(135deg, #B76E79 0%, #8B6F6F 100%)",
  },
];
// ──────────────────────────────────────────────────────────────────────────────

function getActiveOffer() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  return SEASONAL_OFFERS.find((offer) => {
    const afterStart =
      month > offer.startMonth ||
      (month === offer.startMonth && day >= offer.startDay);
    const beforeEnd =
      month < offer.endMonth ||
      (month === offer.endMonth && day <= offer.endDay);
    return afterStart && beforeEnd;
  }) ?? null;
}

export default function OfferBanner() {
  const [offer, setOffer] = useState<(typeof SEASONAL_OFFERS)[0] | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const active = getActiveOffer();
    setOffer(active);
    // Restore dismissed state from session
    if (active && sessionStorage.getItem(`offer_dismissed_${active.id}`)) {
      setDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    if (offer) sessionStorage.setItem(`offer_dismissed_${offer.id}`, "1");
  };

  if (!offer || dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-[60] overflow-hidden"
        style={{ background: offer.color }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Tag size={14} className="text-white flex-shrink-0" />
            <span className="font-sans text-xs font-semibold text-white tracking-wide">
              {offer.label}
            </span>
            <span className="font-sans text-xs text-white/80 font-light hidden sm:block truncate">
              {offer.message}
            </span>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/booking"
              className="font-sans text-xs font-bold px-4 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
              style={{ background: "rgba(255,255,255,0.25)", color: "white", border: "1px solid rgba(255,255,255,0.4)" }}
            >
              {offer.cta} →
            </Link>
            <button
              onClick={handleDismiss}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["200% center", "-200% center"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

// Export so PricingSection can read the active offer too
export { getActiveOffer, SEASONAL_OFFERS };
