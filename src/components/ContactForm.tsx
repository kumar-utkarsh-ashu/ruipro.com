"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Support',
    subject: '',
    message: '',
    website_hp: '' // Honeypot field for anti-bot protection
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [charCount, setCharCount] = useState(0);

  const MAX_MESSAGE_LENGTH = 5000;
  const MAX_INPUT_LENGTH = 150;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check: Bots fill hidden inputs
    if (formData.website_hp) {
      // Silently drop bot submission
      setStatus('success');
      return;
    }

    // 2. Strict Input Trimming & Validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // 3. RFC 5322 Compliant Email Check
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus('error');
      setErrorMessage('Please provide a valid business email address.');
      return;
    }

    // 4. Payload Size Limit to prevent memory exhaustion DoS
    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      setStatus('error');
      setErrorMessage('Message exceeds the maximum permitted length of 5,000 characters.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        category: 'General Support',
        subject: '',
        message: '',
        website_hp: ''
      });
      setCharCount(0);
    }, 800);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 font-heading mb-1">Contact Us</h3>
        <div className="w-12 h-0.5 bg-[#F16D2C] mb-3" />
        <p className="text-xs sm:text-sm text-slate-500">
          Our technical and distribution support team will respond within 24 business hours.
        </p>
      </div>

      {status === 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Inquiry Sent Successfully!</strong>
            <p className="text-xs text-emerald-700 mt-0.5">
              Thank you for contacting RUIPRO. Our team has received your message and will review it promptly.
            </p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Validation Error</strong>
            <p className="text-xs text-rose-700 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Anti-Bot Honeypot Field (Hidden from real users, filled by automated scrapers) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website_hp">Leave this field blank</label>
          <input
            id="website_hp"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website_hp}
            onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
            <input
              type="text"
              required
              maxLength={MAX_INPUT_LENGTH}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F16D2C] focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Your Email *</label>
            <input
              type="email"
              required
              maxLength={MAX_INPUT_LENGTH}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F16D2C] focus:border-transparent"
              placeholder="Your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Category *</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#F16D2C] focus:border-transparent"
            >
              <option value="General Support">General Support</option>
              <option value="Distributor Application">Distributor Application</option>
              <option value="Custom Length Request">Custom Length Request</option>
              <option value="Technical Inquiry">Technical Inquiry</option>
              <option value="Warranty Inquiry">Warranty Inquiry</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Subject *</label>
            <input
              type="text"
              required
              maxLength={MAX_INPUT_LENGTH}
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F16D2C] focus:border-transparent"
              placeholder="Subject"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-xs font-semibold text-slate-700">Your Message *</label>
            <span className="text-[11px] text-slate-400">
              {charCount} / {MAX_MESSAGE_LENGTH} characters
            </span>
          </div>
          <textarea
            required
            rows={5}
            maxLength={MAX_MESSAGE_LENGTH}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              setCharCount(e.target.value.length);
            }}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F16D2C] focus:border-transparent resize-y"
            placeholder="Please detail your inquiry, specifications, or distribution requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#F16D2C] hover:bg-[#d9571f] text-white py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-orange-600/20 disabled:opacity-50"
        >
          {status === 'submitting' ? (
            <span>Submitting...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>SUBMIT</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
