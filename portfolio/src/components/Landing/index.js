import React from "react";
import "../../styles/home.css"

export function Landing() {

  function aboutMe(){
    document.body.scrollTop = (920); 
    document.documentElement.scrollTop = (920);
  }

  return (
    <>
    <div className="jumbotron jumbotron-fluid" id="landing">
    <canvas class="background"></canvas>
    <div className="container">
        <h1 className="display-4 text-center">Hello, I'm Hayley Budzinski,</h1>
        <h1 className="display-4 text-center">I'm a full-stack web developer.</h1>
        <div id="btn-container">
        <button className="btn-form btn btn-outline-secondary btn-lg" onClick={aboutMe}id="scrollBtn">View My Work   <i className="fa fa-arrow-right"></i></button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Landing;