import './Brands.css';

interface Brand {
  name: string;
  models: string[];
  featured?: boolean;
}

const brands: Brand[] = [
  { name: 'MAXUS', models: ['T60', 'T90', 'V80', 'V90', 'G10'], featured: true },
  { name: 'Toyota Hilux', models: ['Hilux'] },
  { name: 'Nissan NP300', models: ['NP300'] },
  { name: 'Nissan Terrano', models: ['Terrano'] },
  { name: 'Mitsubishi L200', models: ['L200'] },
  { name: 'JAC', models: ['T8'] },
  { name: 'JMC', models: ['Vigus'] },
  { name: 'Greatwall Poer', models: ['Poer'] },
  { name: 'DFSK', models: ['Glory'] },
];

export default function Brands() {
  return (
    <section className="brands section" id="marcas">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Compatibilidad</span>
          <h2 className="section-title">
            Marcas <span>Compatibles</span>
          </h2>
          <div className="divider-line" />
          <p className="section-subtitle">
            Trabajamos con las principales marcas de camionetas del mercado chileno
          </p>
        </div>

        {/* Featured brand - Maxus */}
        <div className="brands__featured">
          <div className="brands__featured-content">
            <div className="brands__featured-badge">Marca Principal</div>
            <h3 className="brands__featured-name">MAXUS</h3>
            <p className="brands__featured-desc">
              Somos especialistas en repuestos para toda la línea Maxus. 
              Stock completo para mantener tu camioneta en óptimas condiciones.
            </p>
            <div className="brands__featured-models">
              {['T60', 'T90', 'V80', 'V90', 'G10'].map((model) => (
                <span key={model} className="brands__model-chip">{model}</span>
              ))}
            </div>
            <a
              href="https://wa.me/56968163883?text=Hola%2C%20necesito%20repuestos%20para%20mi%20Maxus"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotizar Repuestos Maxus
            </a>
          </div>
          <div className="brands__featured-visual">
            <div className="brands__featured-ring" />
            <div className="brands__featured-logo-text">MAXUS</div>
          </div>
        </div>

        {/* Other brands grid */}
        <div className="brands__grid">
          {brands.filter(b => !b.featured).map((brand) => (
            <a
              key={brand.name}
              href={`https://wa.me/56968163883?text=Hola%2C%20necesito%20repuestos%20para%20${encodeURIComponent(brand.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="brands__card"
            >
              <div className="brands__card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                </svg>
              </div>
              <span className="brands__card-name">{brand.name}</span>
              <span className="brands__card-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
