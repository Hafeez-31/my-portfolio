import React, { useEffect } from "react";
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

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const skillsData = [
        { img: htmlLogo, name: "HTML 5", level: "Intermediate" },
        { img: cssLogo, name: "CSS 3", level: "Intermediate" },
        { img: jsLogo, name: "JAVASCRIPT", level: "Intermediate" },
        { img: reactLogo, name: "REACT JS", level: "Intermediate" },
        { img: bootstrapLogo, name: "BOOTSTRAP", level: "Intermediate" },
        { img: javaLogo, name: "JAVA", level: "Beginner" },
        { img: mysqlLogo, name: "MY SQL", level: "Intermediate" },
        { img: githubLogo, name: "GIT HUB", level: "Intermediate" },
        { img: canvaLogo, name: "CANVA", level: "Beginner" },
        { img: mswordLogo, name: "MS WORD", level: "1+" },
        { img: powerpointLogo, name: "POWER POINT", level: "Intermediate" },
        { img: msexcelLogo, name: "MS EXCEL", level: "1+" }
    ];

    return (
        <div>
            <div className="skils-title">
                <h1>Skills & Expertise</h1>
                <p>Home / Skills</p>
            </div>
            <div className="skills-text">
                <div className="skills-word">
                    <h1>Skills</h1>
                    <p>A showcase of the technologies and tools I use in web development.</p>
                </div>

                <div className="skills-wrapper">

                    {skillsData.map((skill, index) => (
                        <div className="skills-item" key={index}>
                            <img src={skill.img} alt={skill.name} />
                            <h3>{skill.name}</h3>
                            <p>
                                Years of Experience: <strong>{skill.level}</strong>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;