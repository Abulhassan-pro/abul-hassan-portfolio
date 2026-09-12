import { motion } from 'motion/react';
import { Lightbulb, Eye, Cpu, Compass } from 'lucide-react';

export default function WhyMe() {
  const points = [
    {
      icon: Lightbulb,
      title: 'CREATIVE THINKING',
      statement: "Marketing isn't only about posting.",
      elaboration: "It's about communicating a distinct commercial idea with clarity, purpose, and cultural resonance to convert passive viewers into committed customers."
    },
    {
      icon: Eye,
      title: 'VISUAL STORYTELLING',
      statement: 'I create visuals designed to capture attention and communicate value.',
      elaboration: 'In crowded feeds, stopping the scroll requires intentional lighting, high-contrast typography, and immediate emotional hooks.'
    },
    {
      icon: Cpu,
      title: 'AI + HUMAN CREATIVITY',
      statement: 'I use AI as a creative tool while maintaining a professional human-focused output.',
      elaboration: 'Generative models accelerate output and unlock cinematic visual scales, but human direction ensures brand integrity, aesthetic restraint, and genuine connection.'
    },
    {
      icon: Compass,
      title: 'BRAND FOCUS',
      statement: 'Every creative should support the brand, not simply look good.',
      elaboration: 'Aesthetics must serve business objectives. Every asset is structured to reinforce long-term equity, build trust, and drive sustainable growth.'
    }
  ];

  return (
    <section id="why-me" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-red-600" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 font-display">
            DISTINCTION & VALUE
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase font-display text-white tracking-tight">
          WHY ME?
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
          Four foundational principles that govern every campaign, visual asset, and creative partnership.
        </p>
      </div>

      {/* 4 Points Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {points.map((pt, idx) => {
          const Icon = pt.icon;

          return (
            <motion.div
              key={pt.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-red-600/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-950/30 border border-red-900/30 flex items-center justify-center text-red-500 mb-5 group-hover:scale-110 group-hover:bg-red-950/50 group-hover:border-red-600/50 transition-all">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-red-400 transition-colors uppercase tracking-tight">
                  {pt.title}
                </h3>

                <p className="text-sm sm:text-base font-medium text-zinc-200 mt-2 leading-snug">
                  {pt.statement}
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                  {pt.elaboration}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-zinc-900/70 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400">
                  Standard of Practice
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
