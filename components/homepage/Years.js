import styles from "/styles/Home.module.css";
import Image from "next/image";
export default function Years() {
  return (
    <div className={styles.aboutsection}>
      <div className={styles.aboutbanner}>
        <Image src="/images/years.jpg" alt="logo" width={960} height={618} />
      </div>
      <div className={styles.aboutcontent}>
        <h4>
          We proudly provide tree care, tree removal, and tree trimming services
          to
        </h4>
        <ul className={styles.companylocation}>
          <li>
            <h5>
              <Image
                src="/images/circle-dot.svg"
                alt="logo"
                width={24}
                height={24}
              />
              Virginia Beach, VA
            </h5>
          </li>
          <li>
            <h5>
              <Image
                src="/images/circle-dot.svg"
                alt="logo"
                width={24}
                height={24}
              />
              Chesapeake, VA
            </h5>
          </li>
        </ul>
        <h5 className={styles.licensed}>
          Licensed and Insured Accident free for <span>14 years.</span>
        </h5>
      </div>
    </div>
  );
}
