import React from 'react';
import { motion } from 'motion/react';

export default function HollywoodCinemaAtmosphere() {
  // Floating Cinematic Embers
  const embers = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    left: `${(i * 7.5 + 3) % 96}%`,
    duration: 8 + (i % 6) * 3,
    delay: (i % 5) * 1.8,
    size: 2 + (i % 4) * 2,
    opacity: 0.25 + (i % 3) * 0.2,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      
      {/* Floating Hollywood Bokeh Dust & Gold/Lime Embers */}
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          className="absolute rounded-full bg-[#ccff00] pointer-events-none"
          style={{
            left: ember.left,
            bottom: "-20px",
            width: ember.size,
            height: ember.size,
            boxShadow: `0 0 ${ember.size * 2}px rgba(204, 255, 0, 0.4)`,
          }}
          animate={{
            y: [0, -1100],
            x: [0, (ember.id % 2 === 0 ? 20 : -20), 0],
            opacity: [0, ember.opacity * 0.5, ember.opacity * 0.5, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: ember.duration + 4,
            repeat: Infinity,
            delay: ember.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle Anamorphic Studio Light Sweep */}
      <div className="absolute top-1/4 -left-96 w-[1000px] h-[1.5px] bg-gradient-to-r from-transparent via-[#ccff00]/25 to-transparent blur-[1px] animate-anamorphic-flare pointer-events-none" />

    </div>
  );
}
