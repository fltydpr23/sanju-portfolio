"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  maxRadius: number;
  color: string;
  alpha: number;
  decay: number;
}

const COLORS = [
  "rgba(181, 141, 125, 0.15)", // clay
  "rgba(146, 164, 146, 0.15)", // sage
  "rgba(232, 198, 183, 0.15)", // peach
  "rgba(211, 205, 220, 0.15)", // lavender
  "rgba(199, 209, 193, 0.15)", // moss
];

export default function SensoryCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const createParticle = (x: number, y: number) => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const maxRadius = Math.random() * 80 + 40;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5;

      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 5,
        maxRadius,
        color,
        alpha: 0.8,
        decay: Math.random() * 0.005 + 0.003,
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      // Throttle creation rate slightly based on math
      if (Math.random() < 0.4) {
        createParticle(e.clientX, e.clientY);
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      createParticle(e.clientX, e.clientY);
      createParticle(e.clientX, e.clientY);
      createParticle(e.clientX, e.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        
        // Softly expand the watercolor blob
        if (p.radius < p.maxRadius) {
          p.radius += (p.maxRadius - p.radius) * 0.05;
        }

        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        // Use soft blending mode to mimic watercolor layers
        ctx.globalCompositeOperation = "multiply";
        ctx.globalAlpha = p.alpha;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        // Gradient fill for sensory watercolor diffusion
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, p.color);
        grad.addColorStop(1, "rgba(249, 248, 246, 0)"); // Fades to background sand color
        
        ctx.fillStyle = grad;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70 transition-opacity duration-1000"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}
