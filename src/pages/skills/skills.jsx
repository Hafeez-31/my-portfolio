import React, { useEffect } from "react";
import "./skills.css";
import skillsData from "../../data/skills.json";

const Skills = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div>
      <div className="skills-header">
        <h1>Skills & Expertise</h1>
        <p>Home / <span>Skills</span></p>
      </div>

      <div className="skills-text">
        <div className="skills-word">
          <h1>Technical Skills</h1>
          <p>
            A showcase of the technologies and tools I use in web development.
          </p>
        </div>

        <div className="skills-wrapper">
          {skillsData.map((skill, index) => (
            <div className="skills-item" key={index}>
              <img
                src={skill.img}
                alt={skill.name}
              />

              <h3>{skill.name}</h3>
              <span>Experience: <strong>{skill.experience}</strong> years</span>

              <p>
                Proficiency Level:
                <strong> {skill.level}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;