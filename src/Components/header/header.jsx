import styles from "./header.module.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuShoppingCart, LuUser } from "react-icons/lu";

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={styles.header_container}>
      <Link to="/" onClick={() => setOpen(false)}>
        <h1 className={styles.header_title}>HODDIE</h1>
      </Link>

      <section className={styles.list_container}>
        <nav className={styles.header_nav}>
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
          <Link>
            <LuShoppingCart className={styles.header_icon} />
          </Link>
          <Link>
            <LuUser className={styles.header_icon} />
          </Link>
        </div>
      </section>
      <div
        className={
          !open ? styles.menu_burger : styles.menu_burger + " " + styles.open
        }
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

  
        <section className={
            open ? styles.menu_list_container + " " + styles.show : styles.menu_list_container 
        }>
          <nav className={styles.header_nav_burger}>
            <ul>
              <li>
                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setOpen(false)}>About</Link>
              </li>
              <li>
                <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.header_right}>
            <Link>
              <LuShoppingCart className={styles.header_icon} />
            </Link>
            <Link>
              <LuUser className={styles.header_icon} />
            </Link>
          </div>
        </section>
    </header>
  );
}

export default Header;
