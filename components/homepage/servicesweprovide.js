import styles from "/styles/Home.module.css";
import Image from "next/image";
export default function Servicesweprovide() {
  return (
    <div className={styles.servicesweprovide}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.formobileheading}>Services We Provide</h2>
        </div>
        <div className={styles.services}>
          <div className={styles.servicesblock}>
            <Image
              src="/images/service1.jpg"
              className={styles.service1}
              alt="service1"
              width={450}
              height={300}
              style={{ borderRadius: "50px 50px 0px 0px", overflow: "hidden" }}
            />
            <h5>Tree Removal</h5>
          </div>
          <div className={styles.servicesblock}>
            <Image
              src="/images/service2.jpg"
              className={styles.service2}
              alt="service2"
              width={450}
              height={300}
              style={{ borderRadius: "50px 50px 0px 0px", overflow: "hidden" }}
            />
            <h5>Pruning/Trimming</h5>
          </div>
          <div className={styles.servicesblock}>
            <Image
              src="/images/service3.jpg"
              className={styles.service3}
              alt="service3"
              width={450}
              height={300}
              style={{ borderRadius: "50px 50px 0px 0px", overflow: "hidden" }}
            />
            <h5>Stump Grinding and Removal</h5>
          </div>
          <div className={styles.servicesblock}>
            <Image
              src="/images/service4.jpg"
              className={styles.service4}
              alt="service4"
              width={450}
              height={300}
              style={{ borderRadius: "50px 50px 0px 0px", overflow: "hidden" }}
            />
            <h5>Lot Clearing</h5>
          </div>
          <div className={styles.servicesblock}>
            <Image
              src="/images/service5.jpg"
              className={styles.service5}
              alt="service5"
              width={450}
              height={300}
              style={{ borderRadius: "50px 50px 0px 0px", overflow: "hidden" }}
            />
            <h5>General Tree Care</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
