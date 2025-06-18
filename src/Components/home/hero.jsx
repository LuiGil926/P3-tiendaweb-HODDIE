import styles from "./hero.module.css";

import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaPhoneAlt, FaMapMarkerAlt, FaGift } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import obtenerProductos from "../../hooks/productos";

function Hero() {
  const listRef = useRef(null);
  const [productos, setProductos] = useState([]);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  // Optimización: useCallback para evitar re-renders innecesarios
  const scrollLeft = useCallback(() => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  }, []);

  const scrollRight = useCallback(() => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  }, []);

  // Optimización: Agregar obtenerProductos a las dependencias y manejo de errores
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const res = await obtenerProductos();
        setProductos(res.slice(0, 6));
      } catch (error) {
        console.error('Error al cargar productos:', error);
        setProductos([]);
      }
    };

    cargarProductos();
  }, []);

  // Optimización: Datos estáticos extraídos del JSX
  const infoItems = [
    {
      icon: FaPhoneAlt,
      title: "Contáctanos",
      description: "Atención 24/7 por WhatsApp y correo.",
      link: "/contact",
      linkText: "Contactar"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Ubicaciones",
      description: "Visítanos en Santo Domingo, Santiago y Punta Cana.",
      link: "/locations",
      linkText: "Ver todas las ubicaciones"
    },
    {
      icon: FaGift,
      title: "Beneficios",
      description: "Envíos gratis y membresía exclusiva HODDIE+.",
      link: "/benefits",
      linkText: "Ver todos los beneficios"
    }
  ];

  // Optimización: Configuración de animaciones reutilizable
  const fadeInUpVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <main className={styles.hero_F_container}>
      <section className={styles.hero_presentation}>
        <div className={styles.hero_presentation_img}>
          <img
            src="https://images.pexels.com/photos/4977270/pexels-photo-4977270.jpeg"
            alt="img-hero-presentation"
            loading="lazy"
          />
        </div>

        <article>
          <h1>
            Welcome to <b> HODDIE</b>
          </h1>
          <p>the best online shopping experience</p>
        </article>

        <div className={styles.hero_presentation_btn}>
          <button>Shop now</button>
        </div>
      </section>

      <section className={styles.hero_marca}>
        {/* Optimización: Generar elementos repetitivos dinámicamente */}
        {Array.from({ length: 11 }, (_, index) => (
          <p key={index}>
            {index % 2 === 0 ? "We are the best" : <><b>•</b> HODDIE</>}
          </p>
        ))}
      </section>

      <motion.div
        ref={ref}
        initial={fadeInUpVariants.initial}
        animate={inView ? fadeInUpVariants.animate : fadeInUpVariants.initial}
        transition={fadeInUpVariants.transition}
        className={styles.hero_productos}
      >
        <div className={styles.hero_productos_title}>
          <h2>Our products</h2>
          <Link to="/products">See all</Link>
        </div>

        <div className={styles.hero_productos_btn}>
          <button onClick={scrollLeft} aria-label="Scroll left">
            <BsChevronLeft />
          </button>
          <button onClick={scrollRight} aria-label="Scroll right">
            <BsChevronRight />
          </button>
        </div>

        <div className={styles.hero_productos_list} ref={listRef}>
          {productos.map((producto) => (
            <Link 
              className={styles.hero_productos_item} 
              key={producto.id}
              to={`/product/${producto.id}`}
            >
              <div className={styles.hero_producto_img}>
                <img 
                  src={producto.image} 
                  alt={producto.title}
                  loading="eager"
                />
              </div>
              <div className={styles.hero_producto_info}>
                <p>{producto.title}</p>
                <p>{producto.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      <motion.div
        className={styles.hero_about_us}
        initial={fadeInUpVariants.initial}
        whileInView={fadeInUpVariants.animate}
        transition={fadeInUpVariants.transition}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className={styles.hero_about_us_title}>
          <h2>About us</h2>
          <p>1998</p>
          <div>
            <Link to="/products">go to buy</Link>
            <Link to="/about">See more</Link>
          </div>
        </div>

        <div className={styles.hero_about_us_img}>
          <img
            src="https://images.pexels.com/photos/10856894/pexels-photo-10856894.jpeg"
            alt="img-about-us"
            loading="eager"
          />
        </div>
      </motion.div>

      <motion.div 
        className={styles.infoSection}
        initial={fadeInUpVariants.initial}
        whileInView={fadeInUpVariants.animate}
        transition={fadeInUpVariants.transition}
        viewport={{ once: false, amount: 0.3 }}
      >
        {infoItems.map((item, index) => (
          <div key={index} className={styles.infoItem}>
            <item.icon className={styles.icon} />
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <Link to={item.link}>{item.linkText}</Link>
            </div>
          </div>
        ))}
      </motion.div>
    </main>
  );
}

export default Hero;