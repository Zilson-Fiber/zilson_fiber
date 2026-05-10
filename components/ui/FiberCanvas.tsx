"use client";

import { useEffect, useRef } from "react";

interface Fiber {
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  width: number;
}

export function FiberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const fibers: Fiber[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: 40 + Math.random() * 80,
      angle: Math.random() * Math.PI * 2,
      speed: 0.1 + Math.random() * 0.3,
      opacity: 0.12 + Math.random() * 0.28,
      width: 0.5 + Math.random() * 2,
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouse);

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      fibers.forEach((fiber) => {
        const dx = mouseX - fiber.x;
        const dy = mouseY - fiber.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 300);

        fiber.angle += fiber.speed * 0.02 + influence * 0.02;
        fiber.x += Math.cos(fiber.angle) * fiber.speed * 0.5;
        fiber.y += Math.sin(fiber.angle) * fiber.speed * 0.3;

        if (fiber.x < -fiber.length) fiber.x = width + fiber.length;
        if (fiber.x > width + fiber.length) fiber.x = -fiber.length;
        if (fiber.y < -fiber.length) fiber.y = height + fiber.length;
        if (fiber.y > height + fiber.length) fiber.y = -fiber.length;

        const endX = fiber.x + Math.cos(fiber.angle) * fiber.length;
        const endY = fiber.y + Math.sin(fiber.angle) * fiber.length;

        const gradient = ctx!.createLinearGradient(
          fiber.x,
          fiber.y,
          endX,
          endY
        );
        gradient.addColorStop(0, `rgba(6, 182, 212, ${fiber.opacity * (1 + influence)})`);
        gradient.addColorStop(1, `rgba(16, 185, 129, ${fiber.opacity * 0.3})`);

        ctx!.beginPath();
        ctx!.moveTo(fiber.x, fiber.y);
        ctx!.lineTo(endX, endY);
        ctx!.strokeStyle = gradient;
        ctx!.lineWidth = fiber.width;
        ctx!.lineCap = "round";
        ctx!.stroke();
      });

      animationRef.current = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      canvas.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      aria-hidden="true"
    />
  );
}
