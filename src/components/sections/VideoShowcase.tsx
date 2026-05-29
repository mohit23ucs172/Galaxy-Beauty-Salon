"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, X } from "lucide-react";

const videos = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=85",
    title: "Bridal Transformation Reel",
    duration: "2:34",
    views: "48K",
    featured: true,
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    title: "Hair Makeover Timelapse",
    duration: "1:12",
    views: "22K",
    featured: false,
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    title: "Skincare Ritual Tour",
    duration: "3:05",
    views: "31K",
    featured: false,
  },
];

export default function VideoShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "#FDFAF6" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: "rgba(183,110,121,0.08)", border: "1px solid rgba(183,110,121,0.2)" }}
            >
              <Play size={12} fill="#B76E79" style={{ color: "#B76E79" }} />
              <span className="font-sans text-xs tracking-[0.25em] uppercase font-light" style={{ color: "#B76E79" }}>
                Watch & Be Inspired
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-playfair text-4xl sm:text-5xl font-medium leading-tight"
              style={{ color: "#1A1A1A" }}
            >
              See Beauty in
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
                Motion
              </span>
            </motion.h2>
          </div>

          <motion.a
            href="/gallery"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-sans text-sm font-medium whitespace-nowrap"
            style={{ color: "#B76E79" }}
          >
            View all videos →
          </motion.a>
        </div>

        {/* Video grid */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Featured large */}
          {videos
            .filter((v) => v.featured)
            .map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 + 0.2 }}
                className="lg:col-span-2"
              >
                <VideoCard video={video} large onClick={() => setPlaying(video.id)} />
              </motion.div>
            ))}

          {/* Smaller videos */}
          <div className="flex flex-col gap-5">
            {videos
              .filter((v) => !v.featured)
              .map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.12 + 0.3 }}
                >
                  <VideoCard video={video} onClick={() => setPlaying(video.id)} />
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* Modal overlay */}
      {playing !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setPlaying(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={videos.find((v) => v.id === playing)?.thumbnail}
              alt=""
              className="w-full object-cover opacity-40"
              style={{ height: 360 }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(183,110,121,0.9)" }}
              >
                <Play size={24} fill="white" className="text-white ml-1" />
              </div>
              <p className="font-cormorant text-white text-xl italic">
                Video player would load here
              </p>
              <p className="font-sans text-white/40 text-xs">
                (Connect to a video hosting service in production)
              </p>
            </div>
            <button
              onClick={() => setPlaying(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <X size={16} className="text-white" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

function VideoCard({
  video,
  large = false,
  onClick,
}: {
  video: (typeof videos)[0];
  large?: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer group ${large ? "h-80" : "h-36"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(26,10,10,0.8) 0%, rgba(26,10,10,0.2) 50%, transparent 100%)",
          opacity: hovered ? 1 : 0.7,
        }}
      />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Play
            size={large ? 20 : 16}
            fill="white"
            className="text-white ml-1"
          />
        </motion.div>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
        <div>
          <p className={`font-playfair font-medium text-white leading-snug ${large ? "text-xl" : "text-sm"}`}>
            {video.title}
          </p>
          <p className="font-sans text-xs text-white/50 mt-0.5">{video.views} views</p>
        </div>
        <span
          className="px-2 py-1 rounded-full text-xs font-sans font-light text-white flex-shrink-0"
          style={{ background: "rgba(183,110,121,0.7)" }}
        >
          {video.duration}
        </span>
      </div>
    </div>
  );
}
