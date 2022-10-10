import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {client} from '../../prismic'


function Footer() {
  return (
    <div className="footer">
      <div className="social-wrapper">
        <div className="social">
          <a target='_blank' href='https://www.facebook.com/rosamoscatoevents'>

          <FaFacebook />
          </a>
        </div>
        <div className="social">
          <a target='_blank' href='https://www.instagram.com/rosamoscato_events/'>
          <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
