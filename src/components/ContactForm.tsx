"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Support',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');
    // Simulate instantaneous client-side success response
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        category: 'General Support',
        subject: '',
        message: ''
      });
    }, 800);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 font-heading mb-1">Send an Inquiry</h3>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g. John Doe"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Your Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Category *</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Subject of your inquiry"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message *</label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
            placeholder="Please provide details on your project, cable length requirements, or distribution territory..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg text-sm font-semibold transition-all shadow-md shadow-blue-600/20 disabled:opacity-50"
        >
          {status === 'submitting' ? (
            <span>Sending...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Inquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
