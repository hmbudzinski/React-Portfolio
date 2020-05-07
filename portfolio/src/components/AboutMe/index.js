import React from "react";
import "../../styles/home.css"
import MyImage from "../../styles/Comp.jpg"

export function AboutMe() {

  return (
    <div className="jumbotron jumbotron-fluid">
        <h1 className="co-lg display-4 text-center">About</h1>

        <div className="row">
          <h3 className="col-md">
            Clean Design 
            <i className="fa fa-drafting-compass"></i>
            <h5>Focus on a modern, clean design.</h5>
          </h3>
          <h3 className="col-md">
            Responsive 
            <i className="fa fa-object-group"></i>
            <h5>My apps wil work on all sized-devices, big or small.</h5>
          </h3>
          <h3 className="col-md">
            Intuitive 
            <i className="far fa-lightbulb"></i>
            <h5>Easy to use, user-focused sites.</h5>
          </h3>
        </div>

        <div className="row">
        <div className="col-md text-center">
        <p className="lead text-center">This is Me</p>
        <i className="fa fa-angle-double-down"></i>
        <img src={MyImage} className="card-img-top" alt="Me"></img>
        </div>
        <div className="col-md">
        <p className="lead text-center">I am a Paralegal and World Traveler turned Web Developer who recently graduated from a six-month full stack web development program from the University of Denver, feel free to poke around and check out my work</p>
        </div>
        </div>
    </div>
  )
}

export default AboutMe;