"use client";

import FadeIn from "@/components/ui/FadeIn";
import RevealImage from "@/components/ui/RevealImage";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-center">

          {/* Image — full width on mobile, natural aspect ratio */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px]">
            <RevealImage
              src="/clay-hands.png"
              alt="Child's hands in an art therapy clay session"
              width={800}
              height={700}
              className="h-full w-full"
              direction="left"
            />
            {/* Floating enso decoration — hidden on mobile to avoid overflow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              whileInView={{ opacity: 0.12, scale: 1, rotate: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
              className="hidden md:block absolute -bottom-8 -right-8 w-36 h-36 lg:w-40 lg:h-40 pointer-events-none"
            >
              <Image src="/abstract-circle.png" alt="" width={200} height={200} className="w-full h-full object-contain" />
            </motion.div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6 md:mb-8 leading-tight">
                Hi, I&apos;m Sanjana.{" "}
                <span className="text-clay italic block mt-1">Let&apos;s slow down together.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base md:text-lg text-charcoal/80 mb-5 font-light leading-relaxed">
                As a trained art therapist, I&apos;ve spent years observing how traditional therapeutic spaces can often feel overwhelming, sterile, or fundamentally misaligned with how neurodivergent minds naturally operate.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-base md:text-lg text-charcoal/80 mb-8 font-light leading-relaxed">
                I believe that therapy shouldn&apos;t be about &quot;fixing&quot; behaviors. It&apos;s about creating an emotionally safe, deeply attuned environment where a child feels seen. Through art, sensory play, and gentle movement, we build a bridge to expression that doesn&apos;t rely solely on words.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="pt-6 border-t border-charcoal/10">
                <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-3">My Values</p>
                <ul className="flex flex-wrap gap-3 text-sm text-charcoal/80">
                  {["Neuro-Affirming", "Trauma-Informed", "Sensory-Safe", "Child-Led"].map((v) => (
                    <li key={v} className="px-4 py-2 rounded-full border border-charcoal/10 bg-white/30 backdrop-blur-sm">
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
