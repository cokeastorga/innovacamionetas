import { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFading(true), 200);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 700);
          return 100;
        }
        // Smooth progressive increment
        const diff = Math.random() * 25 + 15;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div className={`loading-screen ${isFading ? 'loading-screen--fade-out' : ''}`}>
      <div className="loading-screen__bg-glow" />
      <div className="loading-screen__content">
        <div className="loading-screen__logo-container">
          <img src="/img/logo.png" alt="Innova Camionetas" className="loading-screen__logo" />
          <div className="loading-screen__logo-pulse" />
        </div>

        <div className="loading-screen__badge">
          <span className="loading-screen__badge-dot" />
          Cargando Catálogo de Repuestos...
        </div>

        <div className="loading-screen__bar-wrapper">
          <div className="loading-screen__bar" style={{ width: `${progress}%` }} />
        </div>

        <div className="loading-screen__meta">
          <span className="loading-screen__percent">{Math.round(progress)}%</span>
          <span className="loading-screen__tagline">Valdivia • Chile</span>
        </div>
      </div>
    </div>
  );
}
