import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

type CursorType = 'default' | 'pointer' | 'view' | 'drag';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  // Position of mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for smooth organic trailing
  const springConfigRing = { damping: 25, stiffness: 260, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfigRing);
  const ringY = useSpring(mouseY, springConfigRing);

  const springConfigDot = { damping: 35, stiffness: 750, mass: 0.1 };
  const dotX = useSpring(mouseX, springConfigDot);
  const dotY = useSpring(mouseY, springConfigDot);

  useEffect(() => {
    // Only enable custom cursor on devices with fine pointer (mouse/trackpad, not touch)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check for explicit custom cursor attributes
      const customCursor = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (customCursor === 'view') {
        setCursorType('view');
        return;
      }
      if (customCursor === 'drag') {
        setCursorType('drag');
        return;
      }
      if (customCursor === 'pointer') {
        setCursorType('pointer');
        return;
      }

      // Check for project cards or media showcases
      if (target.closest('.project-card, [data-project-card]')) {
        setCursorType('view');
        return;
      }

      // Check standard interactive elements
      const isInteractive = Boolean(
        target.closest(
          'a, button, input, textarea, select, [role="button"], label, .cursor-pointer'
        )
      );

      if (isInteractive) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isFinePointer) {
    return null;
  }

  // Ring dimensions and styles according to active state
  let ringSize = 34;
  let ringBorder = 'border-[#ccff00]/60';
  let ringBg = 'bg-transparent';
  let ringScale = isClicking ? 0.82 : 1;

  if (cursorType === 'pointer') {
    ringSize = 54;
    ringBorder = 'border-[#ccff00]';
    ringBg = 'bg-[#ccff00]/15';
    ringScale = isClicking ? 0.88 : 1.1;
  } else if (cursorType === 'view') {
    ringSize = 78;
    ringBorder = 'border-[#ccff00]';
    ringBg = 'bg-[#ccff00]';
    ringScale = isClicking ? 0.92 : 1;
  } else if (cursorType === 'drag') {
    ringSize = 64;
    ringBorder = 'border-[#ccff00]';
    ringBg = 'bg-[#ccff00]/25';
    ringScale = isClicking ? 0.88 : 1;
  }

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Outer Follower Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border pointer-events-none flex items-center justify-center backdrop-blur-[1px] shadow-[0_0_20px_rgba(204,255,0,0.15)] ${ringBorder} ${ringBg}`}
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
        }}
        animate={{
          scale: ringScale,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28,
        }}
      >
        {/* Contextual Label for Project Cards */}
        {cursorType === 'view' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-[10px] font-black text-black tracking-widest uppercase font-mono select-none"
          >
            VIEW
          </motion.span>
        )}

        {cursorType === 'drag' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-[9px] font-bold text-white tracking-wider uppercase font-mono select-none"
          >
            DRAG
          </motion.span>
        )}
      </motion.div>

      {/* Center Sharp Micro-Dot (hidden when in 'view' mode for clean badge presentation) */}
      {cursorType !== 'view' && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#ccff00] pointer-events-none shadow-[0_0_8px_#ccff00]"
          style={{
            x: dotX,
            y: dotY,
            marginLeft: -3,
            marginTop: -3,
          }}
          animate={{
            scale: cursorType === 'pointer' ? 0.5 : 1,
            opacity: cursorType === 'pointer' ? 0.6 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
        />
      )}
    </div>
  );
}
