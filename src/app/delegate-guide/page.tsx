'use client';

import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';



const sections = [
  {
    num: '01',
    title: 'Rules of Procedure',
    items: [
      'Formal Speakers List (GSL) & Moderated Caucuses',
      'Unmoderated Caucuses & Bloc Negotiations',
      'Points of Personal Privilege, Order & Parliamentary Inquiry',
      'Working Papers & Draft Resolution Introduction',
    ],
  },
  {
    num: '02',
    title: 'Position Paper Guidelines',
    items: [
      'Section 1: Background of the Topic & Past International Action',
      'Section 2: Country Stance & Government Policy',
      'Section 3: Proposed Solutions & Draft Treaty Clauses',
      'Mandatory UN Bibliography & Citation Standard',
    ],
  },
  {
    num: '03',
    title: 'Code of Conduct',
    items: [
      'Attire: Western Formal or National Diplomatic Attire',
      'Parliamentary language & respectful debate at all times',
      'Zero tolerance: Academic dishonesty, plagiarism, or misconduct',
      'Strict punctuality & committee session protocol',
    ],
  },
  {
    num: '04',
    title: 'Preparation Timeline',
    items: [
      'Phase 1: Registration & Preferred Matrix Selection',
      'Phase 2: Matrix Allotment Confirmation by Secretariat',
      'Phase 3: Study Guide Unsealing & Position Paper Drafting',
      'Phase 4: Opening Ceremony — October 29, 2026',
    ],
  },
];

export default function DelegateGuidePage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 space-y-20">

      {/* Header */}
      <div className="max-w-3xl space-y-6">
        <ScrollReveal direction="up">
          <p className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase mb-4">
            DELEGATE HANDBOOK PREVIEW
          </p>
          <span className="accent-line" />
          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Delegate Guide<br />
            &amp; Protocols.
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-white/40 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
            Essential protocols, parliamentary Rules of Procedure, position paper guidelines, and delegate expectations for Ascend MUN 2026.
          </p>
        </ScrollReveal>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05]">
        {sections.map((s, i) => (
          <ScrollReveal key={s.num} direction="up" delay={i * 0.1}>
            <div className="card-hover bg-[#080808] p-10 h-full space-y-6">
              <div className="flex items-start justify-between">
                <span className="font-mono text-[9px] tracking-[0.35em] text-white/20 uppercase">{s.num}</span>
              </div>
              <h2
                className="text-2xl font-bold text-white"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {s.title}
              </h2>
              <ul className="space-y-3">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-mono text-[10px] tracking-wider text-white/30 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Handbook Download CTA */}
      <ScrollReveal direction="up">
        <div className="border border-white/[0.08] p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase">OFFICIAL HANDBOOK</p>
            <h3
              className="text-3xl font-bold text-white"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Full Delegate Handbook (PDF)
            </h3>
            <p className="text-white/30 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
              The official 2026 Ascend MUN Delegate Handbook will be available for download upon registration launch.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 px-6 py-3.5 border border-white/10 font-mono text-[10px] tracking-[0.2em] uppercase text-white/25 cursor-not-allowed">
            <Download className="w-4 h-4" />
            RELEASING SOON
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" className="border-t border-white/[0.06] pt-10 flex flex-wrap gap-4">
        <Link
          href="/register"
          className="group flex items-center gap-2 px-7 py-3.5 bg-white text-black font-mono text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-neutral-100 transition-colors"
        >
          Registration Status <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
