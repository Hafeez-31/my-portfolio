import React, { useRef, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Skillspreview from "./components/skills-preview/skillspreview";
import Projectspreview from "./components/projects-preview/Projects-preview";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Skills from "./pages/skills/skills";
import Projects from "./pages/projects/projects";
import Preloader from "./components/pre-loader/pre-loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  /* ==========================
     MOBILE DETECTION
  ========================== */

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ==========================
     CUSTOM CURSOR
  ========================== */

  const [cursor, setCursor] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [ring, setRing] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [showCursor, setShowCursor] = useState(true);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isMobile) return;

    setCursor({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    setRing({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const moveCursor = (e) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const hideCursor = () => setShowCursor(false);
    const showCursorAgain = () => setShowCursor(true);

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursorAgain);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursorAgain);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    let animationFrame;

    const animate = () => {
      setRing((prev) => ({
        x: prev.x + (cursor.x - prev.x) * 0.12,
        y: prev.y + (cursor.y - prev.y) * 0.12,
      }));

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [cursor, isMobile]);

  /* ==========================
     PRELOADER
  ========================== */

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      {/* ==========================
          GOLD CURSOR (DESKTOP ONLY)
      ========================== */}

      {!isMobile && (
        <>
          <div
            style={{
              position: "fixed",
              left: cursor.x,
              top: cursor.y,
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#d4af37",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 99999,
              opacity: showCursor ? 1 : 0,
              visibility: showCursor ? "visible" : "hidden",
              boxShadow:
                "0 0 12px rgba(212,175,55,.8), 0 0 30px rgba(212,175,55,.5)",
            }}
          />

          <div
            style={{
              position: "fixed",
              left: ring.x,
              top: ring.y,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "2px solid rgba(212,175,55,.8)",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 99998,
              opacity: showCursor ? 1 : 0,
              visibility: showCursor ? "visible" : "hidden",
              transition: "opacity .3s ease",
              boxShadow:
                "0 0 15px rgba(212,175,55,.25), 0 0 35px rgba(212,175,55,.15)",
            }}
          />
        </>
      )}

      {/* ==========================
          WEBSITE
      ========================== */}

      <Navbar
        scrollTo={scrollTo}
        refs={{
          homeRef,
          aboutRef,
          contactRef,
        }}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home ref={homeRef} />
              <About ref={aboutRef} />
              <Skillspreview />
              <Projectspreview />
              <Contact ref={contactRef} />
            </>
          }
        />

        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer
        scrollTo={scrollTo}
        refs={{
          homeRef,
          aboutRef,
          contactRef,
        }}
      />
    </>
  );
};

export default App;