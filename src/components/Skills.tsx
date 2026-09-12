import { motion } from 'motion/react';
import { Sparkles, Cpu, Layers, BarChart3, Wrench } from 'lucide-react';
import { skillCategories, toolStack } from '../data/skills';

export default function Skills() {
  const categoryIcons = [BarChart3, Layers, Sparkles];

  return (
    <section id="skills" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-red-600" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 font-display">
            ARSENAL & PROFICIENCIES
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase font-display text-white tracking-tight">
          SKILLS & EXPERTISE
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
          A balanced synthesis of marketing acumen, visual design craft, and next-generation AI workflows.
        </p>
      </div>

      {/* Modern Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {skillCategories.map((cat, idx) => {
          const Icon = categoryIcons[idx] || Cpu;

          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-red-600/30 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-950/30 border border-red-900/30 flex items-center justify-center text-red-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold font-display text-white uppercase tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:border-red-600/50 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Verified Tools & Software Stack */}
      <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Wrench className="w-5 h-5 text-red-500" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-white font-display">
              VERIFIED SOFTWARE & AI TOOL STACK
            </h3>
          </div>
          <span className="text-xs text-zinc-400 font-medium">Daily Production Stack</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {toolStack.map((tool) => (
            <div
              key={tool.name}
              className="group p-3 rounded-xl bg-zinc-950 border border-white/5 hover:border-red-600/40 transition-all duration-200 flex flex-col items-center text-center justify-center gap-2"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-mono text-xs font-bold group-hover:scale-105 group-hover:border-red-500/50 transition-all overflow-hidden">
                {tool.iconUrl ? (
                  <img
                    src={tool.iconUrl}
                    alt={tool.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <span className="text-red-400 font-display">{tool.iconFallback}</span>
                )}
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-200 font-display truncate max-w-[100px]">
                  {tool.name}
                </p>
                <p className="text-[10px] text-zinc-400 truncate max-w-[100px]">
                  {tool.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
