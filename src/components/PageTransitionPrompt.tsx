import { ArrowDown, CornerRightDown } from 'lucide-react';

interface PageTransitionPromptProps {
  currentPageNumber: string;
  currentPageName: string;
  nextPageNumber?: string;
  nextPageName?: string;
  nextSectionId?: string;
  onNavigate: (sectionId: string) => void;
  isLastPage?: boolean;
}

export default function PageTransitionPrompt({
  currentPageNumber,
  currentPageName,
  nextPageNumber,
  nextPageName,
  nextSectionId,
  onNavigate,
  isLastPage = false,
}: PageTransitionPromptProps) {
  if (isLastPage) {
    return (
      <div className="pt-12 pb-4 flex flex-col sm:flex-row items-center justify-between border-t border-white/5 gap-4 text-xs">
        <div className="flex items-center gap-3">
          <span className="font-mono text-red-500 font-bold tracking-widest">{currentPageNumber} / 07</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400 uppercase tracking-wider font-display font-medium">
            {currentPageName} (FINAL PAGE)
          </span>
        </div>
        <button
          onClick={() => onNavigate('home')}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-red-600/40 text-zinc-300 hover:text-white transition-all duration-200 uppercase font-mono text-[11px] tracking-wider"
        >
          <span>BACK TO TOP [01]</span>
          <span className="text-red-400 group-hover:-translate-y-0.5 transition-transform">↑</span>
        </button>
      </div>
    );
  }

  return (
    <div className="pt-12 pb-4 flex flex-col sm:flex-row items-center justify-between border-t border-white/5 gap-4 text-xs select-none">
      {/* Current Page Tag */}
      <div className="flex items-center gap-3">
        <span className="px-2.5 py-1 rounded-md bg-red-950/40 border border-red-800/30 text-red-400 font-mono font-bold text-[11px] tracking-widest">
          PAGE {currentPageNumber} / 07
        </span>
        <span className="text-zinc-500">•</span>
        <span className="text-zinc-400 uppercase tracking-widest font-display font-medium text-[11px]">
          {currentPageName}
        </span>
      </div>

      {/* Next Page Prompt Trigger */}
      {nextSectionId && nextPageName && (
        <button
          id={`advance-to-${nextSectionId}`}
          onClick={() => onNavigate(nextSectionId)}
          className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-[#0A0A0A] hover:bg-zinc-900 border border-white/10 hover:border-red-600/50 text-zinc-300 hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] active:scale-98 cursor-pointer"
        >
          <span className="text-[11px] font-mono tracking-wider text-zinc-400 group-hover:text-zinc-200">
            NEXT: <strong className="text-white font-display font-semibold">{nextPageNumber} {nextPageName.toUpperCase()}</strong>
          </span>
          <div className="w-6 h-6 rounded-lg bg-red-600/20 group-hover:bg-red-600 text-red-400 group-hover:text-white flex items-center justify-center transition-all duration-200">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </button>
      )}
    </div>
  );
}
