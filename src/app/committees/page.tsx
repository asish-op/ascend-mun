'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { Lock, AlertCircle, ArrowRight, ChevronRight } from 'lucide-react';

import ScrambledText from '@/components/ScrambledText';

const committees = [
  { code: 'UNHRC', name: 'United Nations Human Rights Council', desc: 'Protecting fundamental human rights globally and addressing grave violations in conflict zones.', category: 'General Assembly', num: '01' },
  { code: 'DISEC', name: 'Disarmament & International Security Committee', desc: 'Formulating multilateral policy on arms control, non-proliferation, and global security crises.', category: 'General Assembly', num: '02' },
  { code: 'LOK SABHA', name: 'House of the People (Indian Cabinet)', desc: 'Debating national policy, socio-economic legislative reforms, and national security challenges.', category: 'Indian Cabinet', num: '03' },
  { code: 'IP', name: 'International Press', desc: 'Journalism, photojournalism, and reporting committee proceedings in real-time with press rigour.', category: 'Press Corps', num: '04' },
  { code: 'IFI', name: 'International Financial Institution', desc: 'Navigating macroeconomic stability, debt restructuring, and international trade policy frameworks.', category: 'Specialized Agency', num: '05' },
  { code: 'WHO', name: 'World Health Organization', desc: 'Addressing public health emergencies, pandemic preparedness, and global healthcare accessibility.', category: 'Specialized Agency', num: '06' },
];

const categories = ['ALL', 'GENERAL ASSEMBLY', 'INDIAN CABINET', 'PRESS CORPS', 'SPECIALIZED AGENCY'];

export default function CommitteesPage() {
  const [active, setActive] = useState('ALL');

  const filtered = active === 'ALL'
    ? committees
    : committees.filter(c => c.category.toUpperCase() === active);

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 space-y-16">

      {/* Header */}
      <div className="max-w-3xl space-y-6">
        <ScrollReveal direction="up">
          <p className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase mb-4">
            SECRETARIAT PREVIEW — 6 COUNCILS
          </p>
          <span className="accent-line" />
          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            <ScrambledText scrambleChars=".:">Committees</ScrambledText><br />
            <ScrambledText scrambleChars=".:">of Ascend MUN.</ScrambledText>
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-white/40 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
            All committee agendas, executive boards, and study guides are currently classified and will be unsealed upon official registration launch.
          </p>
        </ScrollReveal>
      </div>

      {/* Alert Banner */}
      <ScrollReveal direction="up">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border border-white/[0.08] p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
            <div>
              <p className="font-mono text-[11px] tracking-wider text-white uppercase mb-1">Agendas Unsealing Soon</p>
              <p className="text-white/35 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                Matrix allocations and background study guides will be published upon registration launch.
              </p>
            </div>
          </div>
          <Link
            href="/register"
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-white text-black font-mono text-[10px] tracking-[0.2em] uppercase hover:bg-neutral-100 transition-colors"
          >
            Check Timeline <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </ScrollReveal>

      {/* Filter Tabs */}
      <ScrollReveal direction="up" className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-mono text-[9px] tracking-[0.3em] uppercase px-4 py-2 border transition-all ${
              active === cat
                ? 'bg-white text-black border-white'
                : 'border-white/10 text-white/30 hover:border-white/30 hover:text-white/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </ScrollReveal>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
        {filtered.map((c, i) => (
          <ScrollReveal key={c.code} direction="up" delay={i * 0.07}>
            <div className="bg-[#080808] p-8 h-full flex flex-col justify-between group hover:bg-[#0e0e0e] transition-colors">
              <div>
                <div className="flex items-start justify-between mb-8">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase">{c.num}</span>
                  <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-white/20 uppercase">
                    <Lock className="w-3 h-3" />
                    COMING SOON
                  </div>
                </div>

                <h3
                  className="text-3xl font-bold text-white mb-2 leading-none group-hover:text-white/90 transition-colors"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {c.code}
                </h3>
                <p className="font-mono text-[9px] tracking-[0.2em] text-white/25 uppercase mb-5">{c.name}</p>
                <p className="text-white/30 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                  {c.desc}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/[0.05] flex items-center justify-between font-mono text-[9px] tracking-widest text-white/20 uppercase">
                <span>{c.category}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white/30" />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Footer CTA */}
      <ScrollReveal direction="up" className="border-t border-white/[0.06] pt-10">
        <Link
          href="/contact"
          className="group flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase text-white/35 hover:text-white transition-colors"
        >
          Have committee allocation questions? Contact the secretariat
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </ScrollReveal>
    </div>
  );
}
