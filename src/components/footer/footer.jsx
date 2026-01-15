import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <footer className="footer">
            <div className="footer-main">
                <h1 className="footer-name">Hafeez Ahamed. Z</h1>

                <ul className="footer-menu">
                    <li className="footer-item"><Link to="/">HOME</Link></li>
                    <li className="footer-item" onClick={() => scrollToSection("about")}>
                        ABOUT
                    </li>
                    <li className="footer-item"><Link to="/skills">SKILLS</Link></li>
                    <li className="footer-item">PROJECTS</li>
                    <li className="footer-item">CONTACT</li>
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

                    <a href="https://github.com/Hafeez-31/My-projects.git" className="social-link github" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>2026 All rights reserved | Designed and developed by <span>Hafeez Ahamed</span></p>
            </div>
        </footer>
    );
};

export default Footer;
