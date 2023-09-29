import React, { useRef } from "react";
import "../../styles/css/contact.css";

import { BsInstagram } from "react-icons/bs";
import { TbArrowBigRightLine } from "react-icons/tb";
import { AiFillLinkedin } from "react-icons/ai";

import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vrhr6ub",
      "template_eqrn6sd",
      form.current,
      "74rzozIROwJNOgxZU"
    );
    e.target.reset();
  };

  return (
    <section id="contact" className="contact section container">
      <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleText">
          Contact
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>

          <div className="cards grid">
            <div className="card">
              <div>
                <a href="https://www.instagram.com/yogii_004/" target="_blank">
                  <BsInstagram className="icon" />
                </a>
              </div>
              <h4>Instagram</h4>
              <span className="userName">@yogii_004</span>

              <div>
                <a
                  href="https://www.instagram.com/yogii_004/"
                  target="_blank"
                  className="flex"
                >
                  Send Message
                  <TbArrowBigRightLine className="icon" />
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <a
                  href="https://www.linkedin.com/in/yogendra-joshi-2bb65a154/"
                  target="_blank"
                >
                  <AiFillLinkedin className="icon" />
                </a>
              </div>
              <h4>LinkedIn</h4>
              <span className="userName">@yogendra-joshi</span>

              <div>
                <a
                  href="https://www.linkedin.com/in/yogendra-joshi-2bb65a154/"
                  target="_blank"
                  className="flex"
                >
                  Send Message
                  <TbArrowBigRightLine className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="form grid">
          <h3>Send me an email</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Enter your Name" name="name" />
            <input type="email" placeholder="Enter your Email" name="email" />
            <textarea
              name="message"
              placeholder="Enter your message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="formBtn" type="submit" name="submit">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
