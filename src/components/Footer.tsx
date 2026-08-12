import './Footer.css';

const quickLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#productos', label: 'Productos' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#promociones', label: 'Promociones' },
  { href: '#racing', label: 'Motorsport' },
  { href: '#sucursales', label: 'Sucursales' },
  { href: '#contacto', label: 'Contacto' },
];

const productLinks = [
  'Motor & Distribución',
  'Sistema de Frenos',
  'Filtros & Lubricantes',
  'Carrocería & Iluminación',
  'Transmisión & Dirección',
  'Eléctrico & Energía',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <a href="#inicio" className="footer__logo">
                <img src="/img/logo.png" alt="Innova Camionetas" />
              </a>
              <p className="footer__brand-desc">
                Distribuidor especializado en repuestos para Maxus, Toyota, Nissan, Mitsubishi, Volkswagen, JAC, JMC, DFSK, SsangYong y Changan.
              </p>
              
              {/* Social Media Bar in Footer */}
              <div className="footer__social">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Innova Camionetas"
                  className="footer__social-btn footer__social-btn--fb"
                  title="Síguenos en Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Innova Camionetas"
                  className="footer__social-btn footer__social-btn--ig"
                  title="Síguenos en Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/56961546709"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Innova Camionetas"
                  className="footer__social-btn footer__social-btn--wa"
                  title="Escríbenos por WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Navegación</h4>
              <ul className="footer__col-links">
                {quickLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="footer__col">
              <h4 className="footer__col-title">Categorías</h4>
              <ul className="footer__col-links">
                {productLinks.map(label => (
                  <li key={label}>
                    <a href="#productos">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Banking Info */}
            <div className="footer__col">
              <h4 className="footer__col-title">Contacto & Empresa</h4>
              <ul className="footer__col-contact">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="footer__wa-icon">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <a href="https://wa.me/56961546709" target="_blank" rel="noopener noreferrer">
                    +56 9 6154 6709
                  </a>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <a href="mailto:innovacamionetasspa@gmail.com">
                    innovacamionetasspa@gmail.com
                  </a>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Sucursal 1: Av. Ramón Picarte 2307, Valdivia</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Sucursal 2: San Martín 492, Valdivia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bank Transfer Details Block */}
          <div className="footer__bank-card">
            <div className="footer__bank-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
              <h4>Datos para Transferencia Bancaria</h4>
            </div>
            <div className="footer__bank-info">
              <p><strong>Razón Social / Empresa:</strong> Innova Camionetas SpA</p>
              <p><strong>Email de comprobantes:</strong> innovacamionetasspa@gmail.com</p>
              <p className="footer__bank-note">Solicita los datos completos de cuenta corriente a nuestros ejecutivos por WhatsApp al realizar tu pedido.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {currentYear} Innova Camionetas. Todos los derechos reservados.</p>
          <p className="footer__bottom-tagline">Especialistas en repuestos para camionetas que exigen más.</p>
        </div>
      </div>
    </footer>
  );
}
