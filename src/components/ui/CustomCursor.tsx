"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isPainting, setIsPainting] = useState(false);
  const [isTouch, setIsTouch] = useState(true); // default true until we detect mouse

  const cursorX = useSpring(0, { stiffness: 500, damping: 40 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 40 });

  // Trailing blob - much slower spring for laggy paintbrush feel
  const trailX = useSpring(0, { stiffness: 80, damping: 20 });
  const trailY = useSpring(0, { stiffness: 80, damping: 20 });

  useEffect(() => {
    // Detect if device has a fine pointer (mouse/stylus) vs coarse (touch)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);
    document.body.classList.add("has-custom-cursor");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const handleMouseDown = () => setIsPainting(true);
    const handleMouseUp = () => setIsPainting(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button");
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  if (isTouch) return null;

  return (
    <>
      {/* Paintbrush tip - snappy */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-multiply"
        style={{ x: cursorX, y: cursorY }}
      >
        {/* The SVG paintbrush */}
        <motion.svg
          width="32"
          height="48"
          viewBox="0 0 32 48"
          fill="none"
          style={{
            translateX: -6,
            translateY: -4,
            rotate: isPainting ? 15 : isHovering ? -10 : 0,
          }}
          animate={{
            scale: isPainting ? 0.9 : isHovering ? 1.15 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Brush handle */}
          <rect x="13" y="18" width="6" height="26" rx="3" fill="#6b5c4e" />
          {/* Ferrule (metal band) */}
          <rect x="11" y="16" width="10" height="5" rx="1.5" fill="#9b9082" />
          {/* Bristles */}
          <ellipse cx="16" cy="11" rx="6" ry="8" fill="#b58d7d" />
          <ellipse cx="16" cy="14" rx="4" ry="5" fill="#c9a090" />
          {/* Tip */}
          <ellipse cx="16" cy="4" rx="2.5" ry="4" fill="#e8c6b7" />
          {/* Paint drip when clicking */}
          {isPainting && (
            <motion.ellipse
              initial={{ scaleY: 0, y: 0 }}
              animate={{ scaleY: 1, y: 3 }}
              cx="16"
              cy="2"
              rx="2"
              ry="3"
              fill="#b58d7d"
              style={{ transformOrigin: "16px 0px" }}
            />
          )}
        </motion.svg>

        {/* Dot at brush tip */}
        <motion.div
          animate={{
            scale: isPainting ? 2.5 : isHovering ? 1.5 : 1,
            opacity: isPainting ? 0.8 : 0.6,
          }}
          transition={{ duration: 0.15 }}
          className="absolute w-2 h-2 rounded-full bg-clay"
          style={{ top: 2, left: 10 }}
        />
      </motion.div>

      {/* Trailing paint blob — slow and painterly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: trailX, y: trailY }}
      >
        <motion.div
          animate={{
            scale: isPainting ? 1.8 : 1,
            opacity: isPainting ? 0.18 : 0.08,
          }}
          transition={{ duration: 0.4 }}
          className="w-8 h-8 rounded-full bg-clay blur-md -translate-x-4 -translate-y-4"
        />
      </motion.div>
    </>
  );
}
