import React, { useState, useEffect } from "react";
import "./projects.css";
import projectsData from "../../data/projects.json";

const Projects = () => {
    const [activeSection, setActiveSection] = useState("own");
    const [visibleCount, setVisibleCount] = useState(6);

    const menuItems = [
        { key: "own", label: "All Projects" },
        { key: "landing", label: "Landing Pages" },
        { key: "ecommerce", label: "E-Commerce" },
        { key: "admipanel", label: "Admin Panel" },
        { key: "fullstack", label: "Full Stack" }
    ];

    const currentProjects =
        activeSection === "own"
            ? projectsData
            : projectsData.filter(
                (project) => project.category === activeSection
            );

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const handleCategoryChange = (section) => {
        setActiveSection(section);
        setVisibleCount(6);
    };

    return (
        <section className="projects-page">

            {/* Hero Section */}
            <div className="project-title">
                <h1>Completed Projects</h1> 
                <p>Home / <span>Projects</span></p>
            </div>

            {/* Content */}
            <div className="project-text">

                <div className="section-heading">
                    <span className="section-tag">
                        Portfolio Showcase
                    </span>

                    <h2>Featured Projects</h2>

                    <p>
                        Explore a collection of my recent work including
                        landing pages, e-commerce platforms, admin dashboards,
                        and full-stack applications.
                    </p>
                </div>

                {/* Category Menu */}
                <div className="menu">
                    {menuItems.map((item) => (
                        <button
                            key={item.key}
                            className={
                                activeSection === item.key
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                handleCategoryChange(item.key)
                            }
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="project-grid">
                    {currentProjects
                        .slice(0, visibleCount)
                        .map((project, index) => (
                            <a
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link-wrapper"
                            >
                                <div
                                    className="project-col"
                                    style={{
                                        animationDelay: `${index * 0.08}s`,
                                    }}
                                >
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        loading="lazy"
                                    />

                                    <h2>{project.title}</h2>

                                    <div className="projects-tech">
                                        {project.tech?.map(
                                            (tech, techIndex) => (
                                                <span key={techIndex}>
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>

                                    <div className="project-footers">
                                        <span className="project-links">
                                            View Project 
                                        </span>

                                        <span className="project-types">
                                            {project.type}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                </div>

                {/* View More / View Less */}
                {currentProjects.length > 6 && (
                    <div className="center">
                        <button
                            className="view-more"
                            onClick={() =>
                                visibleCount <
                                    currentProjects.length
                                    ? setVisibleCount(
                                        (prev) => prev + 6
                                    )
                                    : setVisibleCount(6)
                            }
                        >
                            {visibleCount <
                                currentProjects.length
                                ? "LOAD MORE PROJECTS"
                                : "SHOW LESS"}
                        </button>
                    </div>
                )}
            </div>

        </section>
    );
};

export default Projects;