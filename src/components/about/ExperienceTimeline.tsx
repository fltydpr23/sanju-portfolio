"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const experiences = [
  {
    title: "Art Teacher & Studio Founder",
    organization: "SPOT Microschool / Insighte",
    date: "2025 – Present",
    description: "Integrate therapeutic art practices into personalised learning pathways for neurodiverse and gifted adolescents. Design emotionally responsive, project-based art experiences supporting self-expression, confidence and sensory engagement. Collaborate with multidisciplinary teams and special educators to align studio work with IEP goals."
  },
  {
    title: "Assistant Educator — Play With Meaning",
    organization: "Kalvi, Auroville",
    date: "2024",
    description: "Co-developed thematic curriculum units exploring emotional safety, self-awareness and community belonging. Facilitated outdoor experiential learning translating social-emotional concepts into embodied, play-based experiences."
  },
  {
    title: "Head of EITA — Emotional Intelligence Through Arts",
    organization: "Love Hope Company",
    date: "2023 – 2024",
    description: "Led therapeutic arts programmes supporting emotional intelligence and holistic child development. Conducted community workshops for children and adults using art as a tool for expression, reflection and emotional processing."
  }
];

const publicProgrammes = [
  {
    organization: "Kochi–Muziris Biennale",
    description: "Facilitated a 3-day open public therapeutic arts programme in collaboration with a mental health NGO, engaging participants across ages and backgrounds."
  },
  {
    organization: "Museum of Art and Photography (MAP), Bengaluru",
    description: "Designed and facilitated art therapy workshops for children through MAP’s public programming initiatives."
  },
  {
    organization: "Youthlink, Auroville",
    description: "Conducted nature-based therapeutic arts programmes for adolescents and young adults through outdoor experiential learning."
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="relative px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
      
      {/* Selected Experience */}
      <div className="mb-24">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal dark:text-sand mb-16 text-center">
            Selected Experience
          </h2>
        </FadeIn>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-clay/20 dark:bg-sage/20 hidden md:block"></div>

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-5px] md:left-1/2 top-0 md:top-2 w-3 h-3 rounded-full bg-clay dark:bg-peach md:-translate-x-1.5 shadow-[0_0_0_4px_rgba(255,255,255,0.5)] dark:shadow-[0_0_0_4px_rgba(31,29,27,0.5)] z-10 hidden md:block"></div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <span className="text-xs tracking-widest uppercase text-clay dark:text-sage font-medium block mb-3">
                      {exp.date}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif text-charcoal dark:text-sand mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-base text-charcoal/60 dark:text-sand/60 mb-6 font-medium">
                      {exp.organization}
                    </h4>
                    <p className="text-charcoal/80 dark:text-sand/80 font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Public Programmes */}
      <div>
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal dark:text-sand mb-16 text-center">
            Selected Public Programmes
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {publicProgrammes.map((prog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="p-8 rounded-3xl bg-white/40 dark:bg-charcoal/20 border border-clay/5 dark:border-white/5 hover:border-clay/20 dark:hover:border-sage/20 transition-colors"
            >
              <h3 className="text-lg md:text-xl font-serif text-charcoal dark:text-sand mb-4">
                {prog.organization}
              </h3>
              <p className="text-charcoal/70 dark:text-sand/70 font-light leading-relaxed text-sm md:text-base">
                {prog.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
