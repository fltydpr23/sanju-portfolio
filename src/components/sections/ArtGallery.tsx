"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

interface GalleryItemProps {
  src: string;
  alt: string;
  label: string;
  index: number;
  className?: string;
}

function GalleryItem({ src, alt, label, index, className = "" }: GalleryItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, clipPath: "inset(20% 0 20% 0)" }}
      animate={isInView ? { opacity: 1, y: 0, clipPath: "inset(0% 0 0% 0)" } : {}}
      transition={{ duration: 1.2, delay: index * 0.12, ease: [0.77, 0, 0.175, 1] }}
      className={`relative overflow-hidden rounded-2xl md:rounded-3xl group ${className}`}
    >
      <div className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hover overlay — label shows on hover desktop, always visible on touch */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent flex items-end p-4 md:p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-sand font-serif text-base md:text-lg italic transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-500">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export default function ArtGallery() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative enso circle — desktop only */}
      <motion.div
        initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
        whileInView={{ opacity: 0.05, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="hidden md:block absolute top-16 right-[-5%] w-[35vw] h-[35vw] pointer-events-none"
      >
        <Image src="/abstract-circle.png" alt="" width={600} height={600} className="w-full h-full object-contain opacity-60" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <FadeIn className="mb-10 md:mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-charcoal/50 mb-3">Inside the Studio</p>
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal leading-tight">
            Where creativity <br />
            <span className="italic text-clay">meets healing.</span>
          </h2>
        </FadeIn>

        {/* Mobile: single column stack */}
        <div className="flex flex-col gap-4 md:hidden">
          <GalleryItem src="/clay-hands.png" alt="Child shaping clay in art therapy" label="Tactile Expression" index={0} className="h-64" />
          <div className="grid grid-cols-2 gap-4">
            <GalleryItem src="/watercolor-hero.png" alt="Abstract watercolor art" label="Color & Feeling" index={1} className="h-48" />
            <GalleryItem src="/painting-child.png" alt="Child freely painting" label="Free Exploration" index={2} className="h-48" />
          </div>
          <GalleryItem src="/abstract-circle.png" alt="Enso circle — wholeness" label="Wholeness" index={3} className="h-48" />
        </div>

        {/* Desktop: asymmetric 3-col grid */}
        <div className="hidden md:grid grid-cols-3 gap-5 auto-rows-[280px]">
          {/* Large left card spans 2 rows */}
          <div className="row-span-2">
            <GalleryItem src="/clay-hands.png" alt="Child shaping clay in art therapy" label="Tactile Expression" index={0} className="h-full" />
          </div>
          {/* Top right two */}
          <GalleryItem src="/watercolor-hero.png" alt="Abstract watercolor art" label="Color & Feeling" index={1} className="h-full" />
          <GalleryItem src="/painting-child.png" alt="Child freely painting" label="Free Exploration" index={2} className="h-full" />
          {/* Bottom right spanning 2 cols */}
          <div className="col-span-2">
            <GalleryItem src="/abstract-circle.png" alt="Enso circle — wholeness" label="Wholeness" index={3} className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
