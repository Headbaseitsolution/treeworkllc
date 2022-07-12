import Image from "next/image";
import Link from "next/link";
export default function Gallery() {
  return (
    <div className="container pt100 pb100">
      <div className="heading3">
        <h2>24/7 Emergency Tree Removal Services</h2>
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
        <div className="gallerycolumn gallery">
          <Link href="/images/service5.jpg" data-lightbox="mygallery">
            <Image
              src="/images/gallery1.jpg"
              className="gallery-img"
              alt="logo"
              width={280}
              height={250}
            />
          </Link>
        </div>
        <div className="gallerycolumn gallery">
          <Link href="/images/service5.jpg" data-lightbox="mygallery">
            <Image
              src="/images/gallery1.jpg"
              className="gallery-img"
              alt="logo"
              width={280}
              height={250}
            />
          </Link>
        </div>
        <div className="gallerycolumn gallery">
          <Link href="/images/service5.jpg" data-lightbox="mygallery">
            <Image
              src="/images/gallery1.jpg"
              className="gallery-img"
              alt="logo"
              width={280}
              height={250}
            />
          </Link>
        </div>
        <div className="gallerycolumn gallery">
          <Link href="/images/service5.jpg" data-lightbox="mygallery">
            <Image
              src="/images/gallery1.jpg"
              className="gallery-img"
              alt="logo"
              width={280}
              height={250}
            />
          </Link>
        </div>
        <div className="gallerycolumn gallery">
          <Link href="/images/service5.jpg" data-lightbox="mygallery">
            <Image
              src="/images/gallery1.jpg"
              className="gallery-img"
              alt="logo"
              width={280}
              height={250}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
