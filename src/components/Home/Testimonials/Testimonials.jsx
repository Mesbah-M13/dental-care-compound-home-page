import React from "react";
import "./Testimonials.css";
import Testimonial from "../Testimonial/Tesimonial";
import wilson from "../../../assets/wilson.png";
import james from "../../../assets/james.png";
import jack from "../../../assets/jack.png";
import quote from "../../../assets/quote.jpg";

const testimonialData = [
  {
    quote: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    name: "Harry Wilson",
    from: "Japan",
    img: wilson,
    quoteimg: quote,
  },
  {
    quote: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    name: "James Stewrt",
    from: "USA",
    img: james,
    quoteimg: quote,
  },
  {
    quote: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    name: "Mike Jack",
    from: "Japan",
    img: jack,
    quoteimg: quote,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials my-5 py-5">
      <div className="container">
        <div className="section-header">
          <h5 className="text-primary text-uppercase">TESTIMONIAL</h5>
          {/* <img src={peopleQuote.img} alt="" /> */}
          <h1>
            What Our Patients <br /> Says
          </h1>
        </div>
        <div className="d-flex justify-content-sm-between mt-5">
          {testimonialData.map((testimonial) => (
            <Testimonial testimonial={testimonial}></Testimonial>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
