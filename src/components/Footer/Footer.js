import React from "react";
import "./Footer.css";
import { Header, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer__main-wrapper">
      <div className="footer__page-link-grid">
        <Link to="/" className="footer__page-link">
          Home
        </Link>

        <Link to="/menu" className="footer__page-link">
          Menu
        </Link>

        <Link to="/about" className="footer__page-link">
          About Us
        </Link>

        <Link to="/opportunites" className="footer__page-link">
          Opportunities
        </Link>
      </div>
      <Link to="/" className="footer__logo-wrapper">
        <Image
          src="https://wickedwingpub.s3.amazonaws.com/wwpLogo.png"
          className="footer__logo-image"
        />
      </Link>
      <div className="footer__copyright-text-wrapper">
        <h4 className="footer__copyright-text">
          Copyright © 2020 Wicked Wing Pub
        </h4>
      </div>
      <hr className="footer__social-icon-divider" />
      <div className="footer__social-icon-wrapper">
        <Link to="/" className="footer__facebook-icon-link footer__social-link">
          <FaFacebook />
        </Link>
        <Link
          to="/"
          className="footer__instagram-icon-link footer__social-link"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
