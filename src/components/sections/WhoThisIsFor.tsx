"use client";

import FadeIn from "@/components/ui/FadeIn";

const audiences = [
  {
    title: "High Sensitivity",
    description: "Children who feel deeply, are easily overwhelmed by sensory input, and need soft, predictable environments to thrive.",
  },
  {
    title: "ADHD & Autism",
    description: "Minds that process the world uniquely. We focus on affirming their neurotype, supporting regulation, and celebrating their creative differences.",
  },
  {
    title: "Emotional Overwhelm",
    description: "For those experiencing intense anxiety, big feelings, or difficulties processing transitions and changes in routine.",
  },
  {
    title: "Social Anxiety",
    description: "Children who find traditional social expectations draining, needing a pressure-free space to interact at their own gentle pace.",
  },
];

export default function WhoThisIsFor() {
  return (
    <section className="py-20 md:py-28 bg-white/40 backdrop-blur-xl border-y border-charcoal/5">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-4 md:mb-6">Who I Support</h2>
          <p className="text-base md:text-lg text-charcoal/70 max-w-2xl mx-auto font-light">
            Therapy tailored to the unique nervous system of your child. No forced compliance, just gentle connection.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {audiences.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.1} className="h-full">
              <div className="p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-sand/40 border border-charcoal/5 hover:bg-white/60 transition-colors duration-500 h-full flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-serif text-charcoal mb-3 md:mb-4">{item.title}</h3>
                <p className="text-sm md:text-base text-charcoal/70 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
