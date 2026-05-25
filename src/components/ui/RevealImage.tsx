"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface RevealImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up";
}

export default function RevealImage({
  src,
  alt,
  width = 600,
  height = 700,
  className = "",
  delay = 0,
  direction = "up",
}: RevealImageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const clipVariants = {
    hidden: {
      clipPath:
        direction === "left"
          ? "inset(0 100% 0 0)"
          : direction === "right"
          ? "inset(0 0 0 100%)"
          : "inset(100% 0 0 0)",
      scale: 1.08,
    },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      scale: 1,
    },
  };

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-[2rem] ${className}`}>
      <motion.div
        variants={clipVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 1.4,
          delay,
          ease: [0.77, 0, 0.175, 1],
        }}
        className="w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
