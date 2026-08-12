import { useState, useEffect, useCallback } from 'react';
import './PromoBanner.css';

const slides = [
  { 
    src: '/img/flayer1.jpeg', 
    title: 'Aceite 5W-30 Wolver 100% Sintético', 
    subtitle: '4 Litros • Máxima Protección del Motor', 
    price: '$29.900',
    tag: 'Oferta Especial'
  },
  { 
    src: '/img/flayer2.jpeg', 
    title: 'Kit Distribución Maxus Gates', 
    subtitle: 'T60 - G10 - V80 - V90 • Calidad Premium', 
    price: 'Consultar Precio',
    tag: 'Stock Garantizado'
  },
  { 
    src: '/img/promo1.jpeg', 
    title: 'Patrocinadores AutoClub Valdivia #97', 
    subtitle: 'Pasión y Rendimiento en Cada Repuesto', 
    price: 'Motorsport Valdivia',
    tag: 'Auspicio Oficial'
  },
  { 
    src: '/img/promo2.jpeg', 
    title: 'Repuestos para Camionetas que Exigen Más', 
    subtitle: 'Av. Ramón Picarte 2307 & San Martín 492', 
    price: 'Valdivia',
    tag: 'Innova Camionetas'
  },
];

export default function PromoBanner() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section className="promo section" id="promociones">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">🔥 Ofertas & Novedades</span>
          <h2 className="section-title">
            Promociones <span>Destacadas</span>
          </h2>
          <div className="divider-line" />
          <p className="section-subtitle">
            Repuestos garantizados con precios especiales y despacho a todo Chile
          </p>
        </div>

        <div
          className="promo__carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="promo__track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {slides.map((slide, i) => (
              <div className="promo__slide" key={i}>
                <div className="promo__slide-bg" style={{ backgroundImage: `url(${slide.src})` }} />
                <div className="promo__slide-wrapper">
                  <div className="promo__img-container">
                    <img src={slide.src} alt={slide.title} className="promo__img" />
                  </div>
                  <div className="promo__content-overlay">
                    <span className="promo__badge">{slide.tag}</span>
                    <h3 className="promo__slide-title">{slide.title}</h3>
                    <p className="promo__slide-subtitle">{slide.subtitle}</p>
                    <a
                      href={`https://wa.me/56961546709?text=Hola%2C%20quisiera%20consultar%20por%3A%20${encodeURIComponent(slide.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary promo__slide-btn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="promo__arrow promo__arrow--prev" onClick={prev} aria-label="Anterior" id="promo-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="promo__arrow promo__arrow--next" onClick={next} aria-label="Siguiente" id="promo-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="promo__dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`promo__dot ${i === current ? 'promo__dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Ir a slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="promo__note">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          <span>Precios y stock sujetos a disponibilidad. Despachos rápidos a todo el país.</span>
        </div>
      </div>
    </section>
  );
}
