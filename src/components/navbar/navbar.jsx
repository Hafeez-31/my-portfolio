import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";
import navLogo from "../../assets/images/nav-icon/portfolio.png"

const Navbar = ({ scrollTo, refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (section) => {
    const doScroll = () => {
      if (section === "home") scrollTo(refs.homeRef);
      else if (section === "about") scrollTo(refs.aboutRef);
      else if (section === "contact") scrollTo(refs.contactRef);

      setMenuOpen(false);
    };

    if (location.pathname === "/") {
      doScroll();
    } else {
      navigate("/");
      setTimeout(doScroll, 100);
    }
  };

  return (
    <div className="header">
      <nav className="navbar">
       <Link to="/"><img src={navLogo} alt="Portfolio" title="Portfolio" /></Link> 

        <ul className={`nav-menu ${menuOpen ? "show" : ""}`}>
          <li className="nav-item" onClick={() => scrollToSection("home")}>
            HOME
          </li>

          <li className="nav-item" onClick={() => scrollToSection("about")}>
            ABOUT
          </li>

          <li className="nav-item" onClick={() => setMenuOpen(false)}>
            <Link to="/skills">SKILLS</Link>
          </li>

          <li className="nav-item">PROJECTS</li>

          <li className="nav-item" onClick={() => scrollToSection("contact")}>
            CONTACT
          </li>

          <li className="nav-item mobile-hire">HIRE ME</li>
        </ul>

        <div className="hire-btn desktop-only">
          <span className="line"></span>
          <span>HIRE ME</span>
        </div>
      </nav>

      <div className="icon-container">
        {!menuOpen ? (
          <span className="hamburger" onClick={() => setMenuOpen(true)}>
            ☰
          </span>
        ) : (
          <span className="close-btn" onClick={() => setMenuOpen(false)}>
            ✕
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
