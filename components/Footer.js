import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="main-footer">
          <div className="container-fluid">
            <div className="footer-sections">
              <div className="block-1">
                <Link href="/">
                  <Image
                    src="/images/logo2.png"
                    alt="logo"
                    width={250}
                    height={230}
                  />
                </Link>
              </div>
              <div className="block-2">
                <h6>Quick Links</h6>
                <ul className="footer-menu-links">
                  <li>
                    <Link href="/">
                      <a className={styles.footermenu}>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a className={styles.footermenu}>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a className={styles.footermenu}>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/emergency">
                      <a className={styles.footermenu}>Emergency</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials">
                      <a className={styles.footermenu}>Testimonial</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className={styles.footermenu}>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className={styles.footermenu}>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="block-3">
                <h6>Services We Provide</h6>
                <ul className="footer-menu-links">
                  <li>
                    <Link href="/">
                      <a className={styles.footermenu}>Pruning/Trimming</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className={styles.footermenu}>Pruning/Trimming</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className={styles.footermenu}>
                        Stump Grinding and Removal
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className={styles.footermenu}>Lot Clearing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className={styles.footermenu}>General Tree Care</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="block-4">
                <h6>Our Location</h6>
                <ul className="footer-menu-links">
                  <li className="location">Virginia Beach,VA</li>
                  <li className="location">Virginia Beach,VA</li>
                  <li className="location">Norfolk, VA</li>
                  <li className="call">
                    <Link href="tel:757-692-6094">
                      <a className={styles.footermenu}>757-692-6094</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="bottom-sections">
              <div className="copyright">
                <p>&copy; - 2022. Tree Works LLC. All Rights Reserved.s</p>
              </div>
              <div className="social">
                <ul>
                  <li>
                    <Link href="/">
                      <Image
                        src="/images/facebook.svg"
                        alt="facebook"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <Image
                        src="/images/instagram.svg"
                        alt="instagram"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
