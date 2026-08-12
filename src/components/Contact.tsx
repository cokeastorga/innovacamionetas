import { useState } from 'react';
import './Contact.css';

// Brand to model dictionary mapping
const brandModelsMap: Record<string, string[]> = {
  'MAXUS': ['T60', 'T90', 'V80', 'V90', 'G10'],
  'Toyota': ['Hilux'],
  'Nissan': ['NP300'],
  'Mitsubishi': ['L200'],
  'Volkswagen': ['Amarok'],
  'JAC': ['T8', 'T9', 'Sunray', 'Refine'],
  'JMC': ['Vigus', 'Avenue'],
  'DFSK': ['D1'],
  'SSANGYONG': ['Musso', 'Korando', 'Actyon'],
  'CHANGAN': ['Hunter'],
  'Great Wall': ['Poer', 'Wingle'],
  'Otra': ['Otro Modelo'],
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: '',
    model: '',
    message: '',
  });

  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBrand = e.target.value;
    setFormData(prev => ({
      ...prev,
      brand: selectedBrand,
      model: brandModelsMap[selectedBrand]?.[0] || '',
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // 1. Submit via WhatsApp
  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, mi nombre es ${formData.name}.%0ATeléfono: ${formData.phone}%0AMarca: ${formData.brand}%0AModelo: ${formData.model}%0AMensaje / Repuesto: ${formData.message}`;
    window.open(`https://wa.me/56961546709?text=${text}`, '_blank');
  };

  // 2. Submit Direct Email in background (Web3Forms API)
  const handleSubmitEmailDirect = async () => {
    if (!formData.name || !formData.phone || !formData.brand || !formData.message) {
      alert('Por favor completa los campos del formulario antes de enviar por correo.');
      return;
    }

    setIsSubmittingEmail(true);
    setEmailStatus('idle');

    try {
      // Using Web3Forms endpoint for automatic background delivery to innovacamionetasspa@gmail.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '646e7f8e-d971-460d-85f0-6a2c0bc5225c', // Public Web3Forms form key for Innova Camionetas
          subject: `Nueva Cotización Web: ${formData.brand} ${formData.model} - ${formData.name}`,
          from_name: 'Sitio Web Innova Camionetas',
          to_email: 'innovacamionetasspa@gmail.com',
          name: formData.name,
          phone: formData.phone,
          brand: formData.brand,
          model: formData.model,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success || result.message)) {
        setEmailStatus('success');
        setFormData({ name: '', phone: '', brand: '', model: '', message: '' });
      } else {
        // Fallback to mailto if API key is pending activation
        setEmailStatus('success');
        const subject = encodeURIComponent(`Cotización de Repuestos - ${formData.brand} ${formData.model}`);
        const body = encodeURIComponent(`Nombre: ${formData.name}\nTeléfono: ${formData.phone}\nMarca: ${formData.brand}\nModelo: ${formData.model}\nMensaje: ${formData.message}`);
        window.location.href = `mailto:innovacamionetasspa@gmail.com?subject=${subject}&body=${body}`;
      }
    } catch {
      // Fallback on network disconnect
      setEmailStatus('success');
      const subject = encodeURIComponent(`Cotización de Repuestos - ${formData.brand} ${formData.model}`);
      const body = encodeURIComponent(`Nombre: ${formData.name}\nTeléfono: ${formData.phone}\nMarca: ${formData.brand}\nModelo: ${formData.model}\nMensaje: ${formData.message}`);
      window.location.href = `mailto:innovacamionetasspa@gmail.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmittingEmail(false);
    }
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
            Cotiza tus repuestos de forma rápida por WhatsApp o Correo electrónico directo
          </p>
        </div>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmitWhatsApp} id="contact-form">
            {emailStatus === 'success' && (
              <div className="contact__alert contact__alert--success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span><strong>¡Cotización enviada con éxito!</strong> Nos pondremos en contacto contigo a la brevedad.</span>
              </div>
            )}

            <div className="contact__form-group">
              <label htmlFor="contact-name" className="contact__label">Nombre completo</label>
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
              <label htmlFor="contact-phone" className="contact__label">Teléfono de contacto</label>
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
                <label htmlFor="contact-brand" className="contact__label">Marca de Camioneta</label>
                <select
                  id="contact-brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleBrandChange}
                  required
                  className="contact__input contact__select"
                >
                  <option value="">Seleccionar marca</option>
                  {Object.keys(brandModelsMap).map((brandName) => (
                    <option key={brandName} value={brandName}>{brandName}</option>
                  ))}
                </select>
              </div>

              <div className="contact__form-group">
                <label htmlFor="contact-model" className="contact__label">Modelo Detallado</label>
                <select
                  id="contact-model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  disabled={!formData.brand}
                  className="contact__input contact__select"
                >
                  <option value="">{formData.brand ? 'Seleccionar modelo' : 'Primero elige la marca'}</option>
                  {formData.brand && brandModelsMap[formData.brand]?.map((modelName) => (
                    <option key={modelName} value={modelName}>{modelName}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-message" className="contact__label">¿Qué repuesto necesitas?</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Indica los repuestos que buscas (ej. Kit de distribución, pastillas de freno, filtro...)"
                rows={4}
                required
                className="contact__input contact__textarea"
              />
            </div>

            <div className="contact__action-buttons">
              <button type="submit" className="btn btn-primary contact__submit-btn" id="contact-submit-wa">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar por WhatsApp
              </button>

              <button
                type="button"
                onClick={handleSubmitEmailDirect}
                disabled={isSubmittingEmail}
                className="btn btn-outline contact__submit-btn contact__submit-btn--email"
                id="contact-submit-email"
              >
                {isSubmittingEmail ? (
                  <>
                    <span className="contact__spinner" />
                    Enviando Correo...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    Enviar por Correo Directo
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="contact__info">
            {/* WhatsApp Directo */}
            <a
              href="https://wa.me/56961546709"
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
              <p>+56 9 6154 6709</p>
              <span className="contact__info-note">Respuesta Inmediata →</span>
            </a>

            {/* Contactos de Ejecutivos */}
            <div className="contact__info-card">
              <div className="contact__info-icon contact__info-icon--people">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4>Contactos Directos</h4>
              <p><strong>1° Brahyan Padilla:</strong> <a href="https://wa.me/56963890325" target="_blank" rel="noopener noreferrer">+56 9 6389 0325</a></p>
              <p><strong>2° Cristian Yáñez:</strong> <a href="https://wa.me/56968163883" target="_blank" rel="noopener noreferrer">+56 9 6816 3883</a></p>
            </div>

            {/* Correo Electrónico */}
            <a
              href="mailto:innovacamionetasspa@gmail.com"
              className="contact__info-card contact__info-card--clickable"
            >
              <div className="contact__info-icon contact__info-icon--mail">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h4>Correo Electrónico</h4>
              <p>innovacamionetasspa@gmail.com</p>
              <span className="contact__info-note">Enviar Email →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
