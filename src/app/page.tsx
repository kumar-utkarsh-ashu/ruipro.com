import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Zap, Layers, Activity, ChevronRight, Award, ExternalLink, Building2, Users, Globe, UserCheck } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, TRUST_METRICS, REVIEWS, APPLICATIONS, NEWS_ARTICLES } from '@/lib/data';

export default function HomePage() {
  const flagshipProducts = PRODUCTS.slice(0, 4);
  const latestNews = NEWS_ARTICLES.slice(0, 3);

  return (
    <div className="w-full">
      {/* 1. Hero Carousel + 2. Distributor Opportunity Strip - Seamless 0px gap */}
      <section aria-label="Featured Banners and Announcements" className="w-full">
        <HeroCarousel />
        <div className="w-full bg-[#F16D2C] py-4 px-4 text-center text-white shadow-md">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base font-semibold">
            <span>Looking forward to becoming a Ruipro distributor?</span>
            <Link
              href="/contact#distributor"
              className="underline hover:text-slate-900 transition-colors font-bold inline-flex items-center gap-1"
            >
              <span>Click here</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Sections with consistent vertical spacing */}
      <div className="py-16 sm:py-20 space-y-16 sm:space-y-20">
        {/* 3. Brand Introduction & Optical Advantage */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-heading">
            Welcome to the Official RUIPRO Website!
          </h2>
          <div className="w-20 h-0.5 bg-[#F16D2C] mx-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
            RUIPRO is known for fiber optic cables that deliver reliable performance over long distances. Designed for home theaters, gaming setups, professional AV systems, and integrated AV systems, our products bring clear signals and practical design to the spaces where people watch, play, and work.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Our range spans active optical cables, full-fiber solutions, detachable connectivity systems, and installation accessories. Throughout the range, we focus on the details that matter: dependable transmission, flexible cable routing, and ease of installation.
          </p>
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#F16D2C] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F16D2C] flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2 font-heading">48Gbps Uncompressed</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full HDMI 2.1 aggregate bandwidth supporting 8K@60Hz and 4K@120Hz without chroma sub-sampling or compression artifacts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#F16D2C] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F16D2C] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2 font-heading">Zero EMI & RFI Interference</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Light photons are naturally immune to electrical noise, allowing long cable runs adjacent to high-voltage power lines.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#F16D2C] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F16D2C] flex items-center justify-center mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2 font-heading">Up to 300 Meters Reach</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Maintains zero signal attenuation and zero latency over distances up to 300 meters (1,000 feet) without external repeaters.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#F16D2C] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F16D2C] flex items-center justify-center mb-4">
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
      <section className="bg-slate-100/70 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-[#F16D2C] uppercase tracking-widest">Flagship Catalog</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mt-1">
                Featured Optical Connectivity
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Purchases fulfilled via our official online store (ruipro.store) and Amazon US.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#F16D2C] hover:text-[#d9571f] transition-colors"
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

      {/* 5. Trust Numbers & Brand Metrics matching HOME.png space strip */}
      <section className="w-full bg-slate-950 text-white py-16 px-4 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-12 h-12 mx-auto mb-3 text-[#F16D2C] flex items-center justify-center">
                <Building2 className="w-10 h-10" />
              </div>
              <div className="text-4xl sm:text-6xl font-extrabold text-[#F16D2C] font-heading mb-2">
                11
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300">
                Years Of Establishment
              </div>
            </div>

            <div>
              <div className="w-12 h-12 mx-auto mb-3 text-[#F16D2C] flex items-center justify-center">
                <Users className="w-10 h-10" />
              </div>
              <div className="text-4xl sm:text-6xl font-extrabold text-[#F16D2C] font-heading mb-2">
                37
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300">
                Total Employees
              </div>
            </div>

            <div>
              <div className="w-12 h-12 mx-auto mb-3 text-[#F16D2C] flex items-center justify-center">
                <Globe className="w-10 h-10" />
              </div>
              <div className="text-4xl sm:text-6xl font-extrabold text-[#F16D2C] font-heading mb-2">
                39
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300">
                International Distributors
              </div>
            </div>

            <div>
              <div className="w-12 h-12 mx-auto mb-3 text-[#F16D2C] flex items-center justify-center">
                <UserCheck className="w-10 h-10" />
              </div>
              <div className="text-4xl sm:text-6xl font-extrabold text-[#F16D2C] font-heading mb-2">
                315489
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300">
                Cumulative Users
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Real-World Applications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Application
          </h2>
          <div className="w-16 h-0.5 bg-[#F16D2C] mx-auto mt-3 mb-4" />
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            From home theaters to commercial AV and integrated systems, RUIPRO brings reliable fiber optic connectivity to a wide range of installations. Whether connecting a projector to an equipment rack or linking displays across a venue, our solutions are designed for long cable runs, flexible routing, and straightforward installation.
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
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">Our Core Values</h2>
            <div className="w-16 h-0.5 bg-[#F16D2C] mx-auto mt-3 mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">
                Goal
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                To continue on as the best HDMI Fibre cable leaders in our field
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">
                Process
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We have the best know how and equipment currently available
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#F16D2C] text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">
                Vision
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Be up to date with AV trends & produce best cables possible
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-lime-600 text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">
                Mission
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                To produce the best HDMI Fibre cables on the planet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Reviews
          </h2>
          <div className="w-16 h-0.5 bg-[#F16D2C] mx-auto mt-3 mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-6">
                &ldquo;{rev.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-sm text-slate-900">{rev.author}</div>
                <div className="text-xs text-[#F16D2C] font-medium">{rev.cable}</div>
                <div className="text-[11px] text-slate-400">{rev.source}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. News Teaser matching HOME.png */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            News
          </h2>
          <div className="w-16 h-0.5 bg-[#F16D2C] mx-auto mt-3 mb-4" />
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
                  <span className="bg-orange-50 text-[#F16D2C] font-semibold px-2 py-0.5 rounded text-[11px]">{news.category}</span>
                  <span>{news.date}</span>
                </div>
                <h3 className="font-bold text-sm text-slate-900 mb-2 line-clamp-2 font-heading">
                  <Link href={'/news/' + news.slug} className="hover:text-[#F16D2C] transition-colors">
                    {news.title}
                  </Link>
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 mb-4 flex-grow">
                  {news.excerpt}
                </p>
                <Link
                  href={'/news/' + news.slug}
                  className="text-xs font-semibold text-[#F16D2C] hover:text-[#d9571f] flex items-center gap-1 mt-auto"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 border border-[#F16D2C] text-[#F16D2C] hover:bg-[#F16D2C] hover:text-white px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <span>View More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      </div>

      {/* 10. Callout Strip: Creating a High-Quality Media Room - Sits directly flush against Universal Footer */}
      <section className="w-full bg-slate-900 text-white py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">Creating a High-Quality Media Room?</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">Any question or suggestion, please do not hesitate to contact us!</p>
          </div>
          <Link
            href="/contact"
            className="bg-[#F16D2C] hover:bg-[#d9571f] text-white px-8 py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
