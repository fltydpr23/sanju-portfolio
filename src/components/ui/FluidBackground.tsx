"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function FluidBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 30, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 30, mass: 0.5 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 transition-colors duration-500">
      {/* Animated blob 1 (Lavender) */}
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-5%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-lavender/25 dark:bg-lavender/10 blur-[90px]"
      />

      {/* Animated blob 2 (Peach) */}
      <motion.div
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-5%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-peach/20 dark:bg-peach/10 blur-[100px]"
      />

      {/* Animated blob 3 (Sage) */}
      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[35%] left-[25%] w-[35vw] h-[35vw] rounded-full bg-sage/15 dark:bg-sage/10 blur-[80px]"
      />

      {/* Mouse reactive soft glow */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-clay/10 dark:bg-peach/5 blur-[60px]"
      />
    </div>
  );
}
