import './Locations.css';

const locations = [
  {
    id: 'sucursal-1',
    badge: 'Sucursal 1',
    name: 'Sucursal Ramón Picarte',
    address: 'Av. Ramón Picarte 2307, Valdivia',
    mapUrl: 'https://www.google.com/maps/search/Av.+Ram%C3%B3n+Picarte+2307,+Valdivia',
    image: '/img/fachada.jpeg',
    phone: '+56 9 6154 6709',
  },
  {
    id: 'sucursal-2',
    badge: 'Sucursal 2',
    name: 'Sucursal San Martín',
    address: 'San Martín 492, Valdivia',
    mapUrl: 'https://www.google.com/maps/search/San+Mart%C3%ADn+492,+Valdivia',
    image: '/img/promo2.jpeg',
    phone: '+56 9 6389 0325',
  },
];

export default function Locations() {
  return (
    <section className="locations section" id="sucursales">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">📍 Ubicaciones en Valdivia</span>
          <h2 className="section-title">
            Nuestras <span>Sucursales</span>
          </h2>
          <div className="divider-line" />
          <p className="section-subtitle">
            Visítanos o contáctanos directamente en nuestras 2 sucursales
          </p>
        </div>

        <div className="locations__grid">
          {locations.map((loc) => (
            <div key={loc.id} className="locations__card">
              <div className="locations__card-image">
                <img src={loc.image} alt={loc.name} />
                <div className="locations__card-image-overlay">
                  <span className="locations__card-image-badge">{loc.badge}</span>
                </div>
              </div>

              <div className="locations__card-body">
                <h3 className="locations__card-name">{loc.name}</h3>
                <p className="locations__card-address">{loc.address}</p>

                <div className="locations__card-schedule">
                  <div className="locations__schedule-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <div>
                      <p className="locations__schedule-days">Lunes a Viernes</p>
                      <p className="locations__schedule-hours">9:00 — 18:00 hrs</p>
                    </div>
                  </div>
                  <div className="locations__schedule-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <div>
                      <p className="locations__schedule-days">Sábado</p>
                      <p className="locations__schedule-hours">10:00 — 13:00 hrs</p>
                    </div>
                  </div>
                </div>

                <div className="locations__card-actions">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline locations__btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                    </svg>
                    Cómo llegar
                  </a>
                  <a
                    href={`https://wa.me/${loc.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary locations__btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Contactar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping banner */}
        <div className="locations__shipping">
          <div className="locations__shipping-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          </div>
          <div className="locations__shipping-text">
            <h4>Envíos a Todo Chile</h4>
            <p>Realizamos envíos de repuestos a todo el país con despacho rápido desde Valdivia.</p>
          </div>
          <a
            href="https://wa.me/56961546709?text=Hola%2C%20quiero%20consultar%20por%20env%C3%ADo%20de%20repuestos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            Consultar Envío
          </a>
        </div>
      </div>
    </section>
  );
}
