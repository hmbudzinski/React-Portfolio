import React from "react";
import "../../styles/home.css"
import MyImage from "../../styles/Comp.jpg"
import TopBtn from "../TopBtn"

const styles ={
  icon: {
    fontSize: "4rem",
    color:"dark grey"
  },
  font: {
    fontSize:"2rem"
  }
}
export function AboutMe() {

  return (
    <div className="jumbotron jumbotron-fluid" id="aboutmediv">
        <h1 className="co-lg display-4 text-center">About</h1>
        <hr id="abtLine"></hr>
        <div className="row">

          <h3 className="col-md">
            Modern  
            <br></br>
            <span style={styles.icon}>
            <i className="fa fa-connectdevelop about"></i>
            </span>
            <h5>Focus on a modern, clean design.</h5>
          </h3>

          <h3 className="col-md">
            Responsive 
            <br></br>
            <span style={styles.icon}>
            <i className="fa fa-object-group about"></i>
            </span>
            <h5>My apps will work on all sized-devices, big or small.</h5>
          </h3>

          <h3 className="col-md">
            Intuitive 
            <br></br>
            <span style={styles.icon}>
            <i class="fa fa-cogs about"></i>
            </span>
            <h5>Easy to use, user-focused sites.</h5>
          </h3>
        </div>

        <hr id="breakline"></hr>

        <div className="row">
        <div className="col-md text-center">
        <p className="lead text-center" style={styles.font}>This is Me<span style={styles.icon}><i class="fa fa-angle-double-right"></i></span></p>
        <span style={styles.icon}>
        <i className="fa fa-angle-double-down" id="meArrow"></i>
        </span>
        <img src={MyImage} className="card-img-top" alt="Me"></img>
        </div>
        <div className="col-md">
        <p className="lead text-center">I am a Paralegal and World Traveler turned Web Developer who recently graduated from a six-month full stack web development program from the University of Denver, feel free to poke around and check out my work</p>
        </div>
        </div>
        <TopBtn />
    </div>
  )
}

export default AboutMe;