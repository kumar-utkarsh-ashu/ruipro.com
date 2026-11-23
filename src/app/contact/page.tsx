import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, AlertTriangle, ShieldCheck, ExternalLink, Globe } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { DISTRIBUTORS } from '@/lib/data';

export const metadata = {
  title: 'Contact Us | RUIPRO Fiber Optic Connectivity',
  description: 'Get in touch with RUIPRO corporate headquarters, apply for authorized distribution, or contact regional distributors across Australia, Europe, and Mainland China.',
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Contact Us
          </h1>
          <div className="w-16 h-0.5 bg-[#F16D2C] mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Reach out for technical guidance, warranty inquiries, custom optical cable lengths, or international distribution partnerships.
          </p>
        </div>
      </section>

      {/* 2. Mainland China & Regional Alert Notice */}
      <section id="china-distributor" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 border border-amber-300/80 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 rounded-xl text-[#F16D2C] shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-2.5 py-0.5 rounded">
                  Territory Notice
                </span>
                <h3 className="text-base sm:text-lg font-bold text-amber-950 font-heading mt-1">
                  Mainland China, Hong Kong & Macao Official Distributor
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                At this time, we do not offer direct shipping or sales to Mainland China, Hong Kong, or Macao. To ensure the best experience and full after-sales support, we kindly ask customers in these regions to contact our official authorized distributor:
              </p>
              <div className="bg-white/80 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 space-y-1">
                <div className="font-bold text-slate-900">广州市可君科技有限公司 (Guangzhou Kejun Technology Co., Ltd.)</div>
                <div><strong>Tel / WeChat:</strong> 13602763839</div>
                <div><strong>Email:</strong> gztopsound@hotmail.com</div>
              </div>
              <p className="text-[11px] text-amber-800 italic">
                We kindly remind customers in Mainland China, Hong Kong, and Macau: Please purchase through this distributor for warranty and service support. Purchases from RUIPROs official website or Amazon are not eligible for warranty service in these regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Corporate Info and Inquiry Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold text-[#F16D2C] uppercase tracking-widest">Headquarters</span>
                <h3 className="text-xl font-bold text-slate-900 font-heading mt-1">United States</h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F16D2C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Address</strong>
                    <span>101 Convention Center Dr Ste 900, Las Vegas, NV 89109</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#F16D2C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">WhatsApp Message</strong>
                    <span>+86 182 6783 3801</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#F16D2C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Email</strong>
                    <a href="mailto:support@ruipro.com" className="text-[#F16D2C] hover:underline">
                      support@ruipro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#F16D2C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Hours</strong>
                    <span>Monday - Friday: 9:00 AM - 6:00 PM PST</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold font-heading text-slate-100 flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#F16D2C]" />
                <span>Online Purchases</span>
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Official store retail orders fulfilled worldwide via ruipro.store and Amazon US:
              </p>
              <a
                href="https://ruipro.store/collections/all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#F16D2C] hover:underline"
              >
                <span>Visit ruipro.store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div id="distributor" className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 4. Global Distributor Directory */}
      <section id="distributors" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-200 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
              Global Distributors
            </h2>
            <div className="w-16 h-0.5 bg-[#F16D2C] mx-auto mt-3 mb-4" />
            <p className="text-xs sm:text-sm text-slate-500">
              For local stock, contractor wholesale rates, and regional warranty support, contact our authorized partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DISTRIBUTORS.map((dist) => (
              <div
                key={dist.region}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#F16D2C] uppercase tracking-wider block mb-1">
                    {dist.region}
                  </span>
                  <h3 className="font-bold text-base text-slate-900 font-heading mb-2">
                    {dist.distributor}
                  </h3>
                  {dist.contactPerson && (
                    <p className="text-xs text-slate-600 mb-1"><strong>Role:</strong> {dist.contactPerson}</p>
                  )}
                  {dist.phone && (
                    <p className="text-xs text-slate-600 mb-1"><strong>Phone / Contact:</strong> {dist.phone}</p>
                  )}
                  {dist.email && (
                    <p className="text-xs text-slate-600 mb-1">
                      <strong>Email:</strong> <a href={'mailto:' + dist.email} className="text-[#F16D2C] hover:underline">{dist.email}</a>
                    </p>
                  )}
                  {dist.address && (
                    <p className="text-xs text-slate-600 mb-1"><strong>Address:</strong> {dist.address}</p>
                  )}
                  {dist.notice && (
                    <p className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded mt-3 leading-relaxed">{dist.notice}</p>
                  )}
                  {dist.notes && (
                    <p className="text-xs text-slate-500 mt-2">{dist.notes}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
