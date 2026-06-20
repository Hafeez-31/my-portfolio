import React, { useRef, useState, useEffect, forwardRef } from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./home.css";
import myImage from "../../assets/images/my-image/hafeez.png";
import projectsData from "../../data/projects.json";
import myResume from "../../assets/My-resume/Hafeezahamed-Resume.pdf";

const Home = forwardRef((props, ref) => {
    const cardRef = useRef(null);
    const statsRef = useRef(null);

    const [isDown, setIsDown] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    const titles = [
        "Front-End Developer",
        "React Developer",
        "Web Developer",
        "Full Stack Developer",
        "Java Developer",
    ];

    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [typing, setTyping] = useState(true);

    const [projectCount, setProjectCount] = useState(0);
    const [yearCount, setYearCount] = useState(0);
    const [dedicationCount, setDedicationCount] = useState(0);

    const [startCount, setStartCount] = useState(false);

    const totalProjects = projectsData.length;

    const startYear = 2024;
    const yearsLearning = new Date().getFullYear() - startYear;

    // Typing Animation
    useEffect(() => {
        let timeout;

        if (typing) {
            if (displayedText.length < titles[currentTitleIndex].length) {
                timeout = setTimeout(() => {
                    setDisplayedText(
                        titles[currentTitleIndex].slice(
                            0,
                            displayedText.length + 1
                        )
                    );
                }, 100);
            } else {
                timeout = setTimeout(() => {
                    setTyping(false);
                }, 1200);
            }
        } else {
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, 50);
            } else {
                setTyping(true);
                setCurrentTitleIndex(
                    (prev) => (prev + 1) % titles.length
                );
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, typing, currentTitleIndex]);

    // Detect Touch Device
    useEffect(() => {
        const touch = window.matchMedia(
            "(hover: none) and (pointer: coarse)"
        ).matches;

        setIsTouch(touch);

        if (touch && cardRef.current) {
            cardRef.current.style.transform =
                "scale(1) rotateX(0deg) rotateY(0deg)";
        }
    }, []);

    // 3D Image Rotation
    const updateRotation = (x, y, down = isDown) => {
        if (isTouch) return;

        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();

        const nx = ((x - rect.left) / rect.width - 0.5) * 2;
        const ny = ((y - rect.top) / rect.height - 0.5) * 2;

        const maxAngle = 20;

        const rx = -ny * maxAngle;
        const ry = nx * maxAngle;

        card.style.transform = `
        rotateX(${rx}deg)
        rotateY(${ry}deg)
        scale(${down ? 0.65 : 1})
    `;
    };

    // Stats Visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Counter Animation
    useEffect(() => {
        if (!startCount) return;

        const duration = 1000;
        const start = performance.now();

        const animate = (time) => {
            const progress = Math.min(
                (time - start) / duration,
                1
            );

            setProjectCount(
                Math.floor(progress * totalProjects)
            );

            setYearCount(
                Math.floor(progress * yearsLearning)
            );

            setDedicationCount(
                Math.floor(progress * 100)
            );

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [startCount, totalProjects, yearsLearning]);

    return (
        <section ref={ref} className="home-section">
            <div className="hero-container">
                <div className="hero-wrapper">
                    <div className="home-text">
                        <span className="greeting">
                            Hi, I'm
                        </span>

                        <h1>
                            Hafeez{" "}
                            <span className="lastname">
                                Ahamed
                            </span>
                        </h1>

                        <h2 className="animated-title">
                            {displayedText}
                            <span className="cursor">|</span>
                        </h2>

                        <p>
                            Aspiring Front-End Developer with hands-on experience in <strong>{" "}React.js, JavaScript, HTML5, CSS3, Bootstrap,
                                MySQL, and Core Java.</strong> Passionate about building responsive, and user-friendly web applications through personal and
                            academic projects. Strong understanding of modern web development principles, problem-solving abilities, and user experience design.
                        </p>

                        <div className="hero-buttons">
                            <Link to="/projects">
                                View My Projects
                            </Link>

                            <a
                                href={myResume}
                                target="_blank"
                                rel="noreferrer"
                                className="cv-button"
                            >
                                Download CV
                            </a>
                        </div>

                        <div className="social-icons">
                            <span className="social-line"></span>

                            <a
                                href="https://linkedin.com/in/hafeez-ahamed-69473427a"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://www.instagram.com/ahamed_hafeez_21"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://wa.me/917339468772"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaWhatsapp />
                            </a>

                            <a
                                href="https://github.com/Hafeez-31"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />
                            </a>

                            <span className="social-line"></span>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div
                        className="my-image card"
                        ref={cardRef}
                        onMouseMove={(e) => {
                            if (isTouch) return;
                            updateRotation(e.clientX, e.clientY);
                        }}
                        onMouseLeave={() => {
                            setIsDown(false);

                            if (cardRef.current) {
                                cardRef.current.style.transform =
                                    "rotateX(0deg) rotateY(0deg) scale(1)";
                            }
                        }}
                        onPointerDown={(e) => {
                            if (isTouch) return;

                            setIsDown(true);
                            updateRotation(
                                e.clientX,
                                e.clientY,
                                true
                            );
                        }}
                        onPointerUp={(e) => {
                            if (isTouch) return;

                            setIsDown(false);
                            updateRotation(
                                e.clientX,
                                e.clientY,
                                false
                            );
                        }}
                    >
                        <img
                            src={myImage}
                            alt="Hafeez Ahamed"
                            draggable={false}
                        />
                    </div>
                </div>
                <div
                    className="hero-stats"
                    ref={statsRef}
                >
                    <div>
                        <h3>{yearCount}+</h3>
                        <span>
                            Years of Experience
                        </span>
                    </div>

                    <div>
                        <h3>{projectCount}+</h3>
                        <span>
                            Projects Completed
                        </span>
                    </div>

                    <div>
                        <h3>{dedicationCount}%</h3>
                        <span>Dedication</span>
                    </div>
                </div>
            </div>

            {/* Stats */}

        </section>
    );
});

export default Home;