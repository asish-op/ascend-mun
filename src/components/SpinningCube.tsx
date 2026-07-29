'use client';

import React, { useEffect, useRef } from 'react';

export default function SpinningCube() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rx = 0.4;
    let ry = 0.6;
    let rz = 0.2;

    // Cube 3D vertices
    const size = 70; // Half side length
    const vertices: [number, number, number][] = [
      [-size, -size, -size],
      [ size, -size, -size],
      [ size,  size, -size],
      [-size,  size, -size],
      [-size, -size,  size],
      [ size, -size,  size],
      [ size,  size,  size],
      [-size,  size,  size],
    ];

    // 6 Faces defined by vertex indices (counter-clockwise)
    const faces = [
      { verts: [0, 1, 2, 3], normal: [0, 0, -1] }, // Back
      { verts: [5, 4, 7, 6], normal: [0, 0, 1]  }, // Front
      { verts: [4, 0, 3, 7], normal: [-1, 0, 0] }, // Left
      { verts: [1, 5, 6, 2], normal: [1, 0, 0]  }, // Right
      { verts: [4, 5, 1, 0], normal: [0, -1, 0] }, // Top
      { verts: [3, 2, 6, 7], normal: [0, 1, 0]  }, // Bottom
    ];

    // Edges connecting vertices
    const edges: [number, number][] = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = Math.min(window.innerWidth - 40, 320);
      const displayHeight = displayWidth;
      
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const w = parseFloat(canvas.style.width) || 300;
      const h = parseFloat(canvas.style.height) || 300;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Increment rotations
      rx += 0.008;
      ry += 0.012;
      rz += 0.005;

      // Rotation matrices
      const cosX = Math.cos(rx), sinX = Math.sin(rx);
      const cosY = Math.cos(ry), sinY = Math.sin(ry);
      const cosZ = Math.cos(rz), sinZ = Math.sin(rz);

      // Project vertices
      const projected: { x: number; y: number; z: number }[] = [];

      for (let i = 0; i < vertices.length; i++) {
        let [x, y, z] = vertices[i];

        // Rotate X
        let y1 = y * cosX - z * sinX;
        let z1 = y * sinX + z * cosX;

        // Rotate Y
        let x2 = x * cosY + z1 * sinY;
        let z2 = -x * sinY + z1 * cosY;

        // Rotate Z
        let x3 = x2 * cosZ - y1 * sinZ;
        let y3 = x2 * sinZ + y1 * cosZ;

        // Perspective projection
        const fov = 400;
        const distance = 400;
        const scale = fov / (distance + z2);

        projected.push({
          x: cx + x3 * scale,
          y: cy + y3 * scale,
          z: z2
        });
      }

      // Sort faces by depth for painter's algorithm
      const faceDepths = faces.map((face) => {
        let zSum = 0;
        face.verts.forEach((idx) => {
          zSum += projected[idx].z;
        });
        return { face, avgZ: zSum / 4 };
      });

      faceDepths.sort((a, b) => b.avgZ - a.avgZ);

      // Draw faces (dark solid body with subtle silver sheen)
      faceDepths.forEach(({ face }) => {
        ctx.beginPath();
        const first = projected[face.verts[0]];
        ctx.moveTo(first.x, first.y);
        for (let i = 1; i < face.verts.length; i++) {
          const pt = projected[face.verts[i]];
          ctx.lineTo(pt.x, pt.y);
        }
        ctx.closePath();

        // Dark rigid fill
        ctx.fillStyle = '#060606';
        ctx.fill();

        // Crisp white/silver outline edge
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.lineWidth = 1.75;
        ctx.stroke();
      });

      // Draw sharp outer/inner edges for extra clarity
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      edges.forEach(([p1, p2]) => {
        ctx.beginPath();
        ctx.moveTo(projected[p1].x, projected[p1].y);
        ctx.lineTo(projected[p2].x, projected[p2].y);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center p-4">
      {/* Subtle silver background aura/glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-white/10 blur-3xl rounded-full pointer-events-none" />
      <canvas
        ref={canvasRef}
        className="relative z-10 drop-shadow-[0_10px_25px_rgba(255,255,255,0.15)] transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}
