"use client";

import FadeIn from "@/components/ui/FadeIn";

const testimonials = [
  {
    quote: "For the first time, my son doesn't fight going to therapy. He says Sanjana 'actually gets it.' I can't put into words the relief that brings.",
    author: "Mother of an autistic 8-year-old",
  },
  {
    quote: "Sanjana has a rare gift for holding space. She didn't try to change how my daughter expressed herself; she joined her in it.",
    author: "Parent of a highly sensitive child",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white/30 backdrop-blur-md border-y border-charcoal/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-14 md:gap-24">
          {testimonials.map((testimonial, idx) => (
            <FadeIn key={idx} delay={0.1} className="max-w-3xl mx-auto text-center">
              <p className="text-xl sm:text-2xl md:text-4xl font-serif text-charcoal leading-snug mb-6 md:mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <span className="text-xs tracking-widest uppercase text-clay">
                &mdash; {testimonial.author}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
