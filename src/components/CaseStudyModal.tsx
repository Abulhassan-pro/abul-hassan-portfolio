import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, ArrowUpRight, CheckCircle2, Layers, Wrench, Shield } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: () => void;
}

export default function CaseStudyModal({
  project,
  onClose,
  onStartProject,
}: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="case-study-modal-container"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] border border-red-900/40 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-y-auto my-auto z-10"
        >
          {/* Close Button */}
          <button
            id="close-case-study-btn"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-zinc-900/90 hover:bg-red-600 border border-white/10 hover:border-red-500 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Media Preview */}
          <div className="relative aspect-[16/9] w-full bg-zinc-950 overflow-hidden rounded-t-3xl">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />

            {/* Bottom Meta Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-950/80 text-red-300 border border-red-800/40 backdrop-blur-sm">
                  {project.category}
                </span>
                <h2
                  id="modal-project-title"
                  className="text-2xl sm:text-4xl font-extrabold font-display text-white uppercase tracking-tight mt-2"
                >
                  {project.title}
                </h2>
              </div>

              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.5)] active:scale-95 transition-all"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>PLAY PRODUCTION REEL</span>
                </a>
              )}
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Meta Attributes Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-zinc-950 border border-white/5 text-xs">
              <div>
                <span className="text-zinc-400 block uppercase font-semibold">Role</span>
                <span className="font-bold text-white mt-0.5 block">{project.role}</span>
              </div>
              <div>
                <span className="text-zinc-400 block uppercase font-semibold">Category</span>
                <span className="font-bold text-white mt-0.5 block">{project.category}</span>
              </div>
              <div>
                <span className="text-zinc-400 block uppercase font-semibold">Timeline</span>
                <span className="font-bold text-white mt-0.5 block">{project.year}</span>
              </div>
              <div>
                <span className="text-zinc-400 block uppercase font-semibold">Deliverables</span>
                <span className="font-bold text-white mt-0.5 block">Full Asset Suite</span>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-red-500 font-display mb-2">
                OVERVIEW
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* My Contribution */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-red-500 font-display mb-2">
                MY CONTRIBUTION
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-950/60 p-4 rounded-xl border border-white/5">
                {project.contribution}
              </p>
            </div>

            {/* Creative Process */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-red-500 font-display mb-3">
                CREATIVE PROCESS
              </h3>
              <div className="space-y-2.5">
                {project.creativeProcess.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/5 flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-red-950 border border-red-800 text-red-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {sIdx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables & Impact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-red-500 font-display mb-3">
                  FINAL DELIVERABLES
                </h3>
                <ul className="space-y-2">
                  {project.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-red-500 font-display mb-3">
                  IMPACT & PRODUCTION FOCUS
                </h3>
                <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/5">
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.resultsOrImpact || 'Engineered with strict attention to brand alignment, audience retention drivers, and platform-specific conversion requirements.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Tools Used */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-display mb-2">
                PRODUCTION TOOLS & SOFTWARE
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 text-zinc-200 border border-zinc-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer CTA */}
            <div className="pt-6 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-zinc-400">
                Interested in commissioning similar creative work?
              </span>
              <button
                id="modal-cta-commission"
                onClick={() => {
                  onClose();
                  onStartProject();
                }}
                className="px-6 py-3 rounded-xl font-display text-xs font-black uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] active:scale-95 flex items-center gap-2"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
