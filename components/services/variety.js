import Image from "next/image";
import styles from "/styles/Home.module.css";
export default function Servicevariety() {
  return (
    <div className="service-bg-1">
      <div className="container-fluid">
        <div className="for-service-variety">
          <div className="service-variety2">
            <div className="product-content">
              <h4 className="mb30">We also provide a wide variety of</h4>
              <ul className={styles.companylocation}>
                <li>
                  <h5>
                    <Image
                      width={24}
                      height={24}
                      alt="dot"
                      src="/images/circle-dot.svg"
                    />
                    Commercial tree services
                  </h5>
                </li>
                <li>
                  <h5>
                    <Image
                      width={24}
                      height={24}
                      alt="dot"
                      src="/images/circle-dot.svg"
                    />
                    Including encroachment clearing
                  </h5>
                </li>
                <li>
                  <h5>
                    <Image
                      width={24}
                      height={24}
                      alt="dot"
                      src="/images/circle-dot.svg"
                    />
                    Pond clearings
                  </h5>
                </li>
                <li>
                  <h5>
                    <Image
                      width={24}
                      height={24}
                      alt="dot"
                      src="/images/circle-dot.svg"
                    />
                    Annual contracts <span>& more!</span>
                  </h5>
                </li>
              </ul>
              <div className={styles.ctabutton}>
                <a href="tel:757-692-6094">Contact Now</a>
              </div>
            </div>
          </div>
          <div className="service-variety1">
            <Image
              width={960}
              height={623}
              alt="variety"
              src="/images/service-variety-image.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
