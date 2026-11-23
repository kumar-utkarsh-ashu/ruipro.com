import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Award, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import CertificateModal from '@/components/CertificateModal';
import { CERTIFICATES } from '@/lib/data';

export const metadata = {
  title: 'About Us | RUIPRO Fiber Optic Connectivity',
  description: 'Learn about the history, engineering philosophy, and official HDMI Forum ATC certifications behind RUIPRO and SUNIIN TECHNOLOGY CO., LIMITED.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* 1. Hero Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-bold font-heading mb-4">
            About Us
          </h1>
          <div className="w-16 h-0.5 bg-[#F16D2C] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            RUIPRO is a fiber optic connectivity brand of SUNIIN TECHNOLOGY, a company established in 2015. Since introducing our first fiber optic HDMI cables in 2016, we have expanded our range to include DisplayPort cables, full-fiber solutions, detachable connectivity systems, and installation accessories.
          </p>
        </div>
      </section>

      {/* 2. Corporate Profile & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
              Engineering Practical AV Connections
            </h2>
            <div className="w-16 h-0.5 bg-[#F16D2C]" />
            <p className="text-sm text-slate-600 leading-relaxed">
              We develop and manufacture products for home theaters, gaming setups, professional AV systems, and integrated AV installations. Our work focuses on practical installation needs: reliable signal transmission over long distances, flexible cable routing, and connections that are easier to install, maintain, and upgrade.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              RUIPRO has earned an international reputation for its fiber optic cables, with positive reviews across AV and technology publications, review websites, and enthusiast forums. Our products reach customers worldwide through retail channels and a network of distributors and AV resellers.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              From product development and manufacturing to quality control and technical support, we work closely with customers and installation partners to address real connection challenges and improve the products we make.
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
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">Our Core Values</h2>
            <div className="w-16 h-0.5 bg-[#F16D2C] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-[#F16D2C] font-bold text-lg mb-2 block">01</span>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Category Leadership</h3>
              <p className="text-xs text-slate-600">To continue on as the best HDMI Fibre cable leaders in our field worldwide.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-[#F16D2C] font-bold text-lg mb-2 block">02</span>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Technical Mastery</h3>
              <p className="text-xs text-slate-600">We have the best know how and equipment currently available.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-[#F16D2C] font-bold text-lg mb-2 block">03</span>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Trend Alignment</h3>
              <p className="text-xs text-slate-600">Be up to date with AV trends & produce best cables possible.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-[#F16D2C] font-bold text-lg mb-2 block">04</span>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Uncompromising Quality</h3>
              <p className="text-xs text-slate-600">To produce the best HDMI Fibre cables on the planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Official Certifications Vault */}
      <section id="certificates" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Official Certifications Vault
          </h2>
          <div className="w-16 h-0.5 bg-[#F16D2C] mx-auto mt-3 mb-4" />
          <p className="text-xs sm:text-sm text-slate-500">
            RUIPRO is a brand owned by SUNIIN TECHNOLOGY CO., LIMITED, so compliance documents are issued under the SUNIIN company name.
          </p>
        </div>

        <CertificateModal certificates={CERTIFICATES} />
      </section>

      {/* 5. Global Presence and Trade Shows */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 border border-slate-800">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">
              Trade Shows & Global Outreach
            </h2>
            <div className="w-16 h-0.5 bg-[#F16D2C] mb-4" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              RUIPRO regularly showcases optical cable innovations at premier international trade events, including the Hong Kong Electronics Fair, ISE Barcelona, and InfoComm. Our leadership team meets directly with distributors and AV specialists to engineer next-generation solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F16D2C] hover:bg-[#d9571f] text-white px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-md"
              >
                <span>Partner with RUIPRO</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 bg-slate-850 hover:bg-slate-800 text-slate-200 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all border border-slate-700"
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
