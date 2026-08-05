import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: '',
    model: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${formData.name}.%0ATelefono: ${formData.phone}%0AMarca: ${formData.brand}%0AModelo: ${formData.model}%0AMensaje: ${formData.message}`;
    window.open(`https://wa.me/56968163883?text=${text}`, '_blank');
  };

  return (
    <section className="contact section" id="contacto">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">💬 Hablemos</span>
          <h2 className="section-title">
            Contáctanos <span>Ahora</span>
          </h2>
          <div className="divider-line" />
          <p className="section-subtitle">
            Cotiza tus repuestos de forma rápida y personalizada por nuestros canales directos
          </p>
        </div>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
            <div className="contact__form-group">
              <label htmlFor="contact-name" className="contact__label">Nombre</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                required
                className="contact__input"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-phone" className="contact__label">Teléfono</label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+56 9 XXXX XXXX"
                required
                className="contact__input"
              />
            </div>

            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="contact-brand" className="contact__label">Marca</label>
                <select
                  id="contact-brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                  className="contact__input contact__select"
                >
                  <option value="">Seleccionar marca</option>
                  <option value="Maxus">Maxus</option>
                  <option value="Toyota Hilux">Toyota Hilux</option>
                  <option value="Nissan NP300">Nissan NP300</option>
                  <option value="Nissan Terrano">Nissan Terrano</option>
                  <option value="Mitsubishi L200">Mitsubishi L200</option>
                  <option value="JAC">JAC</option>
                  <option value="JMC">JMC</option>
                  <option value="Greatwall Poer">Greatwall Poer</option>
                  <option value="DFSK">DFSK</option>
                  <option value="Otra">Otra</option>
                </select>
              </div>

              <div className="contact__form-group">
                <label htmlFor="contact-model" className="contact__label">Modelo / Año</label>
                <input
                  type="text"
                  id="contact-model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="Ej: T60 2022"
                  className="contact__input"
                />
              </div>
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-message" className="contact__label">Mensaje</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="¿Qué repuesto necesitas?"
                rows={4}
                required
                className="contact__input contact__textarea"
              />
            </div>

            <button type="submit" className="btn btn-primary contact__submit" id="contact-submit">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enviar por WhatsApp
            </button>
          </form>

          <div className="contact__info">
            {/* WhatsApp */}
            <a
              href="https://wa.me/56968163883"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-card contact__info-card--clickable"
            >
              <div className="contact__info-icon contact__info-icon--wa">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h4>WhatsApp Directo</h4>
              <p>+56 9 6816 3883</p>
              <span className="contact__info-note">Respuesta Inmediata →</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-card contact__info-card--clickable"
            >
              <div className="contact__info-icon contact__info-icon--ig">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <h4>Instagram</h4>
              <p>@innovacamionetas</p>
              <span className="contact__info-note">Síguenos en Instagram →</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-card contact__info-card--clickable"
            >
              <div className="contact__info-icon contact__info-icon--fb">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h4>Facebook</h4>
              <p>Innova Camionetas Valdivia</p>
              <span className="contact__info-note">Únete a nuestra página →</span>
            </a>

            {/* Horarios */}
            <div className="contact__info-card">
              <div className="contact__info-icon contact__info-icon--time">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h4>Horario de Atención</h4>
              <p>Lun - Vie: 9:00 — 18:00 hrs</p>
              <p>Sábados: 9:00 — 14:00 hrs</p>
              <span className="contact__info-note">Valdivia, Región de Los Ríos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
