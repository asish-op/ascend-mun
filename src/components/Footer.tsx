'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#060606]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <h3
                className="text-2xl font-bold text-white mb-1"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                ASCEND MUN
              </h3>
              <p className="font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase">
                HOSTED BY ARIVA
              </p>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-inter)' }}>
              Ascend Model United Nations is a premier simulation of international diplomacy, debate, and consensus-building organised by Ariva. Empowering future leaders to negotiate, resolve, and lead.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase border border-white/[0.06] px-3 py-1.5">
                OCTOBER 29–31, 2026
              </span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase border border-white/[0.06] px-3 py-1.5">
                VENUE TBA
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase">
              NAVIGATION
            </h4>
            <ul className="space-y-3">
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

          {/* Secretariat */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase">
              SECRETARIAT
            </h4>
            <div className="space-y-3 font-mono text-[11px] text-white/30 tracking-wider">
              <p>contact@ariva-ascend.org</p>
              <p className="text-white/20">Hosted by Ariva<br />Ascend MUN Secretariat Bureau</p>
            </div>
            <p className="text-white/20 text-xs leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-inter)' }}>
              Registrations, delegate handbooks, and committee background guides will be published ahead of October 29–31.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
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
