import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aadayof",       // <-- replace
        "template_cu7rnmv",      // <-- replace
        formRef.current,
        "bLy-w0s7eA-2rqepd"        // <-- replace
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset(); // clear form after submit
        },
        (error) => {
          alert("Failed to send message. Try again!");
          console.log(error);
        }
      );
  };

  return (
    <div className="container contact" id="contact">
      <div className="contact-header">
        <h2 className="main-title text-center">CONTACT US</h2>
        <p className="contact-subtitle text-center">
          Get in touch with our financial experts today
        </p>
      </div>

      {/* Form updated with ref */}
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-1">
              <input
                name="name"
                placeholder="Your Name"
                className="contact-input"
                required
              />
            </div>
            <div className="col-md-4 mb-1">
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="contact-input"
                required
              />
            </div>
            <div className="col-md-4 mb-1">
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="contact-input"
              />
            </div>
          </div>
        </div>

        <br />

        <div className="col-md-12">
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-textarea"
            required
          />
        </div>

        <br />

        <div className="row">
          <div className="col-md-12 text-center">
            <button className="form-btn" type="submit">
              Send Message
            </button>
          </div>
        </div>
      </form>

      <div className="contact-info">
        <div className="row">
          <div className="col-md-4 contact-info-item">
            <div className="contact-icon">📍</div>
            <h4>Address</h4>
            <p>
              72, TALUK OFF OPPOSITE,NATESAN POWNAMMAL COMPLEX<br />
              TINDIVANAM ROAD, GINGEE-604202<br />
              VILLUPURAM DIST. TAMILNADU
            </p>
          </div>

          <div className="col-md-4 contact-info-item">
            <div className="contact-icon">📞</div>
            <h4>Phone</h4>
            <p>
              +91 99947 97148<br />
              +91 93423 74032
            </p>
          </div>

          <div className="col-md-4 contact-info-item">
            <div className="contact-icon">✉️</div>
            <h4>Email</h4>
            <p>
              srirangafinance2024@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
