
import React, { forwardRef } from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import "./home.css";

const Home = forwardRef((__, ref) => {
    return (
        <div ref={ref} className="home-section">
            <div className="home-text">
                <h1>Hi, I'm Hafeez Ahamed</h1>

                <h2 className="animated-title">Front-End Developer</h2>

                <p>
                    I am a Entry-Level Front-End Developer with hands-on exprience <strong>HTML5, CSS3, JavaScript, React.js, and Bootstrap</strong>.
                    I specialize in developing responsive, accessible, and visually refined web interfaces, ensuring
                    consistent performance across all modern devices and browsers.
                </p>

                <div className="social-icons">
                    <span className="social-line"></span>
                    <a href="http://linkedin.com/in/hafeez-ahamed-69473427a" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>

                    <a href="https://www.instagram.com/ahamed_hafeez_21" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>

                    <a href="https://wa.me/917339468772" target="_blank" rel="noreferrer">
                        <FaWhatsapp />
                    </a>

                    <a href="https://github.com/Hafeez-31/My-projects.git" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <span className="social-line"></span>
                </div>
            </div>

            <div className="my-image card">
                <img src="src/components/home/hafeez.png" alt="Hafeez Ahamed" />
            </div>
        </div>
    );
});

export default Home;
