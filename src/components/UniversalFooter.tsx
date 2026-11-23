import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Mail, Phone, MapPin, Globe, ShieldCheck } from 'lucide-react';

export default function UniversalFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 font-sans">
      {/* Top Value Strip */}
      <div className="border-b border-slate-800/80 bg-slate-900/40 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-[#F16D2C]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">HDMI Forum ATC Certified</h4>
              <p className="text-xs text-slate-400">Laboratory tested 48Gbps ultra high speed</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-[#F16D2C]">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Pure Optical Engineering</h4>
              <p className="text-xs text-slate-400">Zero loss and zero EMI over 300 meters</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-[#F16D2C]">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Global Distribution</h4>
              <p className="text-xs text-slate-400">39 authorized international distributors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-sm">
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative w-40 h-10">
            <Image
              src="/images/logo/RUIPRO_LOGO.png"
              alt="RUIPRO"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
            RUIPRO is an international fiber optic connectivity brand under SUNIIN TECHNOLOGY CO., LIMITED. Since 2015, we have engineered active optical cables, full-fiber systems, and detachable connectivity solutions for home theaters, gaming setups, and commercial AV systems.
          </p>
          <div className="pt-2 space-y-2 text-xs text-slate-400">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#F16D2C] shrink-0 mt-0.5" />
              <span>101 Convention Center Dr Ste 900, Las Vegas, NV 89109, United States</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#F16D2C] shrink-0" />
              <a href="mailto:support@ruipro.com" className="hover:text-white transition-colors">support@ruipro.com</a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F16D2C] shrink-0" />
              <span>+86 182 6783 3801 (WhatsApp Business)</span>
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 bg-[#F16D2C] hover:bg-[#d9571f] text-white px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>

        {/* Col 2: Key Products */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase text-xs">Showcase Products</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/products/ruipro-8k-gen4ak-detachable-full-fiber-armored-hdmi-cable" className="hover:text-[#F16D2C] transition-colors">8K Gen4AK Detachable HDMI</Link></li>
            <li><Link href="/products/ruipro-8k-armored-full-fiber-optic-hdmi-2-1-cable" className="hover:text-[#F16D2C] transition-colors">8K Armored Pure Fiber HDMI</Link></li>
            <li><Link href="/products/8k-detachable-full-fiber-optic-armored-displayport-cable" className="hover:text-[#F16D2C] transition-colors">8K Detachable DisplayPort 1.4</Link></li>
            <li><Link href="/products/8k-displayport-to-hdmi-detachable-modules" className="hover:text-[#F16D2C] transition-colors">DP to HDMI Detachable Modules</Link></li>
            <li><Link href="/products/8k-hdmi-fiber-cable-cl2-rated" className="hover:text-[#F16D2C] transition-colors">8K CL2 In-Wall Rated HDMI</Link></li>
            <li><Link href="/products/ruipro-8k-fiber-hdmi-cable-48gbps-certified" className="hover:text-[#F16D2C] transition-colors">8K HDMI 2.1b ATC Certified</Link></li>
          </ul>
        </div>

        {/* Col 3: Company & Compliance */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase text-xs">Corporate & News</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/about" className="hover:text-[#F16D2C] transition-colors">About SUNIIN & RUIPRO</Link></li>
            <li><Link href="/about#certificates" className="hover:text-[#F16D2C] transition-colors">Quality & ATC Certificates</Link></li>
            <li><Link href="/news" className="hover:text-[#F16D2C] transition-colors">Company News & Awards</Link></li>
            <li><Link href="/contact#distributors" className="hover:text-[#F16D2C] transition-colors">Global Distributor Network</Link></li>
            <li><Link href="/contact" className="hover:text-[#F16D2C] transition-colors">Customer Support & Inquiry</Link></li>
          </ul>
        </div>

        {/* Col 4: Purchasing & Community */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase text-xs">Purchasing Channels</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="https://ruipro.store/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white transition-colors text-[#F16D2C] font-medium">
                <span>Official Store (ruipro.store)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="https://www.amazon.com/dp/B0BTGG3GTF?th=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white transition-colors text-[#F16D2C] font-medium">
                <span>Amazon US Store</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li><Link href="/contact#china-distributor" className="hover:text-[#F16D2C] transition-colors">China/HK/Macao Notice</Link></li>
          </ul>

          <div className="pt-3">
            <h5 className="text-slate-300 font-semibold text-xs mb-2">Follow Us</h5>
            <div className="space-y-1.5 text-xs">
              <a href="https://www.facebook.com/groups/ruipro.official" target="_blank" rel="noopener noreferrer" className="block hover:text-[#F16D2C] text-slate-400 transition-colors">
                Facebook Community Group
              </a>
              <a href="https://www.instagram.com/ruipro.official" target="_blank" rel="noopener noreferrer" className="block hover:text-[#F16D2C] text-slate-400 transition-colors">
                Instagram (@ruipro.official)
              </a>
              <a href="https://www.tiktok.com/@ruipro1direct" target="_blank" rel="noopener noreferrer" className="block hover:text-[#F16D2C] text-slate-400 transition-colors">
                TikTok (@ruipro1direct)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Authorized Distributor Notice Bar */}
      <div className="border-t border-slate-900 bg-slate-950 px-4 py-4 text-xs text-slate-500 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p>
            Notice for Mainland China, Hong Kong & Macao: Direct sales through ruipro.com/ruipro.store do not ship to these regions. Authorized distributor: Guangzhou Kejun Technology Co., Ltd. (Tel/WeChat: 13602763839).
          </p>
          <Link href="/contact#china-distributor" className="text-[#F16D2C] hover:underline shrink-0">
            View Details
          </Link>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-800/60 bg-black/40 px-4 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>(C) 2026 RUIPRO / SUNIIN TECHNOLOGY CO., LIMITED. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="text-slate-600">Designed for Pure Optical AV Transmission</span>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Support</Link>
            <Link href="/about" className="hover:text-slate-400 transition-colors">Corporate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
