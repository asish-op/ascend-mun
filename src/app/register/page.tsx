'use client';

import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { Lock, Sparkles, Calendar, Clock, ArrowRight, ShieldCheck, Info } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Title */}
      <ScrollReveal direction="up" className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-400">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>OFFICIAL REGISTRATION PORTAL</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white uppercase font-mono tracking-tight">
          REGISTRATIONS OPENING SOON
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
          Ascend MUN 2026, hosted by <strong className="text-white">Ariva</strong>, is currently preparing registration matrix portals. Official delegate and delegation applications will launch shortly.
        </p>
      </ScrollReveal>

      {/* Main Static Announcement Card */}
      <ScrollReveal direction="scale">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-white/20 relative overflow-hidden space-y-8 text-center max-w-4xl mx-auto shadow-2xl">
          {/* Subtle background badge */}
          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mx-auto">
            <Lock className="w-8 h-8 text-white" />
          </div>

          <div className="space-y-3 font-mono">
            <div className="inline-block px-3 py-1 rounded bg-white text-black text-xs font-bold uppercase tracking-wider">
              STATIC REGISTRATION PREVIEW
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
              PORTAL UNLOCKING SHORTLY
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-sans max-w-xl mx-auto leading-relaxed">
              Delegates, Institutional Delegations, International Press, and Executive Board applicants will be able to apply directly through this portal upon official launch.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-white/10 py-6 font-mono text-xs">
            <div>
              <div className="text-neutral-400 text-[10px] uppercase">EVENT DATES</div>
              <div className="text-white font-bold text-sm mt-1">OCTOBER 29–31, 2026</div>
            </div>
            <div className="border-y sm:border-y-0 sm:border-x border-white/10 py-3 sm:py-0">
              <div className="text-neutral-400 text-[10px] uppercase">HOST ORGANIZATION</div>
              <div className="text-white font-bold text-sm mt-1">ARIVA</div>
            </div>
            <div>
              <div className="text-neutral-400 text-[10px] uppercase">LOCATION</div>
              <div className="text-white font-bold text-sm mt-1">VENUE: TBA</div>
            </div>
          </div>

          {/* Status Message */}
          <div className="p-4 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center gap-3 text-xs font-mono text-neutral-300">
            <Info className="w-4 h-4 text-white shrink-0" />
            <span>No pre-registration form or email capture is active at this stage. Check back soon!</span>
          </div>
        </div>
      </ScrollReveal>

      {/* Registration Timeline Roadmap */}
      <section className="space-y-8 max-w-4xl mx-auto">
        <ScrollReveal direction="up" className="text-center">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
            APPLICATION SCHEDULE
          </h2>
          <h3 className="text-2xl font-mono font-bold text-white uppercase">
            REGISTRATION PHASE ROADMAP
          </h3>
        </ScrollReveal>

        <div className="space-y-4">
          {[
            {
              phase: 'PHASE 01',
              title: 'Executive Board & Secretariat Applications',
              status: 'PREPARATION IN PROGRESS',
              desc: 'Applications for Committee Chairs, Vice-Chairs, and Rapporteurs.',
            },
            {
              phase: 'PHASE 02',
              title: 'Individual & Institutional Delegate Registrations',
              status: 'OPENING SOON',
              desc: 'Matrix selection for UNHRC, DISEC, Lok Sabha, IP, IFI, and WHO.',
            },
            {
              phase: 'PHASE 03',
              title: 'Matrix Allotment & Study Guide Release',
              status: 'UPCOMING',
              desc: 'Official portfolio confirmation and unsealing of committee background guides.',
            },
            {
              phase: 'PHASE 04',
              title: 'Ascend MUN Opening Ceremony',
              status: 'OCTOBER 29, 2026',
              desc: 'Commencement of 3 days of intense diplomacy and debate.',
            },
          ].map((item, idx) => (
            <ScrollReveal key={item.phase} direction="up" delay={idx * 0.1}>
              <div className="glass-panel p-6 rounded-xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold">
                      {item.phase}
                    </span>
                    <span className="text-neutral-400">{item.status}</span>
                  </div>
                  <h4 className="text-base font-bold font-mono text-white">{item.title}</h4>
                  <p className="text-xs text-neutral-400 font-sans">{item.desc}</p>
                </div>
                <div className="shrink-0 font-mono text-xs text-neutral-500">
                  <Clock className="w-4 h-4 text-white inline-block mr-1" />
                  <span>Pending</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Navigation Links */}
      <ScrollReveal direction="up" className="text-center pt-8 border-t border-white/10">
        <div className="inline-flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/committees"
            className="px-6 py-3 rounded-lg bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all"
          >
            Preview Committees
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-neutral-900 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all flex items-center gap-2"
          >
            <span>Secretariat Inquiries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
