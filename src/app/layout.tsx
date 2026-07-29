import type { Metadata } from 'next';
import { Playfair_Display, DM_Mono, Inter } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ascend MUN 2026 | Hosted by Ariva',
  description:
    'Ascend Model United Nations 2026, hosted by Ariva. October 29–31. High-caliber diplomatic simulation, consensus writing, and international policy debate. Registrations opening soon.',
  keywords: ['Ascend MUN', 'Ariva', 'Model United Nations', 'MUN Conference', 'UNHRC', 'DISEC', 'Diplomacy'],
  openGraph: {
    title: 'Ascend MUN 2026 | Hosted by Ariva',
    description: 'Premier Model United Nations conference hosted by Ariva. October 29–31. Registrations opening soon.',
    type: 'website',
    siteName: 'Ascend MUN',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${playfair.variable} ${dmMono.variable} ${inter.variable}`}>
      <body className="bg-[#080808] text-white selection:bg-white selection:text-black antialiased relative min-h-screen flex flex-col overflow-x-hidden">
        <Loader />
        <CustomCursor />
        <Navbar />
        <main className="flex-grow relative z-10 pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
