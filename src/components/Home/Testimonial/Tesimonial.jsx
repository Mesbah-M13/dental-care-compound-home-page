import React from "react";

const Tesimonial = ({ testimonial }) => {
  return (
    <div>
      <img src={testimonial.quoteimg} alt="" />
      <div>
        <p className="text-secondary me-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nobis deleniti hic ex quas quo et dicta laborum. Nisi ab, impedit
          consectetur enim eligendi repellat beatae repudiandae tempore a vel?
        </p>
        <img style={{ height: "50px" }} src={testimonial.img} alt="" />
        <h3 className="mt-3 mb-3">{testimonial.name}</h3>
        <h6 className="mt-3 mb-3">{testimonial.from}</h6>
      </div>
    </div>
  );
};

export default Tesimonial;
