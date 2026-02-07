import React, { useRef, useState, useEffect, forwardRef } from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import "./home.css";
import myImage from "../../assets/images/my-image/hafeez.png";

const Home = forwardRef((__, ref) => {
    const cardRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [inside, setInside] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    const titles = ["Front-End Developer", "Web Developer", "UI/UX Developer"];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let timeout;

        if (typing) {
            if (displayedText.length < titles[currentTitleIndex].length) {
                timeout = setTimeout(() => {
                    setDisplayedText(
                        titles[currentTitleIndex].slice(0, displayedText.length + 1)
                    );
                }, 150);
            } else {
                timeout = setTimeout(() => setTyping(false), 1000);
            }
        } else {
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, 50);
            } else {
                setTyping(true);
                setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, typing, currentTitleIndex]);

    useEffect(() => {
        const touch = window.matchMedia(
            "(hover: none) and (pointer: coarse)"
        ).matches;

        setIsTouch(touch);

        if (touch && cardRef.current) {
            cardRef.current.style.transform = "scale(1)";
        }
    }, []);

    const updateRotation = (x, y, down = isDown) => {
        if (isTouch) return;

        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const nx = ((x - rect.left) / rect.width - 0.5) * 2;
        const ny = ((y - rect.top) / rect.height - 0.5) * 2;

        const maxAngle = 50;
        const rx = -ny * maxAngle;
        const ry = nx * maxAngle;

        card.style.transform = `
            scale(${down ? 0.6 : 1})
            rotateX(${rx}deg)
            rotateY(${ry}deg)
        `;
    };

    return (
        <div ref={ref} className="home-section">
            <div className="home-text">
                <h1>Hi, I'm Hafeez Ahamed</h1>

                <h2 className="animated-title">
                    {displayedText}
                    <span className="cursor">|</span>
                </h2>

                <p>
                    Entry-level Front-End Developer with strong hands-on experience in{""}<strong> HTML, CSS, JavaScript, React.js, and
                    Bootstrap.</strong> Built responsive web applications and reusable UI components with a focus on performance
                    and user experience.
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

                    <a href="https://github.com/Hafeez-31?tab=repositories" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>

                    <span className="social-line"></span>
                </div>
            </div>

            {/* ---------- IMAGE CARD ---------- */}
            <div
                className="my-image card"
                ref={cardRef}
                onMouseMove={(e) => {
                    if (isTouch) return;
                    setInside(true);
                    updateRotation(e.clientX, e.clientY);
                }}
                onMouseLeave={() => {
                    setInside(false);
                    setIsDown(false);
                    if (cardRef.current) {
                        cardRef.current.style.transform =
                            "scale(1) rotateX(0deg) rotateY(0deg)";
                    }
                }}
                onPointerDown={(e) => {
                    if (isTouch) return;
                    setIsDown(true);
                    updateRotation(e.clientX, e.clientY, true);
                }}
                onPointerUp={(e) => {
                    if (isTouch) return;
                    setIsDown(false);
                    updateRotation(e.clientX, e.clientY, false);
                }}
            >
                <img src={myImage} alt="Hafeez Ahamed" draggable={false} />
            </div>
        </div>
    );
});

export default Home;
