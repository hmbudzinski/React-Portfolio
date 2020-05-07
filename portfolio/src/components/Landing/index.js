import React from "react";
import "../../styles/home.css"
import $ from "jquery"

export function Landing() {

  function aboutMe(){
    document.body.scrollTop = (920); 
    document.documentElement.scrollTop = (920);
    // document.body.scrollTop = document.getElementById("test"); 
    // document.documentElement.scrollTop = document.getElementById("test");
    console.log("click")
    // window.scrollTo($("#aboutmediv"));
  }

  return (
    <>
    <div className="jumbotron jumbotron-fluid" id="landing">
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