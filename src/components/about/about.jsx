import React, { forwardRef } from "react";
import { FaGraduationCap } from "react-icons/fa";
import './about.css'
import systemImage from "../../assets/images/system/system.jpg"
import myResume from "../../assets/My-resume/HafeezAhamed_Resume.pdf"

const About = forwardRef((_, ref) => {

    return (
        <div ref={ref} className="about-section">
            <div className="about-left">
                <div className="about-content">
                    <h2>About Me</h2>
                    <span className="about-line"></span>
                    <p>
                        I am an entry-level Front-End Developer, Passed out in 2023, with a strong interest in building responsive and
                        user-friendly web applications. I enjoy transforming ideas into clean and functional designs using modern
                        web technologies. I have hands-on experience through personal and academic projects, focusing on HTML, CSS, JavaScript,
                        Reac.js, Bootstarp, and modern frameworks. I am highly motivated to learn, grow, and contribute to real-world projects
                        in a collaborative development environment.
                    </p>

                </div>
                <div className="about-btn">
                    <span className="line"></span>
                    <a href={myResume}>DOWNLOAD CV</a>
                </div>
                <span className="hr-line"></span>
                <div className="about-qualifications">
                    <div className="qualification-cards">
                        <div className="qualification-header">
                            <h3>QUALIFICATION</h3>
                            <FaGraduationCap className="qualification-icon" />
                        </div>
                        <p>I have Graduated in <span>B.Sc</span> Computer Science on 2023 at University of Madras, and I have scored 85%</p>
                    </div>
                    <div className="qualification-cards">
                        <div className="qualification-header">
                            <h3>CERTIFICATION</h3>
                            <FaGraduationCap className="qualification-icon" />
                        </div>
                        <p>I have Learning FullStack Developer course at AJR Institute , and have completed Font End Developer part with hands-on project experience.</p>
                    </div>
                    <div className="qualification-cards">
                        <div className="qualification-header">
                            <h3>EXPERIENCE</h3>
                            <FaGraduationCap className="qualification-icon" />
                        </div>
                        <p>Ticketing Executive With 1+ years of experience. I am currently working in a non-IT role while actively transitioning into the IT field.</p>
                    </div>
                </div>
            </div>
            <div className="about-right">
                <img className="about-img" src={systemImage} />
            </div>
        </div>
    )
});

export default About;