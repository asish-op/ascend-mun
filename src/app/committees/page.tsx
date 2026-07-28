'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { Lock, Shield, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

const committeesData = [
  {
    code: 'UNHRC',
    name: 'United Nations Human Rights Council',
    desc: 'Protecting fundamental human rights globally and addressing grave human rights violations in conflict zones.',
    category: 'General Assembly',
    badge: 'UN Body',
    status: 'AGENDAS CLASSIFIED',
  },
  {
    code: 'DISEC',
    name: 'Disarmament & International Security Committee',
    desc: 'Formulating multilateral policy on arms control, non-proliferation of weapons, and global security crises.',
    category: 'General Assembly',
    badge: 'UN Body',
    status: 'AGENDAS CLASSIFIED',
  },
  {
    code: 'LOK SABHA',
    name: 'House of the People (Indian Cabinet)',
    desc: 'Debating national policy, socio-economic legislative reforms, and national security challenges in a parliamentary setup.',
    category: 'Indian Cabinet',
    badge: 'Domestic Cabinet',
    status: 'AGENDAS CLASSIFIED',
  },
  {
    code: 'IP',
    name: 'International Press',
    desc: 'Journalism, photojournalism, and investigating committee proceedings with real-time reporting and press releases.',
    category: 'Specialized Agency',
    badge: 'Press Corps',
    status: 'APPLICATIONS OPENING SOON',
  },
  {
    code: 'IFI',
    name: 'International Financial Institution',
    desc: 'Addressing macroeconomic stability, inflation management, debt restructuring, and international trade policy.',
    category: 'Specialized Agency',
    badge: 'Economic Body',
    status: 'AGENDAS CLASSIFIED',
  },
  {
    code: 'WHO',
    name: 'World Health Organization',
    desc: 'Addressing public health emergencies, pandemic preparedness, biosecurity threats, and healthcare accessibility.',
    category: 'Specialized Agency',
    badge: 'UN Agency',
    status: 'AGENDAS CLASSIFIED',
  },
];

export default function CommitteesPage() {
  const [filter, setFilter] = useState('ALL');

  const filteredCommittees =
    filter === 'ALL'
      ? committeesData
      : committeesData.filter((c) => c.category.toUpperCase().includes(filter));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <ScrollReveal direction="up" className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-400">
          <Lock className="w-3.5 h-3.5 text-white" />
          <span>SECRETARIAT PREVIEW</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white uppercase font-mono tracking-tight">
          COMMITTEES OF ASCEND MUN
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
          Explore the 6 simulated councils for Ascend MUN 2026. All committee agendas, Executive Boards, and matrix allotments are currently classified and will be unsealed soon by the Ariva Secretariat.
        </p>
      </ScrollReveal>

      {/* Teaser Announcement Banner */}
      <ScrollReveal direction="scale">
        <div className="glass-panel p-6 rounded-2xl border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-white shrink-0" />
            <div>
              <div className="text-white font-bold uppercase">Agendas & Study Guides Unsealing Soon</div>
              <div className="text-neutral-400 font-sans text-xs">
                Matrix allocations and background guides will be published upon official registration launch.
              </div>
            </div>
          </div>
          <Link
            href="/register"
            className="shrink-0 px-4 py-2 rounded bg-white text-black font-bold uppercase hover:bg-neutral-200 transition-colors"
          >
            Check Timeline
          </Link>
        </div>
      </ScrollReveal>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
        {['ALL', 'GENERAL ASSEMBLY', 'INDIAN CABINET', 'SPECIALIZED AGENCY'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-lg border transition-all ${
              filter === tab
                ? 'bg-white text-black font-bold border-white shadow-[0_0_12px_rgba(255,255,255,0.3)]'
                : 'bg-neutral-950 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Committees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCommittees.map((committee, idx) => (
          <ScrollReveal key={committee.code} direction="up" delay={idx * 0.08}>
            <div className="glass-panel p-6 rounded-xl border border-white/10 relative overflow-hidden group hover:border-white/40 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest px-2 py-0.5 rounded bg-neutral-900 border border-white/5">
                    {committee.badge}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white font-semibold border border-white/20">
                    <Lock className="w-3 h-3" />
                    <span>COMING SOON</span>
                  </span>
                </div>

                {/* Code & Name */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-3xl font-extrabold font-mono text-white tracking-wider group-hover:text-neutral-200">
                      {committee.code}
                    </h3>
                    <span className="text-xs font-mono text-neutral-500">#{idx + 1}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-200 font-sans">
                    {committee.name}
                  </h4>
                </div>

                {/* One line description */}
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {committee.desc}
                </p>
              </div>

              {/* Locked Agenda Overlay Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-neutral-400">
                <span className="text-[11px] uppercase tracking-wider">{committee.status}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Footer Navigation */}
      <ScrollReveal direction="up" className="text-center pt-8 border-t border-white/10">
        <p className="text-xs text-neutral-400 font-mono mb-4">
          HAVE QUESTIONS REGARDING COMMITTEE ALLOCATIONS?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all"
        >
          <span>Contact Secretariat</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </ScrollReveal>
    </div>
  );
}
