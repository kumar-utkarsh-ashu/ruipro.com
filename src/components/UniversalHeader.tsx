"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ExternalLink, ChevronDown, ShieldCheck, ShoppingBag } from 'lucide-react';

export default function UniversalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products', hasDropdown: true },
    { name: 'News & Updates', href: '/news' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const productCategories = [
    { name: 'All 9 Key Products', href: '/products' },
    { name: '8K HDMI Optical Cables', href: '/products?category=HDMI+Cables' },
    { name: 'DisplayPort 1.4 Optical Cables', href: '/products?category=DisplayPort+Cables' },
    { name: 'Detachable Modules & Extenders', href: '/products?category=Modules+%26+Extenders' },
    { name: 'Bulk Fiber & Wall Plates', href: '/products?category=Bulk+Fiber+%26+Accessories' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/95 backdrop-blur border-b border-slate-800 text-slate-100">
      {/* Top Announcement Bar */}
      <div className="bg-blue-900/60 border-b border-blue-800/40 px-4 py-2 text-xs font-medium text-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">Notice</span>
            <span>Looking forward to becoming a RUIPRO distributor?</span>
            <Link href="/contact#distributor" className="text-blue-300 underline hover:text-white transition-colors">
              Click here to apply
            </Link>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Official Brand Showcase
            </span>
            <a
              href="https://ruipro.store/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-300 hover:text-white transition-colors font-semibold"
            >
              <span>Store: ruipro.store</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-40 h-10">
            <Image
              src="/images/logo/RUIPRO_LOGO.png"
              alt="RUIPRO Fiber Optic Connectivity"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 transition-colors py-2 ${
                      isActive ? 'text-blue-400 font-semibold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </Link>

                  {/* Dropdown Menu */}
                  {productsDropdownOpen && (
                    <div className="absolute top-full left-0 w-64 pt-2 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="bg-slate-900 border border-slate-800 rounded-lg p-2 shadow-xl">
                        {productCategories.map((cat) => (
                          <Link
                            key={cat.name}
                            href={cat.href}
                            className="block px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/80 rounded transition-colors"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors py-2 ${
                  isActive ? 'text-blue-400 font-semibold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://ruipro.store/collections/all"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Shop Official Store</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="https://ruipro.store/collections/all"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-semibold"
          >
            <span>Shop</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <div key={link.name} className="border-b border-slate-800/60 pb-2">
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base font-medium py-1 ${
                    isActive ? 'text-blue-400 font-semibold' : 'text-slate-200'
                  }`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 mt-1 space-y-1">
                    {productCategories.slice(1).map((cat) => (
                      <Link
                        key={cat.name}
                        href={cat.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs text-slate-400 hover:text-slate-200 py-1"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="pt-3">
            <a
              href="https://ruipro.store/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg text-sm font-semibold transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop on ruipro.store</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
