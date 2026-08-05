import './Racing.css';

export default function Racing() {
  return (
    <section className="racing section" id="racing">
      <div className="container">
        <div className="racing__content">
          <div className="racing__gallery">
            <div className="racing__gallery-main">
              <img src="/img/promo1.jpeg" alt="Auto de carreras patrocinado por Innova Camionetas — Vista frontal" />
              <div className="racing__gallery-overlay">
                <span className="racing__gallery-badge">#97</span>
              </div>
            </div>
            <div className="racing__gallery-secondary">
              <img src="/img/promo2.jpeg" alt="Auto de carreras patrocinado por Innova Camionetas — Vista trasera" />
            </div>
          </div>

          <div className="racing__text">
            <span className="section-tag">🏁 Motorsport</span>
            <h2 className="racing__title">
              Pasión por el <span className="racing__title-accent">Rendimiento</span>
            </h2>
            <p className="racing__desc">
              En Innova Camionetas no solo vendemos repuestos — vivimos la pasión automotriz. 
              Somos orgullosos patrocinadores del <strong>AutoClub Valdivia</strong>, apoyando 
              al equipo #97 en competencias regionales.
            </p>
            <p className="racing__desc">
              Esta misma pasión por la calidad y el rendimiento es lo que ponemos en cada repuesto 
              que vendemos para tu camioneta.
            </p>

            <div className="racing__stats">
              <div className="racing__stat">
                <span className="racing__stat-number">2</span>
                <span className="racing__stat-label">Sucursales en Valdivia</span>
              </div>
              <div className="racing__stat">
                <span className="racing__stat-number">9+</span>
                <span className="racing__stat-label">Marcas Compatibles</span>
              </div>
              <div className="racing__stat">
                <span className="racing__stat-number">24+</span>
                <span className="racing__stat-label">Tipos de Repuestos</span>
              </div>
            </div>

            <a
              href="https://wa.me/56968163883?text=Hola%2C%20quiero%20cotizar%20un%20repuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotiza tu Repuesto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
