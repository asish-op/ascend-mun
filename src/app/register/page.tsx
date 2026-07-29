'use client';

import ScrollReveal from '@/components/ScrollReveal';
import { Lock, ArrowUpRight, CalendarClock } from 'lucide-react';



const timeline = [
  { phase: 'Phase 1', title: 'Registration Opens', desc: 'Delegate registration portal goes live. Submit preferred committee matrix.', status: 'soon' },
  { phase: 'Phase 2', title: 'Matrix Allotment', desc: 'Secretariat confirms delegate placements and committee assignments.', status: 'soon' },
  { phase: 'Phase 3', title: 'Study Guide Release', desc: 'Official background guides and agendas published for confirmed delegates.', status: 'soon' },
  { phase: 'Phase 4', title: 'Position Paper Deadline', desc: 'Delegates submit position papers through the official portal.', status: 'soon' },
  { phase: 'Phase 5', title: 'Conference Begins', desc: 'Opening Ceremony — October 29, 2026.', status: 'event' },
];

export default function RegisterPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 space-y-20">

      {/* Header */}
      <div className="max-w-3xl space-y-6">
        <ScrollReveal direction="up">
          <p className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase mb-4">
            DELEGATE REGISTRATION
          </p>
          <span className="accent-line" />
          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Registrations<br />
            Opening Soon.
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-white/40 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
            The Ascend MUN 2026 registration portal is currently being finalised by the Ariva Secretariat. Applications will open shortly — all interested delegates are advised to stay tuned.
          </p>
        </ScrollReveal>
      </div>

      {/* Status card */}
      <ScrollReveal direction="up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.05]">
          <div className="card-hover bg-[#080808] p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.35em] text-white/40 uppercase">PORTAL STATUS — PREPARING</span>
              </div>
              <h2
                className="text-4xl font-bold text-white"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Registration Portal
              </h2>
              <p className="text-white/35 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                The Ascend MUN delegate registration portal will go live with an announcement across official Ariva channels. Seats are limited — registration is confirmed on a first-come, first-served basis.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Conference', val: 'ASCEND MUN 2026' },
                { label: 'Dates', val: 'OCTOBER 29–31, 2026' },
                { label: 'Host', val: 'ARIVA' },
                { label: 'Committees', val: '6 COUNCILS' },
                { label: 'Registration', val: 'OPENING SOON' },
              ].map(({ label, val }) => (
                <div key={label} className="flex items-center justify-between border-b border-white/[0.05] pb-3">
                  <span className="font-mono text-[9px] tracking-widest text-white/25 uppercase">{label}</span>
                  <span className="font-mono text-[10px] tracking-wider text-white/55 uppercase">{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-hover bg-[#0a0a0a] p-12 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-20 h-20 border border-white/10 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-white/25" />
            </div>
            <div className="space-y-2">
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Portal Sealed
              </h3>
              <p className="text-white/30 text-sm max-w-xs" style={{ fontFamily: 'var(--font-inter)' }}>
                Registration will launch shortly. An official announcement will be made via Ariva's social channels.
              </p>
            </div>
            <a
              href="mailto:contact@ariva-ascend.org"
              className="btn-ghost group flex items-center gap-2 pb-0.5"
            >
              CONTACT SECRETARIAT
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* Timeline */}
      <section className="space-y-10">
        <ScrollReveal direction="up" className="border-b border-white/[0.06] pb-6 flex items-center gap-3">
          <CalendarClock className="w-5 h-5 text-white/25" />
          <h2
            className="text-3xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Registration Timeline
          </h2>
        </ScrollReveal>

        <div className="relative space-y-0">
          {timeline.map((item, i) => (
            <ScrollReveal key={item.phase} direction="up" delay={i * 0.08}>
              <div className="grid grid-cols-12 gap-6 py-7 border-b border-white/[0.05] group hover:bg-white/[0.02] transition-colors px-4">
                <div className="col-span-2 lg:col-span-1">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase">{item.phase}</span>
                </div>
                <div className="col-span-1 flex justify-center pt-1">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${item.status === 'event' ? 'bg-white' : 'border border-white/20'}`} />
                </div>
                <div className="col-span-9 lg:col-span-10 space-y-1">
                  <h3 className="font-mono text-[12px] tracking-wider text-white/70 uppercase">{item.title}</h3>
                  <p className="text-white/30 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
