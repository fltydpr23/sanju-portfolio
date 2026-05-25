"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function BreathingLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [breathText, setBreathText] = useState("Inhale...");

  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = "hidden";

    // Toggle text after 2 seconds
    const textTimer = setTimeout(() => {
      setBreathText("Exhale...");
    }, 2000);

    // Fade out and unlock scroll after 4.5 seconds
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
    }, 4500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-[100] bg-sand flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Subtle noise overlay for texture consistency */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />

          {/* Breathing Circle */}
          <div className="relative flex items-center justify-center">
            {/* Outer expanding glow */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.15, 0.4, 0.15],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="absolute w-[200px] h-[200px] rounded-full bg-clay blur-xl"
            />

            {/* Core breathing circle */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="w-[120px] h-[120px] rounded-full bg-clay/10 border border-clay/30 flex items-center justify-center"
            />
          </div>

          {/* Slow text transition */}
          <motion.p
            key={breathText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1 }}
            className="absolute mt-48 text-sm tracking-[0.25em] uppercase text-charcoal/80 font-light"
          >
            {breathText}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
