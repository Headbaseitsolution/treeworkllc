import Image from "next/image";
export default function ClientTestimonials() {
  return (
    <div className="testimonials pt100 pb100">
      <div className="container">
        <div className="heading">
          <h2>Just a few things people are saying!</h2>
        </div>
        <div className="testimonial2-for-mobile">
          <div className="testimonials-quote-block2">
            <div className="single-testimonial-quote2">
              <Image
                width={88}
                height={63}
                alt="dot"
                src="/images/quote.svg"
                className=""
              />
              <p className="testimmonial-comment">
                “Took amazing care of my parents!! Honest and dependable!!”
              </p>
              <h5>Brittany L</h5>
              <p className="testimonial-block-location">Virginia Beach, VA</p>
            </div>
          </div>
          <div className="testimonials-quote-block2">
            <div className="single-testimonial-quote2">
              <Image
                width={88}
                height={63}
                alt="dot"
                src="/images/quote.svg"
                className=""
              />
              <p className="testimmonial-comment">
                “Thanks for everything. An unbelievable job. Super clean and
                professional!! Highly recommended.”
              </p>
              <h5>Deborah M</h5>
              <p className="testimonial-block-location">Virginia Beach, VA</p>
            </div>
          </div>
          <div className="testimonials-quote-block2">
            <div className="single-testimonial-quote2">
              <Image
                width={88}
                height={63}
                alt="dot"
                src="/images/quote.svg"
                className=""
              />
              <p className="testimmonial-comment">
                “Called Josh and he came out the same day. His price was very
                competitive, and he was very knowledgeable. He got us on the
                schedule within a week and did a great job taking down five big
                trees in our backyard. Would definitely recommend.”
              </p>
              <h5>Chris G</h5>
              <p className="testimonial-block-location">Virginia Beach, VA</p>
            </div>
          </div>
          <div className="testimonials-quote-block2">
            <div className="single-testimonial-quote2">
              <Image
                width={88}
                height={63}
                alt="dot"
                src="/images/quote.svg"
                className=""
              />
              <p className="testimmonial-comment">
                “Had a large tree fall on our house and garage during heavy rain
                and wind. Josh&apos;s crew came out the same day with all the
                right equipment and safely removed the tree. Very professional
                crew.”
              </p>
              <h5>Stephanie M</h5>
              <p className="testimonial-block-location">Virginia Beach, VA</p>
            </div>
          </div>
          <div className="testimonials-quote-block2">
            <div className="single-testimonial-quote2">
              <Image
                width={88}
                height={63}
                alt="dot"
                src="/images/quote.svg"
                className=""
              />
              <p className="testimmonial-comment">
                “Highly recommend this tree service! Josh just removed 6 trees
                from my property and was true to his word, professional, had
                great communication and is fully insured. I&apos;d hire you
                again, but I don&apos;t have any trees left!”
              </p>
              <h5>Nicholas M</h5>
              <p className="testimonial-block-location">Virginia Beach, VA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
