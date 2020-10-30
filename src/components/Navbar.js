import React, { useState } from "react";
import "./Navbar.css";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" onClick={closeMobileMenu} className="navbar-logo">
            <Image
              src="https://d1v2exdleuhyqq.cloudfront.net/wwpLogo.png"
              className="navbar-logo-img"
              width="190px"
            ></Image>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" onClick={closeMobileMenu} className="nav-links">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/menu" onClick={closeMobileMenu} className="nav-links">
            Menu
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/about" onClick={closeMobileMenu} className="nav-links">
            About Us
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/opportunities"
            onClick={closeMobileMenu}
            className="nav-links"
          >
            Opportunities
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
