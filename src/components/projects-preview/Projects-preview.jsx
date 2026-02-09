// import React, { useState, useEffect, useRef } from "react";
// import "./Projects-preview.css";
// import ToDo from "../../assets/images/projects/todo.png";
// import Calculator from "../../assets/images/projects/calculator.png";
// import ModernFurniture from "../../assets/images/projects/furniture.png";
// import BootsrapLily from "../../assets/images/projects/boostraplily.png";
// import Construct from "../../assets/images/projects/construct.png";
// import Crud from "../../assets/images/projects/crud.png";
// import Consuloan from "../../assets/images/projects/consuloan.png";

// const originalProjects = [
//     { img: ToDo, title: "ToDo List", tech: ["UI & UX", "REACT JS", "RESPONSIVE DESIGN"], link: "https://crud-todolistapp.netlify.app/" },
//     { img: Calculator, title: "Calculator", tech: ["HTML", "CSS", "JAVASCRIPT"], link: "https://hafeez-31.github.io/calculator" },
//     { img: ModernFurniture, title: "Modern Furniture", tech: ["HTML", "CSS", "RESPONSIVE DESIGN"], link: "https://hafeez-31.github.io/furniture-website" },
//     { img: BootsrapLily, title: "BootstrapLily", tech: ["HTML", "CSS", "UI/UX"], link: "https://hafeez-31.github.io/bootstraplily-website" },
//     { img: Construct, title: "Construct", tech: ["UI & UX", "REACT JS", "RESPONSIVE DESIGN"], link: "https://primeconstructor.netlify.app/" },
//     { img: Crud, title: "ToDo List", tech: ["HTML", "CSS", "JS"], link: "https://hafeez-31.github.io/crud-application/" },
//     { img: Consuloan, title: "Consuloan", tech: ["HTML", "CSS", "BOOTSTRAP", "RESPONSIVE DESIGN"], link: "https://hafeez-31.github.io/consuloan-website/" },
// ];

// const visibleCards = 3;
// const projects = [...originalProjects, ...originalProjects.slice(0, visibleCards)];

// const Projectspreview = () => {
//     const [index, setIndex] = useState(0);
//     const [animate, setAnimate] = useState(true);
//     const gridRef = useRef(null);
//     const intervalRef = useRef(null);

//     const getSlideWidth = () => (window.innerWidth <= 768 ? 320 + 20 : 360 + 60);

//     const startAutoSlide = () => {
//         if (!intervalRef.current) {
//             intervalRef.current = setInterval(() => {
//                 setIndex((prev) => prev + 1);
//             }, 4000); 
//         }
//     };

//     const stopAutoSlide = () => {
//         if (intervalRef.current) {
//             clearInterval(intervalRef.current);
//             intervalRef.current = null;
//         }
//     };

//     useEffect(() => {
//         setAnimate(false);
//         setIndex(0);
//         requestAnimationFrame(() => setAnimate(true));
//     }, []);

//     useEffect(() => {
//         startAutoSlide();
//         return () => stopAutoSlide();
//     }, []);

//     useEffect(() => {
//         const grid = gridRef.current;
//         const onTransitionEnd = () => {
//             if (index >= originalProjects.length) {
//                 setAnimate(false);
//                 setIndex(0);
//             }
//         };
//         grid.addEventListener("transitionend", onTransitionEnd);
//         return () => grid.removeEventListener("transitionend", onTransitionEnd);
//     }, [index]);

//     useEffect(() => {
//         if (!animate) requestAnimationFrame(() => setAnimate(true));
//     }, [animate]);

//     return (
//         <div className="projects-section">
//             <h1>Projects</h1>

//             <div className="slider">
//                 <div
//                     ref={gridRef}
//                     className={`projects-grid ${animate ? "animate" : ""}`}
//                     style={{ transform: `translateX(-${index * getSlideWidth()}px)` }}
//                     onMouseEnter={stopAutoSlide}
//                     onMouseLeave={startAutoSlide}
//                 >
//                     {projects.map((p, i) => (
//                         <div className="project-cards" key={i}>
//                             <img src={p.img} alt={p.title} />
//                             <h2>{p.title}</h2>

