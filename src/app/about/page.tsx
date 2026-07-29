'use client';

import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';


export default function AboutPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 space-y-28">

      {/* Header */}
      <div className="max-w-3xl space-y-6">
        <ScrollReveal direction="up">
          <p className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase mb-4">
            ABOUT ASCEND MUN
          </p>
          <span className="accent-line" />
          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            The vision<br />
            behind Ascend.
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-white/45 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
            Ascend Model United Nations, hosted by <strong className="text-white font-medium">Ariva</strong>, is structured to be the benchmark of diplomatic discourse, intellectual rigour, and multilateral consensus-building.
          </p>
        </ScrollReveal>
      </div>

      {/* Ariva Feature */}
      <ScrollReveal direction="up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.05]">
          <div className="bg-[#080808] p-12 space-y-6">
            <p className="font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase">HOST ORGANISATION</p>
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Hosted by Ariva
            </h2>
            <p className="text-white/40 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
              Ariva brings a legacy of youth empowerment, administrative precision, and visionary event orchestration. With Ascend MUN, Ariva creates a platform where youth delegates simulate international diplomacy with real-world gravity, analytical depth, and parliamentary poise.
            </p>
            <ul className="space-y-3 pt-2">
              {[
                'Substantive diplomatic excellence',
                'Unbiased executive board selection',
                'High-octane crisis management',
                'Inclusive matrix allocations',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-mono text-[11px] tracking-wider text-white/40 uppercase">
                  <CheckCircle2 className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0a0a0a] p-12 flex flex-col justify-between space-y-8">
            <div>
              <p className="font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase mb-3">EVENT BRIEF</p>
              <div className="space-y-4">
                {[
                  { label: 'Edition', val: 'ASCEND MUN 2026' },
                  { label: 'Dates', val: 'OCTOBER 29–31, 2026' },
                  { label: 'Venue', val: 'TO BE REVEALED' },
                  { label: 'Committees', val: '6 COUNCILS' },
                  { label: 'Host', val: 'ARIVA' },
                ].map(({ label, val }) => (
                  <div key={label} className="flex items-center justify-between border-b border-white/[0.05] pb-3">
                    <span className="font-mono text-[10px] tracking-widest text-white/25 uppercase">{label}</span>
                    <span className="font-mono text-[11px] tracking-wider text-white/60 uppercase">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Three Pillars */}
      <section className="space-y-12">
        <ScrollReveal direction="up" className="border-b border-white/[0.06] pb-6">
          <p className="font-mono text-[10px] tracking-[0.35em] text-white/30 uppercase mb-3">OUR FOUNDATION</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Three Pillars
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05]">
          {[
            {
              num: '01',
              title: 'Diplomatic Rigour',
              desc: 'Enforcing authentic parliamentary protocol, position paper standards, and substantive research across all six councils.',
            },
            {
              num: '02',
              title: 'Consensus & Resolution',
              desc: 'Moving beyond debate into actionable draft resolutions, multilateral bloc formation, and coalition building.',
            },
            {
              num: '03',
              title: 'Youth Empowerment',
              desc: "Equipping delegates with public speaking, critical crisis management, and the diplomatic leadership skills that define tomorrow's leaders.",
            },
          ].map((p, i) => (
            <ScrollReveal key={p.num} direction="up" delay={i * 0.1}>
              <div className="bg-[#080808] p-10 h-full space-y-5 hover:bg-[#0c0c0c] transition-colors">
                <span className="font-mono text-[10px] tracking-[0.3em] text-white/20 uppercase">{p.num}</span>
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {p.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                  {p.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal direction="up" className="border-t border-white/[0.06] pt-12 flex flex-wrap gap-4">
        <Link
          href="/committees"
          className="group flex items-center gap-2 px-7 py-3.5 bg-white text-black font-mono text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-neutral-100 transition-colors"
        >
          Preview Committees <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white/50 hover:text-white hover:border-white/40 font-mono text-[11px] tracking-[0.2em] uppercase transition-all"
        >
          Contact Secretariat
        </Link>
      </ScrollReveal>
    </div>
  );
}
