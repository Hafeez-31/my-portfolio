import React from "react";
import "./Projects-preview.css"
import ToDo from "../../assets/images/projects/todo.png"
import Calculator from "../../assets/images/projects/calculator.png"

const Projectspreview = () => {
    return (
        <div className="projects-section">
            <h1>Projects</h1>
            <div className="projects-grid">
                <div className="project-cards">
                    <img src={ToDo} />
                    <h2>ToDo List</h2>
                    <div className="projects-title">
                        <p>REACT JS</p>
                    </div>
                    <div className="projects-footer">
                        <a target="_blank"
                            rel="noopener noreferrer" href="https://crudtodolist-application.netlify.app"
                            className="projects-link"
                        >
                            SEE PROJECTS
                        </a>
                        <span className="projects-type">Personal Projects</span>
                    </div>
                </div>
                <div className="project-cards">
                    <img src={Calculator} />
                    <h2>Calculator</h2>
                    <div className="projects-title">
                        <p>REACT JS</p>
                    </div>
                    <div className="projects-footer">
                        <a target="_blank"
                            rel="noopener noreferrer" href="https://hafeez-31.github.io/calculator"
                            className="projects-link"
                        >
                            SEE PROJECTS
                        </a>
                        <span className="projects-type">Personal Projects</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projectspreview;