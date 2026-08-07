import { useState, useEffect, useRef } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [lettersRevealed, setLettersRevealed] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const brandName = 'INNOVA';
  const subtitle = 'CAMIONETAS';

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      decay: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = ['#E85D26', '#F07A4A', '#8BC53F', '#A0D45E', '#FFFFFF'];

    const spawnParticle = () => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2.5 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
        decay: Math.random() * 0.003 + 0.001,
        color,
      });
    };

    // Initial particles
    for (let i = 0; i < 80; i++) spawnParticle();

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          spawnParticle();
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        grd.addColorStop(0, p.color);
        grd.addColorStop(1, 'transparent');
        ctx.fillStyle = grd;
        ctx.globalAlpha = p.alpha * 0.3;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Letter reveal animation
  useEffect(() => {
    const totalLetters = brandName.length;
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setLettersRevealed(count);
      if (count >= totalLetters) clearInterval(interval);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFading(true), 500);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 1200);
          return 100;
        }
        const diff = Math.random() * 6 + 4;
        return Math.min(prev + diff, 100);
      });
    }, 250);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div className={`loading-screen ${isFading ? 'loading-screen--fade-out' : ''}`}>
      <canvas ref={canvasRef} className="loading-screen__particles" />

      {/* Ambient glow orbs */}
      <div className="loading-screen__orb loading-screen__orb--primary" />
      <div className="loading-screen__orb loading-screen__orb--accent" />
      <div className="loading-screen__orb loading-screen__orb--warm" />

      {/* Scan lines overlay */}
      <div className="loading-screen__scanlines" />

      <div className="loading-screen__content">
        {/* 3D Letter Animation */}
        <div className="loading-screen__letters-stage">
          <div className="loading-screen__letters-row">
            {brandName.split('').map((letter, i) => (
              <span
                key={i}
                className={`loading-screen__letter ${
                  i < lettersRevealed ? 'loading-screen__letter--visible' : ''
                }`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <span className="loading-screen__letter-shadow">{letter}</span>
                <span className="loading-screen__letter-face">{letter}</span>
                <span className="loading-screen__letter-highlight">{letter}</span>
              </span>
            ))}
          </div>

          {/* Subtitle with delayed entrance */}
          <div
            className={`loading-screen__subtitle ${
              lettersRevealed >= brandName.length ? 'loading-screen__subtitle--visible' : ''
            }`}
          >
            {subtitle.split('').map((letter, i) => (
              <span
                key={i}
                className="loading-screen__subtitle-char"
                style={{ animationDelay: `${i * 0.05 + 0.3}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Glowing separator line */}
        <div className="loading-screen__separator" />

        {/* Status badge */}
        <div className="loading-screen__badge">
          <span className="loading-screen__badge-dot" />
          <span className="loading-screen__badge-text">Cargando Catálogo de Repuestos</span>
        </div>

        {/* Progress bar */}
        <div className="loading-screen__bar-wrapper">
          <div className="loading-screen__bar" style={{ width: `${progress}%` }}>
            <div className="loading-screen__bar-glow" />
          </div>
        </div>

        {/* Meta info */}
        <div className="loading-screen__meta">
          <span className="loading-screen__percent">{Math.round(progress)}%</span>
          <span className="loading-screen__tagline">Valdivia • Chile</span>
        </div>
      </div>
    </div>
  );
}
