import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "../src/components/NavBar";
import AboutMe from "../src/components/AboutMe";
import Work from "../src/components/Work";
import Exp from "../src/components/Exp";
import Contact from "../src/components/Contact";
import Landing from "../src/components/Landing";
import "./styles/home.css"
import Particles from "particlesjs";

function App() {

  window.onload= function() {
    Particles.init
      ({
      maxParticles: 120,
      selector: 
      '.background',
      color: 
      '#ffffff',
      connectParticles: true
    });
    };

  return (
    <Router>
      <code>
        <Nav />
        <div id="main">
        <Landing />
        <AboutMe />
        <Work />
        <Exp />
        <Contact />
        </div>
      </code>
    </Router>
  );
}

export default App;
