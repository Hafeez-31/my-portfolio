import React from "react";
import './skills.css'

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
                        <img src="src/components/skills-preview/images/html-logo.png" />
                        <h3>HTML 5</h3>
                        <p>Years of Experience: <strong>Intermediate</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src="src/components/skills-preview/images/css-logo.png" />
                        <h3>CSS 3</h3>
                        <p>Years of Experience: <strong>Intermediate</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src="src/components/skills-preview/images/js-logo.png" />
                        <h3>JAVASCRIPT</h3>
                        <p>Years of Experience: <strong>Intermediate</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src="src/components/skills-preview/images/reactjs-logo.png" />
                        <h3>REACT JS</h3>
                        <p>Years of Experience: <strong>Intermediate</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src="src/components/skills-preview/images/Bootstrap-logo.png" />
                        <h3>BOOTSTRAP</h3>
                        <p>Years of Experience: <strong>Intermediate</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src="src/components/skills-preview/images/java-logo.png" />
                        <h3>JAVA</h3>
                        <p>Years of Experience: <strong>Beginner</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src="src/components/skills-preview/images/mysql-logo.png" />
                        <h3>MY SQL</h3>
                        <p>Years of Experience: <strong>Intermediate</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src="src/components/skills-preview/images/github-logo.png" />
                        <h3>GIT HUB</h3>
                        <p>Years of Experience: <strong>Intermediate</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src="src/components/skills-preview/images/canva-logo.jpeg" />
                        <h3>CANVA</h3>
                        <p>Years of Experience: <strong>Beginner</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src="src/components/skills-preview/images/msword-logo.png" />
                        <h3>MS WORD</h3>
                        <p>Years of Experience: <strong>1+</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src="src/components/skills-preview/images/powerpoint-logo.png" />
                        <h3>POWER POINT</h3>
                        <p>Years of Experience: <strong>Intermediate</strong></p>
                    </div>
                    <div className="skills-card">
                        <img src="src/components/skills-preview/images/msexcel-logo.png" />
                        <h3>MS EXCEL</h3>
                        <p>Years of Experience: <strong>1+</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;