import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import About from "./components/about/about";
import Skillspreview from "./components/skills-preview/skillspreview";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Skills from "./pages/skills/skills";

const App = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  let mouseX = null;
  let mouseY = null;

  let outerX = null;
  let outerY = null;
  let innerX = null;
  let innerY = null;

  

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    const navbar = document.querySelector(".navbar");

    // Start hidden
    outer.style.opacity = "0";
    inner.style.opacity = "0";

    let cursorVisible = false;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (outerX === null) {
        outerX = mouseX;
        outerY = mouseY;
        innerX = mouseX;
        innerY = mouseY;
      }

      if (!cursorVisible && !isHoveringNavbar(e)) {
        outer.style.opacity = "1";
        inner.style.opacity = "1";
        cursorVisible = true;
      }
    };

    const hideCursor = () => {
      outer.style.opacity = "0";
      inner.style.opacity = "0";
      cursorVisible = false;
    };

    const showCursor = () => {
      if (cursorVisible) {
        outer.style.opacity = "1";
        inner.style.opacity = "1";
      }
    };

    // Check if mouse is over navbar
    const isHoveringNavbar = (e) => {
      if (!navbar) return false;
      const rect = navbar.getBoundingClientRect();
      return (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );
    };

    const handleMouseLeaveWindow = (e) => {
      if (
        e.clientX <= 0 ||
        e.clientY <= 0 ||
        e.clientX >= window.innerWidth ||
        e.clientY >= window.innerHeight
      ) {
        hideCursor();
      }
    };

    const handleMouseEnterWindow = () => {
      showCursor();
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        showCursor();
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (navbar) {
      navbar.addEventListener("mouseenter", hideCursor);
      navbar.addEventListener("mouseleave", () => {
        // Show cursor only if mouse has already moved
        if (cursorVisible) outer.style.opacity = "1";
        if (cursorVisible) inner.style.opacity = "1";
      });
    }

    const animate = () => {
      if (mouseX !== null && mouseY !== null) {
        innerX += (mouseX - innerX) * 0.2;
        innerY += (mouseY - innerY) * 0.2;

        outerX += (mouseX - outerX) * 0.08;
        outerY += (mouseY - outerY) * 0.08;

        inner.style.left = innerX + "px";
        inner.style.top = innerY + "px";

        outer.style.left = outerX + "px";
        outer.style.top = outerY + "px";
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      hideCursor();
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (navbar) {
        navbar.removeEventListener("mouseenter", hideCursor);
        navbar.removeEventListener("mouseleave", showCursor);
      }
    };
  }, []);
  

  return (
    <div>
      <Navbar scrollTo = {scrollTo} refs = {{homeRef, aboutRef, contactRef}}/>
      <Routes>
        <Route path="/" element={
          <>
            <Home ref = {homeRef}/>
            <About  ref = {aboutRef}/>
            <Skillspreview />
            <Contact ref = {contactRef} />
          </>
        } />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
      <div className="cursor-circle-outer" ref={outerRef}></div>
      <div className="cursor-circle-inner" ref={innerRef}></div>
    </div>
  )
}

export default App
