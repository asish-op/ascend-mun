'use client';

import { useEffect, useRef } from 'react';

export default function WireGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const c = ctx; // non-null reference for use inside closures

    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;
    canvas.width = w * window.devicePixelRatio;
    canvas.height = h * window.devicePixelRatio;
    c.scale(window.devicePixelRatio, window.devicePixelRatio);

    let rotation = 0;
    let animId: number;

    const R = Math.min(w, h) * 0.42;
    const LAT_LINES = 10;
    const LON_LINES = 16;
    const DOT_ROWS = 18;
    const DOT_COLS = 32;

    function project(x: number, y: number, z: number) {
      // Simple perspective projection
      const perspective = 900;
      const scale = perspective / (perspective + z);
      return {
        x: w / 2 + x * scale,
        y: h / 2 + y * scale,
        scale,
      };
    }

    function rotateY(x: number, y: number, z: number, angle: number) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x: x * cos - z * sin, y, z: x * sin + z * cos };
    }

    function draw() {
      c.clearRect(0, 0, w, h);
      rotation += 0.003;

      // Draw latitude lines
      for (let i = 1; i < LAT_LINES; i++) {
        const phi = (Math.PI * i) / LAT_LINES;
        const r = R * Math.sin(phi);
        const yPos = R * Math.cos(phi);
        c.beginPath();
        for (let j = 0; j <= 64; j++) {
          const theta = (2 * Math.PI * j) / 64;
          const xPos = r * Math.cos(theta);
          const zPos = r * Math.sin(theta);
          const rot = rotateY(xPos, yPos, zPos, rotation);
          const p = project(rot.x, rot.y, rot.z);
          const alpha = 0.06 + 0.08 * p.scale;
          c.strokeStyle = `rgba(255,255,255,${Math.min(alpha, 0.18)})`;
          if (j === 0) c.moveTo(p.x, p.y);
          else c.lineTo(p.x, p.y);
        }
        c.lineWidth = 0.5;
        c.stroke();
      }

      // Draw longitude lines
      for (let i = 0; i < LON_LINES; i++) {
        const theta = (2 * Math.PI * i) / LON_LINES + rotation;
        c.beginPath();
        for (let j = 0; j <= 64; j++) {
          const phi = (Math.PI * j) / 64;
          const xPos = R * Math.sin(phi) * Math.cos(theta);
          const yPos = R * Math.cos(phi);
          const zPos = R * Math.sin(phi) * Math.sin(theta);
          const p = project(xPos, yPos, zPos);
          const alpha = 0.06 + 0.08 * p.scale;
          c.strokeStyle = `rgba(255,255,255,${Math.min(alpha, 0.18)})`;
          if (j === 0) c.moveTo(p.x, p.y);
          else c.lineTo(p.x, p.y);
        }
        c.lineWidth = 0.5;
        c.stroke();
      }

      // Draw surface dots
      for (let i = 0; i <= DOT_ROWS; i++) {
        for (let j = 0; j < DOT_COLS; j++) {
          const phi = (Math.PI * i) / DOT_ROWS;
          const theta = (2 * Math.PI * j) / DOT_COLS;
          const xPos = R * Math.sin(phi) * Math.cos(theta);
          const yPos = R * Math.cos(phi);
          const zPos = R * Math.sin(phi) * Math.sin(theta);
          const rot = rotateY(xPos, yPos, zPos, rotation);
          const p = project(rot.x, rot.y, rot.z);
          if (rot.z < 0) {
            const alpha = 0.15 + 0.35 * p.scale;
            c.fillStyle = `rgba(255,255,255,${Math.min(alpha, 0.55)})`;
            c.beginPath();
            c.arc(p.x, p.y, 0.9 * p.scale, 0, Math.PI * 2);
            c.fill();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      c.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
