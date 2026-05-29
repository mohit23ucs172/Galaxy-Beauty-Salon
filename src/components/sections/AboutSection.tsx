"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Award, Gem, Users, CheckCircle2 } from "lucide-react";

const team = [
  {
    name: "Priya Sharma",
    role: "Master Makeup Artist",
    exp: "10 yrs",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "Anjali Mehta",
    role: "Skincare Specialist",
    exp: "8 yrs",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Riya Kapoor",
    role: "Hair Stylist",
    exp: "12 yrs",
    img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80",
  },
];

const pillars = [
  {
    icon: Gem,
    title: "Premium Products Only",
    desc: "We use only luxury international brands — no compromises on quality.",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    desc: "Every artist is internationally trained and continuously upskilled.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    desc: "No two clients receive the same treatment. Everything is tailored.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#F5EDE3" }}>
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B76E79' fill-opacity='0.07'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Left: Images with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <motion.div
              style={{ y: imageY }}
              className="relative z-10 rounded-2xl overflow-hidden"
              style={{
                y: imageY,
                boxShadow: "0 40px 100px rgba(183,110,121,0.2), 0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1560066984-138daaa8dbb2?w=700&q=85"
                alt="Galaxy Beauty Salon interior"
                className="w-full h-[500px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(26,10,10,0.4) 0%, transparent 50%)",
                }}
              />
            </motion.div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute -bottom-6 -right-6 lg:-right-10 rounded-xl p-5 z-20"
              style={{
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(232,196,184,0.5)",
                boxShadow: "0 20px 60px rgba(183,110,121,0.15)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #B76E79, #E8C4B8)" }}
                >
                  <Award size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-playfair text-xl font-semibold" style={{ color: "#1A1A1A" }}>
                    #1 Rated
                  </p>
                  <p className="font-sans text-xs" style={{ color: "#8B6F6F" }}>
                    Beauty Studio in City
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Small accent image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -top-8 -right-8 w-40 h-40 rounded-xl overflow-hidden hidden lg:block"
              style={{
                border: "3px solid white",
                boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=300&q=80"
                alt="Premium products"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right: Text content */}
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(183,110,121,0.1)",
                border: "1px solid rgba(183,110,121,0.25)",
              }}
            >
              <span className="text-xs tracking-[0.25em] uppercase font-sans font-light" style={{ color: "#B76E79" }}>
                Our Story
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-playfair text-4xl sm:text-5xl font-medium leading-tight"
              style={{ color: "#1A1A1A" }}
            >
              Born from a Passion
              <br />
              <em
                style={{
                  background: "linear-gradient(135deg, #B76E79 0%, #8B6F6F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                for True Beauty
              </em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-4 font-cormorant text-lg leading-relaxed font-light"
              style={{ color: "#5A4040" }}
            >
              <p>
                Galaxy Beauty Salon was founded in 2012 in Maharajganj with a single belief: every woman
                deserves to feel extraordinary. We built a space where premium
                expertise meets genuine care — and the results speak for themselves.
              </p>
              <p>
                Over a decade later, we have served thousands of clients across
                bridal, party, and everyday beauty — and we are still
                driven by the same founding passion.
              </p>
            </motion.div>

            {/* Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="space-y-4"
            >
              {pillars.map((pillar, i) => {
                const PillarIcon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(183,110,121,0.12)",
                        border: "1px solid rgba(183,110,121,0.2)",
                      }}
                    >
                      <PillarIcon size={16} style={{ color: "#B76E79" }} />
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold mb-1" style={{ color: "#1A1A1A" }}>
                        {pillar.title}
                      </h4>
                      <p className="font-sans text-sm font-light leading-relaxed" style={{ color: "#8B6F6F" }}>
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.a
              href="/about"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 font-sans text-sm font-medium"
              style={{ color: "#B76E79" }}
              whileHover={{ x: 4 }}
            >
              Read our full story →
            </motion.a>
          </div>
        </div>

        {/* Team Preview */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-10"
          >
            <h3 className="font-playfair text-3xl font-medium" style={{ color: "#1A1A1A" }}>
              Meet Our Artists
            </h3>
            <p className="font-sans text-sm mt-2 font-light" style={{ color: "#8B6F6F" }}>
              The experts behind every transformation
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl overflow-hidden"
                style={{
                  background: "white",
                  border: "1px solid rgba(232,196,184,0.4)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h4 className="font-playfair text-lg font-medium" style={{ color: "#1A1A1A" }}>
                    {member.name}
                  </h4>
                  <p className="font-sans text-xs mt-1 mb-1" style={{ color: "#B76E79" }}>
                    {member.role}
                  </p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <CheckCircle2 size={12} style={{ color: "#B76E79" }} />
                    <span className="font-sans text-xs font-light" style={{ color: "#8B6F6F" }}>
                      {member.exp} experience
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
