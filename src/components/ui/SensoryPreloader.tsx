"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function SensoryPreloader() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasChosen, setHasChosen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const chosen = localStorage.getItem("sensory-theme-chosen-v2");
    if (!chosen) {
      setIsVisible(true);
    }
  }, []);

  const handleEnter = () => {
    localStorage.setItem("sensory-theme-chosen-v2", "true");
    setIsVisible(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-sand dark:bg-charcoal text-charcoal dark:text-sand transition-colors duration-1000"
        >
          <div className="absolute inset-0 noise-overlay opacity-0 dark:opacity-5"></div>
          
          <div className="relative z-10 flex flex-col items-center max-w-2xl px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-5xl font-serif mb-6"
            >
              How would you like to experience this space?
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl font-light opacity-70 mb-12"
            >
              Select a theme to preview how it feels. You can always change this later.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 w-full justify-center"
            >
              <button
                onClick={() => {
                  setTheme("light");
                  setHasChosen(true);
                }}
                className={`py-4 px-8 rounded-full border text-sm md:text-base font-medium tracking-wide transition-all duration-300 flex-1 max-w-xs ${
                  theme === "light" 
                    ? "bg-charcoal text-sand border-charcoal dark:bg-sand dark:text-charcoal dark:border-sand shadow-md" 
                    : "border-charcoal/20 text-charcoal/70 hover:border-charcoal/60 dark:border-sand/20 dark:text-sand/70 dark:hover:border-sand/60"
                }`}
              >
                Vibrant & Soft (Light)
              </button>
              
              <button
                onClick={() => {
                  setTheme("dark");
                  setHasChosen(true);
                }}
                className={`py-4 px-8 rounded-full border text-sm md:text-base font-medium tracking-wide transition-all duration-300 flex-1 max-w-xs ${
                  theme === "dark" 
                    ? "bg-charcoal text-sand border-charcoal dark:bg-sand dark:text-charcoal dark:border-sand shadow-md" 
                    : "border-charcoal/20 text-charcoal/70 hover:border-charcoal/60 dark:border-sand/20 dark:text-sand/70 dark:hover:border-sand/60"
                }`}
              >
                Calm & Deep (Dark)
              </button>
            </motion.div>

            <AnimatePresence>
              {hasChosen && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  onClick={handleEnter}
                  className="text-sm uppercase tracking-widest border-b border-current pb-1 hover:opacity-70 transition-opacity"
                >
                  Enter Studio
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
