import React from "react";
import "./ContactInfo.css";

const ContactForm = () => {
  return (
    <section>
      <div className="text-center">
        <h6>Contact</h6>
        <h2>Always connect with us</h2>
      </div>
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input
              class="text"
              type="email"
              placeholder="Email address*"
              required
            />
            <br />
            <input class="text" type="text" placeholder="Subject*" required />
            <br />
            <textarea class="message" id="message" placeholder="Message*" />{" "}
            <br />
            <button class="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
