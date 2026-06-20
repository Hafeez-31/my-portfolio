import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import "./about.css";

import systemImage from "../../assets/images/system/system.jpg";
import myResume from "../../assets/My-resume/Hafeezahamed-Resume.pdf";

const About = forwardRef((props, ref) => {
    const qualifications = [
        {
            title: "Qualification",
            content:
                "Graduated with B.Sc Computer Science from the University of Madras in 2023, achieving 85% and developing a strong foundation in programming and software development."
        },
        {
            title: "Certification",
            content:
                "Certified in Java Full Stack Development from AJR Institute, gaining hands-on project experience in Front-End and Back-End development."
        },
        {
            title: "Experience",
            content:
                "Currently working as a Ticketing Executive while developing expertise in Front-End Development through hands-on projects and continuous learning."
        },
    ];

    return (
        <section ref={ref} className="about-section">
            <div className="about-left">
                <div className="about-content">
                    <h2>About Me</h2>

                    <div className="title-line"></div>

                    <p>
                        Passionate Front-End Developer focused on building responsive, user-friendly, and modern
                        web applications using <strong>{" "}React.js, JavaScript, HTML5, CSS3, Bootstrap, MySQL,
                            and Core Java.</strong> I enjoy creating clean interfaces and delivering seamless user experiences.
                        Through hands-on projects and continuous learning, I have developed practical experience in
                        modern web development and problem-solving. I am eager to apply my skills, grow as a developer,
                        and contribute to impactful web applications.
                    </p>


                    <a
                        href={myResume}
                        target="_blank"
                        rel="noreferrer"
                        className="resume-btn"
                    >
                        Download CV
                    </a>
                </div>

                <div className="about-cards">
                    {qualifications.map((item, index) => (
                        <div className="about-card" key={index}>
                            <div className="card-header">
                                <h3>{item.title}</h3>
                                <FaGraduationCap />
                            </div>

                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default About;