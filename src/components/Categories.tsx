import { useState } from 'react';
import './Categories.css';

interface ProductItem {
  name: string;
  image: string;
  desc: string;
}

interface Category {
  id: string;
  title: string;
  svgIcon: React.ReactNode;
  color: string;
  products: ProductItem[];
}

const categories: Category[] = [
  {
    id: 'motor',
    title: 'Motor & Distribución',
    color: '#E85D26',
    svgIcon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
    products: [
      {
        name: 'Kit de Distribución',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
        desc: 'Kit de distribución completo que incluye correa o cadena dentada de alta resistencia, tensores automáticos y poleas de guía.',
      },
      {
        name: 'Empaquetaduras',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
        desc: 'Juegos de empaquetaduras de culata, múltiple de admisión/escape y tapa de válvulas reforzadas para motores turbo diésel.',
      },
      {
        name: 'Correa de Accesorios',
        image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80',
        desc: 'Correas Poly-V estriadas de alta durabilidad para alternador, bomba de dirección y compresor de aire acondicionado.',
      },
      {
        name: 'Bomba de Agua',
        image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
        desc: 'Bomba de agua con rodamiento y sellos cerámicos de alta eficiencia para óptima refrigeración del motor.',
      },
    ],
  },
  {
    id: 'frenos',
    title: 'Sistema de Frenos',
    color: '#DC2626',
    svgIcon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>
      </svg>
    ),
    products: [
      {
        name: 'Discos de Freno',
        image: 'https://images.unsplash.com/photo-1600793575654-910699b5e4d4?auto=format&fit=crop&w=800&q=80',
        desc: 'Discos de freno delanteros y traseros ventilados, fabricados en aleación de hierro nodular para máxima disipación de calor.',
      },
      {
        name: 'Pastillas de Freno',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
        desc: 'Juego de pastillas cerámicas y semimetálicas de bajo nivel de polvo y frenado silencioso de alta fricción.',
      },
      {
        name: 'Bombas de Freno',
        image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
        desc: 'Cilindro maestro de freno con depósito y empacamiento de alta presión para respuesta inmediata.',
      },
      {
        name: 'Balatas',
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80',
        desc: 'Juego de balatas de freno de tambor traseras con compuesto orgánico libre de asbesto.',
      },
      {
        name: 'Líquido de Freno',
        image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
        desc: 'Líquido de freno sintético norma DOT 4 resistente a altas temperaturas y humedad en condiciones severas.',
      },
    ],
  },
  {
    id: 'filtros',
    title: 'Filtros & Lubricantes',
    color: '#8BC53F',
    svgIcon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6M6 8h12l-1 12H7L6 8z"/>
        <line x1="9" y1="12" x2="15" y2="12"/>
      </svg>
    ),
    products: [
      {
        name: 'Aceites',
        image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=800&q=80',
        desc: 'Aceites para motor 5W-30 100% sintéticos especificación ACEA C3 / API SN especiales para filtros DPF diésel.',
      },
      {
        name: 'Refrigerantes',
        image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
        desc: 'Refrigerante anticongelante orgánico OAT formulado para proteger radiadores de aluminio y bombas de agua.',
      },
      {
        name: 'Desengrasante',
        image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80',
        desc: 'Desengrasante concentrado de grado industrial para limpieza de motores, transmisiones y chasis.',
      },
      {
        name: 'Aditivos',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
        desc: 'Aditivos limpiadores de inyectores diésel y tratadores de combustible para restauración de potencia.',
      },
      {
        name: 'Filtro de Aire',
        image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
        desc: 'Filtro de aire celulósico plisado de alta retención para caminos polvorientos y trabajo pesado.',
      },
      {
        name: 'Filtro de Petróleo',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
        desc: 'Filtro de combustible diésel con trampa separadora de agua de alta micrometría para protección de inyectores.',
      },
      {
        name: 'Filtro de Aceite',
        image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
        desc: 'Filtro de aceite blindado giratorio con elemento filtrante sintético y válvula anti-retorno.',
      },
    ],
  },
  {
    id: 'carroceria',
    title: 'Carrocería & Iluminación',
    color: '#6366F1',
    svgIcon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"/>
        <circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
      </svg>
    ),
    products: [
      {
        name: 'Ópticos y Focos',
        image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80',
        desc: 'Focos delanteros halógenos y LED con lente de policarbonato de alta resistencia contra impacto y rayos UV.',
      },
      {
        name: 'Parachoques',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
        desc: 'Parachoques delanteros y traseros reforzados, de calce exacto según modelo y año.',
      },
      {
        name: 'Capot',
        image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
        desc: 'Capot y tapabarros en chapa de acero galvanizada lista para pintura.',
      },
      {
        name: 'Radiadores',
        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
        desc: 'Radiador de aluminio con estanques plásticos de alta densidad e intercoolers de aire para turbo.',
      },
    ],
  },
  {
    id: 'transmision',
    title: 'Transmisión & Dirección',
    color: '#14B8A6',
    svgIcon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    products: [
      {
        name: 'Axiales',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
        desc: 'Axiales de dirección de acero forjado con rótula interna tratada térmicamente.',
      },
      {
        name: 'Terminales',
        image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80',
        desc: 'Terminales de dirección exterior con fuelle guardapolvo de neoprene sellado.',
      },
      {
        name: 'Rótulas',
        image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
        desc: 'Rótulas de suspensión superior e inferior de alta carga para terrenos exigentes.',
      },
      {
        name: 'Bandejas',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
        desc: 'Bandejas de suspensión delantera completas con rótula presensada y bujes vulcanizados.',
      },
      {
        name: 'Homocinéticas',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
        desc: 'Juntas homocinéticas de lado rueda y lado caja con kit de fuelle, abrazaderas y grasa grafitada.',
      },
      {
        name: 'Ejes palier',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
        desc: 'Ejes de transmisión palieres completos para tracción 4x2 y 4x4.',
      },
      {
        name: 'Kit bujes de barra',
        image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80',
        desc: 'Bujes de goma y poliuretano para barra estabilizadora y paquetes de resortes.',
      },
      {
        name: 'Kit de Embrague',
        image: 'https://images.unsplash.com/photo-1600793575654-910699b5e4d4?auto=format&fit=crop&w=800&q=80',
        desc: 'Kit de embrague reforzado que incluye disco de embrague orgánico/cerámico, prensa y rodamiento de empuje.',
      },
      {
        name: 'Cremalleras de Dirección',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
        desc: 'Cremallera de dirección hidráulica y asistida electrónicamente para camionetas de trabajo.',
      },
    ],
  },
  {
    id: 'electrico',
    title: 'Eléctrico & Energía',
    color: '#3B82F6',
    svgIcon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    products: [
      {
        name: 'Ampolletas Halógenas',
        image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80',
        desc: 'Ampolletas halógenas de repuesto estándar y alta visibilidad H4, H7, H11 en 12V.',
      },
      {
        name: 'Luces LED',
        image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80',
        desc: 'Kits de conversión LED Canbus sin error de tablero, con chips CSP de alta intensidad lumínica.',
      },
      {
        name: 'Baterías',
        image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
        desc: 'Baterías de libre mantenimiento reforzadas de 70Ah a 95Ah con alto amperaje de arranque en frío (CCA).',
      },
    ],
  },
];

