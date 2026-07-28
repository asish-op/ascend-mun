'use client';

import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { FileText, BookOpen, ShieldCheck, CheckSquare, ArrowRight, Download } from 'lucide-react';

export default function DelegateGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Title */}
      <ScrollReveal direction="up" className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-400">
          <BookOpen className="w-3.5 h-3.5 text-white" />
          <span>DELEGATE HANDBOOK PREVIEW</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white uppercase font-mono tracking-tight">
          DELEGATE GUIDE & PROTOCOLS
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
          Essential protocols, Parliamentary Rules of Procedure (ROP), position paper guidelines, and delegate expectations for Ascend MUN 2026.
        </p>
      </ScrollReveal>

      {/* Guide Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section 1: Rules of Procedure */}
        <ScrollReveal direction="up">
          <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4 hover:border-white/30 transition-all h-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/20 flex items-center justify-center text-white font-mono font-bold">
                01
              </div>
              <h2 className="text-xl font-bold font-mono text-white uppercase">
                RULES OF PROCEDURE (ROP)
              </h2>
            </div>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              Ascend MUN follows UNA-USA & Indian Parliamentary procedure standards depending on council classification.
            </p>
            <ul className="space-y-2 text-xs font-mono text-neutral-400 pt-2 border-t border-white/10">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Formal Speakers List (GSL) & Moderated Caucuses</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Unmoderated Caucuses & Bloc Negotiations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Point of Personal Privilege, Order, & Parliamentary Inquiry</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Working Papers & Draft Resolution Introductions</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Section 2: Position Paper Guidelines */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4 hover:border-white/30 transition-all h-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/20 flex items-center justify-center text-white font-mono font-bold">
                02
              </div>
              <h2 className="text-xl font-bold font-mono text-white uppercase">
                POSITION PAPERS & RESEARCH
              </h2>
            </div>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              Delegates are required to submit a comprehensive position paper outlining national stance prior to opening session.
            </p>
            <ul className="space-y-2 text-xs font-mono text-neutral-400 pt-2 border-t border-white/10">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Section 1: Background of the Topic & Past International Action</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Section 2: Country Stance & Government Policy</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Section 3: Proposed Solutions & Draft Treaty Clauses</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Mandatory Citation & UN Bibliography Standard</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Section 3: Code of Conduct */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4 hover:border-white/30 transition-all h-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/20 flex items-center justify-center text-white font-mono font-bold">
                03
              </div>
              <h2 className="text-xl font-bold font-mono text-white uppercase">
                CODE OF CONDUCT & DRESS CODE
              </h2>
            </div>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              Maintaining diplomatic decorum, zero tolerance for misconduct, and strict adherence to dress protocol.
            </p>
            <ul className="space-y-2 text-xs font-mono text-neutral-400 pt-2 border-t border-white/10">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Attire: Western Formal / National Diplomatic Attire</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Decorum: Respectful debate & parliamentary language</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Zero Tolerance: Academic dishonesty, plagiarism, or misconduct</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Section 4: Preparation Checklist */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4 hover:border-white/30 transition-all h-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/20 flex items-center justify-center text-white font-mono font-bold">
                04
              </div>
              <h2 className="text-xl font-bold font-mono text-white uppercase">
                DELEGATE PREPARATION TIMELINE
              </h2>
            </div>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              Step-by-step checklist leading up to Ascend MUN 2026 on October 29–31.
            </p>
            <ul className="space-y-2 text-xs font-mono text-neutral-400 pt-2 border-t border-white/10">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Phase 1: Registration & Preferred Matrix Selection</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Phase 2: Matrix Allotment Confirmation by Secretariat</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Phase 3: Study Guide Unsealing & Position Paper Drafting</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>

      {/* Download Placeholder Banner */}
      <ScrollReveal direction="scale">
        <div className="glass-panel p-8 rounded-2xl border border-white/20 text-center space-y-4">
          <FileText className="w-10 h-10 text-white mx-auto" />
          <h3 className="text-2xl font-bold font-mono text-white uppercase">
            FULL DELEGATE HANDBOOK (PDF)
          </h3>
          <p className="text-xs text-neutral-400 max-w-md mx-auto font-sans">
            The official 2026 Ascend MUN Delegate Handbook PDF will be downloadable once registrations open.
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 border border-white/20 text-neutral-400 font-mono text-xs font-bold uppercase cursor-not-allowed">
              <Download className="w-4 h-4" />
              <span>HANDBOOK RELEASING SOON</span>
            </span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
