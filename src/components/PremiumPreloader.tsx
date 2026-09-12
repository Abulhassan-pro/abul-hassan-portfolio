import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface PremiumPreloaderProps {
  onComplete: () => void;
  brandName?: string;
}

export default function PremiumPreloader({
  onComplete,
  brandName = "ABUL HASSAN"
}: PremiumPreloaderProps) {
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1800; // 1.8 seconds smooth luxury timing

    const frame = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(1, elapsed / duration);
      
      // Luxury ease-out progression curve
      const easedProgress = 1 - Math.pow(1 - rawProgress, 2.5);
      const currentVal = Math.floor(easedProgress * 100);

      setPercent(currentVal);

      if (rawProgress < 1) {
        requestAnimationFrame(frame);
      } else {
        setPercent(100);
        setTimeout(() => {
          onComplete();
        }, 250);
      }
    };

    const animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  // Micro status indicator based on percentage
  const getStatusText = () => {
    if (percent < 30) return "INITIALIZING ENVIRONMENT";
    if (percent < 70) return "CURATING WORK & ASSETS";
    if (percent < 100) return "FINALIZING DISPLAY";
    return "WELCOME";
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%",
        transition: { 
          duration: 0.85, 
          ease: [0.76, 0, 0.24, 1] // Apple / Luxury editorial slide curtain curve
        } 
      }}
      className="fixed inset-0 z-[100] flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-[#08080a] text-[#ededed] select-none overflow-hidden"
    >
      {/* Subtle architectural ambient gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 65%)"
        }}
      />

      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between w-full text-[11px] sm:text-xs font-mono tracking-widest text-zinc-400 uppercase">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
          <span className="font-bold text-white tracking-wider">{brandName}</span>
        </div>
        <div className="hidden sm:block text-zinc-400">
          EDITION 2026 // PORTFOLIO
        </div>
        <div>
          ARCHIVE
        </div>
      </div>

      {/* Centerpiece: Brand Monogram & High-Precision Counter */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto w-full max-w-xl mx-auto px-4">
        
        {/* Understated Minimalist Crest */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center mb-8 bg-white/[0.02]"
        >
          <span className="font-display font-semibold text-xs tracking-wider text-white">
            AH
          </span>
        </motion.div>

        {/* Brand Display Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-[0.2em] text-white uppercase mb-2"
        >
          {brandName}
        </motion.h1>

        {/* Discipline Sub-label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-zinc-400 font-sans mb-10"
        >
          Performance Marketing • Creative Direction
        </motion.p>

        {/* Large Elegant Percentage Readout */}
        <div className="font-mono text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-6 tabular-nums">
          {percent < 10 ? `0${percent}` : percent}
          <span className="text-xl sm:text-2xl font-light text-[#ccff00] ml-1">%</span>
        </div>

        {/* Hairline Luxury Progress Bar */}
        <div className="w-full max-w-xs sm:max-w-sm h-[1.5px] bg-white/10 relative overflow-hidden rounded-full mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-white via-zinc-200 to-[#ccff00]"
            style={{ width: `${percent}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Dynamic Micro Status */}
        <div className="text-[10px] sm:text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
          {getStatusText()}
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="relative z-10 flex items-center justify-between w-full text-[10px] sm:text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
        <div>
          LATENCY 0.08MS // READY
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-zinc-400">STATUS:</span>
          <span className="text-zinc-300">
            {percent === 100 ? "UNLOCKED" : "LOADING..."}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
