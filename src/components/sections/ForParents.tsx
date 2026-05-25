"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function ForParents() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-sand relative overflow-hidden">
      {/* Soft glowing ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[50vw] md:h-[50vw] rounded-full bg-clay/20 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-10 md:mb-12 leading-tight">
              To the overwhelmed parent:{" "}
              <span className="italic text-peach block mt-2">
                you don&apos;t have to carry this alone.
              </span>
            </h2>
          </FadeIn>

          <div className="space-y-6 md:space-y-8 text-base md:text-xl font-light text-sand/80 leading-relaxed max-w-2xl mx-auto">
            <FadeIn delay={0.2}>
              <p>
                Navigating the world with a neurodivergent child often means constantly advocating, explaining, and adjusting. It is exhausting.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p>
                This space is for you, too. It&apos;s a place where you don&apos;t need to apologize for your child&apos;s big feelings or unique way of being. We work together not just to support your child, but to help you find breathing room and confidence in your parenting journey.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
