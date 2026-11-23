"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '@/lib/data';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-950 aspect-[16/9] sm:aspect-[21/9] max-h-[720px] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
          </div>

          {/* Slide Text Content */}
          <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-white max-w-2xl">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-400 mb-2">
              {slide.subtitle}
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight mb-4 text-balance">
              {slide.title}
            </h1>
            <p className="text-xs sm:text-base text-slate-300 mb-6 line-clamp-3">
              {slide.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={slide.ctaLink}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-600/30"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://ruipro.store/collections/all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3 rounded-lg text-sm font-semibold transition-all"
              >
                <span>Shop Official Store</span>
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white border border-slate-700/80 backdrop-blur transition-all hidden sm:flex items-center justify-center"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white border border-slate-700/80 backdrop-blur transition-all hidden sm:flex items-center justify-center"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentSlide ? 'w-8 bg-blue-500' : 'w-2 bg-slate-600 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
