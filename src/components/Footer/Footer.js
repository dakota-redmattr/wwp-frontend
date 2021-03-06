import React from "react";
import "./Footer.css";
import { Header, Image } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
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

        <Link to="/opportunities" className="footer__page-link">
          Opportunities
        </Link>
      </div>
      <Link to="/" className="footer__logo-wrapper">
        <Image
          src="https://d1v2exdleuhyqq.cloudfront.net/wwpLogo.png"
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
        <a href="https://www.facebook.com/wickedwingpub" target="__blank" className="footer__facebook-icon-link footer__social-link">
          <FaFacebook />
        </a>
      </div>
      <div className="footer__policy-wrapper">
        <a href="https://wickedwingpub.s3.amazonaws.com/WWP-Privacy-Policy.pdf" target="__blank" className="footer__privacy-policy">Privacy Policy</a>
      </div>
    </div>
  );
}

export default Footer;
