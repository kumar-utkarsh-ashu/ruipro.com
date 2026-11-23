import React from 'react';
import { Product } from '@/lib/data';

interface TechSpecsMatrixProps {
  product: Product;
}

export default function TechSpecsMatrix({ product }: TechSpecsMatrixProps) {
  const specRows = [
    { label: 'Maximum Bandwidth', value: product.specs.bandwidth },
    { label: 'Supported Resolutions', value: product.specs.resolution },
    { label: 'Connector Interface', value: product.specs.connector },
    { label: 'Cable Outer Diameter', value: product.specs.outerDiameter },
    { label: 'Internal Core Construction', value: product.specs.coreConstruction },
    { label: 'Jacket & Armor Rating', value: product.specs.jacketRating },
    { label: 'Audio Signal Support', value: product.specs.audioSupport },
    { label: 'Operating Power Consumption', value: product.specs.powerConsumption },
    { label: 'Conduit Pull Capability', value: product.specs.conduitPullFriendly },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="bg-slate-900 text-white px-6 py-4">
        <h3 className="font-bold text-base font-heading">Technical Specifications</h3>
        <p className="text-xs text-slate-400">Verified engineering parameters for {product.shortTitle}</p>
      </div>
      <div className="divide-y divide-slate-100 text-sm">
        {specRows.map((row, idx) => (
          <div
            key={row.label}
            className={'flex flex-col sm:flex-row px-6 py-3.5 ' + (idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50')}
          >
            <span className="w-full sm:w-1/3 font-medium text-slate-700 text-xs sm:text-sm mb-1 sm:mb-0">
              {row.label}
            </span>
            <span className="w-full sm:w-2/3 text-slate-900 font-semibold text-xs sm:text-sm">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
