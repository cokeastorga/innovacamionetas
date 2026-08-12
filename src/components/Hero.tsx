import './Hero.css';

const mainTruckModels = [
  { brand: 'MAXUS', model: 'T60 / T90 / V80', tag: 'Principal', icon: '🚙' },
  { brand: 'TOYOTA', model: 'Hilux', tag: 'Destacado', icon: '🛻' },
  { brand: 'NISSAN', model: 'NP300', tag: 'Destacado', icon: '🛻' },
  { brand: 'MITSUBISHI', model: 'L200', tag: 'Destacado', icon: '🛻' },
  { brand: 'VOLKSWAGEN', model: 'Amarok', tag: 'Nuevo', icon: '🛻' },
  { brand: 'JAC', model: 'T8 / T9 / Sunray', tag: 'Compatible', icon: '🛻' },
  { brand: 'JMC', model: 'Vigus / Avenue', tag: 'Compatible', icon: '🛻' },
  { brand: 'SSANGYONG', model: 'Musso / Korando', tag: 'Compatible', icon: '🛻' },
  { brand: 'CHANGAN', model: 'Hunter', tag: 'Compatible', icon: '🛻' },
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg">
        <img src="/img/hero-bg.png" alt="" className="hero__bg-img" />
        <div className="hero__bg-overlay" />
      </div>

      <div className="hero__content container">
        <div className="hero__center-badge-container">
          <div className="hero__badge hero__badge--large">
            <span className="hero__badge-dot" />
            ESPECIALISTAS EN REPUESTOS PARA CAMIONETAS
          </div>
        </div>

        <div className="hero__text">
          <h1 className="hero__title">
            Repuestos de <span className="hero__title-accent">Calidad</span> para
            Camionetas que <span className="hero__title-green">Exigen Más</span>
          </h1>
          <p className="hero__subtitle">
            Distribuidor especializado en <strong>Maxus</strong> con todos sus modelos.
          </p>
          <div className="hero__cta-group">
            <a
              href="https://wa.me/56961546709?text=Hola%2C%20quiero%20cotizar%20un%20repuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hero__cta"
              id="hero-whatsapp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotizar por WhatsApp
            </a>
            <a href="#productos" className="btn btn-outline hero__cta" id="hero-products">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              Ver Productos
            </a>
          </div>

          <div className="hero__models-section">
            <span className="hero__models-title">Modelos Principales:</span>
            <div className="hero__models-grid">
              {mainTruckModels.map((item) => (
                <a
                  key={item.brand}
                  href={`https://wa.me/56961546709?text=Hola%2C%20necesito%20repuestos%20para%20${encodeURIComponent(item.brand)}%20${encodeURIComponent(item.model)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__model-card"
                >
                  <span className="hero__model-icon">{item.icon}</span>
                  <div className="hero__model-info">
                    <span className="hero__model-brand">{item.brand}</span>
                    <span className="hero__model-name">{item.model}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__badge-float hero__badge-envios">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            Envíos a todo Chile
          </div>
          <div className="hero__badge-float hero__badge-stock">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Stock Permanente
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Descubre más</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}

