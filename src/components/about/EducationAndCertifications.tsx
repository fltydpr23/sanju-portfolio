"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

export default function EducationAndCertifications() {
  return (
    <section className="relative px-6 md:px-12 py-16 md:py-32 max-w-7xl mx-auto border-t border-clay/10 dark:border-white/5 mt-16 md:mt-24">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Education */}
        <div>
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-serif text-charcoal dark:text-sand mb-8">
              Education
            </h2>
            <ul className="space-y-6 text-charcoal/80 dark:text-sand/80 font-light leading-relaxed">
              <li className="flex flex-col">
                <span className="font-medium">MSc Psychology</span>
                <span className="text-sm text-charcoal/60 dark:text-sand/60 mt-1">Jain University, Bengaluru (2020–2023)</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium">BMS International Business</span>
                <span className="text-sm text-charcoal/60 dark:text-sand/60 mt-1">Jain University, Bengaluru (2017–2020)</span>
              </li>
            </ul>
          </FadeIn>
        </div>

        {/* Certifications */}
        <div>
          <FadeIn delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-serif text-charcoal dark:text-sand mb-8">
              Certifications
            </h2>
            <ul className="space-y-6 text-charcoal/80 dark:text-sand/80 font-light leading-relaxed">
              <li className="flex flex-col">
                <span className="font-medium">Art Therapy Certification</span>
                <span className="text-sm text-charcoal/60 dark:text-sand/60 mt-1">ArtAdventures</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium">First Aid Mental Health Trainer</span>
                <span className="text-sm text-charcoal/60 dark:text-sand/60 mt-1">Apollo Shine</span>
              </li>
            </ul>
          </FadeIn>
        </div>
      </div>

    

    </section>
  );
}
