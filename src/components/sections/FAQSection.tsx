"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "Booking",
    items: [
      {
        q: "How do I book an appointment?",
        a: "You can book directly through our website using the online booking form, call us at +91 73804 89240, or message us on WhatsApp. Members get priority access to slots before they open to the public.",
      },
      {
        q: "What is your cancellation policy?",
        a: "We require 24 hours notice for cancellations or rescheduling. Cancellations with less than 24 hours notice may incur a 50% charge. Members on the Luxe and Elite plans get one free late cancellation per month.",
      },
      {
        q: "Can I walk in without an appointment?",
        a: "We recommend booking in advance as we are often fully booked. However, we do keep a small number of walk-in slots each day for quick services like blow-dries and nail touch-ups. Call ahead to check availability.",
      },
    ],
  },
  {
    category: "Services",
    items: [
      {
        q: "What brands do you use for facials and skincare?",
        a: "We exclusively use luxury international brands including La Mer, Sisley, Dermalogica, and Environ. All our products are dermatologist-tested and suited for Indian skin tones and climates.",
      },
      {
        q: "How long does a bridal makeup appointment take?",
        a: "A full bridal makeup and hair session typically takes 3 to 4 hours. We recommend scheduling a trial session 2 to 4 weeks before your wedding day so we can perfect your look together.",
      },
      {
        q: "Do you offer services for men?",
        a: "Yes — we offer grooming, skincare facials, and hair services for men. Please mention this when booking so we can assign the right specialist for you.",
      },
      {
        q: "Can I bring my own products?",
        a: "We prefer to use our own certified products as this ensures quality control and hygiene. If you have a documented skin allergy or dermatologist recommendation, please let us know when booking and we will accommodate.",
      },
    ],
  },
  {
    category: "Membership",
    items: [
      {
        q: "Can I pause my membership?",
        a: "Yes. Members can pause their subscription for up to 2 months per year with 7 days advance notice. Benefits simply resume when the pause ends. No penalty.",
      },
      {
        q: "Are membership discounts applied automatically?",
        a: "Yes. Once you are an active member, discounts are applied automatically to every booking. You do not need to show a code or card — we verify via your phone number.",
      },
      {
        q: "Can I gift a membership to someone?",
        a: "Absolutely. We offer gift memberships for 3, 6, or 12-month durations. Contact us directly and we will prepare a physical gift card with a personal message.",
      },
    ],
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Booking");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeFaqs =
    faqs.find((f) => f.category === activeCategory)?.items ?? [];

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "#F5EDE3" }}
      ref={ref}
    >
      {/* BG decorations */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,196,184,0.7) 0%, transparent 70%)",
          transform: "translate(30%, -20%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(183,110,121,0.4) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: "rgba(183,110,121,0.09)",
              border: "1px solid rgba(183,110,121,0.22)",
            }}
          >
            <HelpCircle size={12} style={{ color: "#B76E79" }} />
            <span
              className="font-sans text-xs tracking-[0.25em] uppercase font-light"
              style={{ color: "#B76E79" }}
            >
              Frequently Asked
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight"
            style={{ color: "#1A1A1A" }}
          >
            Questions,
            <br />
            <span
              className="italic"
              style={{
                background:
                  "linear-gradient(135deg, #B76E79 0%, #E8C4B8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Answered
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-cormorant text-xl font-light"
            style={{ color: "#8B6F6F" }}
          >
            Everything you need to know before your first visit.
          </motion.p>
        </div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex justify-center gap-2 mb-10"
        >
          {faqs.map((f) => (
            <button
              key={f.category}
              onClick={() => {
                setActiveCategory(f.category);
                setOpenIndex(0);
              }}
              className="px-5 py-2.5 rounded-full text-sm font-medium font-sans transition-all duration-300"
              style={
                activeCategory === f.category
                  ? {
                      background:
                        "linear-gradient(135deg, #B76E79 0%, #8B6F6F 100%)",
                      color: "#fff",
                      boxShadow: "0 4px 16px rgba(183,110,121,0.3)",
                    }
                  : {
                      background: "rgba(183,110,121,0.06)",
                      border: "1px solid rgba(183,110,121,0.18)",
                      color: "#8B6F6F",
                    }
              }
            >
              {f.category}
            </button>
          ))}
        </motion.div>

        {/* Accordion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {activeFaqs.map((item, i) => (
              <AccordionItem
                key={item.q}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-14 text-center p-8 rounded-2xl"
          style={{
            background: "white",
            border: "1px solid rgba(183,110,121,0.2)",
            boxShadow: "0 8px 40px rgba(183,110,121,0.08)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: "rgba(183,110,121,0.1)" }}
          >
            <HelpCircle size={20} style={{ color: "#B76E79" }} />
          </div>
          <h3
            className="font-playfair text-xl font-medium mb-2"
            style={{ color: "#1A1A1A" }}
          >
            Still have questions?
          </h3>
          <p
            className="font-sans text-sm font-light mb-5"
            style={{ color: "#8B6F6F" }}
          >
            Our team is available 7 days a week to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/917068247380"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors"
              style={{
                border: "1px solid rgba(183,110,121,0.35)",
                color: "#B76E79",
              }}
            >
              Send a Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
  isInView,
}: {
  item: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: isOpen ? "white" : "rgba(255,255,255,0.6)",
        border: isOpen
          ? "1px solid rgba(183,110,121,0.3)"
          : "1px solid rgba(183,110,121,0.12)",
        boxShadow: isOpen
          ? "0 8px 30px rgba(183,110,121,0.1)"
          : "none",
      }}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
      >
        <span
          className="font-playfair text-base sm:text-lg font-medium leading-snug"
          style={{ color: isOpen ? "#1A1A1A" : "#3A2020" }}
        >
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 0 : 0 }}
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: isOpen
              ? "rgba(183,110,121,0.12)"
              : "rgba(183,110,121,0.07)",
          }}
        >
          {isOpen ? (
            <Minus size={13} style={{ color: "#B76E79" }} />
          ) : (
            <Plus size={13} style={{ color: "#B76E79" }} />
          )}
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="px-6 pb-6"
              style={{ borderTop: "1px solid rgba(183,110,121,0.1)" }}
            >
              <p
                className="font-sans text-sm font-light leading-relaxed pt-4"
                style={{ color: "#5A4040" }}
              >
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
