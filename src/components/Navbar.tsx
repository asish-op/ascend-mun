'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ScrambledText from '@/components/ScrambledText';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Committees', href: '/committees' },
  { name: 'Delegate Guide', href: '/delegate-guide' },
  { name: 'Register', href: '/register' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="text-[17px] font-bold text-white tracking-wider uppercase leading-none"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            ASCEND MUN
          </span>
          <span className="font-mono text-[9px] tracking-[0.3em] text-white/35 uppercase mt-0.5">
            HOSTED BY ARIVA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-[11px] tracking-[0.2em] uppercase transition-colors duration-200 relative ${
                  active ? 'text-white' : 'text-white/45 hover:text-white'
                }`}
              >
                <ScrambledText duration={0.6} speed={0.4} scrambleChars=".*:">{link.name}</ScrambledText>
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/register"
            className="group flex items-center gap-2 px-5 py-2.5 bg-white text-black font-mono text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-neutral-200 transition-colors"
          >
            REGISTER
            <span className="font-mono text-[9px] border border-black/30 px-1.5 py-0.5 rounded-sm">SOON</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex items-center justify-center text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#0a0a0a] border-b border-white/[0.06]"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-3 font-mono text-[12px] tracking-[0.25em] uppercase border-b border-white/[0.05] transition-colors ${
                      active ? 'text-white' : 'text-white/40 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4">
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 bg-white text-black font-mono text-[11px] tracking-[0.25em] uppercase"
                >
                  REGISTER (OPENING SOON)
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
