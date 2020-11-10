import React from "react";
import logo from "../images/logo-koral.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="logo" />
      <div className="social-icons">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-pinterest"></i>
        <i class="fab fa-dribbble"></i>
      </div>
      <p className="copy-right">Koral © 2019 by Upper</p>
    </div>
  );
}

export default Footer;
