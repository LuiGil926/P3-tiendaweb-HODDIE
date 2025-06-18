import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuShoppingCart, LuUser } from "react-icons/lu";
import styles from "./header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header_container}>
      <Link to="/" onClick={handleLinkClick} aria-label="Ir a la página principal">
        <h1 className={styles.header_title}>HODDIE</h1>
      </Link>

      {/* Navegación desktop */}
      <section className={styles.list_container}>
        <nav className={styles.header_nav} aria-label="Navegación principal">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.header_right}>
          <Link to="/cart" aria-label="Ver carrito de compras">
            <LuShoppingCart className={styles.header_icon} />
          </Link>
          <Link to="/profile" aria-label="Perfil de usuario">
            <LuUser className={styles.header_icon} />
          </Link>
        </div>
      </section>

      {/* Botón hamburguesa */}
      <button
        className={`${styles.menu_burger} ${isOpen ? styles.open : ''}`}
        onClick={handleMenuToggle}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menú móvil */}
      <section 
        className={`${styles.menu_list_container} ${isOpen ? styles.show : ''}`}
        aria-hidden={!isOpen}
      >
        <nav className={styles.header_nav_burger} aria-label="Navegación móvil">
          <ul>
            <li>
              <Link to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>About</Link>
            </li>
            <li>
              <Link to="/products" onClick={handleLinkClick}>Products</Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.header_right}>
          <Link to="/cart" onClick={handleLinkClick} aria-label="Ver carrito de compras">
            <LuShoppingCart className={styles.header_icon} />
          </Link>
          <Link to="/profile" onClick={handleLinkClick} aria-label="Perfil de usuario">
            <LuUser className={styles.header_icon} />
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;