import React from "react";
import "../../styles/home.css"

export function Landing() {

  return (
    <div className="jumbotron jumbotron-fluid" id="landing">
    <div className="container">
        <h1 className="display-4 text-center">Hello, I'm Hayley Budzinski,</h1>
        <h1 className="display-4 text-center">I'm a full-stack web developer.</h1>
        <button className="btn-form btn btn-outline-secondary btn-lg">View my Work</button>
    </div>
    </div>
  )
}

export default Landing;