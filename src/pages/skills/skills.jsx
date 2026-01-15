import React from "react";
import './skills.css'
import htmlLogo from "../../assets/images/skills-icons/html-logo.png"
import cssLogo from "../../assets/images/skills-icons/css-logo.png"
import jsLogo from "../../assets/images/skills-icons/js-logo.png"
import reactLogo from "../../assets/images/skills-icons/reactjs-logo.png"
import bootstrapLogo from "../../assets/images/skills-icons/bootstrap-logo.png"
import javaLogo from "../../assets/images/skills-icons/java-logo.png"
import mysqlLogo from "../../assets/images/skills-icons/mysql-logo.png"
import githubLogo from "../../assets/images/skills-icons/github-logo.png"
import canvaLogo from "../../assets/images/skills-icons/canva-logo.jpeg"
import mswordLogo from "../../assets/images/skills-icons/msword-logo.png"
import powerpointLogo from "../../assets/images/skills-icons/powerpoint-logo.png"
import msexcelLogo from "../../assets/images/skills-icons/msexcel-logo.png"

const Skills = () => {
    return (
        <div>
            <div className="skils-title">
                <h1>Skills & Expertise</h1>
            </div>
            <div className="skills-item">
                <h1>Skills</h1>

                <div className="skills-container">
                    <div className="skills-card">
                        <img src={htmlLogo} />
                        <h3>HTML 5</h3>
                        <p>Years of Experience: <strong>Intermediate</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src={cssLogo} />
                        <h3>CSS 3</h3>
                        <p>Years of Experience: <strong>Intermediate</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src={jsLogo} />
                        <h3>JAVASCRIPT</h3>
                        <p>Years of Experience: <strong>Intermediate</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src={reactLogo} />
                        <h3>REACT JS</h3>
                        <p>Years of Experience: <strong>Intermediate</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src={bootstrapLogo} />
                        <h3>BOOTSTRAP</h3>
                        <p>Years of Experience: <strong>Intermediate</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src={javaLogo} />
                        <h3>JAVA</h3>
                        <p>Years of Experience: <strong>Beginner</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src={mysqlLogo} />
                        <h3>MY SQL</h3>
                        <p>Years of Experience: <strong>Intermediate</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src={githubLogo} />
                        <h3>GIT HUB</h3>
                        <p>Years of Experience: <strong>Intermediate</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src={canvaLogo} />
                        <h3>CANVA</h3>
                        <p>Years of Experience: <strong>Beginner</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src={mswordLogo} />
                        <h3>MS WORD</h3>
                        <p>Years of Experience: <strong>1+</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src={powerpointLogo} />
                        <h3>POWER POINT</h3>
                        <p>Years of Experience: <strong>Intermediate</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src={msexcelLogo} />
                        <h3>MS EXCEL</h3>
                        <p>Years of Experience: <strong>1+</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;