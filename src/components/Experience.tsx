import { motion } from 'motion/react';
import { Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import { experiences } from '../data/experience';
import PageTransitionPrompt from './PageTransitionPrompt';

interface ExperienceProps {
  onNavigate: (sectionId: string) => void;
}

export default function Experience({ onNavigate }: ExperienceProps) {
  return (
    <section id="experience" className="page-section relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-5 sm:px-8 max-w-7xl mx-auto">
      <div>
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 font-display">
              PAGE 03 / 07 • CAREER & CLIENT ENGAGEMENTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase font-display text-white tracking-tight">
            WORK EXPERIENCE
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
            Real roles and production responsibilities across digital marketing, social media management, graphic design, and AI video advertising.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-zinc-800 space-y-12 sm:space-y-16">
          {/* Subtle red ambient glow alongside line */}
          <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-red-600 via-red-900 to-transparent shadow-[0_0_15px_rgba(220,38,38,0.5)] pointer-events-none" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="relative group"
            >
              {/* Timeline Node marker with red pulse */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-[#050505] border-2 border-red-500 flex items-center justify-center group-hover:scale-125 group-hover:border-red-400 group-hover:shadow-[0_0_12px_rgba(220,38,38,0.8)] transition-all">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-red-600/40 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[0_15px_40px_rgba(220,38,38,0.1)]">
                
                {/* Meta Top Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-500 font-display">
                      {exp.company}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-0.5">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    {exp.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/70 text-red-300 border border-red-800/40">
                        {exp.badge}
                      </span>
                    )}
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities List */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-display mb-3">
                    Core Responsibilities
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Work Highlights */}
                <div className="mb-6 pt-5 border-t border-zinc-900">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-display mb-3">
                    Key Work & Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exp.keyWork.map((kw, kIdx) => (
                      <div key={kIdx} className="p-3 rounded-xl bg-zinc-950/70 border border-white/5 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-zinc-300 leading-relaxed">{kw}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tool Stack Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mr-1">
                    Tools & Workflows:
                  </span>
                  {exp.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Page Transition & Status Bar */}
      <PageTransitionPrompt
        currentPageNumber="03"
        currentPageName="Experience"
        nextPageNumber="04"
        nextPageName="Certifications"
        nextSectionId="certifications"
        onNavigate={onNavigate}
      />
    </section>
  );
}
