import { useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export interface PageItem {
  id: string;
  number: string;
  name: string;
  label: string;
}

export const PAGES: PageItem[] = [
  { id: 'home', number: '01', name: 'Home', label: '01 Home' },
  { id: 'about', number: '02', name: 'About', label: '02 About' },
  { id: 'experience', number: '03', name: 'Career', label: '03 Experience' },
  { id: 'certifications', number: '04', name: 'Certifications', label: '04 Credentials' },
  { id: 'services', number: '05', name: 'Services', label: '05 Services' },
  { id: 'work', number: '06', name: 'Projects', label: '06 Portfolio' },
  { id: 'contact', number: '07', name: 'Contact', label: '07 Contact' },
];

interface PageNavigatorProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function PageNavigator({ activeSection, onNavigate }: PageNavigatorProps) {
  const currentIndex = PAGES.findIndex((p) => p.id === activeSection);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const currentPage = PAGES[safeIndex] || PAGES[0];

  // Keyboard navigation support: ArrowDown / ArrowUp to move between pages
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (safeIndex < PAGES.length - 1) {
          e.preventDefault();
          onNavigate(PAGES[safeIndex + 1].id);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (safeIndex > 0) {
          e.preventDefault();
          onNavigate(PAGES[safeIndex - 1].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [safeIndex, onNavigate]);

  const handlePrev = () => {
    if (safeIndex > 0) {
      onNavigate(PAGES[safeIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (safeIndex < PAGES.length - 1) {
      onNavigate(PAGES[safeIndex + 1].id);
    }
  };

  return (
    <>
      {/* Desktop Floating Right Page Deck */}
      <aside
        aria-label="Page Navigator"
        className="fixed right-5 lg:right-7 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center select-none"
      >
        <div className="p-2 rounded-2xl bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex flex-col items-center gap-2">
          
          {/* Previous Page Button */}
          <button
            id="page-nav-prev"
            onClick={handlePrev}
            disabled={safeIndex === 0}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 disabled:opacity-25 disabled:pointer-events-none transition-all"
            title="Previous Page (Arrow Up)"
            aria-label="Previous Page"
          >
            <ChevronUp className="w-4 h-4" />
          </button>

          {/* Current Page Index Indicator */}
          <div className="py-1 text-[10px] font-mono font-bold tracking-widest text-zinc-400 flex flex-col items-center">
            <span className="text-white text-xs font-display">{currentPage.number}</span>
            <div className="w-3 h-[1px] bg-red-600/70 my-0.5" />
            <span>07</span>
          </div>

          {/* Vertical Page Navigation Dots */}
          <div className="flex flex-col items-center gap-2 py-1">
            {PAGES.map((page, idx) => {
              const isActive = idx === safeIndex;
              return (
                <button
                  key={page.id}
                  id={`page-nav-dot-${page.id}`}
                  onClick={() => onNavigate(page.id)}
                  className="group relative flex items-center justify-center p-1 focus:outline-none"
                  aria-label={`Go to page ${page.number}: ${page.name}`}
                >
                  {/* Outer ring / dot */}
                  <span
                    className={`transition-all duration-300 rounded-full ${
                      isActive
                        ? 'w-2.5 h-6 bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.9)]'
                        : 'w-2 h-2 bg-zinc-600 hover:bg-zinc-300'
                    }`}
                  />

                  {/* Tooltip on hover */}
                  <span className="absolute right-8 pointer-events-none px-2.5 py-1 rounded-md bg-[#0D0D0D] border border-white/10 text-white text-[11px] font-medium tracking-wide whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-xl">
                    <span className="text-red-400 font-mono mr-1.5">{page.number}</span>
                    {page.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Next Page Button */}
          <button
            id="page-nav-next"
            onClick={handleNext}
            disabled={safeIndex === PAGES.length - 1}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 disabled:opacity-25 disabled:pointer-events-none transition-all"
            title="Next Page (Arrow Down)"
            aria-label="Next Page"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Keyboard hint */}
        <div className="mt-2 text-[9px] font-mono uppercase tracking-wider text-zinc-400 opacity-60 hover:opacity-100 transition-opacity flex items-center gap-1">
          <span>↑/↓ KEYS</span>
        </div>
      </aside>

      {/* Mobile Floating Bottom Page Dock */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden flex items-center justify-between p-2.5 rounded-2xl bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-2 pl-2">
          <span className="text-xs font-mono font-bold text-red-500">{currentPage.number}/07</span>
          <span className="text-zinc-600">•</span>
          <span className="text-xs font-bold text-white uppercase tracking-wider font-display truncate max-w-[140px]">
            {currentPage.name}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handlePrev}
            disabled={safeIndex === 0}
            className="p-2 rounded-xl bg-zinc-900 border border-white/5 text-zinc-300 disabled:opacity-30 disabled:pointer-events-none active:scale-95"
            aria-label="Previous Page"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            disabled={safeIndex === PAGES.length - 1}
            className="px-3.5 py-2 rounded-xl bg-red-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 disabled:opacity-30 disabled:pointer-events-none active:scale-95 shadow-[0_0_15px_rgba(220,38,38,0.4)]"
            aria-label="Next Page"
          >
            <span>NEXT</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </>
  );
}
