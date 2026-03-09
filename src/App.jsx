import React, { useRef, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
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

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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
    <div>
      <Navbar scrollTo={scrollTo} refs={{ homeRef, aboutRef, contactRef }} />
      <Routes>
        <Route path="/" element={
          <>
            <Home ref={homeRef} />
            <About ref={aboutRef} />
            <Skillspreview />
            <Projectspreview /> 
            <Contact ref={contactRef} />
          </>
        } />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer scrollTo={scrollTo} refs={{ homeRef, aboutRef, contactRef }}/>
    </div>
  )
}

export default App;
