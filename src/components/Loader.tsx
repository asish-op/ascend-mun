'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Check if already loaded in this session
    try {
      if (sessionStorage.getItem('ascend_loader_done') === 'true') {
        setLoading(false);
        return;
      }
    } catch (e) {}

    // 2. Smooth guaranteed 0 -> 100 step animation
    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          try {
            sessionStorage.setItem('ascend_loader_done', 'true');
          } catch (e) {}
        }, 200);
      } else {
        setProgress(current);
      }
    }, 40);

    // 3. Fallback hard timeout - guarantees loader NEVER gets stuck
    const fallbackTimeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  if (!loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -30,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between bg-[#050505] text-white p-8 sm:p-14 font-mono select-none"
        >
          {/* Background noise texture */}
          <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs tracking-widest text-neutral-400 uppercase border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span className="text-white font-bold">ASCEND MUN 2026</span>
            </div>
            <div>
              <span>HOSTED BY </span>
              <span className="text-white font-bold underline">ARIVA</span>
            </div>
          </div>

          {/* Main Title & Counter */}
          <div className="relative z-10 max-w-4xl mx-auto w-full my-auto space-y-8 text-center sm:text-left">
            <div className="space-y-2">
              <div className="text-xs text-neutral-500 uppercase tracking-widest">
                DIPLOMATIC SIMULATION MATRIX
              </div>
              <h1 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-white">
                ASCEND <span className="text-neutral-600 font-light">MUN</span>
              </h1>
            </div>

            {/* Progress Bar */}
            <div className="space-y-3 max-w-xl">
              <div className="flex justify-between items-baseline text-xs text-neutral-400 uppercase tracking-widest">
                <span>INITIALIZING SYSTEM</span>
                <span className="text-2xl font-bold text-white tracking-tight">{progress}%</span>
              </div>

              <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden border border-white/10">
                <motion.div
                  className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,1)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-neutral-500 tracking-widest uppercase border-t border-white/10 pt-4">
            <div>DIPLOMACY . INTEGRITY . INNOVATION</div>
            <div>OCTOBER 29–31, 2026 // VENUE TBA</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
