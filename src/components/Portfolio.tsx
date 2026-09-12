import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Play, Eye } from 'lucide-react';
import { projects } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import PageTransitionPrompt from './PageTransitionPrompt';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
  onNavigate: (sectionId: string) => void;
}

const filterCategories: ProjectCategory[] = [
  'ALL',
  'GRAPHIC DESIGN',
  'SOCIAL MEDIA',
  'AI ADS',
  'MARKETING',
  'BRANDING'
];

export default function Portfolio({ onSelectProject, onNavigate }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'ALL') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="work" className="page-section relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-5 sm:px-8 max-w-7xl mx-auto">
      <div>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 font-display">
                PAGE 06 / 07 • SELECTED WORK & CASE STUDIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase font-display text-white tracking-tight">
              PORTFOLIO
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              Real projects. Commercial deliverables. Visual impact.
            </p>
          </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 bg-[#0A0A0A] p-1.5 rounded-2xl border border-white/5">
          {filterCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((proj) => (
            <motion.div
              layout
              key={proj.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => onSelectProject(proj)}
              className="group relative rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-red-600/50 overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(220,38,38,0.15)] flex flex-col justify-between transition-all duration-400"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-[16/11] overflow-hidden bg-zinc-950">
                <img
                  src={proj.imageUrl}
                  alt={proj.title}
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark overlay & red gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Video Indicator if applicable */}
                {proj.videoUrl && (
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.6)]">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                )}

                {/* Category Chip */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/10">
                    {proj.category}
                  </span>
                </div>

                {/* Quick inspect eye button floating */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-4 py-2 rounded-full bg-red-600/90 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW CASE STUDY</span>
                  </div>
                </div>
              </div>

              {/* Project Card Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-red-400 transition-colors uppercase tracking-tight line-clamp-1">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-zinc-900/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {proj.tools.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-900 text-zinc-400 border border-zinc-800"
                      >
                        {t}
                      </span>
                    ))}
                    {proj.tools.length > 2 && (
                      <span className="text-[10px] text-zinc-400 self-center">
                        +{proj.tools.length - 2}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-red-400 group-hover:translate-x-0.5 transition-transform">
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      </div>

      {/* Page Transition & Status Bar */}
      <PageTransitionPrompt
        currentPageNumber="06"
        currentPageName="Portfolio"
        nextPageNumber="07"
        nextPageName="Contact"
        nextSectionId="contact"
        onNavigate={onNavigate}
      />
    </section>
  );
}
