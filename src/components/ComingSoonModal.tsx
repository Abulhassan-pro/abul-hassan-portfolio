interface ComingSoonModalProps {
  onBack: () => void;
}

export default function ComingSoonModal({ onBack }: ComingSoonModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center min-h-screen bg-black text-[#ccff00] w-full px-6 select-none animate-in fade-in zoom-in-95 duration-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(204,255,0,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 font-semibold">
        Project Deployment
      </span>

      <h1 
        className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight mb-8 text-center px-4 leading-none"
        style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
      >
        Coming Soon
      </h1>

      <p className="text-gray-400 text-sm md:text-base max-w-md text-center mb-10 font-light leading-relaxed">
        This live deployment or case study is currently undergoing security audit and performance optimization.
      </p>

      <button
        onClick={onBack}
        className="cursor-pointer px-8 py-3.5 rounded-full border border-[#ccff00] text-black bg-[#ccff00] font-bold text-sm md:text-base hover:bg-black hover:text-[#ccff00] transition-all uppercase tracking-wider shadow-lg"
      >
        Go Back
      </button>
    </div>
  );
}
