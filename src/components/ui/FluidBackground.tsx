"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FluidBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand to-sand/50 opacity-50" />
      
      {/* Animated blob 1 (Lavender) */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-lavender/30 blur-[120px] mix-blend-multiply"
      />

      {/* Animated blob 2 (Peach) */}
      <motion.div
        animate={{
          x: [0, -80, 80, 0],
          y: [0, 80, -80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-peach/20 blur-[140px] mix-blend-multiply"
      />

      {/* Animated blob 3 (Sage) */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-sage/20 blur-[100px] mix-blend-multiply"
      />

      {/* Mouse reactive soft glow */}
      <motion.div
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 100,
          mass: 0.5
        }}
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-white/20 blur-[80px]"
      />
    </div>
  );
}
