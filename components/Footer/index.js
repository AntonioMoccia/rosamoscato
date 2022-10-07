import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer" data-scroll-section>
      <div className="sociel-wrapper">
        <div className="social">
          <FaFacebook />
        </div>
        <div className="social">
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}

export default Footer;
