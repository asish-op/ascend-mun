'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Committees', href: '/committees' },
  { name: 'Delegate Guide', href: '/delegate-guide' },
  { name: 'Register', href: '/register' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#050505]/80 backdrop-blur-md border-b border-white/10 shadow-xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Host Attribution */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/20 flex items-center justify-center text-white transition-transform group-hover:scale-105 group-hover:border-white">
              <Globe className="w-5 h-5 text-neutral-300 group-hover:text-white transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-base font-bold tracking-wider text-white uppercase group-hover:text-neutral-200 transition-colors">
                ASCEND MUN
              </span>
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1">
                <span>HOSTED BY</span>
                <span className="text-white font-semibold underline decoration-white/30 underline-offset-2">ARIVA</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-black font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Quick Register CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/register"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>REGISTER</span>
              <span className="text-[9px] bg-black text-white px-1.5 py-0.5 rounded font-mono font-normal">SOON</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-3 font-mono text-sm">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-all ${
                      isActive
                        ? 'bg-white text-black font-bold border-white'
                        : 'bg-neutral-900/50 text-neutral-300 border-white/5 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="text-xs uppercase font-sans">Active</span>}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-white text-black font-mono text-sm font-bold uppercase tracking-wider"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>REGISTER (OPENING SOON)</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
