import styles from "/styles/Home.module.css";
import Link from "next/link";
export default function EstimateDark() {
  return (
    <div className={styles.forbgcolor2}>
      <div className={styles.container}>
        <div className={styles.cta2}>
          <div className={styles.ctablock2}>
            <h6 className={styles.mb15}>Free Estimate</h6>
            <h5 className={styles.ctatitle}>
              Call Today For Your Free Estimate
            </h5>
          </div>
          <div className={styles.ctabutton2}>
            <Link href="tel:757-692-6094">
              <a>
                <i className="fa-solid fa-phone" /> 757-692-6094
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
