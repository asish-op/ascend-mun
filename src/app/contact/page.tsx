'use client';

import ScrollReveal from '@/components/ScrollReveal';
import { Mail, Instagram, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 space-y-20">

      {/* Header */}
      <div className="max-w-3xl space-y-6">
        <ScrollReveal direction="up">
          <p className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase mb-4">
            GET IN TOUCH
          </p>
          <span className="accent-line" />
          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Contact the<br />Secretariat.
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-white/40 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
            For queries on registration, committee allocations, partnerships, or media, reach the Ariva Secretariat directly.
          </p>
        </ScrollReveal>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
        {[
          {
            icon: Mail,
            label: 'GENERAL ENQUIRIES',
            title: 'Email Secretariat',
            value: 'contact@ariva-ascend.org',
            href: 'mailto:contact@ariva-ascend.org',
          },
          {
            icon: Instagram,
            label: 'SOCIAL MEDIA',
            title: 'Follow Ariva',
            value: '@ariva.official',
            href: 'https://instagram.com',
          },
          {
            icon: ArrowUpRight,
            label: 'PARTNERSHIPS',
            title: 'Collaboration & Sponsorship',
            value: 'partnerships@ariva-ascend.org',
            href: 'mailto:partnerships@ariva-ascend.org',
          },
        ].map((item, i) => (
          <ScrollReveal key={item.label} direction="up" delay={i * 0.1}>
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group block bg-[#080808] p-10 h-full hover:bg-[#0e0e0e] transition-colors"
            >
              <div className="mb-8">
                <item.icon className="w-5 h-5 text-white/25 group-hover:text-white/50 transition-colors" />
              </div>
              <p className="font-mono text-[9px] tracking-[0.35em] text-white/20 uppercase mb-2">{item.label}</p>
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {item.title}
              </h3>
              <p className="font-mono text-[11px] tracking-wider text-white/40 group-hover:text-white/70 transition-colors">
                {item.value}
              </p>
            </a>
          </ScrollReveal>
        ))}
      </div>

      {/* Secretariat Info */}
      <ScrollReveal direction="up">
        <div className="border border-white/[0.06] p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <p className="font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase">ARIVA SECRETARIAT</p>
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Ascend MUN<br />Secretariat Bureau
            </h2>
            <p className="text-white/30 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
              The Secretariat team oversees all aspects of Ascend MUN 2026 including delegate allocations, committee executive boards, partner coordination, and conference logistics. Response times are within 48–72 business hours.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Host', val: 'Ariva' },
              { label: 'Conference', val: 'Ascend MUN 2026' },
              { label: 'Dates', val: 'October 29–31, 2026' },
              { label: 'Response Time', val: '48–72 Hours' },
            ].map(({ label, val }) => (
              <div key={label} className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                <span className="font-mono text-[9px] tracking-widest text-white/25 uppercase">{label}</span>
                <span className="font-mono text-[10px] tracking-wider text-white/50 uppercase">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
