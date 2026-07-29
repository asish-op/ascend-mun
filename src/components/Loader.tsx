'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [phase, setPhase] = useState<string>('enter');

  useEffect(() => {
    try {
      if (sessionStorage.getItem('ascend_loaded') === '1') {
        setPhase('done');
        return;
      }
    } catch {}

    // Phase timeline: enter(800ms) → hold(2600ms) → exit(700ms) → done
    const t1 = setTimeout(() => setPhase('hold'), 800);
    const t2 = setTimeout(() => setPhase('exit'), 3400);
    const t3 = setTimeout(() => {
      setPhase('done');
      try { sessionStorage.setItem('ascend_loaded', '1'); } catch {}
    }, 4100);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[99999] bg-[#080808] flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Top thin line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase === 'enter' ? 1 : 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
            className="absolute top-0 left-0 right-0 h-[1px] bg-white/20"
          />

          <div className="relative text-center px-8">
            {/* Presented by */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: phase === 'enter' ? 1 : 0, y: phase === 'enter' ? 0 : -8 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-[11px] tracking-[0.35em] text-white/40 uppercase mb-6"
            >
              ARIVA PRESENTS
            </motion.p>

            {/* Main title — large serif */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: phase === 'enter' ? '0%' : '-100%' }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: phase === 'enter' ? 0.15 : 0 }}
                className="font-serif text-[clamp(4rem,15vw,11rem)] font-bold text-white leading-none tracking-tight"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                ASCEND
              </motion.h1>
            </div>

            <div className="overflow-hidden -mt-2">
              <motion.h2
                initial={{ y: '100%' }}
                animate={{ y: phase === 'enter' ? '0%' : '-100%' }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: phase === 'enter' ? 0.28 : 0.07 }}
                className="font-serif text-[clamp(2rem,8vw,5.5rem)] font-light text-white/40 tracking-[0.3em] leading-none"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                MUN
              </motion.h2>
            </div>

            {/* Year & dates */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'enter' ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-8 font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase"
            >
              OCTOBER 29 — 31 · 2026
            </motion.div>
          </div>

          {/* Bottom thin line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
