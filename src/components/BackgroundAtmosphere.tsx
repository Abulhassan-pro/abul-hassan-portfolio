import { useEffect, useRef } from 'react';

/**
 * BackgroundAtmosphere
 * Renders a lightweight, high-performance HTML5 Canvas with subtle smoky red particles,
 * soft atmospheric red radial gradients, and subtle noise.
 * Pauses automatically if page is hidden, respects prefers-reduced-motion.
 */
export default function BackgroundAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle smoky red floating particles (subtle, elegant, non-intrusive)
    const particleCount = prefersReducedMotion ? 12 : 28;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -Math.random() * 0.35 - 0.1,
      alpha: Math.random() * 0.25 + 0.08,
      maxAlpha: Math.random() * 0.3 + 0.1,
      fadeSpeed: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
    }));

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !prefersReducedMotion) {
        lastTime = performance.now();
        render(lastTime);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let lastTime = performance.now();

    const render = (time: number) => {
      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);

      // Render subtle red smoky particles
      for (const p of particles) {
        if (!prefersReducedMotion) {
          p.x += p.speedX;
          p.y += p.speedY;
          p.alpha += p.fadeSpeed;

          if (p.alpha > p.maxAlpha || p.alpha < 0.04) {
            p.fadeSpeed = -p.fadeSpeed;
          }

          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${Math.max(0, p.alpha)})`;
        ctx.shadowColor = 'rgba(220, 38, 38, 0.4)';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render(lastTime);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div 
      id="background-atmosphere"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#050505]"
      aria-hidden="true"
    >
      {/* Deep atmospheric ambient lighting nodes */}
      <div 
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full opacity-25 blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(185, 28, 28, 0.4) 0%, rgba(127, 29, 29, 0.15) 50%, transparent 80%)'
        }}
      />
      
      <div 
        className="absolute top-[40%] -right-[15%] w-[650px] h-[650px] rounded-full opacity-15 blur-[160px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, rgba(153, 27, 27, 0.1) 60%, transparent 80%)'
        }}
      />

      <div 
        className="absolute bottom-[10%] -left-[10%] w-[700px] h-[700px] rounded-full opacity-15 blur-[170px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(153, 27, 27, 0.25) 0%, rgba(90, 10, 10, 0.08) 60%, transparent 80%)'
        }}
      />

      {/* Floating Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />

      {/* Subtle luxury grain texture */}
      <div className="absolute inset-0 grain-overlay opacity-40 mix-blend-screen" />
    </div>
  );
}
