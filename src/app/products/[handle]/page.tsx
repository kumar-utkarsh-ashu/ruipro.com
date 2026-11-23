import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ExternalLink, ShieldCheck, CheckCircle2, ArrowRight, Info, AlertTriangle } from 'lucide-react';
import TechSpecsMatrix from '@/components/TechSpecsMatrix';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, Product } from '@/lib/data';

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    handle: product.handle,
  }));
}

export function generateMetadata({ params }: { params: { handle: string } }) {
  const product = PRODUCTS.find((p) => p.handle === params.handle);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: product.title + ' | RUIPRO Official Showcase',
    description: product.description,
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { handle: string };
}) {
  const product = PRODUCTS.find((p) => p.handle === params.handle);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter((p) => p.handle !== product.handle).slice(0, 3);

  return (
    <div className="space-y-16 pb-20 pt-8">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium truncate max-w-xs">{product.shortTitle}</span>
        </nav>
      </div>

      {/* Main Product Hero Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Gallery Area */}
          <div className="space-y-4">
            <div className="relative aspect-square w-full rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
              <Image
                src={product.images[0] || '/images/products/image1.jpeg'}
                alt={product.title}
                fill
                className="object-contain p-6"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow uppercase tracking-wide">
                  {product.badge}
                </span>
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <div key={idx} className="relative aspect-square rounded-xl bg-white border border-slate-200 overflow-hidden hover:border-blue-500 transition-colors">
                  <Image
                    src={img}
                    alt={product.shortTitle + ' angle ' + (idx + 1)}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Commercial Info and Buy Outbound */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{product.category}</span>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mt-1 mb-2">
                {product.title}
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.tagline}
              </p>
            </div>

            {/* Pricing and Fulfill Notice */}
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <span className="text-xs text-slate-500 block">Starting From</span>
                <span className="text-2xl font-extrabold text-blue-600">{product.price}</span>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Official store fulfillment with full warranty
              </span>
            </div>

            {/* Key Feature Highlights */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">Key Features:</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Available Lengths */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Available Length Options:</h3>
              <div className="flex flex-wrap gap-2">
                {product.lengths.map((len) => (
                  <span
                    key={len}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                  >
                    {len}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <a
                href={product.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-95"
              >
                <span>Buy on Official Store (ruipro.store)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-3 px-4 rounded-xl text-xs font-semibold transition-all border border-slate-800"
                >
                  <span>Check on Amazon US</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/contact#distributor"
                  className="w-full flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 px-4 rounded-xl text-xs font-semibold transition-all"
                >
                  <span>Bulk / Distributor Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directional Installation Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-4 text-amber-900">
          <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-sm font-bold font-heading">
              Important: Directional Optical Installation
            </h4>
            <p className="text-xs text-amber-800 leading-relaxed">
              RUIPRO active optical cables are directional. One connector is clearly labeled <strong>Source (Tx)</strong> for connection to your media player, PC GPU, game console, or AV receiver. The opposite connector is labeled <strong>Display (Rx)</strong> for connection to your projector, monitor, or television. Please verify direction before pulling through conduits or wall cavities.
            </p>
          </div>
        </div>
      </section>

      {/* Specifications Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechSpecsMatrix product={product} />
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Recommended Complements</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mt-1">
              Related RUIPRO Solutions
            </h2>
          </div>
          <Link href="/products" className="text-xs font-semibold text-blue-600 hover:text-blue-800">
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
