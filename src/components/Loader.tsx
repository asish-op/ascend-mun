'use client';

import { useState, useEffect } from 'react';
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

    // Timeline: 
    // phase = 'enter' (active for 2200ms while loading bar fills from 0 to 100%)
    // phase = 'exit' (text slides out & background fades for 600ms)
    // phase = 'done' (unmounts loader)
    const t1 = setTimeout(() => setPhase('exit'), 2200);
    const t2 = setTimeout(() => {
      setPhase('done');
      try { sessionStorage.setItem('ascend_loaded', '1'); } catch {}
    }, 2800);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Top silver line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-400/40 to-transparent" />

          <div className="relative text-center px-8 flex flex-col items-center">
            {/* Presented by */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: phase === 'enter' ? 1 : 0, y: phase === 'enter' ? 0 : -10 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[10px] tracking-[0.4em] text-slate-300/60 uppercase mb-6"
            >
              ARIVA PRESENTS
            </motion.p>

            {/* Main title — Rigid Silver & White */}
            <div className="overflow-hidden py-1">
              <motion.h1
                initial={{ y: 0 }}
                animate={{ y: phase === 'enter' ? 0 : -80, opacity: phase === 'enter' ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[clamp(3.5rem,13vw,10rem)] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                ASCEND
              </motion.h1>
            </div>

            <div className="overflow-hidden -mt-2 py-1">
              <motion.h2
                initial={{ y: 0 }}
                animate={{ y: phase === 'enter' ? 0 : -60, opacity: phase === 'enter' ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                className="font-serif text-[clamp(1.8rem,7vw,4.5rem)] font-bold text-slate-300/40 tracking-[0.35em] leading-none uppercase"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                MUN
              </motion.h2>
            </div>

            {/* Year & dates */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'enter' ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-6 font-mono text-[9px] tracking-[0.4em] text-slate-400/50 uppercase"
            >
              OCTOBER 29 — 31 · 2026
            </motion.div>

            {/* Loading Progress Bar (2 Seconds Fill) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: phase === 'enter' ? 1 : 0, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="mt-8 w-56 h-[2px] bg-slate-800/80 rounded-full overflow-hidden relative"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: phase === 'enter' ? 1 : 1 }}
                transition={{ duration: 2.0, ease: 'easeInOut' }}
                style={{ transformOrigin: 'left' }}
                className="h-full w-full bg-gradient-to-r from-slate-400 via-white to-slate-300 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              />
            </motion.div>
          </div>

          {/* Bottom silver line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-400/40 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
