"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Instagram, Heart, Eye, X, ZoomIn } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=85",
    alt: "Bridal makeup look",
    category: "Bridal",
    likes: 842,
    views: 3200,
    span: "row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=85",
    alt: "Hair styling",
    category: "Hair",
    likes: 612,
    views: 2100,
    span: "",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=85",
    alt: "Skincare facial",
    category: "Skincare",
    likes: 529,
    views: 1800,
    span: "",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=85",
    alt: "Nail artistry",
    category: "Nails",
    likes: 731,
    views: 2700,
    span: "row-span-2",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=600&q=85",
    alt: "Makeup closeup",
    category: "Makeup",
    likes: 944,
    views: 4100,
    span: "",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1560066984-138daaa8dbb2?w=600&q=85",
    alt: "Salon interior",
    category: "Studio",
    likes: 405,
    views: 1500,
    span: "",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=85",
    alt: "Luxury skincare products",
    category: "Products",
    likes: 318,
    views: 1200,
    span: "",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=85",
    alt: "Spa treatment",
    category: "Spa",
    likes: 677,
    views: 2400,
    span: "",
  },
];

const categories = ["All", "Bridal", "Hair", "Skincare", "Makeup", "Nails", "Spa"];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<(typeof galleryItems)[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "#FDFAF6" }}
      ref={ref}
    >
      {/* BG decoration */}
      <div
        className="absolute top-1/2 left-0 w-72 h-72 rounded-full opacity-20 pointer-events-none -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, rgba(183,110,121,0.4) 0%, transparent 70%)",
          transform: "translate(-40%, -50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: "rgba(183,110,121,0.08)", border: "1px solid rgba(183,110,121,0.2)" }}
          >
            <Instagram size={12} style={{ color: "#B76E79" }} />
            <span className="font-sans text-xs tracking-[0.25em] uppercase font-light" style={{ color: "#B76E79" }}>
              Our Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight"
            style={{ color: "#1A1A1A" }}
          >
            Beauty in Every
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
              Frame
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-cormorant text-xl max-w-xl mx-auto leading-relaxed font-light"
            style={{ color: "#8B6F6F" }}
          >
            A glimpse into the transformations we create every day.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-xs font-medium font-sans transition-all duration-300"
              style={
                activeCategory === cat
                  ? {
                      background: "linear-gradient(135deg, #B76E79 0%, #8B6F6F 100%)",
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
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={i}
                onClick={() => setLightboxItem(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/galaxy._salon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
              color: "#fff",
            }}
          >
            <Instagram size={16} />
            Follow @galaxy._salon
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryCard({
  item,
  index,
  onClick,
}: {
  item: (typeof galleryItems)[0];
  index: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative rounded-xl overflow-hidden cursor-pointer group ${item.span}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
      />

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-between p-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: "linear-gradient(to top, rgba(26,10,10,0.85) 0%, rgba(26,10,10,0.3) 50%, transparent 100%)",
        }}
      >
        {/* Top: category */}
        <div className="flex justify-end">
          <span
            className="px-2.5 py-1 rounded-full text-xs font-medium text-white"
            style={{ background: "rgba(183,110,121,0.8)" }}
          >
            {item.category}
          </span>
        </div>

        {/* Bottom: stats + zoom */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <span className="flex items-center gap-1 text-white text-xs font-light">
              <Heart size={11} fill="white" /> {item.likes}
            </span>
            <span className="flex items-center gap-1 text-white text-xs font-light">
              <Eye size={11} /> {item.views}
            </span>
          </div>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}
          >
            <ZoomIn size={13} className="text-white" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Lightbox({
  item,
  onClose,
}: {
  item: (typeof galleryItems)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(20px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-2xl w-full rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.src} alt={item.alt} className="w-full object-cover max-h-[80vh]" />

        {/* Info bar */}
        <div
          className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
          }}
        >
          <div>
            <p className="font-playfair text-white text-lg font-medium">{item.alt}</p>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-sans"
              style={{ background: "rgba(183,110,121,0.7)", color: "#fff" }}
            >
              {item.category}
            </span>
          </div>
          <div className="flex gap-4 text-white/70 text-xs font-light">
            <span className="flex items-center gap-1"><Heart size={12} fill="white" className="text-white" /> {item.likes}</span>
            <span className="flex items-center gap-1"><Eye size={12} /> {item.views}</span>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)" }}
        >
          <X size={16} className="text-white" />
        </button>
      </motion.div>
    </motion.div>
  );
}
