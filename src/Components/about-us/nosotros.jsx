import styles from "./aboutus.module.css";

function AboutUs() {
  return (
    <main className={styles.aboutSection}>
      <div className={styles.aboutIntro}>
        <div className={styles.imageBox}>
          <img
            src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg"
            alt="storefront"
          />
        </div>
        <div className={styles.textBox}>
          <h2>Desde 1998 — Elegancia redefinida</h2>
          <p>
            Fundada en 1998, HODDIE nació con una sola misión: fusionar la
            sofisticación urbana con la comodidad contemporánea. Más de dos
            décadas después, seguimos siendo líderes en estilo premium, con
            diseños que marcan tendencia y estándares de calidad inigualables.
          </p>
          <p>
            Cada colección representa una evolución, una narrativa que conecta
            lo clásico con lo moderno. Diseñamos no solo ropa, sino experiencias
            que hablan de quién eres.
          </p>
        </div>
      </div>

      <div className={styles.aboutFeatures}>
       
        <div className={styles.featureCard}>
          <div className={styles.featureImg}>
            <img
              src="https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg"
              alt="Benefit"
            />
          </div>
          <div className={styles.featureText}>
            <h4>Materiales premium</h4>
            <p>Algodón orgánico, lana merina y tejidos reciclados.</p>
          </div>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureImg}>
            <img
              src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg"
              alt="Benefit"
            />
          </div>
          <div className={styles.featureText}>
            <h4>Atención exclusiva</h4>
            <p>Personal shoppers y asesoría personalizada 24/7.</p>
          </div>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureImg}>
            <img
              src="https://images.pexels.com/photos/3641382/pexels-photo-3641382.jpeg"
              alt="Benefit"
            />
          </div>
          <div className={styles.featureText}>
            <h4>Envíos internacionales</h4>
            <p>Alcance global con garantía de entrega de lujo.</p>
          </div>
        </div>

      </div>
    </main>
  );
}

export default AboutUs;
