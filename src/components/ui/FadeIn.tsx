"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function FadeIn({ children, delay = 0, className, direction = "up" }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getDirectionOffset = () => {
    switch (direction) {
      case "up": return { y: 40, x: 0 };
      case "down": return { y: -40, x: 0 };
      case "left": return { y: 0, x: 40 };
      case "right": return { y: 0, x: -40 };
      case "none": return { y: 0, x: 0 };
    }
  };

  const offset = getDirectionOffset();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: offset.x, y: offset.y }}
      transition={{
        duration: 1.2,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom ease-out
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
