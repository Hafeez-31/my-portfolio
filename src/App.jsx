import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import About from "./components/about/about";
import Skillspreview from "./components/skills-preview/skillspreview";
import Projectspreview from "./components/projects-preview/Projects-preview";
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


  return (
    <div>
      <Navbar scrollTo = {scrollTo} refs = {{homeRef, aboutRef, contactRef}}/>
      <Routes>
        <Route path="/" element={
          <>
            <Home ref = {homeRef}/>
            <About  ref = {aboutRef}/>
            <Skillspreview />
            <Projectspreview />
            <Contact  ref = {contactRef} />
          </>
        } />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
