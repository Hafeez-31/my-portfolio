import React, { forwardRef, useState, useRef, useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";
import './about.css'
import systemImage from "../../assets/images/system/system.jpg"
import myResume from "../../assets/My-resume/Hafeezahamed-Resume.pdf"

const About = forwardRef((_, ref) => {

    const h2Ref = useRef();
    const pRef = useRef();
    const qualRef = useRef();

    const [h2Visible, setH2Visible] = useState(false);
    const [pVisible, setPVisible] = useState(false);
    const [qualVisible, setQualVisible] = useState(false);

    const qualifications = [
        { title: "QUALIFICATION", content: "I have Graduated in B.Sc Computer Science on 2023 at University of Madras, scoring 85%" },
        { title: "CERTIFICATION", content: "I have learned FullStack Developer course at AJR Institute, completing the Front-End part with hands-on project experience." },
        { title: "EXPERIENCE", content: "Currently working as a Ticketing Executive with 1+ years of experience and transitioning into the IT field as a web UI developer." }
    ];

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.target === h2Ref.current && entry.isIntersecting) {
                    setH2Visible(true);
                }

                if (entry.target === pRef.current && entry.isIntersecting) {
                    setPVisible(true);
                }

                if (entry.target === qualRef.current && entry.isIntersecting) {
                    setQualVisible(true);
                }

            });
        }, { threshold: 0.3 });

        observer.observe(h2Ref.current);
        observer.observe(pRef.current);
        observer.observe(qualRef.current);

        return () => observer.disconnect();

    }, []);

    return (
        <div ref={ref} className="about-section">
            <div className="about-left">
                <div className="about-content">
                    <h2 ref={h2Ref} className={`fade-in-left ${h2Visible ? "visible" : ""}`}>About Me</h2>
                    <span className="about-line"></span>
                    <p ref={pRef} className={`fade-in-left ${pVisible ? "visible" : ""}`}>
                        I am an entry-level Front-End Developer, Passed out in 2023, with a strong interest in building responsive and
                        user-friendly web applications. I enjoy transforming ideas into clean and functional designs using modern
                        web technologies. I have hands-on experience through personal and academic projects, focusing on HTML, CSS, JavaScript,
                        React.js, Bootstrap, and modern frameworks. I am highly motivated to learn, grow, and contribute to real-world projects
                        in a collaborative development environment.
                    </p>
                </div>

                <div className="about-btn">
                    <span className="line"></span>
                    <a href={myResume}>DOWNLOAD CV</a>
                </div>

                <span className="hr-line"></span>

                <div ref={qualRef} className="about-qualifications">
                    {qualifications.map((item, idx) => (
                        <div key={idx} className={`qualification-cards ${qualVisible ? "visible" : ""}`}>
                            <div className="qualification-header">
                                <h3>{item.title}</h3>
                                <FaGraduationCap className="qualification-icon" />
                            </div>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`about-right ${pVisible ? "visible" : ""}`}>
                <img className="about-img" src={systemImage} alt="System" />
            </div>
        </div>
    )
});

export default About;
