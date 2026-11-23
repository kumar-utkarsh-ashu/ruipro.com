import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const primaryImage = product.images[0] || '/images/products/image1.jpeg';

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
      {/* Top Media Area with Badge */}
      <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
        <Image
          src={primaryImage}
          alt={product.title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-[#F16D2C] text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-sm uppercase tracking-wide">
            {product.badge}
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs font-semibold text-[#F16D2C] uppercase tracking-wider mb-1">
          {product.category}
        </div>
        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#F16D2C] transition-colors line-clamp-2 mb-2 font-heading">
          <Link href={'/products/' + product.handle}>
            {product.shortTitle}
          </Link>
        </h3>
        <p className="text-xs text-slate-500 line-clamp-2 mb-4 flex-grow">
          {product.tagline}
        </p>

        {/* Feature Pills */}
        <div className="space-y-1.5 mb-5 text-[11px] text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F16D2C] shrink-0" />
            <span className="font-medium">Bandwidth:</span> {product.specs.bandwidth}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F16D2C] shrink-0" />
            <span className="font-medium">Resolution:</span> {product.specs.resolution}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          <a
            href={product.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#F16D2C] hover:bg-[#d9571f] text-white py-2.5 px-4 rounded-lg text-xs font-semibold transition-colors shadow-sm"
          >
            <span>Buy on Official Store ({product.price})</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <Link
            href={'/products/' + product.handle}
            className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-lg text-xs font-medium transition-colors"
          >
            <span>View Full Specs & Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
