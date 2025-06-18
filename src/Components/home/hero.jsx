import styles from "./hero.module.css";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaPhoneAlt, FaMapMarkerAlt, FaGift } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import obtenerProductos from "../../hooks/productos";

function Hero() {
  const listRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });



  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos().then((res) => setProductos(res.slice(0, 6)));
  }, []);

  return (
    <main className={styles.hero_F_container}>
      <section className={styles.hero_presentation}>
        <div className={styles.hero_presentation_img}>
          <img
            src="https://images.pexels.com/photos/4977270/pexels-photo-4977270.jpeg"
            alt="img-hero-presentation"
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
        <p>We are the best</p>
        <p>
          <b>•</b> HODDIE
        </p>
        <p>We are the best</p>
        <p>
          <b>•</b> HODDIE
        </p>
        <p>We are the best</p>
        <p>
          <b>•</b> HODDIE
        </p>
        <p>We are the best</p>
        <p>
          <b>•</b> HODDIE
        </p>
        <p>We are the best</p>
        <p>
          <b>•</b> HODDIE
        </p>
        <p>We are the best</p>
        <p>
          <b>•</b> HODDIE
        </p>
        <p>We are the best</p>
        <p>
          <b>•</b> HODDIE
        </p>
        <p>We are the best</p>
        <p>
          <b>•</b> HODDIE
        </p>
        <p>We are the best</p>
        <p>
          <b>•</b> HODDIE
        </p>
        <p>We are the best</p>
        <p>
          <b>•</b> HODDIE
        </p>
        <p>We are the best</p>
        <p>
          <b>•</b> HODDIE
        </p>
      </section>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.hero_productos}
      >
        <div className={styles.hero_productos_title}>
          <h2>Our products</h2>
          <Link to="/products">See all</Link>
        </div>

        <div className={styles.hero_productos_btn}>
          <button onClick={scrollLeft}>
            <BsChevronLeft />
          </button>
          <button onClick={scrollRight}>
            <BsChevronRight />
          </button>
        </div>

        <div className={styles.hero_productos_list} ref={listRef}>
          {productos.map((producto) => (
            <Link className={styles.hero_productos_item} key={producto.id}>
              <div className={styles.hero_producto_img}>
                <img src={producto.image} alt={producto.name} />
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
          />
        </div>
      </motion.div>

      <motion.div className={styles.infoSection}>
        <div className={styles.infoItem}>
          <FaPhoneAlt className={styles.icon} />
          <div>
            <h4>Contáctanos</h4>
            <p>Atención 24/7 por WhatsApp y correo.</p>
            <Link to={"/contact"}>Contactar</Link>
          </div>
        </div>

        <div className={styles.infoItem}>
          <FaMapMarkerAlt className={styles.icon} />
          <div>
            <h4>Ubicaciones</h4>
            <p>Visítanos en Santo Domingo, Santiago y Punta Cana.</p>
            <Link>Ver todas las ubicaciones</Link>
          </div>
        </div>

        <div className={styles.infoItem}>
          <FaGift className={styles.icon} />
          <div>
            <h4>Beneficios</h4>
            <p>Envíos gratis y membresía exclusiva HODDIE+.</p>
            <Link>Ver todos los beneficios</Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default Hero;
