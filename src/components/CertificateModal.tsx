"use client";

import React, { useState } from 'react';
import { FileText, Download, X, ExternalLink, ShieldCheck } from 'lucide-react';
import { CertificateItem } from '@/lib/data';

interface CertificateModalProps {
  certificates: CertificateItem[];
}

export default function CertificateModal({ certificates }: CertificateModalProps) {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-[#F16D2C] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#F16D2C] flex items-center justify-center mb-3">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-[#F16D2C] uppercase tracking-wider">
                {cert.category}
              </span>
              <h4 className="text-sm font-bold text-slate-900 mt-1 mb-2 font-heading">
                {cert.title}
              </h4>
              <p className="text-xs text-slate-500 line-clamp-3 mb-4">
                {cert.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">{cert.validity}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-[#F16D2C] hover:text-[#d9571f] font-semibold underline"
                >
                  Preview
                </button>
                <a
                  href={cert.file}
                  download
                  className="p-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700"
                  title="Download Certificate PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Dialog */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F16D2C] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#F16D2C] uppercase tracking-wider">
                  {selectedCert.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {selectedCert.title}
                </h3>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-3 text-xs sm:text-sm text-slate-700 mb-6">
              <p><strong>Issuing Scope:</strong> {selectedCert.validity}</p>
              <p><strong>Technical Scope:</strong> {selectedCert.summary}</p>
              <p className="text-slate-500 text-xs">
                Document verified under parent corporation SUNIIN TECHNOLOGY CO., LIMITED. Official record on file with relevant testing bodies.
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <a
                href={selectedCert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F16D2C] hover:bg-[#d9571f] text-white px-5 py-2 rounded-lg text-xs font-semibold shadow-sm"
              >
                <span>Open Document</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
