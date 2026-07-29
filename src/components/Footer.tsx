'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#060606]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-10">

        {/* Grid layout: Logo is first on mobile (order-first), middle on desktop (lg:order-2) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-12 items-center mb-0">

          {/* Center: Main Logo Image (First on mobile, Middle on desktop) */}
          <div className="order-first lg:order-2 flex flex-col items-center justify-center py-4">
            <div className="relative group cursor-default">
              <div className="absolute -inset-6 bg-white/[0.03] rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://i.ibb.co/0j33SHKj/ascend-mun-logo.png"
                alt="Ascend MUN Logo"
                className="relative z-10 h-32 md:h-44 lg:h-48 w-auto object-contain
                           opacity-80 group-hover:opacity-100
                           drop-shadow-[0_4px_24px_rgba(255,255,255,0.15)]
                           group-hover:drop-shadow-[0_8px_40px_rgba(255,255,255,0.3)]
                           transition-all duration-700 ease-out
                           group-hover:scale-105 transform"
              />
            </div>
          </div>

          {/* Left: About details + Navigation */}
          <div className="order-2 lg:order-1 space-y-8 lg:pr-6">
            <div className="space-y-3">
              <p className="font-mono text-[9px] tracking-[0.35em] text-white/30 uppercase">
                HOSTED BY ARIVA
              </p>
              <p className="text-white/35 text-sm leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-inter)' }}>
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

            <div className="space-y-3">
              <h4 className="font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase">NAVIGATION</h4>
              <ul className="grid grid-cols-2 gap-2 max-w-xs">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About', href: '/about' },
                  { name: 'Committees', href: '/committees' },
                  { name: 'Guide', href: '/delegate-guide' },
                  { name: 'Register', href: '/register' },
                  { name: 'Contact', href: '/contact' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-1 font-mono text-[11px] tracking-wider text-white/35 hover:text-white uppercase transition-colors"
                    >
                      {item.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Secretariat Details */}
          <div className="order-3 lg:order-3 space-y-6 lg:pl-6">
            <div className="space-y-3">
              <h4 className="font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase">SECRETARIAT</h4>
              <div className="space-y-2 font-mono text-[11px] text-white/30 tracking-wider">
                <p className="text-white/40">contact@ariva-ascend.org</p>
                <p className="text-white/20 leading-relaxed">Hosted by Ariva<br />Ascend MUN Secretariat Bureau</p>
              </div>
            </div>

            <p className="text-white/20 text-xs leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-inter)' }}>
              Registrations, delegate handbooks, and committee background guides will be published ahead of October 29–31, 2026.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1.5 text-center md:text-left">
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
