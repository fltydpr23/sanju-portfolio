"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

interface GalleryItemProps {
  src: string;
  alt: string;
  label: string;
  index: number;
  className?: string;
  parallaxOffset?: number;
}

function GalleryItem({ src, alt, label, index, className = "", parallaxOffset = 12 }: GalleryItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Subtle parallax for the inner media
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallaxOffset}%`, `${parallaxOffset}%`]);

  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, clipPath: "inset(15% 0 15% 0)" }}
      animate={isInView ? { opacity: 1, y: 0, clipPath: "inset(0% 0 0% 0)" } : {}}
      transition={{ duration: 1.4, delay: index * 0.1, ease: [0.25, 1, 0.2, 1] }}
      className={`relative overflow-hidden rounded-[32px] md:rounded-[40px] group ${className}`}
    >
      {/* Inner wrapper for parallax to prevent edges from showing */}
      <motion.div 
        className="relative w-full h-full"
        style={{ y, scale: 1.15 }}
      >
        {isVideo ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          />
        )}
      </motion.div>

      {/* Premium hover overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent flex items-end p-6 md:p-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 ease-out z-10 pointer-events-none">
        <p className="text-sand font-serif text-xl md:text-2xl italic transform translate-y-0 md:translate-y-6 md:group-hover:translate-y-0 transition-transform duration-700 ease-[0.25,1,0.2,1]">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export default function ArtGallery() {
  return (
    <section className="py-24 md:py-40 relative overflow-hidden bg-sand/30 dark:bg-charcoal-deep/40 transition-colors">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <FadeIn className="mb-16 md:mb-24 text-center md:text-left">
          <p className="text-xs tracking-[0.25em] uppercase text-charcoal/50 dark:text-sand/50 mb-4 transition-colors">Inside the Studio</p>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal dark:text-sand leading-tight transition-colors">
            Where creativity <br />
            <span className="italic text-clay dark:text-peach transition-colors">meets healing.</span>
          </h2>
        </FadeIn>

        {/* Mobile: single column stack with mixed aspect ratios */}
        <div className="flex flex-col gap-5 md:hidden">
          <GalleryItem src="/Sanju pics/img-20.jpeg" alt="Sensory play" label="Sensory Exploration" index={0} className="h-[400px]" />
          <div className="grid grid-cols-2 gap-5">
            <GalleryItem src="/Sanju pics/vid-5.mp4" alt="Art therapy process" label="Fluid Motion" index={1} className="h-80" />
            <GalleryItem src="/Sanju pics/img-1.jpeg" alt="Guided session" label="Guided Care" index={2} className="h-80" />
          </div>
          <GalleryItem src="/Sanju pics/img-3.jpeg" alt="Creative expression" label="Expression" index={3} className="h-72" />
          <div className="grid grid-cols-2 gap-5">
            <GalleryItem src="/Sanju pics/img-4.jpeg" alt="Tactile feedback" label="Tactile Focus" index={4} className="h-56" />
            <GalleryItem src="/Sanju pics/img-12.jpeg" alt="Art setup" label="Safe Spaces" index={5} className="h-56" />
          </div>
        </div>

        {/* Desktop: High-end asymmetric bento grid */}
        <div className="hidden md:grid grid-cols-4 gap-6 auto-rows-[320px]">
          {/* Row 1 & 2 */}
          <div className="col-span-2 row-span-2">
            <GalleryItem 
              src="/Sanju pics/img-20.jpeg" 
              alt="Immersive art therapy" 
              label="Sensory Exploration" 
              index={0} 
              className="h-full" 
              parallaxOffset={8} 
            />
          </div>
          <div className="col-span-1 row-span-2">
            <GalleryItem 
              src="/Sanju pics/vid-5.mp4" 
              alt="Fluid therapeutic process" 
              label="Fluid Motion" 
              index={1} 
              className="h-full" 
              parallaxOffset={15} 
            />
          </div>
          <div className="col-span-1 row-span-1">
            <GalleryItem 
              src="/Sanju pics/img-1.jpeg" 
              alt="Care and guidance" 
              label="Guided Care" 
              index={2} 
              className="h-full" 
              parallaxOffset={6} 
            />
          </div>

          {/* Row 2 (fills empty space from row 1) */}
          <div className="col-span-1 row-span-1">
            <GalleryItem 
              src="/Sanju pics/img-3.jpeg" 
              alt="Expression through color" 
              label="Creative Expression" 
              index={3} 
              className="h-full" 
              parallaxOffset={12} 
            />
          </div>

          {/* Row 3 */}
          <div className="col-span-1 row-span-1">
            <GalleryItem 
              src="/Sanju pics/img-4.jpeg" 
              alt="Tactile materials" 
              label="Tactile Focus" 
              index={4} 
              className="h-full" 
              parallaxOffset={10} 
            />
          </div>
          <div className="col-span-3 row-span-1">
            <GalleryItem 
              src="/Sanju pics/img-12.jpeg" 
              alt="Safe environment" 
              label="Safe Spaces" 
              index={5} 
              className="h-full" 
              parallaxOffset={5} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
