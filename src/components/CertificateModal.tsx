import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, ShieldCheck, CheckCircle2, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Certification } from '../types';

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export default function CertificateModal({
  certification,
  onClose,
}: CertificateModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certification) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certification, onClose]);

  const handleCopyId = () => {
    if (!certification?.credentialId) return;
    navigator.clipboard.writeText(certification.credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!certification) return null;

  return (
    <AnimatePresence>
      <div
        id="certificate-modal-container"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-cert-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#0A0A0A] border border-red-900/40 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-6 sm:p-10 my-auto z-10 overflow-hidden"
        >
          {/* Subtle Ambient Red Light Node */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            id="close-cert-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-zinc-900/90 hover:bg-red-600 border border-white/10 hover:border-red-500 text-zinc-300 hover:text-white flex items-center justify-center transition-all"
            aria-label="Close Certificate Modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header Icon + Badge */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-red-950/50 border border-red-800/40 flex items-center justify-center text-red-500 shadow-[0_0_20px_rgba(220,38,38,0.25)]">
              <Award className="w-8 h-8" />
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
              <ShieldCheck className="w-4 h-4" />
              {certification.status}
            </span>
          </div>

          {/* Title & Organization */}
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 font-display">
              OFFICIAL CREDENTIAL
            </span>
            <h2
              id="modal-cert-title"
              className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight uppercase mt-1"
            >
              {certification.title}
            </h2>
            <p className="text-sm font-semibold text-zinc-300 mt-1 flex items-center gap-2">
              <span>{certification.issuer}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400 font-normal">{certification.date}</span>
            </p>
          </div>

          {/* Description */}
          <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 mb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {certification.description}
          </div>

          {/* Covered Skills */}
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-display mb-3">
              VALIDATED COMPETENCIES & MODULES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {certification.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-2.5 rounded-lg bg-zinc-950/70 border border-white/5 flex items-center gap-2.5 text-xs text-zinc-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Credential ID and Copy Action */}
          {certification.credentialId && (
            <div className="p-4 rounded-xl bg-zinc-950/90 border border-zinc-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 block">
                  VERIFICATION IDENTIFIER
                </span>
                <span className="font-mono text-xs font-bold text-white tracking-wider">
                  {certification.credentialId}
                </span>
              </div>
              <button
                onClick={handleCopyId}
                className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-200 flex items-center gap-1.5 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy ID</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Footer note */}
          <div className="pt-6 mt-6 border-t border-zinc-900 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-display text-xs font-bold uppercase tracking-wider border border-zinc-800 transition-all"
            >
              CLOSE
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
