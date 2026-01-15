import React from "react";
import { Link } from "react-router-dom";
import "./skills-preview.css"

const Skillspreview = () => {
    return (
        <div className="skills-section">
            <div className="skills-header">
                <h1>Skills</h1>
            </div>
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
            </div>
            <div className="view-btn">
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