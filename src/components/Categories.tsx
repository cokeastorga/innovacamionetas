import { useState } from 'react';
import './Categories.css';

interface Product {
  name: string;
  icon: string;
}

interface Category {
  id: string;
  title: string;
  icon: string;
  color: string;
  products: Product[];
}

const categories: Category[] = [
  {
    id: 'motor',
    title: 'Motor & Distribución',
    icon: '⚙️',
    color: '#E85D26',
    products: [
      { name: 'Kit de Distribución', icon: '🔧' },
      { name: 'Inyectores', icon: '💉' },
      { name: 'Correa de Accesorios', icon: '🔗' },
      { name: 'Bomba de Agua', icon: '💧' },
    ],
  },
  {
    id: 'frenos',
    title: 'Sistema de Frenos',
    icon: '🛑',
    color: '#DC2626',
    products: [
      { name: 'Discos de Freno', icon: '⭕' },
      { name: 'Pastillas de Freno', icon: '📋' },
      { name: 'Líquido de Freno', icon: '🧪' },
    ],
  },
  {
    id: 'filtros',
    title: 'Filtros & Lubricantes',
    icon: '🛢️',
    color: '#8BC53F',
    products: [
      { name: 'Filtro de Aire', icon: '💨' },
      { name: 'Filtro de Petróleo', icon: '⛽' },
      { name: 'Filtro de Aceite', icon: '🛢️' },
      { name: 'Aceite 5W-30 7Lts', icon: '🫗' },
      { name: 'Refrigerante 50/50', icon: '❄️' },
      { name: 'Desengrasante 5 Lts', icon: '🧴' },
    ],
  },
  {
    id: 'iluminacion',
    title: 'Iluminación',
    icon: '💡',
    color: '#F59E0B',
    products: [
      { name: 'Focos Delanteros', icon: '🔦' },
      { name: 'Focos Traseros', icon: '🚨' },
    ],
  },
  {
    id: 'carroceria',
    title: 'Carrocería & Exterior',
    icon: '🚗',
    color: '#6366F1',
    products: [
      { name: 'Parachoques', icon: '🛡️' },
      { name: 'Capot', icon: '🏎️' },
      { name: 'Radiadores', icon: '🌡️' },
    ],
  },
  {
    id: 'transmision',
    title: 'Transmisión & Dirección',
    icon: '🔩',
    color: '#14B8A6',
    products: [
      { name: 'Kit de Embrague', icon: '⚡' },
      { name: 'Cremalleras de Dirección', icon: '🎯' },
      { name: 'Homocinéticas', icon: '🔄' },
    ],
  },
  {
    id: 'electrico',
    title: 'Eléctrico & Energía',
    icon: '🔋',
    color: '#3B82F6',
    products: [
      { name: 'Baterías', icon: '🔋' },
    ],
  },
];

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="categories section" id="productos">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Catálogo</span>
          <h2 className="section-title">
            Nuestros <span>Productos</span>
          </h2>
          <div className="divider-line" />
          <p className="section-subtitle">
            Amplio stock de repuestos genuinos y alternativos para todas las marcas de camionetas
          </p>
        </div>

        <div className="categories__grid">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`categories__card ${activeCategory === cat.id ? 'categories__card--active' : ''}`}
              onMouseEnter={() => setActiveCategory(cat.id)}
              onMouseLeave={() => setActiveCategory(null)}
              style={{ '--cat-color': cat.color } as React.CSSProperties}
            >
              <div className="categories__card-header">
                <div className="categories__card-icon">
                  <span>{cat.icon}</span>
                </div>
                <h3 className="categories__card-title">{cat.title}</h3>
                <span className="categories__card-count">{cat.products.length} productos</span>
              </div>

              <ul className="categories__product-list">
                {cat.products.map((product) => (
                  <li key={product.name} className="categories__product-item">
                    <span className="categories__product-icon">{product.icon}</span>
                    <span className="categories__product-name">{product.name}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/56968163883?text=Hola%2C%20me%20interesan%20los%20productos%20de%20${encodeURIComponent(cat.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="categories__card-cta"
              >
                Consultar disponibilidad
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <div className="categories__card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
