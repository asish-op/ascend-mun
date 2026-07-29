'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight, Calendar, MapPin, Lock, ChevronRight } from 'lucide-react';

const LineWaves = dynamic(() => import('@/components/LineWaves'), { ssr: false });


const committees = [
  { code: 'UNHRC', name: 'UN Human Rights Council', category: 'General Assembly' },
  { code: 'DISEC', name: 'Disarmament & International Security', category: 'General Assembly' },
  { code: 'UNSC', name: 'UN Security Council', category: 'Security Council' },
  { code: 'LOK SABHA', name: 'House of the People', category: 'Indian Cabinet' },
  { code: 'IP', name: 'International Press', category: 'Press Corps' },
  { code: 'IFI', name: 'International Financial Institution', category: 'Specialized Agency' },
  { code: 'WHO', name: 'World Health Organization', category: 'Specialized Agency' },
];

export default function Home() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2026-10-29T09:00:00+05:30').getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff > 0) {
        setTime({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        });
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-72px)] w-full flex items-center overflow-hidden">
        
        {/* Full-bleed interactive WebGL Waves Background */}
        <div className="absolute inset-0 z-0 opacity-50 w-full h-full">
          <LineWaves
            speed={0.25}
            innerLineCount={36}
            outerLineCount={42}
            warpIntensity={0.8}
            rotation={-45}
            brightness={0.24}
            color1="#ffffff"
            color2="#cccccc"
            color3="#666666"
            enableMouseInteraction={true}
            mouseInfluence={1.8}
          />
        </div>

        {/* Hero Content Overlay (Aligned with standard layout grid) */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 py-20 flex items-center justify-start">
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-2 overflow-hidden">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                className="text-[clamp(4.5rem,10vw,9.5rem)] font-bold leading-[0.9] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_4px_24px_rgba(255,255,255,0.2)]"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                ASCEND
              </motion.h1>
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.48 }}
                className="text-[clamp(4.5rem,10vw,9.5rem)] font-bold leading-[0.9] tracking-tight text-slate-300/30"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                MUN
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/register"
                className="btn-primary group flex items-center gap-2.5 px-7 py-3.5"
              >
                REGISTER NOW
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/committees"
                className="btn-ghost flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase pb-0.5"
              >
                VIEW COMMITTEES
              </Link>
            </motion.div>

          {/* Date / Venue pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <div className="flex items-center gap-2 px-4 py-2 border border-white/10 font-mono text-[10px] tracking-widest text-white/50 uppercase">
              <Calendar className="w-3.5 h-3.5" />
              OCTOBER 29–31, 2026
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-white/10 font-mono text-[10px] tracking-widest text-white/50 uppercase">
              <MapPin className="w-3.5 h-3.5" />
              VENUE TO BE REVEALED
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* ── MARQUEE STRIP ───────────────────────── */}
      <div className="border-y border-white/[0.06] py-3.5 overflow-hidden bg-[#060606]">
        <div className="flex whitespace-nowrap animate-marquee font-mono text-[10px] tracking-[0.3em] text-white/25 uppercase select-none">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center gap-10 mx-6">
              <span>ASCEND MUN 2026</span>
              <span className="opacity-40">/</span>
              <span>HOSTED BY ARIVA</span>
              <span className="opacity-40">/</span>
              <span>OCTOBER 29–31</span>
              <span className="opacity-40">/</span>
              <span>6 COMMITTEES</span>
              <span className="opacity-40">/</span>
              <span>REGISTRATIONS OPENING SOON</span>
              <span className="opacity-40">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── COUNTDOWN ───────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
        <ScrollReveal direction="up" className="grid grid-cols-4 gap-4 md:gap-8 text-center max-w-2xl mx-auto">
          {[
            { val: time.days, label: 'Days' },
            { val: time.hours, label: 'Hours' },
            { val: time.minutes, label: 'Min' },
            { val: time.seconds, label: 'Sec' },
          ].map(({ val, label }) => (
            <div key={label} className="border border-white/[0.06] py-8 px-4">
              <div
                className="text-4xl md:text-6xl font-bold text-white mb-2 leading-none"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {String(val).padStart(2, '0')}
              </div>
              <div className="font-mono text-[9px] tracking-[0.35em] text-white/30 uppercase">{label}</div>
            </div>
          ))}
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1} className="text-center mt-4">
          <p className="font-mono text-[10px] tracking-[0.35em] text-white/20 uppercase">
            UNTIL OPENING CEREMONY — OCT 29, 2026
          </p>
        </ScrollReveal>
      </section>

      {/* ── COMMITTEES TEASER ───────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-28">
        <ScrollReveal direction="up" className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14 border-b border-white/[0.06] pb-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.35em] text-white/30 uppercase mb-3">
              SIX COUNCILS
            </p>
            <h2
              className="text-4xl md:text-6xl font-bold text-white leading-none"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Committees
            </h2>
          </div>
          <Link
            href="/committees"
            className="btn-ghost font-mono text-[10px] tracking-[0.25em] uppercase text-white/35"
          >
            VIEW ALL
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
          {committees.map((c, i) => (
            <ScrollReveal key={c.code} direction="up" delay={i * 0.07}>
              <div className="card-hover bg-[#080808] p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-white/25 uppercase">
                    {c.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-white/25 uppercase">
                    <Lock className="w-3 h-3 text-white/30" />
                    SOON
                  </div>
                </div>
                <div className="space-y-1 mb-8">
                  <h3
                    className="text-3xl font-bold text-white transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {c.code}
                  </h3>
                  <p className="font-mono text-[10px] tracking-wider text-white/35 uppercase">
                    {c.name}
                  </p>
                </div>
                <div className="flex items-center gap-2 font-mono text-[9px] tracking-widest text-white/20 uppercase card-arrow-group">
                  <span>AGENDA CLASSIFIED</span>
                  <ChevronRight className="w-3.5 h-3.5 card-arrow" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────── */}
      <section className="border-t border-white/[0.06] bg-[#060606]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="up">
            <p className="font-mono text-[10px] tracking-[0.35em] text-white/30 uppercase mb-4">
              HOSTED BY ARIVA
            </p>
            <h2
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Ready to ascend<br />to the podium?
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-md mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
              Registrations open soon. Delegate handbooks, matrix allotments, and committee agendas will be published ahead of October 29–31.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="group flex items-center gap-2 px-7 py-3.5 bg-white text-black font-mono text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-neutral-100 transition-colors"
              >
                REGISTRATION STATUS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white/60 hover:text-white hover:border-white/40 font-mono text-[11px] tracking-[0.2em] uppercase transition-all"
              >
                ABOUT ARIVA
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15} className="grid grid-cols-2 gap-6">
            {[
              { n: '6', label: 'Committees' },
              { n: '3', label: 'Days of Debate' },
              { n: '300+', label: 'Delegates' },
              { n: '1', label: 'Vision (Ariva)' },
            ].map(({ n, label }) => (
              <div key={label} className="border border-white/[0.06] p-6">
                <div
                  className="text-4xl font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {n}
                </div>
                <div className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase">{label}</div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
