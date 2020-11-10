import React from "react";

function Contact() {
  return (
    <div className="contact-section">
      <div className="contact">
        <div className="icon">
          <i class="fas fa-phone"></i>
        </div>
        <p className="heading">CALL US</p>
        <p className="line">PT (+351) 729 133 194</p>
        <p className="line">AU (+18) 833 841 442</p>
      </div>
      <div className="contact">
        <div className="icon">
          <i class="fas fa-envelope"></i>
        </div>
        <p className="heading">EMAIL US</p>
        <p className="line">marketing@example.com</p>
        <p className="line">hello@example.com</p>
      </div>
      <div className="contact">
        <div className="icon">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <p className="heading">OUR HOME</p>
        <p className="line">PO Box 16122 Collins Street West</p>
        <p className="line">Victoria 8007 Australia</p>
      </div>
    </div>
  );
}

export default Contact;
