'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Globe,
  Calendar,
  MapPin,
  Lock,
  ArrowRight,
  Sparkles,
  Shield,
  FileText,
  Users,
  Award,
  ChevronRight,
} from 'lucide-react';

const committeesList = [
  {
    code: 'UNHRC',
    name: 'United Nations Human Rights Council',
    desc: 'Promoting and protecting global fundamental human rights, freedoms, and addressing systemic violations.',
    category: 'General Assembly',
  },
  {
    code: 'DISEC',
    name: 'Disarmament & International Security Committee',
    desc: 'Addressing international disarmament, global security threats, and non-proliferation mandates.',
    category: 'General Assembly',
  },
  {
    code: 'LOK SABHA',
    name: 'House of the People (Indian Cabinet)',
    desc: 'Debating national policy, legislative reforms, and national security challenges in a domestic parliamentary setup.',
    category: 'Indian Cabinet',
  },
  {
    code: 'IP',
    name: 'International Press',
    desc: 'Reporting, photojournalism, and investigating real-time committee proceedings with unbiased rigor.',
    category: 'Specialized Agency',
  },
  {
    code: 'IFI',
    name: 'International Financial Institution',
    desc: 'Navigating macroeconomic stability, sovereign debt restructuring, and international trade policy.',
    category: 'Specialized Agency',
  },
  {
    code: 'WHO',
    name: 'World Health Organization',
    desc: 'Formulating global responses to public health emergencies, bio-security, and healthcare inequities.',
    category: 'Specialized Agency',
  },
];

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target date: Oct 29, 2026
    const targetDate = new Date('2026-10-29T09:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-24 pb-16 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10">
        {/* Background glow matrix */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

        {/* Host Badge */}
        <ScrollReveal direction="down" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-white/20 text-neutral-300 font-mono text-xs tracking-widest uppercase mb-8 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>HOSTED BY</span>
            <span className="text-white font-bold tracking-wider">ARIVA</span>
          </div>
        </ScrollReveal>

        {/* Title */}
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tighter text-white uppercase leading-none font-mono mb-6">
            ASCEND <span className="text-neutral-500 font-light">MUN</span>
          </h1>
        </ScrollReveal>

        {/* Tagline */}
        <ScrollReveal direction="up" delay={0.3}>
          <p className="max-w-2xl text-base sm:text-xl text-neutral-400 font-sans leading-relaxed mb-10">
            A high-contrast simulation of diplomacy, consensus, and multilateral negotiation. Uniting future global leaders for 3 days of rigorous debate.
          </p>
        </ScrollReveal>

        {/* Date & Location Pill Strip */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono mb-10">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-950 border border-white/15 text-white">
              <Calendar className="w-4 h-4 text-neutral-400" />
              <span>OCTOBER 29–31, 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-950 border border-white/15 text-white">
              <MapPin className="w-4 h-4 text-neutral-400" />
              <span>LOCATION: TO BE REVEALED</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Static Registration Status CTA */}
        <ScrollReveal direction="scale" delay={0.5}>
          <div className="w-full max-w-lg glass-panel p-6 rounded-2xl border border-white/20 relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="uppercase font-bold tracking-wider">REGISTRATION STATUS</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white font-semibold border border-white/20 uppercase">
                STATIC PREVIEW
              </span>
            </div>

            <div className="text-left space-y-3">
              <div className="text-2xl font-mono font-bold text-white tracking-tight flex items-center justify-between">
                <span>Registrations Opening Soon</span>
                <Lock className="w-5 h-5 text-neutral-400" />
              </div>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Delegate portal, Executive Board applications, and matrix allocations are currently being finalized by the Ariva Secretariat.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <Link
                  href="/register"
                  className="w-full py-3 rounded-lg bg-white text-black font-mono text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all hover:bg-neutral-200"
                >
                  <span>Check Registration Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Event Countdown */}
        <ScrollReveal direction="up" delay={0.6} className="mt-14">
          <div className="glass-panel px-6 py-4 rounded-xl border border-white/10 font-mono text-center">
            <div className="text-[11px] text-neutral-400 uppercase tracking-widest mb-3">
              COUNTDOWN TO OPENING CEREMONY
            </div>
            <div className="grid grid-cols-4 gap-4 sm:gap-8 text-center">
              <div>
                <span className="text-2xl sm:text-4xl font-bold text-white">{timeLeft.days}</span>
                <span className="block text-[9px] text-neutral-500 uppercase tracking-wider mt-1">Days</span>
              </div>
              <div>
                <span className="text-2xl sm:text-4xl font-bold text-white">{timeLeft.hours}</span>
                <span className="block text-[9px] text-neutral-500 uppercase tracking-wider mt-1">Hours</span>
              </div>
              <div>
                <span className="text-2xl sm:text-4xl font-bold text-white">{timeLeft.minutes}</span>
                <span className="block text-[9px] text-neutral-500 uppercase tracking-wider mt-1">Minutes</span>
              </div>
              <div>
                <span className="text-2xl sm:text-4xl font-bold text-white">{timeLeft.seconds}</span>
                <span className="block text-[9px] text-neutral-500 uppercase tracking-wider mt-1">Seconds</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* DATES & VENUE STRIP MARQUEE */}
      <section className="border-y border-white/10 bg-neutral-950 py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee font-mono text-xs tracking-widest text-neutral-400">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-8 mx-4">
              <span className="text-white font-bold">ASCEND MUN 2026</span>
              <span>//</span>
              <span>HOSTED BY ARIVA</span>
              <span>//</span>
              <span>OCTOBER 29–31</span>
              <span>//</span>
              <span className="text-white">VENUE: TBA</span>
              <span>//</span>
              <span>6 COMMITTEES</span>
              <span>//</span>
              <span>REGISTRATIONS OPENING SOON</span>
              <span>//</span>
            </div>
          ))}
        </div>
      </section>

      {/* COMMITTEES GRID (HIDDEN / COMING SOON TEASER STATE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-400">
            <Lock className="w-3.5 h-3.5 text-white" />
            <span>SECRETARIAT TEASER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight font-mono">
            COMMITTEES & AGENDAS
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto font-sans">
            Detailed agendas and study guides for all 6 committees will be unsealed soon by the Executive Board.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeesList.map((committee, index) => (
            <ScrollReveal key={committee.code} direction="up" delay={index * 0.1}>
              <div className="glass-panel p-6 rounded-xl border border-white/10 relative overflow-hidden group hover:border-white/40 transition-all duration-300">
                {/* Top Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    {committee.category}
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white font-semibold">
                    <Lock className="w-3 h-3 text-neutral-300" />
                    <span>REVEALING SOON</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl font-bold font-mono text-white tracking-wider group-hover:text-neutral-200">
                      {committee.code}
                    </h3>
                    <span className="text-xs font-mono text-neutral-500">0{index + 1}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-300 font-sans">
                    {committee.name}
                  </h4>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed line-clamp-2">
                    {committee.desc}
                  </p>
                </div>

                {/* Card Footer Lock Overlay */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                  <span>AGENDA: CLASSIFIED</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/committees"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white border-b border-neutral-700 hover:border-white pb-1 transition-all"
          >
            <span>Explore full committee overview</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* SECTION NAVIGATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-16">
        <ScrollReveal direction="up" className="mb-10 text-center sm:text-left">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
            CONFERENCE ARCHITECTURE
          </h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-mono uppercase">
            EXPLORE ASCEND MUN
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'ABOUT ARIVA',
              subtitle: 'Vision & Hosting Bureau',
              desc: 'Learn about Ariva’s initiative in spearheading diplomatic excellence.',
              icon: Globe,
              href: '/about',
            },
            {
              title: 'COMMITTEES',
              subtitle: '6 Councils Teaser',
              desc: 'Preview UNHRC, DISEC, Lok Sabha, IP, IFI, and WHO.',
              icon: Shield,
              href: '/committees',
            },
            {
              title: 'DELEGATE GUIDE',
              subtitle: 'Rules & Protocols',
              desc: 'Guidelines for position papers, resolution writing, and ROP.',
              icon: FileText,
              href: '/delegate-guide',
            },
            {
              title: 'CONTACT SECRETARIAT',
              subtitle: 'Direct Inquiries',
              desc: 'Reach out to the Ascend MUN secretariat for queries.',
              icon: Users,
              href: '/contact',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} direction="up" delay={idx * 0.1}>
                <Link
                  href={item.href}
                  className="glass-panel p-6 rounded-xl border border-white/10 block group hover:border-white/40 transition-all duration-300 h-full"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/15 flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-mono font-bold text-white tracking-wider mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] font-mono text-neutral-400 mb-2">{item.subtitle}</p>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-1 text-xs font-mono text-neutral-300 group-hover:text-white">
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl border border-white/10 p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-mono">
            <div>
              <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">6</div>
              <div className="text-xs text-neutral-400 uppercase tracking-widest mt-2">Committees</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">3</div>
              <div className="text-xs text-neutral-400 uppercase tracking-widest mt-2">Days of Debate</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">300+</div>
              <div className="text-xs text-neutral-400 uppercase tracking-widest mt-2">Delegates</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">1</div>
              <div className="text-xs text-neutral-400 uppercase tracking-widest mt-2">Vision (Ariva)</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL HIGH IMPACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="scale">
          <div className="glass-panel p-10 sm:p-16 rounded-3xl border border-white/20 relative overflow-hidden space-y-6">
            <h2 className="text-3xl sm:text-6xl font-extrabold text-white font-mono uppercase tracking-tight">
              PREPARE FOR ASCEND MUN '26
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto font-sans">
              Hosted by Ariva. Registration announcements, delegate handbooks, and matrix reveals are coming soon.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
              <Link
                href="/register"
                className="px-6 py-3.5 rounded-lg bg-white text-black font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all"
              >
                REGISTRATION STATUS
              </Link>
              <Link
                href="/about"
                className="px-6 py-3.5 rounded-lg bg-neutral-900 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all"
              >
                ABOUT ARIVA
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
