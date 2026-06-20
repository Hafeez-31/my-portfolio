import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./skills-preview.css";
import skillsData from "../../data/skills.json";

const Skillspreview = () => {
  const [cardsVisible, setCardsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      titleObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="skills-section" ref={sectionRef}>
      <div className="skills-content">
        <h1
          ref={titleRef}
          className={`skills-title ${titleVisible ? "show" : ""
            }`}
        >
          Technical Skills
        </h1>

        <p
          className={`skills-title ${titleVisible ? "show" : ""
            }`}
        >
          Technologies and tools I use to build modern, responsive, and user-friendly web applications.
        </p>
      </div>

      <div className="skills-container">
        {skillsData.slice(0, 8).map((skill, index) => (
          <div
            key={index}
            className={`skills-card ${cardsVisible ? "show" : ""
              }`}
          >
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

      <div className="view-btn">
        <span className="line"></span>

        <Link
          className="btn"
          to="/skills"
        >
          VIEW ALL SKILLS
        </Link>
      </div>
    </div>
  );
};

export default Skillspreview;