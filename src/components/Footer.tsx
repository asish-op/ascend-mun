'use client';

import Link from 'next/link';
import { Globe, ArrowUpRight, Shield, Mail, Calendar, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#050505] border-t border-white/10 pt-16 pb-12 overflow-hidden text-neutral-400 font-mono">
      {/* Subtle top glare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Host Attribution */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/20 flex items-center justify-center text-white">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-wider">ASCEND MUN</h3>
                <p className="text-xs text-neutral-400">HOSTED BY <span className="text-white font-semibold">ARIVA</span></p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-neutral-400 max-w-md font-sans">
              Ascend Model United Nations is a premier simulation of international diplomacy, debate, and consensus-building organized by Ariva. Empowering future leaders to debate global governance, resolution writing, and crisis management.
            </p>

            <div className="flex items-center gap-4 text-xs pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 border border-white/10 text-neutral-300">
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>OCTOBER 29–31</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 border border-white/10 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span>VENUE: TBA</span>
              </div>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Conference', href: '/about' },
                { name: 'Committees (Teaser)', href: '/committees' },
                { name: 'Delegate Guide', href: '/delegate-guide' },
                { name: 'Register (Opening Soon)', href: '/register' },
                { name: 'Contact Secretariat', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">
              Information & Secretariat
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white" />
                <span>contact@ariva-ascend.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-white" />
                <span>Secretariat Bureau — Ascend MUN</span>
              </li>
              <li className="text-neutral-400 text-[11px] pt-1">
                Registrations opening soon. Official rules of procedure and committee allotments will be published prior to event launch.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} Ascend MUN. Hosted by <span className="text-white">Ariva</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Delegate Conduct</span>
            <span className="hover:text-white cursor-pointer transition-colors">Secretariat Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
