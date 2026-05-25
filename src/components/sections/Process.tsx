"use client";

import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    title: "Art & Sensory Exploration",
    description: "Using clay, paint, and sensory materials to process feelings that are too big or abstract for words."
  },
  {
    number: "02",
    title: "Gentle Movement",
    description: "Honoring the body's need to stim, move, or rest to find nervous system regulation."
  },
  {
    number: "03",
    title: "Storytelling & Play",
    description: "Building narratives through metaphor and imaginative play, providing a safe distance to explore complex emotions."
  }
];

export default function Process() {
  return (
    <section id="approach" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">The Approach</h2>
            <p className="text-lg text-charcoal/70 font-light leading-relaxed">
              Therapy here doesn't look like sitting still in a chair. It looks like messy hands, safe movement, and following the child's natural curiosity.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <FadeIn key={step.number} delay={idx * 0.15}>
              <div className="relative p-8 h-full rounded-[2rem] border border-charcoal/5 bg-gradient-to-b from-white/40 to-transparent overflow-hidden group hover:border-clay/20 transition-colors duration-500">
                <div className="absolute top-0 right-0 p-8 text-6xl font-serif italic text-charcoal/5 group-hover:text-clay/10 transition-colors duration-500">
                  {step.number}
                </div>
                <div className="relative z-10 pt-16">
                  <h3 className="text-xl font-serif text-charcoal mb-4">{step.title}</h3>
                  <p className="text-charcoal/70 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
