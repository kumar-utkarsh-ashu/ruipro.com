import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Tag, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import { NEWS_ARTICLES, NewsItem } from '@/lib/data';

export function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = NEWS_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: article.title + ' | RUIPRO Official News',
    description: article.excerpt,
  };
}

export default function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = NEWS_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const currentIndex = NEWS_ARTICLES.findIndex((a) => a.slug === params.slug);
  const prevArticle = currentIndex > 0 ? NEWS_ARTICLES[currentIndex - 1] : null;
  const nextArticle = currentIndex < NEWS_ARTICLES.length - 1 ? NEWS_ARTICLES[currentIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All News</span>
        </Link>
      </div>

      {/* Header Info */}
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-xs">
          <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full uppercase tracking-wider text-[11px]">
            {article.category}
          </span>
          <span className="text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 font-heading leading-tight">
          {article.title}
        </h1>
      </header>

      {/* Media Hero */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm aspect-video relative">
        {article.youtubeId ? (
          <iframe
            src={'https://www.youtube.com/embed/' + article.youtubeId}
            title={article.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Image
            src={article.image || '/images/news/01.jpg'}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Article Content */}
      <article className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
        <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed border-l-4 border-blue-600 pl-4 py-1 italic bg-slate-50 rounded-r-lg">
          {article.excerpt}
        </p>
        <p className="whitespace-pre-line pt-4">
          {article.content}
        </p>
      </article>

      {/* Pagination Footer */}
      <div className="border-t border-slate-200 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevArticle ? (
          <Link
            href={'/news/' + prevArticle.slug}
            className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-slate-50 transition-all flex flex-col group"
          >
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-1">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
              Previous Article
            </span>
            <span className="text-xs font-bold text-slate-800 line-clamp-1">{prevArticle.title}</span>
          </Link>
        ) : <div />}

        {nextArticle ? (
          <Link
            href={'/news/' + nextArticle.slug}
            className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-slate-50 transition-all flex flex-col items-end text-right group"
          >
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-1">
              Next Article
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <span className="text-xs font-bold text-slate-800 line-clamp-1">{nextArticle.title}</span>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
