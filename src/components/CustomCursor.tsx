'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable custom cursor if fine pointer (mouse) is present
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isTouchOnly = window.matchMedia('(pointer: coarse)').matches;

    if (isFinePointer && !isTouchOnly) {
      setEnabled(true);
      document.body.classList.add('custom-cursor-active');
    } else {
      setEnabled(false);
      document.body.classList.remove('custom-cursor-active');
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const hoverable = target.closest(
          'a, button, input, textarea, [role="button"], [data-hover], [draggable="true"], .draggable'
        );
        setIsHovered(!!hoverable);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/70 mix-blend-difference"
        animate={{
          x: position.x - (isHovered ? 24 : 14),
          y: position.y - (isHovered ? 24 : 14),
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0)',
        }}
        transition={{ type: 'spring', damping: 26, stiffness: 380, mass: 0.4 }}
      />
      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovered ? 1.6 : 1,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 450, mass: 0.1 }}
      />
    </div>
  );
}
