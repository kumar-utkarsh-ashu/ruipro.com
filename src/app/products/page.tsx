import React from 'react';
import Link from 'next/link';
import { ExternalLink, Check, Info } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/data';

export const metadata = {
  title: 'Product Showcase | RUIPRO Official 9-Product Catalog',
  description: 'Explore the complete RUIPRO 9-product catalog featuring 8K detachable armored HDMI 2.1 cables, DisplayPort 1.4 cables, MPO bulk trunk fiber, and keystone wall plates.',
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const selectedCategory = searchParams?.category || 'All';

  const categories = [
    'All',
    'HDMI Cables',
    'DisplayPort Cables',
    'Modules & Extenders',
    'Bulk Fiber & Accessories',
  ];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Product Showcase
          </h1>
          <div className="w-16 h-0.5 bg-[#F16D2C] mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            For our dedicated Product Showcase page, we feature 9 key products and product ranges sold on ruipro.store. Click any product below to view full details, specifications, and direct purchase options on our official store or Amazon.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-200/70 rounded-xl max-w-fit mx-auto border border-slate-300/60">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const href = cat === 'All' ? '/products' : '/products?category=' + encodeURIComponent(cat);
            return (
              <Link
                key={cat}
                href={href}
                className={'px-4 py-2 rounded-lg text-xs font-semibold transition-all ' + (
                  isSelected
                    ? 'bg-[#F16D2C] text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/50'
                )}
              >
                {cat}
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Comparison Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="bg-slate-900 text-white p-6 sm:p-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F16D2C]">Decision Guide</span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading mt-1">
              Flagship HDMI Optical Cables Comparison
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Compare key specifications across our primary 8K HDMI cable series to choose the right model for your project.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                  <th className="p-4">Feature</th>
                  <th className="p-4">8K Gen4AK Detachable</th>
                  <th className="p-4">8K Armored Pure Fiber</th>
                  <th className="p-4">8K CL2 In-Wall Rated</th>
                  <th className="p-4">8K ATC Certified</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Max Bandwidth</td>
                  <td className="p-4 text-[#F16D2C] font-bold">48Gbps</td>
                  <td className="p-4 text-[#F16D2C] font-bold">48Gbps</td>
                  <td className="p-4 text-[#F16D2C] font-bold">48Gbps</td>
                  <td className="p-4 text-[#F16D2C] font-bold">48Gbps</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Detachable Connector Head</td>
                  <td className="p-4 text-emerald-600 font-semibold">Yes (Fits 3/4 conduit)</td>
                  <td className="p-4 text-slate-400">Fixed Head</td>
                  <td className="p-4 text-slate-400">Fixed Head</td>
                  <td className="p-4 text-slate-400">Fixed Head</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Stainless Steel Armor</td>
                  <td className="p-4 text-emerald-600 font-semibold">Yes (Spiral Steel)</td>
                  <td className="p-4 text-emerald-600 font-semibold">Yes (Heavy Duty)</td>
                  <td className="p-4 text-slate-400">Standard Protective Sleeve</td>
                  <td className="p-4 text-slate-400">Standard Protective Sleeve</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Fire Safety Rating</td>
                  <td className="p-4">TPE Low Smoke</td>
                  <td className="p-4">High-Flex PVC</td>
                  <td className="p-4 text-emerald-600 font-semibold">CL2 In-Wall Certified</td>
                  <td className="p-4">RoHS / CE Compound</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Laboratory ATC Report</td>
                  <td className="p-4">In-House Lab Verified</td>
                  <td className="p-4">In-House Lab Verified</td>
                  <td className="p-4">UL CL2 Tested</td>
                  <td className="p-4 text-emerald-600 font-semibold">Official HDMI Forum ATC</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Best Application</td>
                  <td className="p-4">Narrow conduit in-wall runs</td>
                  <td className="p-4">Rugged crawl spaces & desks</td>
                  <td className="p-4">Building code compliance</td>
                  <td className="p-4">Enthusiast reference theaters</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Conduit Guidance Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 sm:p-8 flex items-start gap-4">
          <Info className="w-6 h-6 text-[#F16D2C] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900 font-heading">
              Architectural & Conduit Pulling Note for AV Integrators
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              When routing through in-wall electrical conduits, we strongly recommend our Gen4AK Detachable HDMI (P01) or Detachable DisplayPort (P03) models. The outer diameter of the detachable sub-connector is only 12.5mm, permitting easy pulling through standard 20mm (3/4-inch) flexible or rigid conduits without requiring messy wall cutting or risking connector pin damage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