export default function Categories() {
  const [selectedProduct, setSelectedProduct] = useState<{ category: string; item: ProductItem } | null>(null);

  return (
    <section className="categories section" id="productos">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Catálogo Completo</span>
          <h2 className="section-title">
            Nuestros <span>Productos & Repuestos</span>
          </h2>
          <div className="divider-line" />
          <p className="section-subtitle">
            Haz clic en cualquier repuesto para ver la foto de referencia y cotizar directo por WhatsApp
          </p>
        </div>

        <div className="categories__grid">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="categories__card"
              style={{ '--cat-color': cat.color } as React.CSSProperties}
            >
              <div className="categories__card-header">
                <div className="categories__card-icon">
                  {cat.svgIcon}
                </div>
                <div>
                  <h3 className="categories__card-title">{cat.title}</h3>
                  <span className="categories__card-count">{cat.products.length} ítems disponibles</span>
                </div>
              </div>

              <ul className="categories__product-list">
                {cat.products.map((product) => (
                  <li
                    key={product.name}
                    className="categories__product-item"
                    onClick={() => setSelectedProduct({ category: cat.title, item: product })}
                    title="Haz clic para ver foto de referencia y cotizar"
                  >
                    <span className="categories__product-bullet" />
                    <span className="categories__product-name">{product.name}</span>
                    <svg className="categories__product-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/56961546709?text=Hola%2C%20me%20interesan%20los%20productos%20de%20${encodeURIComponent(cat.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="categories__card-cta"
              >
                Consultar Categoría
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <div className="categories__card-bg-watermark">
                {cat.svgIcon}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal with Individual Photo */}
      {selectedProduct && (
        <div className="cat-modal__backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="cat-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="cat-modal__close" onClick={() => setSelectedProduct(null)} aria-label="Cerrar modal">
              ✕
            </button>
            <div className="cat-modal__header">
              <span className="cat-modal__tag">{selectedProduct.category}</span>
              <h3 className="cat-modal__title">{selectedProduct.item.name}</h3>
            </div>
            
            <div className="cat-modal__img-container">
              <img
                src={selectedProduct.item.image}
                alt={`Repuesto ${selectedProduct.item.name}`}
                className="cat-modal__img"
                onError={(e) => {
                  // Fallback in case of broken image URL
                  (e.target as HTMLImageElement).src = '/img/promo2.jpeg';
                }}
              />
            </div>

            <p className="cat-modal__desc">
              {selectedProduct.item.desc}
            </p>

            <div className="cat-modal__footer">
              <a
                href={`https://wa.me/56961546709?text=Hola%2C%20quisiera%20cotizar%3A%20${encodeURIComponent(selectedProduct.item.name)}%20(Categoría%3A%20${encodeURIComponent(selectedProduct.category)})`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary cat-modal__btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Cotizar este Repuesto por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
