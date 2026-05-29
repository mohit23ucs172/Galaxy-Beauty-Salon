"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #1A0A0A 0%, #2D1515 50%, #1A0A0A 100%)",
          }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(183,110,121,0.15) 0%, transparent 60%)",
          }} />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-8"
          >
            <div className="flex justify-center mb-3">
              <Image
                src="/galaxy-logo.jpg"
                alt="Galaxy Beauty Salon"
                width={88}
                height={88}
                className="rounded-full object-cover"
                style={{ border: "2px solid rgba(183,110,121,0.5)", boxShadow: "0 0 30px rgba(183,110,121,0.35)" }}
              />
            </div>
            <h1 className="font-playfair text-4xl font-semibold text-white tracking-wide">
              Galaxy
            </h1>
            <p className="font-cormorant text-sm tracking-[0.4em] uppercase font-light mt-1"
              style={{ color: "#B76E79" }}>
              Beauty Salon
            </p>
          </motion.div>

          {/* Loading bar */}
          <div className="w-40 h-px overflow-hidden"
            style={{ background: "rgba(255,255,255,0.08)" }}>
            <motion.div
              className="h-full"
              style={{ background: "linear-gradient(to right, #B76E79, #E8C4B8)" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
            />
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-cormorant text-base italic font-light mt-5"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Where Art Meets Natural Beauty
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
