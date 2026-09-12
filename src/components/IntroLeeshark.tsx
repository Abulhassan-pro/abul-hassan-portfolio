import { 
  introWordsList, 
  marqueeFrontend, 
  marqueeBackend, 
  marqueeAI, 
  marqueeTools,
  userProfileImageRemote
} from '../data/leesharkData';

interface IntroLeesharkProps {
  brandName?: string;
}

export default function IntroLeeshark({ brandName = "Abul Hassan" }: IntroLeesharkProps) {
  // Render marquee strip with Hollywood 35mm film perforations
  const renderMarqueeRow = (items: string[], reverse = false, slow = false) => {
    const duplicated = [...items, ...items, ...items, ...items];
    const animClass = slow
      ? reverse
        ? "animate-marquee-slow-reverse"
        : "animate-marquee-slow"
      : reverse
      ? "animate-marquee-reverse"
      : "animate-marquee";

    return (
      <div className="relative w-full overflow-hidden py-3 select-none border-y border-white/10 bg-gradient-to-r from-black via-zinc-950 to-black">
        {/* Subtle 35mm Film Sprocket Holes along borders */}
        <div className="absolute top-0 inset-x-0 h-1 flex justify-between overflow-hidden opacity-30">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} className="w-2 h-1 bg-[#ccff00]/60 mx-1.5 rounded-xs inline-block" />
          ))}
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 flex justify-between overflow-hidden opacity-30">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} className="w-2 h-1 bg-[#ccff00]/60 mx-1.5 rounded-xs inline-block" />
          ))}
        </div>

        <div className={`flex w-max ${animClass}`}>
          {duplicated.map((item, idx) => (
            <div key={`${item}-${idx}`} className="flex items-center">
              <span className="text-gray-300 hover:text-[#ccff00] font-semibold tracking-widest px-4 md:px-8 text-xs md:text-sm lg:text-base transition-colors duration-200 uppercase whitespace-nowrap drop-shadow-[0_0_8px_rgba(204,255,0,0.15)]">
                {item}
              </span>
              <span className="text-[#ccff00] font-bold px-2 md:px-4 text-xs">◆</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section 
      id="about" 
      className="min-h-screen bg-[#050505] text-white pt-20 md:pt-28 pb-16 relative overflow-hidden flex flex-col justify-between"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#ccff00]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Area */}
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-16 z-10">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#ccff00] uppercase tracking-widest mb-3">
            01 / ABOUT ABUL HASSAN
          </div>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-tight"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            Engineering <span className="text-[#ccff00]">Conversion Machines</span>, Not Just Visuals.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mt-3 font-normal">
            Bridging high-performance marketing algorithms with master-class graphic design for brands that want measurable growth.
          </p>
        </div>

        {/* Two-Column Showcase: Profile Photo + Bio Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Abul Hassan's Authentic Photo */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
              {/* Radial glow behind photo */}
              <div className="absolute inset-0 rounded-full bg-[#ccff00]/15 blur-3xl pointer-events-none" />

              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[#ccff00]/50 p-2 bg-gradient-to-b from-white/10 to-black/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(204,255,0,0.2)] group transition-all duration-500">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/profile.png"
                    alt={brandName}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.currentTarget.src = userProfileImageRemote;
                    }}
                  />
                  
                  {/* Top Status Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-white font-bold">
                      Open for Collaborations
                    </span>
                  </div>

                  {/* Bottom Label Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <p className="text-white font-black text-lg uppercase tracking-wider font-mono">
                      {brandName}
                    </p>
                    <p className="text-xs text-[#ccff00] font-mono tracking-wide font-semibold">
                      Digital Marketer • Graphic Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clear Bio & Core Strengths */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden group">
              
              {/* Subtle neon corner accent */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#ccff00]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Author Header with Thumbnail */}
              <div className="flex items-center gap-4 mb-6 pb-5 border-b border-white/10">
                <div className="relative">
                  <img
                    src="/profile.png"
                    alt={brandName}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-[#ccff00] shadow-[0_0_15px_rgba(204,255,0,0.25)]"
                    onError={(e) => {
                      e.currentTarget.src = userProfileImageRemote;
                    }}
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#ccff00] rounded-full ring-2 ring-black" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-bold text-base md:text-lg tracking-wide uppercase font-mono">
                      {brandName}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ccff00]/20 text-[#ccff00] border border-[#ccff00]/40 uppercase">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 tracking-wider">
                    Performance Marketing • Brand Identity • Meta Funnels
                  </p>
                </div>
              </div>

              {/* Clear, Engaging Bio Text */}
              <div className="text-gray-200 text-base sm:text-lg leading-relaxed font-light space-y-3">
                <p>
                  Hey, I'm <strong className="text-white font-bold">Abul Hassan</strong>. A Digital Marketing specialist with a core mastery in Graphic Designing.
                </p>
                <p className="text-gray-300">
                  I don't just design eye-catching visuals; I engineer <strong className="text-[#ccff00] font-semibold">Conversion Machines</strong> that turn cold ad impressions into profitable revenue.
                </p>
                <p className="text-gray-400 text-sm sm:text-base">
                  By combining deep algorithmic intuition in Meta Ads with master-level Adobe Photoshop and cutting-edge AI tools (Midjourney, Gemini), I deliver high-impact marketing funnels that lower acquisition costs and scale businesses predictably.
                </p>
              </div>

              {/* Highlights Pill Badges */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2.5">
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200 font-medium flex items-center gap-1.5">
                  <span className="text-[#ccff00]">✓</span> 4.5x ROAS Meta Performance Marketing
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200 font-medium flex items-center gap-1.5">
                  <span className="text-[#ccff00]">✓</span> Adobe Photoshop Master-Level Retouching
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200 font-medium flex items-center gap-1.5">
                  <span className="text-[#ccff00]">✓</span> AI-Assisted Rapid Creative Iteration
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-[#ccff00]/30 text-xs text-[#ccff00] font-medium flex items-center gap-1.5">
                  📍 Lahore & Karachi, Pakistan • Available Worldwide
                </span>
              </div>
            </div>

            {/* Academic Foundations & Certifications Hub */}
            <div className="mt-6">
              <span className="text-xs uppercase tracking-widest text-gray-400 font-mono font-bold block mb-3">
                Education & Professional Certifications
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ccff00]/50 transition-all">
                  <span className="text-[10px] font-mono text-[#ccff00] font-bold block mb-1">2024 - 2026</span>
                  <h4 className="text-white text-xs font-bold leading-snug">Forces Group of Colleges</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">College Education</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ccff00]/50 transition-all">
                  <span className="text-[10px] font-mono text-[#ccff00] font-bold block mb-1">2012 - 2024</span>
                  <h4 className="text-white text-xs font-bold leading-snug">Saviour</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">School Education</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ccff00]/50 transition-all">
                  <span className="text-[10px] font-mono text-[#ccff00] font-bold block mb-1">Certified</span>
                  <h4 className="text-white text-xs font-bold leading-snug">Bano Qabil</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Digital Marketing Mastery</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ccff00]/50 transition-all">
                  <span className="text-[10px] font-mono text-[#ccff00] font-bold block mb-1">Certified</span>
                  <h4 className="text-white text-xs font-bold leading-snug">Udemy Professional</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Graphic Design</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 4-Tier Opposite Infinite Marquee Tickers at Bottom */}
      <div className="w-full mt-16 md:mt-24 space-y-2 relative z-10">
        <div className="text-center mb-3">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold font-mono">
            Core Toolkit & Algorithmic Capabilities
          </span>
        </div>
        {renderMarqueeRow(marqueeFrontend, false, false)}
        {renderMarqueeRow(marqueeBackend, true, false)}
        {renderMarqueeRow(marqueeAI, false, true)}
        {renderMarqueeRow(marqueeTools, true, true)}
      </div>
    </section>
  );
}
