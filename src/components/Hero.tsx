import { motion } from 'motion/react';
import { Sparkles, ChevronRight } from 'lucide-react';
import PageTransitionPrompt from './PageTransitionPrompt';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="page-section relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-5 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Main Split Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          
          {/* Secondary small text / category badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-red-950/40 text-red-400 border border-red-800/30">
              <Sparkles className="w-3 h-3" />
              DIGITAL MARKETING
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-zinc-400">
              GRAPHIC DESIGN
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-zinc-400">
              AI CONTENT
            </span>
          </motion.div>

          {/* Huge Headline: line-by-line reveal */}
          <motion.h1
            id="hero-main-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight uppercase leading-[0.98] font-display text-white mb-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              BUILDING BRANDS
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block text-zinc-300"
            >
              THAT GET{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-rose-400 drop-shadow-[0_0_25px_rgba(220,38,38,0.35)]">
                NOTICED.
              </span>
            </motion.span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed mb-9"
          >
            I&apos;m <span className="text-white font-semibold">Abul Hassan</span> — a Digital Marketer, Graphic Designer and AI Content Creator focused on creating powerful visual experiences and marketing content that helps brands stand out.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              id="hero-btn-work"
              onClick={() => onNavigate('work')}
              className="group relative px-7 py-3.5 rounded-xl font-display text-xs font-black uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-[0_0_25px_rgba(220,38,38,0.35)] hover:shadow-[0_0_35px_rgba(220,38,38,0.5)] active:scale-95 flex items-center justify-center gap-2"
            >
              <span>VIEW MY WORK</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-btn-contact"
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 rounded-xl font-display text-xs font-black uppercase tracking-widest text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-500 transition-all duration-300 active:scale-95 text-center"
            >
              LET&apos;S WORK TOGETHER
            </button>
          </motion.div>

          {/* Truthful Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 pt-6 border-t border-zinc-900/80 flex items-center gap-6 text-xs text-zinc-400"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for New Projects</span>
            </div>
            <div className="text-zinc-600">|</div>
            <div>Bano Qabil & Udemy Certified</div>
          </motion.div>
        </div>

        {/* Right Column: Cinematic Portrait */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Moving atmospheric red glow behind portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.45, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="absolute w-[360px] sm:w-[440px] h-[440px] rounded-full blur-[110px] pointer-events-none -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(220, 38, 38, 0.6) 0%, rgba(127, 29, 29, 0.25) 50%, transparent 75%)',
            }}
          />

          {/* Portrait Container with editorial frame & soft vignette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative group w-full max-w-[380px] sm:max-w-[420px]"
          >
            {/* Ambient edge rim-light border */}
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-red-500/30 via-zinc-800/50 to-transparent">
              
              <div className="relative rounded-[23px] overflow-hidden bg-gradient-to-b from-zinc-900 to-[#0A0A0A] aspect-[4/5] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                
                {/* Real Portrait Image */}
                <img
                  id="hero-portrait-image"
                  src="/assets/abul_hassan_portrait.png"
                  alt="Abul Hassan - Digital Marketer & Graphic Designer"
                  className="w-full h-full object-cover object-center filter contrast-105 brightness-95 transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Cinematic Red Rim Light & Bottom Gradient Integration */}
                <div 
                  className="absolute inset-0 pointer-events-none mix-blend-screen opacity-50"
                  style={{
                    background: 'radial-gradient(ellipse at top right, rgba(239, 68, 68, 0.4) 0%, transparent 65%)',
                  }}
                />

                {/* Bottom Fade to blend portrait into page */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent pointer-events-none" />

                {/* Floating identity pill at bottom corner */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white font-display">Abul Hassan</p>
                    <p className="text-[10px] text-zinc-400">Marketer • Designer • AI Creator</p>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-red-950/80 text-red-400 border border-red-800/40">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Page Transition & Status Bar */}
      <PageTransitionPrompt
        currentPageNumber="01"
        currentPageName="Home"
        nextPageNumber="02"
        nextPageName="About"
        nextSectionId="about"
        onNavigate={onNavigate}
      />
    </section>
  );
}
