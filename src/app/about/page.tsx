'use client';

import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { Shield, Globe, Award, Target, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Header */}
      <ScrollReveal direction="up" className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-400">
          <Globe className="w-3.5 h-3.5 text-white" />
          <span>ABOUT ASCEND MUN</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white uppercase font-mono tracking-tight">
          THE VISION BEHIND ASCEND
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
          Ascend Model United Nations, hosted by <strong className="text-white">Ariva</strong>, is structured to be the benchmark of diplomatic discourse, intellectual rigor, and multilateral consensus.
        </p>
      </ScrollReveal>

      {/* Host Feature Card - Ariva */}
      <ScrollReveal direction="scale">
        <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-white/20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                HOST ORGANIZATION
              </span>
              <h2 className="text-3xl font-mono font-bold text-white uppercase">
                HOSTED BY ARIVA
              </h2>
              <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                Ariva brings a legacy of youth empowerment, administrative precision, and visionary event orchestration. With Ascend MUN, Ariva creates a platform where youth delegates simulate international diplomacy with real-world gravity, analytical depth, and parliamentary poise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Substantive Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Unbiased Executive Board</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>High-Octane Crisis Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Inclusive Delegate Allocations</span>
                </div>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-xl border border-white/10 text-center font-mono space-y-3">
              <Award className="w-10 h-10 text-white mx-auto" />
              <div className="text-lg font-bold text-white uppercase">DIPLOMACY AT NIGHT</div>
              <div className="text-xs text-neutral-400">OCTOBER 29–31, 2026</div>
              <div className="pt-2 text-[11px] text-neutral-500 uppercase tracking-wider border-t border-white/10">
                VENUES & MATRIX REVEALING SOON
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Core Pillars */}
      <section className="space-y-10">
        <ScrollReveal direction="up" className="text-center">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
            CORE FOUNDATION
          </h2>
          <h3 className="text-3xl font-mono font-bold text-white uppercase">
            OUR THREE PILLARS
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: '1. DIPLOMATIC RIGOR',
              icon: Shield,
              desc: 'Enforcing authentic parliamentary protocol, position paper standards, and substantive research across all councils.',
            },
            {
              title: '2. CONSENSUS & RESOLUTION',
              icon: Target,
              desc: 'Moving beyond debate into actionable draft resolutions, multilateral bloc formation, and coalition building.',
            },
            {
              title: '3. YOUTH EMPOWERMENT',
              icon: Globe,
              desc: 'Empowering delegates with public speaking, critical crisis management, and diplomatic leadership skills.',
            },
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.title} direction="up" delay={idx * 0.1}>
                <div className="glass-panel p-8 rounded-xl border border-white/10 space-y-4 hover:border-white/30 transition-all h-full">
                  <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/20 flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-mono font-bold text-white uppercase">{pillar.title}</h4>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">{pillar.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Next CTA */}
      <ScrollReveal direction="up" className="text-center pt-8 border-t border-white/10">
        <div className="inline-flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/committees"
            className="px-6 py-3 rounded-lg bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all"
          >
            Preview Committees
          </Link>
          <Link
            href="/register"
            className="px-6 py-3 rounded-lg bg-neutral-900 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all flex items-center gap-2"
          >
            <span>Registration Status</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