//                             <div className="projects-title">
//                                 {p.tech.map((t, idx) => (
//                                     <span key={idx} className="tech-box">{t}</span>
//                                 ))}
//                             </div>

//                             <div className="projects-footer">
//                                 <a href={p.link} target="_blank" rel="noreferrer" className="projects-link">SEE PROJECT</a>
//                                 <span className="projects-type">Personal Project</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="project-btn"><span>VIEW ALL</span></div>
//         </div>
//     );
// };

// export default Projectspreview;

import React, { useState, useEffect, useRef } from "react";
import "./Projects-preview.css";

import ToDo from "../../assets/images/projects/todo.png";
import Calculator from "../../assets/images/projects/calculator.png";
import ModernFurniture from "../../assets/images/projects/furniture.png";
import BootsrapLily from "../../assets/images/projects/boostraplily.png";
import Construct from "../../assets/images/projects/construct.png";
import Crud from "../../assets/images/projects/crud.png";
import Consuloan from "../../assets/images/projects/consuloan.png";

const originalProjects = [
  { img: ToDo, title: "ToDo List", tech: ["UI & UX", "REACT JS", "RESPONSIVE DESIGN"], link: "https://crud-todolistapp.netlify.app/" },
  { img: Calculator, title: "Calculator", tech: ["HTML", "CSS", "JAVASCRIPT"], link: "https://hafeez-31.github.io/calculator" },
  { img: ModernFurniture, title: "Modern Furniture", tech: ["HTML", "CSS", "RESPONSIVE DESIGN"], link: "https://hafeez-31.github.io/furniture-website" },
  { img: BootsrapLily, title: "BootstrapLily", tech: ["HTML", "CSS", "UI/UX"], link: "https://hafeez-31.github.io/bootstraplily-website" },
  { img: Construct, title: "Construct", tech: ["UI & UX", "REACT JS", "RESPONSIVE DESIGN"], link: "https://primeconstructor.netlify.app/" },
  { img: Crud, title: "CRUD App", tech: ["HTML", "CSS", "JS"], link: "https://hafeez-31.github.io/crud-application/" },
  { img: Consuloan, title: "Consuloan", tech: ["HTML", "CSS", "BOOTSTRAP"], link: "https://hafeez-31.github.io/consuloan-website/" }
];

const visibleCards = 3;
const projects = [...originalProjects, ...originalProjects.slice(0, visibleCards)];

const Projectspreview = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const gridRef = useRef(null);
  const intervalRef = useRef(null);

  // 🔥 REAL width from DOM (NO CSS change)
  const getSlideWidth = () => {
    if (!gridRef.current) return 0;

    const firstCard = gridRef.current.querySelector(".project-cards");
    if (!firstCard) return 0;

    const gridStyle = window.getComputedStyle(gridRef.current);
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

  // Infinite loop reset
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const onTransitionEnd = () => {
      if (index >= originalProjects.length) {
        setAnimate(false);
        setIndex(0);
      }
    };

    grid.addEventListener("transitionend", onTransitionEnd);
    return () => grid.removeEventListener("transitionend", onTransitionEnd);
  }, [index]);

  // Re-enable animation after reset
  useEffect(() => {
    if (!animate) requestAnimationFrame(() => setAnimate(true));
  }, [animate]);

  // 🔁 Resize / orientation change support
  useEffect(() => {
    const handleResize = () => {
      setAnimate(false);
      setIndex(0);
      requestAnimationFrame(() => setAnimate(true));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="projects-section">
      <h1>Projects</h1>

      <div className="slider">
        <div
          ref={gridRef}
          className={`projects-grid ${animate ? "animate" : ""}`}
          style={{
            transform: `translateX(-${index * getSlideWidth()}px)`
          }}
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          {projects.map((p, i) => (
            <div className="project-cards" key={i}>
              <img src={p.img} alt={p.title} />
              <h2>{p.title}</h2>

              <div className="projects-title">
                {p.tech.map((t, idx) => (
                  <span className="tech-box" key={idx}>{t}</span>
                ))}
              </div>

              <div className="projects-footer">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="projects-link"
                >
                  SEE PROJECT
                </a>
                <span className="projects-type">Personal Project</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="project-btn">
        <span>VIEW ALL</span>
      </div>
    </div>
  );
};

export default Projectspreview;
