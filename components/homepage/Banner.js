import Image from "next/image";
export default function Banner() {
  return (
    <div className="container">
      <div className="heading3 for-emergency-mobile">
        <h2 className>24/7 Emergency Tree Removal Services</h2>
        <div className="emergency-content-paragraph">
          <p>
            If you need help with emergency tree removal or hazardous tree
            removal, we are here for you. Please feel free to reach out to us 24
            hours a day 7 days a week.
          </p>
          <p>
            We understand the urgency of a tree emergency and will be able to
            get someone out to assess the situation as soon as the same day or
            night. We provide emergency tree removal rain or shine in Virginia
            Beach, VA and Chesapeake, VA.
          </p>
        </div>
      </div>
      <div className="emergencygallery-images">
        <div className="gallery-column gallery">
          <Image
            src="/images/g-1.jpg"
            className="gallery-img"
            width={200}
            height={200}
            alt="gallery1"
          />
        </div>
        <div className="gallery-column gallery">
          <Image
            src="/images/g-1.jpg"
            className="gallery-img"
            width={200}
            height={200}
            alt="gallery1"
          />
        </div>
        <div className="gallery-column gallery">
          <Image
            src="/images/g-1.jpg"
            className="gallery-img"
            width={200}
            height={200}
            alt="gallery1"
          />
        </div>
        <div className="gallery-column gallery">
          <Image
            src="/images/g-1.jpg"
            className="gallery-img"
            width={200}
            height={200}
            alt="gallery1"
          />
        </div>
        <div className="gallery-column gallery">
          <Image
            src="/images/g-1.jpg"
            className="gallery-img"
            width={200}
            height={200}
            alt="gallery1"
          />
        </div>
      </div>
    </div>
  );
}
