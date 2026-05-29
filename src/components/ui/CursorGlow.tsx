"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 30, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 150 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  // Only render on non-touch devices
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[999] rounded-full mix-blend-screen hidden lg:block"
      style={{
        width: 400,
        height: 400,
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background: "radial-gradient(circle, rgba(183,110,121,0.06) 0%, rgba(183,110,121,0.02) 40%, transparent 70%)",
      }}
    />
  );
}
