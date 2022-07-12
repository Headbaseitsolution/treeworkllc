import Image from "next/image";
export default function Ourguarantee() {
  return (
    <div>
      <section className="our-guarantee pt100 pb100">
        <div className="container">
          <div className="heading">
            <h2 className="for-mobile-heading">Our Guarantee</h2>
          </div>
          <div className="guarantee">
            <div className="guarantee-block">
              <Image
                src="/images/no-upfront-cost.svg"
                className="guarantee-icon"
                width={100}
                height={100}
                alt="guarantee-icon1"
              />
              <h5>No Up Front Cost</h5>
            </div>
            <div className="guarantee-block">
              <Image
                src="/images/on-time.svg"
                className="guarantee-icon"
                width={100}
                height={100}
                alt="guarantee-icon2"
              />
              <h5>On-time</h5>
            </div>
            <div className="guarantee-block">
              <Image
                src="/images/clean-crew.svg"
                className="guarantee-icon"
                width={100}
                height={100}
                alt="guarantee-icon3"
              />
              <h5>Clean Crew</h5>
            </div>
            <div className="guarantee-block">
              <Image
                src="/images/quality-work.svg"
                className="guarantee-icon"
                width={100}
                height={100}
                alt="guarantee-icon4"
              />
              <h5>Quality Work</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
