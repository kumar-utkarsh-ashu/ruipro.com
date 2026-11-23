import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, ArrowRight, Calendar, Tag } from 'lucide-react';
import { NEWS_ARTICLES } from '@/lib/data';

export const metadata = {
  title: 'News | RUIPRO Fiber Optic Connectivity',
  description: 'Read the latest company announcements, global distributor awards, HDMI Forum ATC certification milestones, and independent media video reviews.',
};

export default function NewsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const selectedCategory = searchParams?.category || 'All';

  const categories = [
    'All',
    'Awards',
    'Product Releases',
    'Certifications',
    'Video Reviews',
  ];

  const filteredArticles = selectedCategory === 'All'
    ? NEWS_ARTICLES
    : NEWS_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            News
          </h1>
          <div className="w-16 h-0.5 bg-[#F16D2C] mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Preserving our history of optical achievements, distributor partnerships, laboratory certifications, and verified YouTube reviews dating from 2018 to today.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-200/70 rounded-xl max-w-fit mx-auto border border-slate-300/60">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const href = cat === 'All' ? '/news' : '/news?category=' + encodeURIComponent(cat);
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

      {/* 3. News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              {/* Media Container */}
              <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                {article.youtubeId ? (
                  <div className="w-full h-full relative flex items-center justify-center bg-slate-900 group">
                    <iframe
                      src={'https://www.youtube.com/embed/' + article.youtubeId}
                      title={article.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={article.image || '/images/news/01.jpg'}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="absolute top-3 left-3 pointer-events-none">
                  <span className="bg-slate-950/80 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1 rounded shadow uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </div>
                <h2 className="text-base font-bold text-slate-900 group-hover:text-[#F16D2C] transition-colors line-clamp-2 mb-3 font-heading">
                  <Link href={'/news/' + article.slug}>
                    {article.title}
                  </Link>
                </h2>
                <p className="text-xs text-slate-500 line-clamp-3 mb-6 flex-grow leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <Link
                    href={'/news/' + article.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F16D2C] hover:text-[#d9571f] transition-colors"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
