import { motion } from 'motion/react';
import { Play, ArrowUpRight, Film, Sparkles, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface FeaturedProjectProps {
  project: Project;
  onExplore: (project: Project) => void;
}

export default function FeaturedProject({ project, onExplore }: FeaturedProjectProps) {
  return (
    <section id="featured-project" className="py-20 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Small Eyebrow Label */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-red-600" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 font-display">
          FLAGSHIP CASE STUDY
        </span>
      </div>

      {/* Split Cinematic Feature Container */}
      <div className="relative rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-red-600/40 transition-all duration-500 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        
        {/* Subtle crimson background aura */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
          
          {/* Left: Large Visual / Video Mockup */}
          <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-950 border border-white/10">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
            />

            {/* Dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Play video badge if videoUrl available */}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center group/play cursor-pointer"
                aria-label="Play Production Reel"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-[0_0_35px_rgba(220,38,38,0.7)] group-hover/play:scale-110 group-hover/play:bg-red-500 transition-all">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <span className="sr-only">Play Production Reel</span>
              </a>
            )}

            {/* Bottom info banner on video */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[11px]">
                {project.year} • {project.category}
              </span>
              {project.videoUrl && (
                <span className="px-3 py-1 rounded-full bg-red-950/80 text-red-300 backdrop-blur-md border border-red-800/40 font-bold text-[11px] flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5" />
                  PROD REEL AVAILABLE
                </span>
              )}
            </div>
          </div>

          {/* Right: Project Briefing & Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950 text-red-400 border border-red-800/30">
                  Featured Project
                </span>
                <span className="text-xs text-zinc-400">{project.category}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold uppercase font-display text-white tracking-tight leading-[1.05]">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 mt-4 leading-relaxed">
                {project.description}
              </p>

              {/* Roles Breakdown */}
              <div className="mt-6 pt-5 border-t border-zinc-900 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 block font-display">
                  ROLES & SCOPE
                </span>
                <p className="text-xs font-semibold text-white leading-snug">
                  {project.role}
                </p>
              </div>

              {/* Tools Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded text-[11px] font-medium bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                id="featured-explore-btn"
                onClick={() => onExplore(project)}
                className="px-6 py-3 rounded-xl font-display text-xs font-black uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-[0_0_25px_rgba(220,38,38,0.35)] active:scale-95 flex items-center gap-2"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl font-display text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 transition-all flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-red-500" />
                  <span>WATCH REEL</span>
                </a>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
