import { memo } from "react";
import styles from "./aboutus.module.css";

// OPTIMIZACIÓN: Datos estáticos fuera del componente para evitar re-creaciones
const ABOUT_DATA = {
  hero: {
    image: {
      src: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg",
      alt: "Tienda HODDIE - Elegancia desde 1998"
    },
    title: "Desde 1998 — Elegancia redefinida",
    paragraphs: [
      "Fundada en 1998, HODDIE nació con una sola misión: fusionar la sofisticación urbana con la comodidad contemporánea. Más de dos décadas después, seguimos siendo líderes en estilo premium, con diseños que marcan tendencia y estándares de calidad inigualables.",
      "Cada colección representa una evolución, una narrativa que conecta lo clásico con lo moderno. Diseñamos no solo ropa, sino experiencias que hablan de quién eres."
    ]
  },
  features: [
    {
      id: "premium-materials",
      image: {
        src: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg",
        alt: "Materiales premium de alta calidad"
      },
      title: "Materiales premium",
      description: "Algodón orgánico, lana merina y tejidos reciclados."
    },
    {
      id: "exclusive-attention", 
      image: {
        src: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg",
        alt: "Atención personalizada exclusiva"
      },
      title: "Atención exclusiva",
      description: "Personal shoppers y asesoría personalizada 24/7."
    },
    {
      id: "international-shipping",
      image: {
        src: "https://images.pexels.com/photos/3641382/pexels-photo-3641382.jpeg", 
        alt: "Envíos internacionales de lujo"
      },
      title: "Envíos internacionales",
      description: "Alcance global con garantía de entrega de lujo."
    }
  ]
};

// OPTIMIZACIÓN: Componente de imagen optimizado
const OptimizedImage = memo(({ src, alt, className, loading = "lazy" }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    loading={loading}
    decoding="async"
    // OPTIMIZACIÓN: Preparar dimensiones para evitar layout shift
    style={{ aspectRatio: "16/9" }}
    // OPTIMIZACIÓN: Hints para el navegador
    fetchpriority={loading === "eager" ? "high" : "low"}
  />
));

OptimizedImage.displayName = "OptimizedImage";

// OPTIMIZACIÓN: Componente de tarjeta de característica
const FeatureCard = memo(({ feature }) => (
  <div className={styles.featureCard}>
    <div className={styles.featureImg}>
      <OptimizedImage
        src={feature.image.src}
        alt={feature.image.alt}
        loading="lazy"
      />
    </div>
    <div className={styles.featureText}>
      <h4>{feature.title}</h4>
      <p>{feature.description}</p>
    </div>
  </div>
));

FeatureCard.displayName = "FeatureCard";

// OPTIMIZACIÓN: Componente principal memoizado
const AboutUs = memo(() => {
  return (
    <main className={styles.aboutSection}>
      <div className={styles.aboutIntro}>
        <div className={styles.imageBox}>
          <OptimizedImage
            src={ABOUT_DATA.hero.image.src}
            alt={ABOUT_DATA.hero.image.alt}
            loading="eager" // OPTIMIZACIÓN: Cargar imagen hero inmediatamente
          />
        </div>
        <div className={styles.textBox}>
          <h2>{ABOUT_DATA.hero.title}</h2>
          {ABOUT_DATA.hero.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className={styles.aboutFeatures}>
        {ABOUT_DATA.features.map((feature) => (
          <FeatureCard 
            key={feature.id} 
            feature={feature}
          />
        ))}
      </div>
    </main>
  );
});

AboutUs.displayName = "AboutUs";

export default AboutUs;