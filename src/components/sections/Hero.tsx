"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SensoryCanvas from "@/components/ui/SensoryCanvas";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Interactive sensory canvas background */}
      <SensoryCanvas />

      {/* Floating watercolor art image — right side, hidden on small mobile, shown md+ */}
      <motion.div
        initial={{ opacity: 0, x: 80, rotate: 6 }}
        animate={{ opacity: 0.5, x: 0, rotate: 3 }}
        transition={{ duration: 2.2, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
        className="hidden sm:block absolute right-0 top-[10%] w-[45vw] md:w-[38vw] max-w-[440px] rounded-3xl overflow-hidden pointer-events-none z-10"
      >
        <Image
          src="/watercolor-hero.png"
          alt="Watercolor art — representing emotional expression"
          width={600}
          height={600}
          className="w-full h-full object-cover mix-blend-multiply"
          priority
        />
      </motion.div>

      {/* Mobile-only watercolor: small decorative top-right, very soft */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2, delay: 1 }}
        className="sm:hidden absolute right-[-10%] top-[8%] w-[60vw] rounded-2xl overflow-hidden pointer-events-none z-10"
      >
        <Image
          src="/watercolor-hero.png"
          alt=""
          width={400}
          height={400}
          className="w-full h-full object-cover mix-blend-multiply"
          priority
        />
      </motion.div>

      {/* Abstract enso decorative mark — bottom left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -40 }}
        animate={{ opacity: 0.06, scale: 1, rotate: 0 }}
        transition={{ duration: 2.5, delay: 1.2, ease: "easeOut" }}
        className="absolute bottom-[-10%] left-[-8%] w-[50vw] h-[50vw] md:w-[36vw] md:h-[36vw] pointer-events-none z-0"
      >
        <Image src="/abstract-circle.png" alt="" width={500} height={500} className="w-full h-full object-contain" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
          className="mb-6 md:mb-8"
        >
          <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-charcoal/60 mb-4 md:mb-6 block">
            Art & Sensory Therapy
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-charcoal leading-[1.1] tracking-tight max-w-4xl mx-auto">
            A safe place where your child will be{" "}
            <span className="italic text-clay">understood</span>.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
        >
          <p className="text-base md:text-xl text-charcoal/70 max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-12 font-light leading-relaxed px-2">
            Helping neurodivergent children express, regulate, and reconnect through creativity, movement, and a deeply emotionally safe therapeutic environment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
        >
          <a
            href="#approach"
            className="group flex flex-col items-center gap-3 text-charcoal/60 hover:text-charcoal transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <div className="w-[1px] h-10 bg-charcoal/20 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-1/2 bg-charcoal"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
