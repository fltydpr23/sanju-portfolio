"use client";

import FadeIn from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "1-on-1 Sessions",
    description: "Personalized, child-led therapeutic sessions blending art, play, and sensory integration.",
  },
  {
    title: "Parent Support",
    description: "Guidance, emotional support, and practical strategies for navigating your parenting journey.",
  },
  {
    title: "Sensory Creative Groups",
    description: "Small, low-demand group settings where children can connect without the pressure of traditional social expectations.",
  },
  {
    title: "School Collaborations",
    description: "Working alongside educators to create neuro-affirming spaces and individualized support plans.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-12 md:mb-16 text-center">Offerings</h2>
        </FadeIn>

        <div className="max-w-4xl mx-auto divide-y divide-charcoal/10 border-y border-charcoal/10">
          {services.map((service, idx) => (
            <FadeIn key={service.title} delay={idx * 0.1}>
              {/* Mobile: stacked. Desktop: row with hover arrow */}
              <div className="group py-7 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6 hover:bg-white/40 transition-colors duration-500 px-4 md:px-6 -mx-4 md:-mx-6 rounded-2xl">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif text-charcoal mb-2 md:mb-3 group-hover:text-clay transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-charcoal/70 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
                {/* Arrow: always show on mobile (touch), hover on desktop */}
                <div className="flex items-center text-clay md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500 mt-2 md:mt-0 shrink-0">
                  <span className="text-xs tracking-widest uppercase mr-3">Inquire</span>
                  <ArrowRight size={18} strokeWidth={1} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
