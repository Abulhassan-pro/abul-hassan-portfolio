import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote, Play, Pause, CheckCircle, MapPin, Sparkles } from 'lucide-react';
import { testimonialsData, TestimonialItem } from '../data/leesharkData';

interface TestimonialsLeesharkProps {
  onNavigateToContact?: () => void;
}

export default function TestimonialsLeeshark({ onNavigateToContact }: TestimonialsLeesharkProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const testimonialsCount = testimonialsData.length;

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsCount);
  }, [testimonialsCount]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsCount) % testimonialsCount);
  }, [testimonialsCount]);

  const handleSelect = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay ticker
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, 6500);

    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered, handleNext]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const currentTestimonial: TestimonialItem = testimonialsData[currentIndex];

  // Motion variants for smooth sliding carousel
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section 
      id="testimonials"
      className="relative bg-[#050505] text-white pt-20 md:pt-28 pb-24 px-5 sm:px-8 md:px-16 overflow-hidden select-none"
      aria-label="Client Testimonials and Feedback"
    >
      {/* Background atmospheric glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#ccff00]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full pb-10 md:pb-14 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#ccff00] uppercase tracking-widest mb-3">
              <Sparkles className="w-3 h-3 text-[#ccff00]" />
              <span>04 / CLIENT VOICES & RESULTS</span>
            </div>
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-tight"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              Trusted By <span className="text-[#ccff00]">Founders</span> & Brands
            </h2>
          </div>

          <p className="text-gray-400 text-sm sm:text-base max-w-md text-left md:text-right font-light leading-relaxed">
            Real feedback from business owners, marketing directors, and founders whose growth we accelerated through high-converting funnels and elite visual design.
          </p>
        </div>

        {/* Live Credibility Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 mb-8 border-b border-white/5">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-2xl sm:text-3xl font-black text-[#ccff00] block font-mono">4.8x</span>
            <span className="text-xs text-gray-400 uppercase tracking-wider font-mono">Average Meta ROAS</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-2xl sm:text-3xl font-black text-white block font-mono">100%</span>
            <span className="text-xs text-gray-400 uppercase tracking-wider font-mono">5-Star Client Rating</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-2xl sm:text-3xl font-black text-white block font-mono">-38%</span>
            <span className="text-xs text-gray-400 uppercase tracking-wider font-mono">Average CAC Drop</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-2xl sm:text-3xl font-black text-[#ccff00] block font-mono">PKR 25M+</span>
            <span className="text-xs text-gray-400 uppercase tracking-wider font-mono">Ad Spend Optimized</span>
          </div>
        </div>

        {/* Carousel Area */}
        <div 
          id="testimonials-carousel-container"
          className="relative mt-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Testimonial Card Frame */}
          <div className="relative min-h-[420px] sm:min-h-[380px] md:min-h-[360px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                data-cursor="drag"
                className="w-full rounded-3xl bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-black/80 border border-white/15 p-6 sm:p-10 md:p-14 shadow-2xl backdrop-blur-2xl relative overflow-hidden cursor-grab active:cursor-grabbing"
              >
                {/* Decorative Giant Quote Mark in Background */}
                <Quote className="absolute top-6 right-8 w-24 h-24 md:w-36 md:h-36 text-white/[0.03] pointer-events-none -scale-x-100" />
                
                {/* Top Row: Rating & Tangible Metric Pill */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 md:w-5 md:h-5 fill-[#ccff00] text-[#ccff00]" 
                      />
                    ))}
                    <span className="ml-2 text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                      5.0 Verified Review
                    </span>
                  </div>

                  {/* Impact Metric Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/40 text-[#ccff00] text-xs font-mono font-bold uppercase tracking-wider">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{currentTestimonial.metric}</span>
                  </div>
                </div>

                {/* The Quote */}
                <blockquote className="relative z-10 text-lg sm:text-2xl md:text-3xl font-light text-gray-100 leading-relaxed sm:leading-snug tracking-tight mb-8">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </blockquote>

                {/* Bottom Row: Client Profile & Service Pill */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10 relative z-10">
                  
                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img 
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.name}
                        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#ccff00]/70 shadow-[0_0_20px_rgba(204,255,0,0.25)]"
                        onError={(e) => {
                          // Fallback to placeholder if image load fails
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentTestimonial.name)}&background=111111&color=ccff00`;
                        }}
                      />
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#ccff00] rounded-full ring-2 ring-black" />
                    </div>

                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg uppercase tracking-wide font-mono">
                        {currentTestimonial.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 font-medium">
                        {currentTestimonial.role}, <span className="text-[#ccff00]">{currentTestimonial.company}</span>
                      </p>
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-mono mt-0.5">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span>{currentTestimonial.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Service Delivered Tag */}
                  <div className="self-end sm:self-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 font-medium whitespace-nowrap block">
                      {currentTestimonial.service}
                    </span>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Left: Interactive Dot Indicators & Slide Counter */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-gray-400 font-bold uppercase tracking-widest">
                0{currentIndex + 1} <span className="text-[#ccff00]">/</span> 0{testimonialsCount}
              </span>

              <div className="flex items-center gap-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx 
                        ? "w-8 bg-[#ccff00] shadow-[0_0_10px_rgba(204,255,0,0.5)]" 
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Autoplay Pause/Play toggle */}
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer ml-2"
                title={isAutoPlay ? "Pause auto-scroll" : "Enable auto-scroll"}
                aria-label={isAutoPlay ? "Pause auto-scroll" : "Enable auto-scroll"}
              >
                {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#ccff00]" />}
              </button>
            </div>

            {/* Right: Previous and Next Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                id="testimonial-prev-button"
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#ccff00] hover:text-black border border-white/15 hover:border-[#ccff00] flex items-center justify-center transition-all duration-300 cursor-pointer text-white shadow-lg active:scale-95"
                aria-label="Previous Testimonial"
                title="Previous client review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                id="testimonial-next-button"
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#ccff00] hover:text-black border border-white/15 hover:border-[#ccff00] flex items-center justify-center transition-all duration-300 cursor-pointer text-white shadow-lg active:scale-95"
                aria-label="Next Testimonial"
                title="Next client review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Quick Click Thumbnail Strip to select any client directly */}
          <div className="mt-8 pt-8 border-t border-white/10 hidden md:flex items-center justify-between gap-3 overflow-x-auto pb-2">
            {testimonialsData.map((item, idx) => {
              const isSelected = currentIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(idx)}
                  className={`flex-1 min-w-[170px] p-3 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                    isSelected
                      ? "bg-white/10 border-[#ccff00] shadow-[0_0_15px_rgba(204,255,0,0.15)]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className={`w-9 h-9 rounded-full object-cover border ${
                      isSelected ? "border-[#ccff00]" : "border-white/20"
                    }`}
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=111111&color=ccff00`;
                    }}
                  />
                  <div className="min-w-0">
                    <p className={`text-xs font-bold truncate ${isSelected ? "text-white" : "text-gray-300"}`}>
                      {item.name}
                    </p>
                    <p className="text-[10px] text-gray-400 font-mono truncate">
                      {item.company}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-[#ccff00]/10 to-transparent border border-[#ccff00]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 
              className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              Ready to be our next success story?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Let's scale your ad campaigns with verified 4.5x ROAS strategies and stunning graphic design.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/923250943323?text=Hi%20Abul%20Hassan%2C%20I%20saw%20your%20client%20reviews%20and%20want%20to%20discuss%20my%20business%20growth."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.587 1.961.947 2.796.947 3.179 0 5.765-2.587 5.766-5.766 0-3.18-2.586-5.767-5.766-5.767zm7.391 5.766c-.001 4.072-3.319 7.39-7.391 7.39-1.22 0-2.414-.302-3.483-.876l-3.864 1.013 1.033-3.766c-.636-1.103-.977-2.364-.977-3.662.001-4.073 3.32-7.391 7.392-7.391 4.072.001 7.39 3.319 7.39 7.392z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateToContact) {
                  onNavigateToContact();
                } else {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex-1 sm:flex-initial px-6 py-3 rounded-full bg-[#ccff00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#b5e600] transition-all text-center shadow-lg"
            >
              Get Free Audit
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
