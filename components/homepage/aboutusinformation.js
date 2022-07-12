import Image from "next/image";
export default function AboutusInformation() {
  return (
    <div className="container pt100 pb100">
      <div className="about-us-block">
        <div className="about-us-block-1">
          <Image
            src="/images/about-us-image.jpg"
            width={600}
            height={540}
            alt="about"
          />
        </div>
        <div className="about-us-block-2">
          <h2>About Tree Works, LLC</h2>
          <div className="about-us-content">
            <p>
              Hi, <span>I&apos;m Josh</span>, I am a Virginia Beach Native. I
              have been a professional tree climber for the past 14 years. I
              have learned and trained under some of the best climbers in the
              area. I take safety and professionalism very seriously and stay up
              to date on the latest Arborist practices. Tree work is what I love
              to do, and I am grateful to all of my customers.
            </p>
            <p>
              I give you my personal guarantee that I will always provide
              professional, fast, and affordably priced tree care and tree
              removal services throughout all of Virginia Beach, VA and
              Chesapeake, VA.
            </p>
            <p>
              As an environmentally friendly company I make sure all our tree
              care or tree removal debris is recycled 100 percent of the time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
