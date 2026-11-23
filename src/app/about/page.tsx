import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Award, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import CertificateModal from '@/components/CertificateModal';
import { CERTIFICATES } from '@/lib/data';

export const metadata = {
  title: 'About RUIPRO & SUNIIN TECHNOLOGY | Brand Story & Certifications',
  description: 'Learn about the history, engineering philosophy, and official HDMI Forum ATC certifications behind RUIPRO and SUNIIN TECHNOLOGY CO., LIMITED.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* 1. Hero Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Since 2015</span>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading mt-2 mb-6">
            Pioneering Optical AV Connectivity
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            RUIPRO is a specialized fiber optic connectivity brand of SUNIIN TECHNOLOGY CO., LIMITED. Since introducing our first fiber optic HDMI cables in 2016, we have set the benchmark for long-distance, high-bandwidth signal integrity.
          </p>
        </div>
      </section>

      {/* 2. Corporate Profile & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Company Profile</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
              Precision Engineering Meets Real-World Installation
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Established in 2015, SUNIIN TECHNOLOGY recognized early that conventional copper HDMI cables could not reliably carry high-bandwidth signals beyond 15 to 20 feet without signal degradation, flicker, or handshake dropouts.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              In 2016, RUIPRO introduced its first generation of active optical HDMI cables. Over the following decade, our catalog expanded to include DisplayPort cables, pure-fiber solutions, detachable conduit-pulling connectivity systems, and architectural installation accessories.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Today, RUIPRO products are trusted by custom home theater installers, commercial AV integrators, esports tournament producers, and medical imaging facilities worldwide.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
            <Image
              src="/images/banners/03_banner-conference-room_2000x821.png"
              alt="RUIPRO Engineering and Corporate Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Our Guiding Compass</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mt-1">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-blue-600 font-bold text-lg mb-2 block">01</span>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Category Leadership</h3>
              <p className="text-xs text-slate-600">To continue on as the best HDMI fiber cable leaders in our field worldwide.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-blue-600 font-bold text-lg mb-2 block">02</span>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Technical Mastery</h3>
              <p className="text-xs text-slate-600">We maintain the best technical know-how and testing equipment currently available.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-blue-600 font-bold text-lg mb-2 block">03</span>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Trend Alignment</h3>
              <p className="text-xs text-slate-600">Stay continuously up-to-date with AV trends and produce the highest standard of cables.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-blue-600 font-bold text-lg mb-2 block">04</span>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Global Excellence</h3>
              <p className="text-xs text-slate-600">To produce the most reliable and highest-performing HDMI fiber cables on the planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Official Certifications Vault */}
      <section id="certificates" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Compliance & Laboratory Verification</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mt-1">
            Official Certifications Vault
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            RUIPRO cables undergo rigorous Authorized Test Center (ATC) verification. All documents are issued under our parent corporation SUNIIN TECHNOLOGY CO., LIMITED.
          </p>
        </div>

        <CertificateModal certificates={CERTIFICATES} />
      </section>

      {/* 5. Global Presence and Trade Shows */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 border border-slate-800">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Trade Shows & Global Outreach</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading mt-1 mb-4">
              Connecting with Integrators Around the World
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              RUIPRO regularly showcases optical cable innovations at premier international trade events, including the Hong Kong Electronics Fair, ISE Barcelona, and InfoComm. Our leadership team meets directly with distributors and AV specialists to engineer next-generation solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all"
              >
                <span>Partner with RUIPRO</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all border border-slate-700"
              >
                <span>View Trade Show News</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
