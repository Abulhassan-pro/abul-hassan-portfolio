import { motion } from 'motion/react';
import { Target, Layers, Bot, Radio, Compass } from 'lucide-react';
import PageTransitionPrompt from './PageTransitionPrompt';

interface AboutProps {
  onNavigate: (sectionId: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const pillars = [
    {
      icon: Target,
      title: 'Digital Marketing & Growth',
      description: 'Developing targeted campaigns and customer acquisition pathways that connect brands directly with high-intent audiences.'
    },
    {
      icon: Layers,
      title: 'Graphic Design & Visual Identity',
      description: 'Creating high-fidelity social carousels, ad creatives, and promotional assets in Adobe Photoshop with meticulous visual balance.'
    },
    {
      icon: Bot,
      title: 'AI Advertising & UGC Video',
      description: 'Synthesizing cinematic AI video footage and ElevenLabs voice agents for viral short-form ads with hook-focused pacing.'
    },
    {
      icon: Radio,
      title: 'Social Media & Scheduling',
      description: 'Orchestrating end-to-end publishing calendars, account management, and content distribution across multi-platform feeds.'
    },
    {
      icon: Compass,
      title: 'Content Strategy & Story',
      description: 'Crafting brand messaging that stops the scroll, clarifies core value propositions, and inspires decisive consumer action.'
    }
  ];

  return (
    <section id="about" className="page-section relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-5 sm:px-8 max-w-7xl mx-auto">
      <div>
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 font-display">
              PAGE 02 / 07 • ABOUT ABUL HASSAN
            </span>
          </div>
          
          {/* Large Statement */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase font-display text-white tracking-tight leading-[1.05] max-w-4xl">
            I COMBINE CREATIVITY, MARKETING AND TECHNOLOGY TO CREATE{' '}
            <span className="text-zinc-400">WORK THAT PEOPLE REMEMBER.</span>
          </h2>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              In a digital environment saturated with generic content, standing out requires more than just regular posting. It demands a deliberate blend of <span className="text-white font-medium">high-fidelity visual design</span>, <span className="text-white font-medium">strategic marketing psychology</span>, and <span className="text-white font-medium">next-generation AI workflows</span>.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              My background brings together hands-on social media management, Adobe Photoshop mastery, and cutting-edge generative video pipelines. I partner with brands to craft ad creatives that don&apos;t just look aesthetically superior, but are mathematically tuned for audience retention and conversion.
            </p>

            {/* Core Philosophy Box */}
            <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-red-900/30 shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 font-display mb-2">
                MY CREATIVE PHILOSOPHY
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                &ldquo;Design without strategy is decorative; marketing without design is invisible. True impact happens when visual craftsmanship and conversion architecture work as one.&rdquo;
              </p>
            </div>

            {/* Quick Real Fact Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/5">
                <span className="text-xs font-semibold text-zinc-400 block mb-1">Primary Toolset</span>
                <span className="text-sm font-bold text-white font-display">Photoshop • AI Suite</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/5">
                <span className="text-xs font-semibold text-zinc-400 block mb-1">Verified Programs</span>
                <span className="text-sm font-bold text-white font-display">Bano Qabil & Udemy</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Focus Pillars */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-display">
                CORE DOMAINS & STRATEGIC PILLARS
              </span>
              <span className="text-[11px] font-mono text-red-400">05 DISCIPLINES</span>
            </div>

            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group p-4 sm:p-5 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-red-600/40 hover:bg-zinc-900/40 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-950/40 border border-red-800/30 flex items-center justify-center text-red-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-display group-hover:text-red-400 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Page Transition & Status Bar */}
      <PageTransitionPrompt
        currentPageNumber="02"
        currentPageName="About"
        nextPageNumber="03"
        nextPageName="Experience"
        nextSectionId="experience"
        onNavigate={onNavigate}
      />
    </section>
  );
}
