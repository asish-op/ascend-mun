'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#060606]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-10">

        {/* Main 3-column layout: Left text | Center logo | Right text */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 items-center mb-0">

          {/* Left: Brand + Navigation */}
          <div className="space-y-10 lg:pr-8">
            <div className="space-y-4">
              <div>
                <h3
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  ASCEND MUN
                </h3>
                <p className="font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase">
                  HOSTED BY ARIVA
                </p>
              </div>
              <p className="text-white/30 text-sm leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-inter)' }}>
                A premier simulation of international diplomacy, debate, and consensus-building. Empowering future leaders to negotiate, resolve, and lead.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase border border-white/[0.06] px-3 py-1.5">
                  OCT 29–31, 2026
                </span>
                <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase border border-white/[0.06] px-3 py-1.5">
                  VENUE TBA
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase">NAVIGATION</h4>
              <ul className="space-y-2.5">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About Conference', href: '/about' },
                  { name: 'Committees', href: '/committees' },
                  { name: 'Delegate Guide', href: '/delegate-guide' },
                  { name: 'Register', href: '/register' },
                  { name: 'Contact', href: '/contact' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-white/35 hover:text-white uppercase transition-colors"
                    >
                      {item.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center: Logo as main hero attraction */}
          <div className="relative flex flex-col items-center justify-center py-8">
            {/* Vertical separator lines (desktop only) */}
            <div className="hidden lg:block absolute left-0 top-8 bottom-8 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="hidden lg:block absolute right-0 top-8 bottom-8 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {/* Ambient glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[280px] h-[180px] bg-white/[0.04] blur-3xl rounded-full" />
            </div>

            {/* Logo */}
            <div className="relative group cursor-default px-12 py-6">
              <div className="absolute -inset-6 bg-gradient-radial from-white/[0.04] to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://i.ibb.co/0j33SHKj/ascend-mun-logo.png"
                alt="Ascend MUN Official Logo"
                className="relative z-10 h-32 md:h-40 lg:h-44 w-auto object-contain
                           opacity-70 group-hover:opacity-100
                           drop-shadow-[0_4px_20px_rgba(255,255,255,0.12)]
                           group-hover:drop-shadow-[0_8px_40px_rgba(255,255,255,0.28)]
                           transition-all duration-700 ease-out
                           group-hover:scale-105 transform"
              />
            </div>

            {/* Shimmer line below logo */}
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-2" />
          </div>

          {/* Right: Secretariat info */}
          <div className="space-y-8 lg:pl-8">
            <div className="space-y-4">
              <h4 className="font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase">SECRETARIAT</h4>
              <div className="space-y-3 font-mono text-[11px] text-white/30 tracking-wider">
                <p>contact@ariva-ascend.org</p>
                <p className="text-white/20 leading-relaxed">Hosted by Ariva<br />Ascend MUN Secretariat Bureau</p>
              </div>
              <p className="text-white/20 text-xs leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-inter)' }}>
                Registrations, delegate handbooks, and committee background guides will be published ahead of October 29–31.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase">COMMITTEES</h4>
              <ul className="space-y-2">
                {['UNHRC', 'DISEC', 'UNSC', 'LOK SABHA', 'IP', 'IFI', 'WHO'].map((c) => (
                  <li key={c} className="font-mono text-[10px] tracking-[0.2em] text-white/20 uppercase">{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar — full width below all 3 columns */}
        <div className="border-t border-white/[0.06] mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-2 text-center md:text-left">
            <p className="font-mono text-[9px] tracking-[0.25em] text-white/20 uppercase">
              &copy; {new Date().getFullYear()} Ascend MUN · Hosted by Ariva · All Rights Reserved
            </p>
            <p className="font-mono text-[9px] tracking-[0.2em] text-white/20 uppercase">
              Powered by{' '}
              <a
                href="https://telugu.social"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline decoration-white/10 underline-offset-2"
              >
                telugu.social
              </a>{' '}
              &amp;{' '}
              <a
                href="https://gatewave.one"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline decoration-white/10 underline-offset-2"
              >
                gatewave.one
              </a>
            </p>
          </div>
          <div className="flex items-center gap-8 font-mono text-[9px] tracking-[0.25em] text-white/20 uppercase">
            <span className="hover:text-white/50 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white/50 cursor-pointer transition-colors">Terms of Conduct</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
