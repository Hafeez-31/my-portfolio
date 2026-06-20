import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Projects-preview.css";
import projectsData from "../../data/projects.json";

const visibleCards = 3;

// First 8 projects for preview slider
const originalProjects = projectsData.slice(0, 8);

// Clone first 3 cards for infinite loop
const projects = [
  ...originalProjects,
  ...originalProjects.slice(0, visibleCards)
];

const Projectspreview = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [titleVisible, setTitleVisible] = useState(false);

  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSlideWidth = () => {
    if (!gridRef.current) return 0;

    const firstCard =
      gridRef.current.querySelector(".project-cards");

    if (!firstCard) return 0;

    const gridStyle = window.getComputedStyle(
      gridRef.current
    );

    const gap = parseFloat(gridStyle.gap) || 0;

    return firstCard.offsetWidth + gap;
  };

  const startAutoSlide = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => prev + 1);
      }, 4000);
    }
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) return;

    const onTransitionEnd = () => {
      if (index >= originalProjects.length) {
        setAnimate(false);
        setIndex(0);
      }
    };

    grid.addEventListener(
      "transitionend",
      onTransitionEnd
    );

    return () =>
      grid.removeEventListener(
        "transitionend",
        onTransitionEnd
      );
  }, [index]);

  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [animate]);

  useEffect(() => {
    const handleResize = () => {
      setAnimate(false);
      setIndex(0);

      requestAnimationFrame(() =>
        setAnimate(true)
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  return (
    <div className="projects-section">
      <div className="projects-container">
        <h1
          ref={titleRef}
          className={`projects-title-main ${titleVisible ? "show" : ""}`}
        >
          Featured Projects
        </h1>

        <p
          className={`projects-title-main ${titleVisible ? "show" : ""}`}
        >
          A showcase of projects highlighting my skills in frontend development,
          responsive design, and modern web technologies, with a focus on creating
          clean and user-friendly experiences.
        </p>

        <div className="slider">
          <div
            ref={gridRef}
            className={`projects-grid ${animate ? "animate" : ""
              }`}
            style={{
              transform: `translateX(-${index * getSlideWidth()
                }px)`
            }}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-cards">
                  <img
                    src={project.img}
                    alt={project.title}
                  />

                  <h2>{project.title}</h2>

                  <div className="projects-title">
                    {project.tech.map(
                      (tech, idx) => (
                        <span
                          className="tech-box"
                          key={idx}
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  <div className="projects-footer">
                    <span className="projects-link">
                      VIEW PROJECT
                    </span>

                    <span className="projects-type">
                      {project.type}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="project-btn">
          <span className="line"></span>

          <Link
            className="preview-btn"
            to="/projects"
          >
            VIEW ALL PROJECTS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projectspreview;