import Image from "next/image";
export default function WhyChooseTreeWorkLLC() {
  return (
    <div className="why-treework-llc">
      <div className="container">
        <div className="heading">
          <h2 className="for-mobile-heading">Our Why Choose Tree Works LLC?</h2>
        </div>
        <div className="why-choose-us">
          <div className="why-choose-us-block">
            <Image
              src="/images/wcu-1.svg"
              className="wcu"
              alt="wcu-1"
              width={100}
              height={100}
            />
            <h5 className="why-choose-us-title">Great Competitive Prices</h5>
          </div>
          <div className="why-choose-us-block">
            <Image
              src="/images/wcu-2.svg"
              className="wcu"
              alt="wcu-2"
              width={100}
              height={100}
            />
            <h5 className="why-choose-us-title">
              Easy Online Estimate Scheduling
            </h5>
          </div>
          <div className="why-choose-us-block">
            <Image
              src="/images/wcu-3.svg"
              className="wcu"
              alt="wcu-3"
              width={100}
              height={100}
            />
            <h5 className="why-choose-us-title">Punctual Service</h5>
          </div>
          <div className="why-choose-us-block">
            <Image
              src="/images/wcu-4.svg"
              className="wcu"
              alt="wcu-4"
              width={100}
              height={100}
            />
            <h5 className="why-choose-us-title">Telephone Support</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
