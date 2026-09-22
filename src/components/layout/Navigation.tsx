"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/components/ui/FadeIn";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 30);
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
        when: "afterChildren",
        staggerChildren: 0.05,
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
        when: "beforeChildren",
        staggerChildren: 0.08,
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || isOpen 
            ? "py-4 bg-sand/90 dark:bg-charcoal-deep/90 backdrop-blur-md border-b border-charcoal/10 dark:border-sand/10 shadow-sm" 
            : "py-6 md:py-8 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-serif tracking-wide text-charcoal dark:text-sand font-medium z-50 transition-colors"
          >
            Sanjana Vijai
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm tracking-widest uppercase text-charcoal/80 dark:text-sand/80 font-medium">
            <Link href="#about" className="hover:text-charcoal dark:hover:text-sand transition-colors">About</Link>
            <Link href="#approach" className="hover:text-charcoal dark:hover:text-sand transition-colors">Approach</Link>
            <Link href="#services" className="hover:text-charcoal dark:hover:text-sand transition-colors">Services</Link>
            <Link 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-charcoal text-sand hover:bg-charcoal/90 transition-all hover:scale-105 active:scale-95 dark:bg-sand dark:text-charcoal dark:hover:bg-sand/90"
            >
              Connect
            </Link>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-2 p-2.5 rounded-full text-charcoal dark:text-sand hover:bg-charcoal/10 dark:hover:bg-sand/10 transition-colors focus:outline-none"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={20} strokeWidth={1.75} /> : <Moon size={20} strokeWidth={1.75} />}
              </button>
            )}
          </nav>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 md:hidden z-50">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-charcoal dark:text-sand hover:bg-charcoal/10 dark:hover:bg-sand/10 transition-colors p-2.5 rounded-full focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} strokeWidth={1.75} /> : <Moon size={20} strokeWidth={1.75} />}
              </button>
            )}
            <button 
              onClick={toggleMenu} 
              className="text-charcoal dark:text-sand hover:bg-charcoal/10 dark:hover:bg-sand/10 transition-colors p-2.5 rounded-full focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-sand dark:bg-charcoal-deep flex flex-col justify-center items-center px-8 transition-colors"
          >
            <nav className="flex flex-col items-center gap-8 text-center">
              <motion.div variants={linkVariants} className="w-full">
                <Link 
                  href="#about" 
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 text-3xl font-serif text-charcoal dark:text-sand hover:text-clay dark:hover:text-peach transition-colors"
                >
                  About
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} className="w-full">
                <Link 
                  href="#approach" 
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 text-3xl font-serif text-charcoal dark:text-sand hover:text-clay dark:hover:text-peach transition-colors"
                >
                  Approach
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} className="w-full">
                <Link 
                  href="#services" 
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 text-3xl font-serif text-charcoal dark:text-sand hover:text-clay dark:hover:text-peach transition-colors"
                >
                  Services
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} className="mt-4">
                <Link 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-4 rounded-full bg-charcoal text-sand dark:bg-sand dark:text-charcoal text-lg tracking-wider uppercase inline-block transition-colors"
                >
                  Connect
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
