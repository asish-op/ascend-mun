'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { Mail, MapPin, Globe, Shield, MessageSquare, ChevronDown, Sparkles } from 'lucide-react';

const faqs = [
  {
    q: 'When and where will Ascend MUN 2026 take place?',
    a: 'Ascend MUN will be held from October 29 to 31, 2026. The exact venue location is currently classified and will be revealed along with official registration launch.',
  },
  {
    q: 'Who is hosting Ascend MUN?',
    a: 'Ascend MUN is hosted by Ariva, an organization dedicated to youth leadership, diplomatic excellence, and high-caliber academic events.',
  },
  {
    q: 'Which committees are being simulated?',
    a: 'Ascend MUN 2026 features 6 committees: UNHRC, DISEC, Lok Sabha, International Press (IP), International Financial Institution (IFI), and World Health Organization (WHO).',
  },
  {
    q: 'When will registrations open?',
    a: 'Delegate and Executive Board registrations will open shortly. Check the Register page for the application phase roadmap.',
  },
  {
    q: 'Are beginner delegates welcome?',
    a: 'Yes! Ascend MUN caters to both first-time and seasoned MUN delegates, with dedicated Executive Board orientation and comprehensive background study guides.',
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Title */}
      <ScrollReveal direction="up" className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-400">
          <MessageSquare className="w-3.5 h-3.5 text-white" />
          <span>SECRETARIAT CONTACT & FAQS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white uppercase font-mono tracking-tight">
          GET IN TOUCH
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
          Have questions regarding sponsorships, delegate allocations, or event details? Contact the Ascend MUN secretariat bureau.
        </p>
      </ScrollReveal>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email */}
        <ScrollReveal direction="up">
          <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-3 hover:border-white/30 transition-all text-center h-full">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/20 flex items-center justify-center text-white mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-base font-mono font-bold text-white uppercase">SECRETARIAT EMAIL</h3>
            <p className="text-xs text-neutral-400 font-mono">contact@ariva-ascend.org</p>
            <p className="text-[11px] text-neutral-500 font-sans">Official communications & administrative queries</p>
          </div>
        </ScrollReveal>

        {/* Host */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-3 hover:border-white/30 transition-all text-center h-full">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/20 flex items-center justify-center text-white mx-auto">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-base font-mono font-bold text-white uppercase">HOST ORGANIZATION</h3>
            <p className="text-xs text-white font-mono font-bold">ARIVA</p>
            <p className="text-[11px] text-neutral-500 font-sans">Empowering diplomatic simulations & youth governance</p>
          </div>
        </ScrollReveal>

        {/* Location Status */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-3 hover:border-white/30 transition-all text-center h-full">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/20 flex items-center justify-center text-white mx-auto">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-mono font-bold text-white uppercase">VENUE STATUS</h3>
            <p className="text-xs text-white font-mono font-bold">TO BE REVEALED (TBA)</p>
            <p className="text-[11px] text-neutral-500 font-sans">October 29–31, 2026</p>
          </div>
        </ScrollReveal>
      </div>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto space-y-8">
        <ScrollReveal direction="up" className="text-center">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <h3 className="text-2xl font-mono font-bold text-white uppercase">
            DELEGATE INQUIRIES
          </h3>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.05}>
                <div className="glass-panel rounded-xl border border-white/10 overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-mono text-sm font-bold text-white hover:text-neutral-200 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 transition-transform ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-xs font-sans text-neutral-400 leading-relaxed border-t border-white/5 mt-1">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
