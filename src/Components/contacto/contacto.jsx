import  { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import styles from './Contacto.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setSubmitStatus(null);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className={styles.infoIcon} />,
      title: "Teléfono",
      content: "+1 (555) 123-4567\n+1 (555) 987-6543"
    },
    {
      icon: <Mail className={styles.infoIcon} />,
      title: "Email",
      content: "info@tutienda.com\nventas@tutienda.com"
    },
    {
      icon: <MapPin className={styles.infoIcon} />,
      title: "Dirección",
      content: "Calle Principal 123\nCentro Comercial Plaza\nCiudad, País 12345"
    },
    {
      icon: <Clock className={styles.infoIcon} />,
      title: "Horarios",
      content: "Lunes - Viernes: 9:00 - 20:00\nSábados: 10:00 - 18:00\nDomingos: 12:00 - 17:00"
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Contáctanos</h1>
          <p className={styles.subtitle}>
            Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta sobre nuestros productos o servicios.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.grid}>
          {/* Form Section */}
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Envíanos un mensaje</h2>
            
            {submitStatus === 'success' && (
              <div className={styles.successMessage}>
                ¡Mensaje enviado exitosamente! Te responderemos pronto.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className={styles.errorMessage}>
                Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
              </div>
            )}

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>
                    <User size={16} className={styles.labelIcon} />
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>
                    <Mail size={16} className={styles.labelIcon} />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    <Phone size={16} className={styles.labelIcon} />
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    <MessageSquare size={16} className={styles.labelIcon} />
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder="Asunto de tu consulta"
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>
                  <MessageSquare size={16} className={styles.labelIcon} />
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows="6"
                  required
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={styles.button}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className={styles.spinner}></div>
                ) : (
                  <Send size={20} />
                )}
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>Información de contacto</h2>
            
            <div className={styles.infoGrid}>
              {contactInfo.map((info, index) => (
                <div key={index} className={styles.infoCard}>
                  {info.icon}
                  <h3 className={styles.infoTitle}>{info.title}</h3>
                  <p className={styles.infoText}>
                    {info.content.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < info.content.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>

   
            <div className={styles.mapContainer}>
              <div className={styles.map}>
                <MapPin size={48} className={styles.mapIcon} />
                <p className={styles.mapText}>Mapa interactivo próximamente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>¿Prefieres llamarnos directamente?</h2>
          <p className={styles.ctaText}>
            Nuestro equipo de atención al cliente está disponible para ayudarte
          </p>
          <a href="tel:+15551234567" className={styles.ctaButton}>
            <Phone size={20} />
            Llamar ahora
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;