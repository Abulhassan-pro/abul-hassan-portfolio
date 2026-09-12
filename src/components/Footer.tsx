import { ArrowUp, ArrowUpRight, Github, Linkedin, MessageSquare, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'why-me', label: 'Why Me' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer id="main-footer" className="border-t border-red-950/30 bg-[#050505] text-zinc-400 py-16 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Tier: Brand, Nav & Back to Top */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          {/* Brand & Subtitle */}
          <div className="space-y-1">
            <button
              onClick={scrollToTop}
              className="text-2xl font-extrabold tracking-tight font-display text-white flex items-center gap-2 hover:text-red-400 transition-colors"
            >
              <span>ABUL HASSAN</span>
              <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
            </button>
            <p className="text-xs uppercase tracking-widest text-zinc-400">
              Digital Marketer • Graphic Designer • AI Content Creator
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-red-600/50 hover:bg-zinc-800 text-xs font-bold text-white transition-all duration-200"
            aria-label="Back to Top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-red-500 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-zinc-900" />

        {/* Bottom Tier: Socials & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-400">
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:abulhassan.officiall@gmail.com"
              className="hover:text-red-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <span>•</span>
            <a
              href="https://wa.me/923250943323"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/abul-hassan1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span>•</span>
            <a
              href="https://github.com/Abulhassan-pro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Copyright */}
          <div>
            <p>© 2026 Abul Hassan. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
