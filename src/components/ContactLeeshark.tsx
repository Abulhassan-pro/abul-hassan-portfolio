import { useState, FormEvent } from 'react';
import { userProfileImageRemote } from '../data/leesharkData';
import { sendContactEmail } from '../services/emailService';

interface ContactLeesharkProps {
  userEmail?: string;
}

export default function ContactLeeshark({ userEmail = "abulhassan.officiall@gmail.com" }: ContactLeesharkProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceInterest: 'Meta Ads & Performance Marketing',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    const res = await sendContactEmail({
      name: formData.name,
      email: formData.email,
      serviceInterest: formData.serviceInterest,
      message: formData.message
    });

    if (res.success) {
      setStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        serviceInterest: 'Meta Ads & Performance Marketing', 
        message: '' 
      });
      setTimeout(() => setStatus('idle'), 6000);
    } else {
      setStatus('error');
      setErrorMessage(res.error || 'Failed to dispatch via EmailJS. Please try again or message directly.');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div 
      id="contact" 
      className="relative min-h-screen text-white font-sans flex items-center overflow-hidden [clip-path:inset(0)] py-20 md:py-28 bg-[#070707]"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#ccff00]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-16 py-10 flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10">
        
        {/* Left Column: Direct Info & Instant WhatsApp Card */}
        <div className="w-full lg:w-5/12 flex flex-col justify-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#ccff00] uppercase tracking-widest mb-3 w-fit">
            05 / INQUIRIES & COLLABORATION
          </div>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            Let's Build Something <span className="text-[#ccff00]">Unstoppable</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 font-light">
            Ready to scale your business with 4.5x ROAS campaigns or elevated visual identity? Reach out directly via WhatsApp or send a message below.
          </p>

          {/* Profile Card */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6 shadow-xl">
            <div className="relative">
              <img
                src="/profile.png"
                alt="Abul Hassan"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#ccff00] shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                onError={(e) => {
                  e.currentTarget.src = userProfileImageRemote;
                }}
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#ccff00] rounded-full ring-2 ring-black animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-white font-bold text-base tracking-wide uppercase font-mono">
                  Abul Hassan
                </h4>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  Online
                </span>
              </div>
              <p className="text-xs text-gray-400 font-mono mt-0.5">
                Typical reply time: Under 1 hour
              </p>
            </div>
          </div>

          {/* Direct WhatsApp Callout Card */}
          <a
            href="https://wa.me/923250943323?text=Hi%20Abul%20Hassan%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20hire%20you%20for%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all mb-6 group cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.587 1.961.947 2.796.947 3.179 0 5.765-2.587 5.766-5.766 0-3.18-2.586-5.767-5.766-5.767zm7.391 5.766c-.001 4.072-3.319 7.39-7.391 7.39-1.22 0-2.414-.302-3.483-.876l-3.864 1.013 1.033-3.766c-.636-1.103-.977-2.364-.977-3.662.001-4.073 3.32-7.391 7.392-7.391 4.072.001 7.39 3.319 7.39 7.392z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Chat Instantly on WhatsApp</p>
                <p className="text-emerald-400 font-mono text-xs">+92 325 0943323</p>
              </div>
            </div>
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
              Open Chat →
            </span>
          </a>

          {/* Email Info with Copy */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 mb-6">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-2 font-mono">
              Direct Business Email:
            </p>
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <a 
                href={`mailto:${userEmail}`} 
                className="text-white hover:text-[#ccff00] font-medium text-sm sm:text-base transition-colors break-all"
              >
                {userEmail}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-gray-200 transition-colors cursor-pointer"
              >
                {copiedEmail ? "✓ Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <a
              href="https://wa.me/923250943323"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#25D366] hover:text-white transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-white/10"
            >
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/abul-hassan1/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#0A66C2] hover:text-white transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-white/10 text-gray-300 hover:border-[#0A66C2]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Abulhassan-pro"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#ccff00] hover:text-black transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-white/10 text-gray-300 hover:border-[#ccff00]"
            >
              GitHub
            </a>
            <a
              href={`mailto:${userEmail}`}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-white/10 text-gray-300"
            >
              Email
            </a>
          </div>
        </div>

        {/* Right Column: High-Conversion Form */}
        <div className="w-full lg:w-7/12 flex flex-col justify-start">
          <div className="bg-black/80 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
            
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
              Send a Project Proposal
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6">
              Fill out the details below and I will review your requirements and respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Name input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-colors text-sm"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-colors text-sm"
                />
              </div>

              {/* Service Interest Select */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                  What service do you need?
                </label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full bg-[#151515] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] transition-colors text-sm cursor-pointer"
                >
                  <option value="Meta Ads & Performance Marketing">Meta Ads & Performance Marketing (4.5x ROAS)</option>
                  <option value="Graphic Design & Brand Identity">Graphic Design & Brand Identity (Photoshop)</option>
                  <option value="Social Media Marketing (SMM)">Social Media Marketing & Content Strategy</option>
                  <option value="Full Customer Acquisition Funnel">Full Customer Acquisition Funnel</option>
                  <option value="AI Visuals & Creative Automation">AI Visuals & Creative Automation</option>
                  <option value="Other Consultation">Other Consultation</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                  Project Details & Goals *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your business, target audience, budget, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-colors resize-none text-sm"
                />
              </div>

              {/* Status feedback */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-sm font-semibold flex items-center gap-2">
                  <span>✓</span>
                  <span>Thank you! Your proposal was successfully sent to Abul Hassan's inbox via EmailJS. Expect a reply within 24 hours.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs sm:text-sm space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-rose-400">
                    <span>⚠</span>
                    <span>Submission Notice</span>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {errorMessage || 'There was a temporary issue sending your message.'} You can also connect directly with Abul Hassan:
                  </p>
                  <div className="flex gap-2 pt-1">
                    <a
                      href="https://wa.me/923250943323?text=Hi%20Abul%20Hassan%2C%20I%20tried%20sending%20a%20proposal%20through%20your%20portfolio%20contact%20form."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
                    >
                      Chat on WhatsApp
                    </a>
                    <a
                      href={`mailto:${userEmail}?subject=Project%20Inquiry%20from%20Portfolio&body=Name:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}%0AService:%20${encodeURIComponent(formData.serviceInterest)}%0A%0AMessage:%0A${encodeURIComponent(formData.message)}`}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
                    >
                      Send Direct Email
                    </a>
                  </div>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-full bg-[#ccff00] text-black font-black text-sm md:text-base hover:bg-[#b3e600] transition-all cursor-pointer shadow-lg uppercase tracking-wider flex items-center justify-center gap-2 mt-1 disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-black" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending Proposal...</span>
                  </>
                ) : (
                  <span>Send Project Request →</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
