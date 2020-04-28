import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../src/components/NavBar";
import AboutMe from "../src/components/AboutMe";
import Work from "../src/components/Work";
import Exp from "../src/components/Exp";
import Contact from "../src/components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <AboutMe />
        <Work />
        <Exp />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
