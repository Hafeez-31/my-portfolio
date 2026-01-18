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
