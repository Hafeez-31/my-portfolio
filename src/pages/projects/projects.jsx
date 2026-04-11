import React, { useState, useEffect } from "react";
import "./projects.css"
import Construct from "../../assets/images/projects/construct.png";
import ModernFurniture from "../../assets/images/projects/furniture.png";
import BootsrapLily from "../../assets/images/projects/boostraplily.png";
import Consuloan from "../../assets/images/projects/consuloan.png";
import ToDo from "../../assets/images/projects/todo.png";
import Calculator from "../../assets/images/projects/calculator.png";
import Crud from "../../assets/images/projects/crud.png";
import loginSignup from "../../assets/images/projects/loginandsignup.png";
import bookTrip from "../../assets/images/projects/bookmytrip.png";
import urbanBurger from "../../assets/images/projects/urbanburger.png";
import MarineCargo from "../../assets/images/projects/marine.png";
import PolicyNest from "../../assets/images/projects/policynest.png";
import Clock from "../../assets/images/projects/clock.png";
import CurrencyConverter from "../../assets/images/projects/currency.png";

const Projects = () => {

    const [activeSection, setActiveSection] = useState("own")
    const [visibleCount, setVisibleCount] = useState(6);

    const handleViewMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    const handleViewLess = () => {
        setVisibleCount(6);
    }

    let productId = 1;

    const landingPages = [
        { id: productId++, img: Construct, title: "Contruction", tech: ["UI & UX", "REACT JS", "RESPONSIVE DESIGN"], link: "https://primeconstructor.netlify.app/", type: "Landing Pages" },
        { id: productId++, img: ModernFurniture, title: "Modern Furniture", tech: ["HTML", "CSS", "RESPONSIVE DESIGN"], link: "https://hafeez-31.github.io/furniture-website", type: "Landing Pages" },
        { id: productId++, img: BootsrapLily, title: "BootstrapLily", tech: ["HTML", "CSS", "UI/UX"], link: "https://hafeez-31.github.io/bootstraplily-website", type: "Landing Pages" },
        { id: productId++, img: Consuloan, title: "Consuloan", tech: ["HTML", "CSS", "BOOTSTRAP"], link: "https://hafeez-31.github.io/consuloan-website/", type: "Landing Pages" },
        { id: productId++, img: MarineCargo, title: "Marine Cargo", tech: ["HTML", "CSS", "RESPONSIVE DESIGN"], link: "https://hafeez-31.github.io/marinecargo/", type: "Landing Pages" },
    ]

    const ownProjects = [
        { id: productId++, img: loginSignup, title: "Login and Signup Form", tech: ["HTML", "CSS", "JAVASCRIPT"], link: "https://hafeez-31.github.io/Loginandsignupform/", type: "Own Project" },
        { id: productId++, img: bookTrip, title: "Book my Trip", tech: ["HTML", "CSS", "JAVASCRIPT"], link: "https://hafeez-31.github.io/bookmytrip/", type: "Own Project" },
        { id: productId++, img: PolicyNest, title: "Policy Nest", tech: ["HTML", "CSS", "JAVASCRIPT"], link: "https://insurancenest.netlify.app/", type: "Own Project" },
        { id: productId++, img: ToDo, title: "ToDo List", tech: ["UI & UX", "REACT JS", "RESPONSIVE DESIGN"], link: "https://crud-todolistapp.netlify.app/", type: "Own Project" },
        { id: productId++, img: Calculator, title: "Calculator", tech: ["HTML", "CSS", "JAVASCRIPT"], link: "https://hafeez-31.github.io/calculator", type: "Own Project" },
        { id: productId++, img: Crud, title: "CRUD App", tech: ["HTML", "CSS", "JAVASCRIPT"], link: "https://hafeez-31.github.io/crud-application/", type: "Own Project" },
        { id: productId++, img: Clock, title: "Analog Clock", tech: ["HTML", "CSS", "JAVASCRIPT"], link: " https://hafeez-31.github.io/analog-clock/", type: "Own Project" },
        { id: productId++, img: CurrencyConverter, title: "Live Currency Converter", tech: ["HTML", "CSS", "JAVASCRIPT"], link: "https://hafeez-31.github.io/currencyconverter/", type: "Own Project" },

    ]

    const ecommerceProjects = [
        { id: productId++, img: urbanBurger, title: "Urban Burger", tech: ["HTML", "CSS", "JAVASCRIPT"], link: "https://hafeez-31.github.io/urbanburger/", type: "Ecommerce" },
    ]

    let currentProjects = [];

    if (activeSection === "landing") {
        currentProjects = landingPages;
    } else if (activeSection === "own") {
        currentProjects = ownProjects;
    } else if (activeSection === "ecommerce") {
        currentProjects = ecommerceProjects;
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div>
            <div className="project-title">
                <h1>Compeleted Projects</h1>
                <p>Home / Projects</p>
            </div>
            <div className="project-text">
                <h1>Portfolios</h1>
                <p>A showcase of my recent web development projects.</p>
                <div className="menu">
                    <button
                        className={activeSection === "landing" ? "active" : ""}
                        onClick={() => { setActiveSection("landing"); setVisibleCount(6); }}
                    >
                        Landing Pages
                    </button>
                    <button
                        className={activeSection === "own" ? "active" : ""}
                        onClick={() => { setActiveSection("own"); setVisibleCount(6); }}>
                        Own Projects
                    </button>
                    <button
                        className={activeSection === "ecommerce" ? "active" : ""}
                        onClick={() => { setActiveSection("ecommerce"); setVisibleCount(6); }}>
                        E-Commerce
                    </button>
                </div>

                <div className="project-grid">
                    {currentProjects.slice(0, visibleCount).map((project) => (
                        <a href={project.link} target="_blank" rel="noreferrer">

                            <div className="project-col" key={project.id}>

                                <img src={project.img} alt={project.title} />

                                <h2>{project.title}</h2>

                                <div className="projects-tech">
                                    {project.tech.map((techItem, idx) => (
                                        <span key={idx}>{techItem}</span>
                                    ))}
                                </div>

                                <div className="project-footers">
                                    <a className="project-links">SEE PROJECT</a>
                                    <span className="project-types">
                                        {project.type}
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="center">
                    {currentProjects.length > 6 && (
                        <button
                            className="view-more"
                            onClick={
                                visibleCount < currentProjects.length
                                    ? handleViewMore
                                    : handleViewLess
                            }
                        >
                            {visibleCount < currentProjects.length
                                ? "VIEW MORE"
                                : "VIEW LESS"}
                        </button>
                    )}
                </div>

            </div>
        </div>
    )
};

export default Projects;