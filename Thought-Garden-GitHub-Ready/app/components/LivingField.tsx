"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; z: number; vx: number; vy: number; size: number; phase: number };

export function LivingField({ scene, moving }: { scene: number; moving: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let frame = 0;
    let width = 0;
    let height = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particles: Particle[] = Array.from({ length: reduced ? 18 : 58 }, (_, index) => ({
      x: Math.random(), y: Math.random(), z: .25 + Math.random() * .75,
      vx: (Math.random() - .5) * .00013, vy: -.00005 - Math.random() * .00012,
      size: .7 + Math.random() * 2.2, phase: index * .73,
    }));
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = width * dpr; canvas.height = height * dpr;
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const move = (event: PointerEvent) => { pointer.current = { x: event.clientX, y: event.clientY }; };
    const leave = () => { pointer.current = { x: -1000, y: -1000 }; };
    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      const speed = moving ? 7 : 1;
      for (const particle of particles) {
        particle.x += particle.vx * speed;
        particle.y += particle.vy * speed;
        if (particle.y < -.04) { particle.y = 1.04; particle.x = Math.random(); }
        if (particle.x < -.04) particle.x = 1.04;
        if (particle.x > 1.04) particle.x = -.04;
        let x = particle.x * width + Math.sin(time * .00045 + particle.phase) * 18 * particle.z;
        let y = particle.y * height;
        const dx = x - pointer.current.x; const dy = y - pointer.current.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 130) { const force = (130 - distance) / 130; x += (dx / Math.max(distance, 1)) * force * 24; y += (dy / Math.max(distance, 1)) * force * 24; }
        const alpha = (.12 + particle.z * .33) * (moving ? .9 : 1);
        context.save(); context.translate(x, y); context.rotate(Math.sin(time * .0007 + particle.phase) * .8);
        context.fillStyle = scene === 0 ? `rgba(248,238,188,${alpha})` : `rgba(220,244,187,${alpha})`;
        context.beginPath(); context.ellipse(0, 0, particle.size * (moving ? 2.1 : 1), particle.size * 2.5, .45, 0, Math.PI * 2); context.fill(); context.restore();
      }
      if (!reduced) frame = requestAnimationFrame(draw);
    };
    resize(); window.addEventListener("resize", resize); window.addEventListener("pointermove", move); window.addEventListener("pointerleave", leave);
    frame = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", move); window.removeEventListener("pointerleave", leave); };
  }, [moving, scene]);

  return <canvas ref={canvasRef} className="living-field" aria-hidden="true" />;
}
