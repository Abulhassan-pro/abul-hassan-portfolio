import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Share2, 
  Palette, 
  Film, 
  Sparkles, 
  Award, 
  ArrowUpRight 
} from 'lucide-react';
import { services } from '../data/services';
import PageTransitionPrompt from './PageTransitionPrompt';

interface ServicesProps {
  onSelectService?: (title: string) => void;
  onNavigate: (sectionId: string) => void;
}

const iconMap: Record<string, typeof TrendingUp> = {
  TrendingUp,
  Share2,
  Palette,
  Film,
  Sparkles,
  Award,
};

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <section id="services" className="page-section relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-5 sm:px-8 max-w-7xl mx-auto">
      <div>
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 font-display">
              PAGE 05 / 07 • SERVICES & CAPABILITIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase font-display text-white tracking-tight">
            WHAT I OFFER
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
            Six specialized creative and marketing offerings engineered to elevate brand prestige and accelerate commercial performance.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = iconMap[srv.iconName] || TrendingUp;

            return (
              <motion.div
                key={srv.number}
                id={`service-card-${srv.number}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => onNavigate('contact')}
                className="group relative p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-red-600/50 hover:bg-gradient-to-b hover:from-zinc-900/60 hover:to-[#0A0A0A] transition-all duration-400 cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(220,38,38,0.14)] hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Number & Arrow */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-2xl font-black font-display text-zinc-600 group-hover:text-red-500 transition-colors">
                      {srv.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-red-600 group-hover:border-red-500 transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-red-950/30 border border-red-900/20 flex items-center justify-center text-red-500 mb-5 group-hover:scale-110 group-hover:bg-red-950/50 group-hover:border-red-700/50 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-red-400 transition-colors uppercase tracking-tight">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="pt-6 mt-6 border-t border-zinc-900/80">
                  <div className="flex flex-wrap gap-1.5">
                    {srv.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-950 text-zinc-400 border border-zinc-900 group-hover:border-red-950/50 group-hover:text-zinc-300 transition-colors"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle crimson corner ambient hover glow */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-red-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Page Transition & Status Bar */}
      <PageTransitionPrompt
        currentPageNumber="05"
        currentPageName="Services"
        nextPageNumber="06"
        nextPageName="Projects"
        nextSectionId="work"
        onNavigate={onNavigate}
      />
    </section>
  );
}
