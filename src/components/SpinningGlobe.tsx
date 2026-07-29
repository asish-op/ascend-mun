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
    let angleY = 0;
    let angleX = 0.3; // slight tilt

    // Generate points on sphere via Fibonacci lattice
    const NUM_POINTS = 1400;
    const points: { x: number; y: number; z: number }[] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < NUM_POINTS; i++) {
      const y = 1 - (i / (NUM_POINTS - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      points.push({
        x: Math.cos(theta) * r,
        y,
        z: Math.sin(theta) * r,
      });
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const size = Math.min(460, window.innerWidth * 0.9);
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      const cx = w / 2;
      const cy = h / 2;
      const radius = w * 0.42;

      ctx.clearRect(0, 0, w, h);

      angleY += 0.003;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      // Project & sort points by depth
      const projected = points.map((p) => {
        // Rotate around Y axis
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        // Rotate around X axis
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        const scale = radius;
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;
        const depth = (z2 + 1) / 2; // 0 (back) to 1 (front)

        return { px, py, depth };
      });

      // Sort back-to-front
      projected.sort((a, b) => a.depth - b.depth);

      // Draw dots
      for (const p of projected) {
        const size = p.depth * 1.8 + 0.3;
        const opacity = p.depth * 0.75 + 0.08;

        // Interpolate color: back dots are dimmer grey, front dots brighter white
        const grey = Math.floor(140 + p.depth * 115);

        ctx.beginPath();
        ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${grey}, ${grey}, ${grey}, ${opacity})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="block"
      style={{ background: 'transparent' }}
    />
  );
}
