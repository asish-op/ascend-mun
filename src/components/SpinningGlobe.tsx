'use client';

import { useEffect, useRef } from 'react';

export default function SpinningGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    // Rotation state
    let angleY = 0;
    let angleX = 0.25;

    // Drag state
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let velX = 0;
    let velY = 0.003; // auto-spin velocity on Y

    // Fibonacci sphere points
    const NUM_POINTS = 2000;
    const points: { x: number; y: number; z: number }[] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < NUM_POINTS; i++) {
      const y = 1 - (i / (NUM_POINTS - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      points.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      // Bigger: up to 560px
      const size = Math.min(560, window.innerWidth * 0.9);
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // ── Mouse drag handlers ──────────────────────
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      velX = 0;
      velY = 0;
      canvas.style.cursor = 'grabbing';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      velX = dy * 0.005;
      velY = dx * 0.005;
      angleX += velX;
      angleY += velY;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
      canvas.style.cursor = 'grab';
    };

    // ── Touch handlers ───────────────────────────
    const onTouchStart = (e: TouchEvent) => {
      isDragging = true;
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
      velX = 0;
      velY = 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const dx = e.touches[0].clientX - lastMouseX;
      const dy = e.touches[0].clientY - lastMouseY;
      velX = dy * 0.005;
      velY = dx * 0.005;
      angleX += velX;
      angleY += velY;
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
    };

    const onTouchEnd = () => { isDragging = false; };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: false });
    canvas.addEventListener('touchend', onTouchEnd);
    canvas.style.cursor = 'grab';

    const draw = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      const cx = w / 2;
      const cy = h / 2;
      const radius = w * 0.43;

      ctx.clearRect(0, 0, w, h);

      if (!isDragging) {
        // Inertia: gradually apply velocity then restore auto-spin
        velX *= 0.92;
        velY *= 0.92;
        // Blend back toward base auto-spin on Y
        velY += (0.003 - velY) * 0.015;
        // Blend angleX back to gentle tilt
        angleX += velX + (0.25 - angleX) * 0.008;
        angleY += velY;
      }

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const projected = points.map((p) => {
        // Rotate Y axis
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        // Rotate X axis
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        const px = cx + x1 * radius;
        const py = cy + y2 * radius;
        const depth = (z2 + 1) / 2; // 0=back, 1=front

        return { px, py, depth };
      });

      // Sort back-to-front for proper depth rendering
      projected.sort((a, b) => a.depth - b.depth);

      for (const p of projected) {
        const dotSize = p.depth * 2.0 + 0.35;
        const opacity = p.depth * 0.78 + 0.07;
        const grey = Math.floor(120 + p.depth * 135);

        ctx.beginPath();
        ctx.arc(p.px, p.py, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${grey}, ${grey}, ${grey}, ${opacity})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="block select-none"
      style={{ background: 'transparent', touchAction: 'none' }}
    />
  );
}
