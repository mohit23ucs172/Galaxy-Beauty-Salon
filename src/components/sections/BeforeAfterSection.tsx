"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, ArrowLeftRight } from "lucide-react";

const transformations = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&q=80",
    after: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    title: "Bridal Transformation",
    subtitle: "Complete bridal makeup & hair",
    duration: "4 hours",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80",
    after: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=600&q=80",
    title: "Glam Evening Look",
    subtitle: "Party makeup with contouring",
    duration: "90 min",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
    after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    title: "Hair Colour Transformation",
    subtitle: "Balayage + style makeover",
    duration: "3 hours",
  },
];

export default function BeforeAfterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1A0A0A 0%, #2D1515 50%, #1A0A0A 100%)" }}
      ref={ref}
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(183,110,121,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(232,196,184,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: "rgba(183,110,121,0.12)", border: "1px solid rgba(183,110,121,0.25)" }}
          >
            <Sparkles size={12} style={{ color: "#B76E79" }} />
            <span className="font-sans text-xs tracking-[0.25em] uppercase font-light" style={{ color: "#B76E79" }}>
              Real Results
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight"
          >
            The Power of
            <br />
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #F7E7CE 0%, #E8C4B8 45%, #B76E79 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Transformation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-cormorant text-xl max-w-xl mx-auto leading-relaxed font-light"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Drag the slider to reveal each stunning transformation.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {transformations.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 + 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <SliderCard transformation={t} />
            </motion.div>
          ))}
        </div>

        {/* Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2 mt-10"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          <ArrowLeftRight size={14} />
          <span className="font-sans text-xs tracking-wide">Drag to compare</span>
        </motion.div>
      </div>
    </section>
  );
}

function SliderCard({ transformation }: { transformation: (typeof transformations)[0] }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updateSlider(e.clientX);
    const onMove = (ev: MouseEvent) => { if (isDragging.current) updateSlider(ev.clientX); };
    const onUp = () => { isDragging.current = false; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    const onMove = (ev: TouchEvent) => updateSlider(ev.touches[0].clientX);
    const onEnd = () => { window.removeEventListener("touchmove", onMove); window.removeEventListener("touchend", onEnd); };
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd);
  };

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      }}
    >
      {/* Slider area */}
      <div
        ref={containerRef}
        className="relative h-72 cursor-col-resize select-none overflow-hidden"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* After image (full) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={transformation.after}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPos}%` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={transformation.before}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${10000 / sliderPos}%`, maxWidth: "none" }}
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 pointer-events-none"
          style={{
            left: `${sliderPos}%`,
            background: "rgba(255,255,255,0.9)",
            boxShadow: "0 0 12px rgba(255,255,255,0.5)",
          }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center pointer-events-none"
          style={{
            left: `${sliderPos}%`,
            background: "white",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          <ArrowLeftRight size={14} style={{ color: "#B76E79" }} />
        </div>

        {/* Labels */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium text-white pointer-events-none"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)" }}
        >
          Before
        </div>
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium text-white pointer-events-none"
          style={{ background: "rgba(183,110,121,0.8)" }}
        >
          After
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-playfair text-lg font-medium text-white">{transformation.title}</h3>
        <p className="font-sans text-xs font-light mt-1 mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>
          {transformation.subtitle}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-sans text-xs" style={{ color: "#B76E79" }}>
            ⏱ {transformation.duration}
          </span>
          <button
            className="text-xs px-4 py-2 rounded-full font-medium text-white"
            style={{ background: "linear-gradient(135deg, #B76E79 0%, #8B6F6F 100%)" }}
          >
            <a href="/booking" style={{color:"inherit",textDecoration:"none"}}>Book This Look</a>
          </button>
        </div>
      </div>
    </div>
  );
}
