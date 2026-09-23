"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const practiceAreas = [
  "Therapeutic Arts Practice",
  "Neurodiversity & Inclusive Learning",
  "Art-Based Emotional Regulation",
  "Experiential & Outdoor Learning",
  "Community Facilitation",
  "Child-Centred Curriculum Design",
  "Public Arts Programming",
  "IEP & ILP Support",
  "Play-Based Learning Environments",
  "Trauma-Informed Creative Practice"
];

export default function PracticeAreas() {
  return (
    <section className="relative px-6 md:px-12 py-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        
        <div className="w-full md:w-1/3 md:sticky md:top-32 mb-8 md:mb-0 z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-charcoal dark:text-sand mb-6">
              Practice Areas
            </h2>
            <div className="w-12 h-[1px] bg-clay dark:bg-sage mb-6"></div>
            <p className="text-charcoal/70 dark:text-sand/70 font-light leading-relaxed">
              Specialized focus areas combining psychological foundations with creative, play-based interventions.
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-2/3">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {}
            }}
            className="flex flex-wrap gap-3 md:gap-4"
          >
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, filter: "blur(4px)" },
                  visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
                }}
                className="px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-white/40 dark:bg-charcoal/30 border border-clay/10 dark:border-white/5 hover:bg-clay/10 dark:hover:bg-sage/10 transition-colors cursor-default"
              >
                <span className="text-charcoal/80 dark:text-sand/80 font-medium text-sm md:text-base">
                  {area}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
