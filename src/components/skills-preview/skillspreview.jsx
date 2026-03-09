import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./skills-preview.css"
import htmlLogo from "../../assets/images/skills-icons/html-logo.png"
import cssLogo from "../../assets/images/skills-icons/css-logo.png"
import jsLogo from "../../assets/images/skills-icons/js-logo.png"
import reactLogo from "../../assets/images/skills-icons/reactjs-logo.png"
import bootstrapLogo from "../../assets/images/skills-icons/bootstrap-logo.png"
import javaLogo from "../../assets/images/skills-icons/java-logo.png"
import mysqlLogo from "../../assets/images/skills-icons/mysql-logo.png"
import githubLogo from "../../assets/images/skills-icons/github-logo.png"

const Skillspreview = () => {

    const [cardsVisible, setCardsVisible] = useState(false);
    const [titleVisible, setTitleVisible] = useState(false);

    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    const skillsData = [
        { img: htmlLogo, name: "HTML 5", level: "Intermediate" },
        { img: cssLogo, name: "CSS 3", level: "Intermediate" },
        { img: jsLogo, name: "JAVASCRIPT", level: "Intermediate" },
        { img: reactLogo, name: "REACT JS", level: "Intermediate" },
        { img: bootstrapLogo, name: "BOOTSTRAP", level: "Intermediate" },
        { img: javaLogo, name: "JAVA", level: "Beginner" },
        { img: mysqlLogo, name: "MY SQL", level: "Intermediate" },
        { img: githubLogo, name: "GIT HUB", level: "Intermediate" }
    ];

    useEffect(() => {

        const titleObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTitleVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const sectionObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCardsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (titleRef.current) {
            titleObserver.observe(titleRef.current);
        }

        if (sectionRef.current) {
            sectionObserver.observe(sectionRef.current);
        }

        return () => {
            titleObserver.disconnect();
            sectionObserver.disconnect();
        };

    }, []);

    return (
        <div className="skills-section" ref={sectionRef}>
            <div className="skills-content">
                <h1 ref={titleRef} className={`skills-title ${titleVisible ? "show" : ""}`}>Skills</h1>
                <p ref={titleRef} className={`skills-title ${titleVisible ? "show" : ""}`}>A showcase of the technologies and tools I use in web development.</p>
            </div>
            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <div key={index} className={`skills-card ${cardsVisible ? "show" : ""}`}>
                        <img src={skill.img} alt={skill.name} />
                        <h3>{skill.name}</h3>
                        <p>
                            Years of Experience: <strong>{skill.level}</strong>
                        </p>
                    </div>
                ))}
            </div>
            <div className="view-btn">
                <span className="line"></span>
                <Link
                    className="btn"
                    to="/skills"
                >
                    VIEW ALL
                </Link>
            </div>
        </div>
    )
}

export default Skillspreview;