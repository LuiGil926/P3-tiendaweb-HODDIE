import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h2>HODDIE</h2>
            <p>
              Redefining urban fashion with minimalism and bold expression.  
              Designed in NYC. Delivered worldwide.
            </p>
          </div>

          <div className={styles.column}>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/collections/new">New Arrivals</Link></li>
              <li><Link to="/collections/bestsellers">Best Sellers</Link></li>
              <li><Link to="/collections/men">Menswear</Link></li>
              <li><Link to="/collections/women">Womenswear</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/journal">Journal</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
            </ul>
          </div>

          <div className={styles.newsletter}>
            <h4>Stay in the loop</h4>
            <p>Subscribe to our newsletter for exclusive releases and early access.</p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} HODDIE. All rights reserved.</p>
          <div className={styles.socials}>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
