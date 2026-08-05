import './Locations.css';

const locations = [
  {
    id: 'picarte',
    name: 'Sucursal Ramón Picarte',
    address: 'Av. Ramón Picarte 2307, Valdivia',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.6!2d-73.245!3d-39.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ5JzEyLjAiUyA3M8KwMTQnNDIuMCJX!5e0!3m2!1ses!2scl!4v1',
    hasImage: true,
  },
  {
    id: 'sanmartin',
    name: 'Sucursal San Martín',
    address: 'San Martín 492, Valdivia',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.8!2d-73.245!3d-39.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ5JzEyLjAiUyA3M8KwMTQnNDIuMCJX!5e0!3m2!1ses!2scl!4v1',
    hasImage: false,
  },
];

export default function Locations() {
  return (
    <section className="locations section" id="sucursales">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">📍 Ubicaciones</span>
          <h2 className="section-title">
            Nuestras <span>Sucursales</span>
          </h2>
          <div className="divider-line" />
          <p className="section-subtitle">
            Visítanos en nuestras dos sucursales en Valdivia
          </p>
        </div>

        <div className="locations__grid">
          {locations.map((loc) => (
            <div key={loc.id} className="locations__card">
              {loc.hasImage && (
                <div className="locations__card-image">
                  <img src="/img/fachada.jpeg" alt={`Fachada ${loc.name}`} />
                  <div className="locations__card-image-overlay">
                    <span className="locations__card-image-badge">Sucursal Principal</span>
                  </div>
                </div>
              )}

              <div className="locations__card-body">
                <div className="locations__card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>

                <h3 className="locations__card-name">{loc.name}</h3>
                <p className="locations__card-address">{loc.address}</p>

                <div className="locations__card-schedule">
                  <div className="locations__schedule-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <div>
                      <p className="locations__schedule-days">Lunes a Viernes</p>
                      <p className="locations__schedule-hours">9:00 — 18:00</p>
                    </div>
                  </div>
                  <div className="locations__schedule-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <div>
                      <p className="locations__schedule-days">Sábado</p>
                      <p className="locations__schedule-hours">9:00 — 14:00</p>
                    </div>
                  </div>
                </div>

                <div className="locations__card-actions">
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(loc.address)}`}
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
                    href="https://wa.me/56968163883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary locations__btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    Llamar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping banner */}
        <div className="locations__shipping">
          <div className="locations__shipping-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          </div>
          <div className="locations__shipping-text">
            <h4>Envíos a Todo Chile</h4>
            <p>Realizamos envíos de repuestos a todo el territorio nacional con despacho rápido y seguro.</p>
          </div>
          <a
            href="https://wa.me/56968163883?text=Hola%2C%20quiero%20consultar%20por%20envío%20de%20repuestos"
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
