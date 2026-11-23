import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Zap, Layers, Activity, ChevronRight, Award, ExternalLink, CheckCircle } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, TRUST_METRICS, REVIEWS, APPLICATIONS, NEWS_ARTICLES } from '@/lib/data';

export default function HomePage() {
  const flagshipProducts = PRODUCTS.slice(0, 4);
  const latestNews = NEWS_ARTICLES.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Hero Carousel */}
      <section aria-label="Featured Banners">
        <HeroCarousel />
      </section>

      {/* 2. Distributor Opportunity Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-800/40">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Global Channel Expansion</span>
            <h2 className="text-lg sm:text-2xl font-bold font-heading">
              Looking Forward to Becoming a RUIPRO Distributor?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Join 39+ authorized international distributors providing high-performance optical cables to premier AV installers and retailers worldwide.
            </p>
          </div>
          <Link
            href="/contact#distributor"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-md transition-all shrink-0 active:scale-95"
          >
            <span>Apply for Distribution</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. Brand Introduction & Optical Advantage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Pure Light Engineering</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-heading mt-2 mb-4">
            Welcome to the Official RUIPRO Website
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            RUIPRO is globally recognized for fiber optic cables that deliver flawless signal transmission over long distances. Designed for home theaters, esports gaming setups, and commercial AV systems, our solutions bring crystal-clear audio and video to the spaces where people watch, play, and work.
          </p>
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2 font-heading">48Gbps Uncompressed</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full HDMI 2.1 aggregate bandwidth supporting 8K@60Hz and 4K@120Hz without chroma sub-sampling or compression artifacts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2 font-heading">Zero EMI & RFI Interference</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Light photons are naturally immune to electrical noise, allowing long cable runs adjacent to high-voltage power lines.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2 font-heading">Up to 300 Meters Reach</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Maintains zero signal attenuation and zero latency over distances up to 300 meters (1,000 feet) without external repeaters.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2 font-heading">Stainless Steel Armor</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Rugged internal spiral steel shielding protects delicate glass fibers against crushing, tight bends, and rodent damage.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Flagship Products Showcase */}
      <section className="bg-slate-100/70 py-16 sm:py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Flagship Catalog</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mt-1">
                Featured Optical Connectivity
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Purchases fulfilled via our official online store (ruipro.store) and Amazon US.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>Explore All 9 Key Products</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flagshipProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Trust Numbers & Brand Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Proven Reliability</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading mt-1">
              A Decade of Optical Excellence
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={metric.label} className={idx > 0 ? 'pt-6 sm:pt-0' : ''}>
                <div className="text-3xl sm:text-5xl font-extrabold text-blue-400 font-heading mb-2">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-300">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Real-World Applications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Installation Environments</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mt-1">
            Engineered for Demanding Spaces
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Whether routing through wall cavities or linking broadcast studios, RUIPRO delivers clean signals everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPLICATIONS.map((app) => (
            <div key={app.id} className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-sm text-slate-900 font-heading mb-1.5">{app.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Core Brand Values */}
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Our Foundation</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading mt-1">Our Core Values</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">The engineering principles that guide our development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs mb-3">01</div>
              <h3 className="font-bold text-sm text-slate-100 mb-2">Category Leadership</h3>
              <p className="text-xs text-slate-400 leading-relaxed">To continue on as the best HDMI fiber cable leaders in our field worldwide.</p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs mb-3">02</div>
              <h3 className="font-bold text-sm text-slate-100 mb-2">Technical Know-How</h3>
              <p className="text-xs text-slate-400 leading-relaxed">We maintain the best engineering expertise and testing equipment currently available.</p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs mb-3">03</div>
              <h3 className="font-bold text-sm text-slate-100 mb-2">AV Trend Alignment</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Stay continuously up-to-date with emerging AV formats and produce the best cables possible.</p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs mb-3">04</div>
              <h3 className="font-bold text-sm text-slate-100 mb-2">Uncompromising Quality</h3>
              <p className="text-xs text-slate-400 leading-relaxed">To produce the most reliable, durable, and highest-performing HDMI fiber cables on the planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Enthusiast Community Feedback</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mt-1">
            Real Reviews from AV Enthusiasts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-6">
                &ldquo;{rev.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-sm text-slate-900">{rev.author}</div>
                <div className="text-xs text-blue-600 font-medium">{rev.cable}</div>
                <div className="text-[11px] text-slate-400">{rev.source}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. News Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Company Updates</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mt-1">
              Latest News & Awards
            </h2>
          </div>
          <Link href="/news" className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1">
            <span>View All News ({NEWS_ARTICLES.length})</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map((news) => (
            <div key={news.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative aspect-video w-full bg-slate-100">
                <Image
                  src={news.image || '/images/news/01.jpg'}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="bg-blue-50 text-blue-600 font-semibold px-2 py-0.5 rounded text-[11px]">{news.category}</span>
                  <span>{news.date}</span>
                </div>
                <h3 className="font-bold text-sm text-slate-900 mb-2 line-clamp-2 font-heading">
                  <Link href={'/news/' + news.slug} className="hover:text-blue-600 transition-colors">
                    {news.title}
                  </Link>
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 mb-4 flex-grow">
                  {news.excerpt}
                </p>
                <Link
                  href={'/news/' + news.slug}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 mt-auto"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
