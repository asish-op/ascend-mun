import type { Metadata } from 'next';
import './globals.css';
import DitherCanvas from '@/components/DitherCanvas';
import CustomCursor from '@/components/CustomCursor';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ascend MUN 2026 | Hosted by Ariva',
  description:
    'Ascend Model United Nations 2026, hosted by Ariva. October 29–31. High-caliber diplomatic simulation, consensus writing, and international policy debate. Registrations opening soon.',
  keywords: [
    'Ascend MUN',
    'Ariva',
    'Model United Nations',
    'MUN Conference',
    'UNHRC',
    'DISEC',
    'Lok Sabha',
    'Diplomacy',
    'Youth Assembly',
  ],
  openGraph: {
    title: 'Ascend MUN 2026 | Hosted by Ariva',
    description:
      'Premier Model United Nations conference hosted by Ariva. October 29–31. Registrations opening soon.',
    type: 'website',
    siteName: 'Ascend MUN',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050505] text-white selection:bg-white selection:text-black antialiased relative min-h-screen flex flex-col">
        {/* Intro Boot Loader */}
        <Loader />

        {/* Custom Monochrome Magnetic Cursor */}
        <CustomCursor />

        {/* Dynamic Dither Canvas Grid Overlay */}
        <DitherCanvas />

        {/* Header Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow relative z-10 pt-20">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
