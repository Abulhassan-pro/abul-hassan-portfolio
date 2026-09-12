import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/85 backdrop-blur-md border-b border-red-950/40 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Mark */}
        <button
          id="nav-brand-btn"
          onClick={() => handleLinkClick('home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-1"
          aria-label="Abul Hassan Home"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/15 group-hover:border-red-500/60 transition-colors">
            <img
              src="/assets/abul_hassan_portrait.png"
              alt="Abul Hassan"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-extrabold tracking-tight font-display text-white flex items-center gap-1.5">
              ABUL HASSAN
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            </span>
            <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-medium">
              Creative Director & Marketer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-zinc-950/40 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 tracking-wide ${
                  isActive
                    ? 'text-white bg-red-950/70 border border-red-700/40 shadow-[0_0_12px_rgba(220,38,38,0.2)]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center">
          <button
            id="nav-cta-talk"
            onClick={() => handleLinkClick('contact')}
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-zinc-900 border border-zinc-800 hover:border-red-600/60 hover:bg-red-950/30 rounded-full transition-all duration-300 shadow-sm active:scale-95"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-red-900/30 p-6 shadow-2xl flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-colors flex items-center justify-between ${
                  isActive
                    ? 'text-white bg-red-950/60 border border-red-700/40 font-bold'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-red-500" />}
              </button>
            );
          })}
          <div className="pt-3 border-t border-zinc-800/80 mt-2">
            <button
              id="mobile-nav-cta"
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
