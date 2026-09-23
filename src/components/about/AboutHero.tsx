"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutHero() {
  return (
    <section className="relative px-6 md:px-12 pt-12 md:pt-20 pb-16 md:pb-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-charcoal dark:text-sand mb-4 leading-tight">
              Sanjana Vijai
            </h1>
            <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm tracking-[0.15em] uppercase text-clay dark:text-peach font-medium">
              <span>Art Therapist</span>
              <span className="text-charcoal/30 dark:text-sand/30">•</span>
              <span>Educator</span>
              <span className="text-charcoal/30 dark:text-sand/30">•</span>
              <span>Community Facilitator</span>
            </div>
          </motion.div>

          <FadeIn delay={0.3} className="space-y-6 text-charcoal/80 dark:text-sand/80 text-lg md:text-xl font-light leading-relaxed">
            <p>
              Working across therapeutic arts, neurodiversity support, and experiential learning to create emotionally responsive spaces for children, young people, and communities.
            </p>
          </FadeIn>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 relative">
          {/* Decorative background blob */}
          <div className="absolute -inset-4 bg-sage/20 dark:bg-sage/10 blur-3xl rounded-full opacity-50 z-0"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative z-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/10 dark:shadow-black/20"
          >
            <Image 
              src="/Sanju pics/img-2.jpeg" 
              alt="Sanjana Vijai" 
              fill
              className="object-cover object-center"
              priority
            />
            {/* Soft overlay to match therapeutic vibe */}
            <div className="absolute inset-0 bg-sand/10 dark:bg-charcoal-deep/20 mix-blend-overlay"></div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
