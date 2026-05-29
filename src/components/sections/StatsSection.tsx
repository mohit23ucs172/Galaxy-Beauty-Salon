"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 5000, suffix: "+", label: "Happy Clients", sub: "And growing" },
  { value: 12, suffix: "+", label: "Years of Excellence", sub: "Established 2012" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", sub: "5-star reviews" },
  { value: 35, suffix: "+", label: "Expert Artists", sub: "Certified professionals" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A0A0A 0%, #2D1515 50%, #1A0A0A 100%)",
      }}
    >
      {/* Decorative bg shapes */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(183,110,121,0.6) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(183,110,121,0.5) 0, rgba(183,110,121,0.5) 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-cormorant text-2xl italic font-light" style={{ color: "rgba(232,196,184,0.7)" }}>
            Numbers that speak louder than words
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-center group"
            >
              {/* Number */}
              <div
                className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold mb-2 leading-none"
                style={{
                  background: "linear-gradient(135deg, #F7E7CE 0%, #E8C4B8 40%, #B76E79 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Divider */}
              <motion.div
                className="w-8 h-px mx-auto mb-3"
                style={{ background: "rgba(183,110,121,0.5)" }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: i * 0.12 + 0.4, duration: 0.5 }}
              />

              <p className="font-sans text-sm font-medium tracking-wide text-white/80 mb-1">
                {stat.label}
              </p>
              <p className="font-sans text-xs text-white/30 tracking-wide">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="font-cormorant text-lg italic font-light" style={{ color: "rgba(247,231,206,0.5)" }}>
            &ldquo;Trusted by thousands of women across Maharajganj &amp; beyond&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
