import React, { useState, useEffect, useRef } from "react";
import "./Projects-preview.css";
import ToDo from "../../assets/images/projects/todo.png";
import Calculator from "../../assets/images/projects/calculator.png";
import ModernFurniture from "../../assets/images/projects/furniture.png";
import BootsrapLily from "../../assets/images/projects/boostraplily.png"

const originalProjects = [
    { img: ToDo, title: "ToDo List", tech: "REACT JS", link: "https://crudtodolist-application.netlify.app" },
    { img: Calculator, title: "Calculator", tech: ["HTML", "CSS", "JAVASCRIPT"], link: "https://hafeez-31.github.io/calculator" },
    { img: ModernFurniture, title: "Modern Furniture", tech: ["HTML", "CSS", "RESPONSIVE DESIGN"], link: "https://hafeez-31.github.io/furniture-website" },
    { img: BootsrapLily, title: "BootstrapLily", tech: ["HTML", "CSS", "UI/UX"], link: "https://hafeez-31.github.io/bootstraplily-website" },
    { img: ToDo, title: "Construct", tech: "REACT JS", link: "https://primeconstruct-website.netlify.app/" },
    { img: ToDo, title: "ToDo List", tech: "REACT JS", link: "https://crudtodolist-application.netlify.app" },
    { img: ToDo, title: "ToDo List", tech: "REACT JS", link: "https://crudtodolist-application.netlify.app" },
];

const visibleCards = 3;

const projects = [
    ...originalProjects,
    ...originalProjects.slice(0, visibleCards),
];

const Projectspreview = () => {
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(true);
    const gridRef = useRef(null);
    const intervalRef = useRef(null);

    const startAutoSlide = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setIndex((prev) => prev + 1);
            }, 4000);
        }
    };

    useEffect(() => {
        setAnimate(false);
        setIndex(0);
        requestAnimationFrame(() => setAnimate(true));
    }, []);

    // start auto slide once
    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, []);
    // infinite loop reset (NO jump)
    useEffect(() => {
        const grid = gridRef.current;

        const onTransitionEnd = () => {
            if (index === originalProjects.length) {
                setAnimate(false);
                setIndex(0);
            }
        };

        grid.addEventListener("transitionend", onTransitionEnd);
        return () => grid.removeEventListener("transitionend", onTransitionEnd);
    }, [index]);

    // turn animation back on
    useEffect(() => {
        if (!animate) {
            requestAnimationFrame(() => setAnimate(true));
        }
    }, [animate]);

    return (
        <div className="projects-section">
            <h1>Projects</h1>

            <div className="slider">
                <div
                    ref={gridRef}
                    className={`projects-grid ${animate ? "animate" : ""}`}
                    style={{
                        transform: `translateX(-${index * (360 + 60)}px)`,
                    }}
                >
                    {projects.map((p, i) => (
                        <div
                            className="project-cards"
                            key={i}
                        >
                            <img src={p.img} alt={p.title} />
                            <h2>{p.title}</h2>

                            <div className="projects-title">
                                {Array.isArray(p.tech) ? (
                                    p.tech.map((t, idx) => (
                                        <span key={idx} className="tech-box">
                                            {t}
                                        </span>
                                    ))
                                ) : (
                                    <span className="tech-text">{p.tech}</span>
                                )}
                            </div>

                            <div className="projects-footer">
                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="projects-link"
                                >
                                    SEE PROJECT
                                </a>
                                <span className="projects-type">Personal Project</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="project-btn">
                <span>VIEW ALL</span>
            </div>
        </div>
    );
};

export default Projectspreview;
