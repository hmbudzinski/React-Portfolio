import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "../src/components/NavBar";
import AboutMe from "../src/components/AboutMe";
import Work from "../src/components/Work";
import Exp from "../src/components/Exp";
import Contact from "../src/components/Contact";
import Landing from "../src/components/Landing";
import "./styles/home.css"

function App() {

  window.onscroll = function () {scrollFunction()};

  function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      document.getElementById("navbar").style.top = "0";
    }else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }
  
  return (
    <Router>
      <div>
        <Nav />
        <Landing />
        <AboutMe />
        <Work />
        <Exp />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
