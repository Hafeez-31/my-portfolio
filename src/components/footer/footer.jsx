import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = ({ scrollTo, refs }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (section) => {
        const doScroll = () => {
            if (section === "home") scrollTo(refs.homeRef);
            else if (section === "about") scrollTo(refs.aboutRef);
            else if (section === "contact") scrollTo(refs.contactRef);
        };

        if (location.pathname === "/") {
            doScroll();
        } else {
            navigate("/");
            setTimeout(doScroll, 100);
        }
    };


    return (
        <footer className="footer">
            <div className="footer-main">
                <h1 className="footer-name">Hafeez Ahamed. Z</h1>

                <ul className="footer-menu">
                    <li className="footer-item" onClick={() => scrollToSection("home")}>HOME</li>
                    <li className="footer-item" onClick={() => scrollToSection("about")}>ABOUT</li>
                    <li className="footer-item"><Link to="/skills">SKILLS</Link></li>
                    <li className="footer-item">PROJECTS</li>
                    <li className="footer-item" onClick={() => scrollToSection("contact")}>CONTACT</li>
                </ul>

                <div className="footer-socials">
                    <a href="http://linkedin.com/in/hafeez-ahamed-69473427a" className="social-link linkedin" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>

                    <a href="https://www.instagram.com/ahamed_hafeez_21" className="social-link instagram" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>

                    <a href="https://wa.me/917339468772" className="social-link whatsapp" target="_blank" rel="noreferrer">
                        <FaWhatsapp />
                    </a>

                    <a href="https://github.com/Hafeez-31?tab=repositories" className="social-link github" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&#169; 2026 All rights reserved | Designed and developed by <span>Hafeez Ahamed</span></p>
            </div>
        </footer>
    );
};

export default Footer;
