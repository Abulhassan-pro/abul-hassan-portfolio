export default function Marquee() {
  const items = [
    'DIGITAL MARKETING',
    'GRAPHIC DESIGN',
    'AI CONTENT',
    'SOCIAL MEDIA',
    'CREATIVE STRATEGY',
    'UGC ADS',
    'AI VOICE AGENTS',
    'PERFORMANCE MARKETING',
  ];

  return (
    <div
      id="marquee-strip"
      className="relative w-full overflow-hidden py-6 border-y border-red-950/30 bg-[#070707]/80 backdrop-blur-sm select-none"
      aria-hidden="true"
    >
      {/* Edge gradient masks */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling track */}
      <div className="flex w-max animate-[marquee_28s_linear_infinite]">
        {[...items, ...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center mx-6 gap-6">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] font-display text-zinc-400/90 hover:text-white transition-colors">
              {text}
            </span>
            <span className="text-red-500/70 text-xs">✦</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
