import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  MessageSquare, 
  Linkedin, 
  Github, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Send,
  Phone
} from 'lucide-react';
import PageTransitionPrompt from './PageTransitionPrompt';
import { sendContactEmail } from '../services/emailService';

interface ContactProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Digital Marketing',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const realEmail = 'abulhassan.officiall@gmail.com';
  const whatsappUrl = 'https://wa.me/923250943323';
  const linkedinUrl = 'https://www.linkedin.com/in/abul-hassan1/';
  const githubUrl = 'https://github.com/Abulhassan-pro';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(realEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    const res = await sendContactEmail({
      name: formState.name,
      email: formState.email,
      serviceInterest: formState.service,
      message: formState.message,
    });

    setIsSubmitting(false);

    if (res.success) {
      setIsSuccess(true);
      setFormState({
        name: '',
        email: '',
        service: 'Digital Marketing',
        message: '',
      });
      setTimeout(() => setIsSuccess(false), 6000);
    } else {
      setErrorMessage(res.error || 'Failed to dispatch via EmailJS.');
    }
  };

  return (
    <section id="contact" className="page-section relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Background Ambient Red Fog */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-15 blur-[160px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.5) 0%, rgba(127, 29, 29, 0.2) 60%, transparent 80%)'
        }}
      />

      {/* Main Card */}
      <div className="relative rounded-3xl bg-[#0A0A0A] border border-red-950/50 p-8 sm:p-12 lg:p-16 shadow-[0_20px_70px_rgba(0,0,0,0.85)] overflow-hidden mb-8">
        
        {/* Subtle top edge glow */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Headlines & Direct Channels */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 font-display">
                  PAGE 07 / 07 • DIRECT COLLABORATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-display text-white tracking-tight leading-[1.05]">
                READY TO CREATE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-white">
                  SOMETHING GREAT?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 mt-4 leading-relaxed max-w-md">
                Have a project, brand or idea that needs better creative direction? Reach out and let&apos;s talk strategy.
              </p>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                id="contact-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl font-display text-xs font-black uppercase tracking-widest text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.35)] active:scale-95 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>WHATSAPP ME</span>
              </a>

              <button
                id="contact-copy-email-btn"
                onClick={handleCopyEmail}
                className="px-6 py-3.5 rounded-xl font-display text-xs font-bold uppercase tracking-wider text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 transition-all flex items-center gap-2 active:scale-95"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>EMAIL COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Connect Grid */}
            <div className="pt-6 border-t border-zinc-900/80 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block font-display">
                DIRECT CONTACT CHANNELS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Email link */}
                <a
                  href={`mailto:${realEmail}`}
                  className="p-3.5 rounded-xl bg-zinc-950 border border-white/5 hover:border-red-600/40 hover:bg-zinc-900/40 transition-all flex items-center gap-3 text-xs text-zinc-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-800/30 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-zinc-400 block uppercase font-semibold">Email</span>
                    <span className="text-zinc-200 font-medium truncate block">{realEmail}</span>
                  </div>
                </a>

                {/* WhatsApp Link */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-zinc-950 border border-white/5 hover:border-emerald-600/40 hover:bg-zinc-900/40 transition-all flex items-center gap-3 text-xs text-zinc-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/40 border border-emerald-800/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase font-semibold">WhatsApp Direct</span>
                    <span className="text-zinc-200 font-medium block">+92 325 0943323</span>
                  </div>
                </a>

                {/* LinkedIn Link */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-zinc-950 border border-white/5 hover:border-blue-600/40 hover:bg-zinc-900/40 transition-all flex items-center gap-3 text-xs text-zinc-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-950/40 border border-blue-800/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase font-semibold">LinkedIn Profile</span>
                    <span className="text-zinc-200 font-medium flex items-center gap-1">
                      Abul Hassan <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                    </span>
                  </div>
                </a>

                {/* GitHub Link */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-zinc-950 border border-white/5 hover:border-zinc-600 hover:bg-zinc-900/40 transition-all flex items-center gap-3 text-xs text-zinc-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-300 group-hover:scale-105 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase font-semibold">GitHub Source</span>
                    <span className="text-zinc-200 font-medium flex items-center gap-1">
                      Abulhassan-pro <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-6 bg-zinc-950/80 p-6 sm:p-8 rounded-2xl border border-white/5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white font-display mb-1">
              SEND A PROJECT BRIEF
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Fill out the form below to outline your requirements and get a response within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Your Name / Brand
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Vance or Brand Studio"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-zinc-800 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-zinc-800 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Service Needed
                </label>
                <select
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-zinc-800 text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
                >
                  <option value="Digital Marketing">01 Digital Marketing</option>
                  <option value="Social Media Management">02 Social Media Management</option>
                  <option value="Graphic Design">03 Graphic Design</option>
                  <option value="AI Advertisement Videos">04 AI Advertisement Videos</option>
                  <option value="Content Creation">05 Content Creation</option>
                  <option value="Brand Marketing">06 Brand Marketing</option>
                  <option value="Comprehensive Package">Comprehensive Multi-Service Retainer</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Project Details / Goals
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your project, target audience, timeline, or objectives..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-zinc-800 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-display text-xs font-black uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-[0_0_25px_rgba(220,38,38,0.4)] active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>DISPATCHING...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>DISPATCH MESSAGE</span>
                  </>
                )}
              </button>

              {isSuccess && (
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs text-center font-medium">
                  ✓ Proposal successfully sent to Abul Hassan's inbox via EmailJS!
                </div>
              )}

              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-800/60 text-rose-300 text-xs text-center font-medium">
                  ⚠ {errorMessage} Please message directly on WhatsApp (+92 325 0943323) or email.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>

      {/* Page Transition & Status Bar */}
      <PageTransitionPrompt
        currentPageNumber="07"
        currentPageName="Contact"
        isLastPage={true}
        onNavigate={onNavigate || (() => {})}
      />
    </section>
  );
}
