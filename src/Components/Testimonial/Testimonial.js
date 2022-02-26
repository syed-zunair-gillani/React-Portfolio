import React from "react";
import "../Testimonial/TestimonialStyle.scss";

export default function Testimonial() {
  return (
    <>
      <section className=" testimonial-wrapper">
        <p>Our Testimonial</p>
        <h2>What Our Client Think</h2>
        <div className="services-wrapper"></div>
      </section>
      <div className="testimonial-content">
        <div className="_content">
          <marquee behavior="" direction="left">
            <h1>
              Our site is beautiful! It is easy to navigate. The support has
              been remarkable for WordPress; if I don’t understand something, or
              can’t accomplish a task, Thrive is very responsive and they lead
              me in the correct way. Thrive is an extremely talented web design
              company. We are amazed from where traffic to our site comes; we
              are a moderate sized nonprofit and now we are having global
              visitors.
            </h1>
          </marquee>
          <marquee behavior="" direction="right">
            <h1 className="sec-tes">
              My new site created by zunair just launched. They’ve done a great
              job of creating exactly what I wanted. Easy to work with and very
              responsive. They met all of my expectations and had a lot of
              insight regarding marketing tools I didn’t know existed. visitors.
            </h1>
          </marquee>
        </div>
      </div>
    </>
  );
}
