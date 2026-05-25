"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/components/ui/FadeIn";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    setIsScrolled(latest > 50);
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
        when: "afterChildren",
        staggerChildren: 0.05,
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
        when: "beforeChildren",
        staggerChildren: 0.1,
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
        transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || isOpen ? "py-4 bg-sand/60 backdrop-blur-md border-b border-charcoal/5" : "py-8 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="text-xl font-serif tracking-wide text-charcoal z-50">
            Sanjana Vijai
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm tracking-widest uppercase text-charcoal/80">
            <Link href="#about" className="hover:text-charcoal transition-colors">About</Link>
            <Link href="#approach" className="hover:text-charcoal transition-colors">Approach</Link>
            <Link href="#services" className="hover:text-charcoal transition-colors">Services</Link>
            <Link 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-charcoal text-sand hover:bg-charcoal/90 transition-all hover:scale-105 active:scale-95"
            >
              Connect
            </Link>
          </nav>

          {/* Mobile hamburger button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden z-50 text-charcoal hover:scale-110 active:scale-90 transition-transform p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
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
            className="fixed inset-0 z-40 bg-sand flex flex-col justify-center items-center px-8"
          >
            {/* Subtle drifting visual blob inside menu */}
            <div className="absolute top-[20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-lavender/35 blur-[100px] pointer-events-none -z-10" />
            <div className="absolute bottom-[10%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-peach/25 blur-[120px] pointer-events-none -z-10" />
            
            <nav className="flex flex-col items-center gap-8 text-center">
              <motion.div variants={linkVariants}>
                <Link 
                  href="#about" 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif text-charcoal hover:text-clay transition-colors"
                >
                  About
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link 
                  href="#approach" 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif text-charcoal hover:text-clay transition-colors"
                >
                  Approach
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link 
                  href="#services" 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif text-charcoal hover:text-clay transition-colors"
                >
                  Services
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} className="mt-4">
                <Link 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-4 rounded-full bg-charcoal text-sand text-lg tracking-wider uppercase inline-block"
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
