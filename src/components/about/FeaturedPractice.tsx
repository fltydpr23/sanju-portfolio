"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const keywords = [
  "Neurodivergent children",
  "Emotional regulation",
  "Sensory exploration",
  "Confidence-building",
  "Creative identity",
  "20–30 active children"
];

export default function FeaturedPractice() {
  return (
    <section className="relative px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
      <div className="bg-sand dark:bg-charcoal/40 rounded-[2.5rem] p-8 md:p-16 lg:p-20 shadow-xl shadow-clay/5 border border-clay/10 dark:border-white/5 relative overflow-hidden">
        
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-sand via-transparent to-clay/5 dark:from-transparent dark:to-sage/5 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-sm md:text-base tracking-[0.2em] uppercase text-clay dark:text-peach mb-6 font-medium">
              Featured Practice
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h3 className="text-5xl md:text-7xl font-serif text-charcoal dark:text-sand mb-4">
              ARTLORE
            </h3>
            <p className="text-lg md:text-2xl text-charcoal/70 dark:text-sand/70 font-serif italic mb-8 md:mb-12">
              Child-centred therapeutic art studio
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-charcoal/80 dark:text-sand/80 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
              Founded and facilitate an after-school therapeutic arts practice supporting children through 1:1 sessions, emotionally responsive art experiences, and seasonal camps designed around process-led creative exploration.
            </p>
          </FadeIn>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {keywords.map((keyword, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/60 dark:bg-charcoal text-charcoal/80 dark:text-sand/80 text-sm md:text-base backdrop-blur-sm border border-clay/10 dark:border-white/5 shadow-sm"
              >
                {keyword}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
