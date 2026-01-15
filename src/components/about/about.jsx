import React, {forwardRef} from "react";
import { FaGraduationCap } from "react-icons/fa";
import './about.css'

const About = forwardRef ((_, ref) => {
    return (
        <div ref={ref} className="about-section">
            <div className="about-left">
                <div className="about-content">
                    <h2>About Me</h2>
                    <span className="about-line"></span>
                    <p>Enthusiastic and self-motivated Entry-Level Front-End Developer with a solid understanding of modern
                        web technologies, including HTML, CSS, JavaScript, and React. Adept at creating clean, responsive, and
                        user-friendly web interfaces. Passionate about continuous learning, problem-solving, and building
                        accessible digital experiences. Seeking an opportunity to grow technical skills and contribute to a
                        collaborative development team.
                    </p>

                </div>
                <div className="about-btn">
                    <span className="line"></span>
                    <span>DOWNLOAD CV</span>
                </div>
                <span className="hr-line"></span>
                <div className="about-qualifications">
                    <div className="qualification-cards">
                        <div className="qualification-header">
                            <h3>QUALIFICATION</h3>
                            <FaGraduationCap className="qualification-icon" />
                        </div>
                        <p>I have Graduated in <span>B.Sc</span> Computer Science on 2023 at University of Madras. And I have scored 85%</p>
                    </div>
                    <div className="qualification-cards">
                        <div className="qualification-header">
                            <h3>QUALIFICATION</h3>
                            <FaGraduationCap className="qualification-icon" />
                        </div>
                        <p>I have Graduated in <span>B.Sc</span> Computer Science on 2023 at University of Madras. And I have scored 85%</p>
                    </div>
                    <div className="qualification-cards">
                        <div className="qualification-header">
                            <h3>QUALIFICATION</h3>
                            <FaGraduationCap className="qualification-icon" />
                        </div>
                        <p>I have Graduated in <span>B.Sc</span> Computer Science on 2023 at University of Madras. And I have scored 85%</p>
                    </div>
                </div>
            </div>
            <div className="about-right">
                <img className="about-img" src="src/assets/images/system/system.jpg" />
            </div>
        </div>
    )
});

export default About;