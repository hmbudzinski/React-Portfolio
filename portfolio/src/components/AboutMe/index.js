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
            <h5>My apps will work on any sized device, big or small.</h5>
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
        <p className="lead text-center" style={styles.font}>
        <div className="extraspc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> 
        This is Me      
        <div className="extraspc">&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <span style={styles.icon}>
            <i class="fa fa-angle-double-right" id="rightarrow"></i>
        </span>
        </p>
        <span style={styles.icon}>
        <i className="fa fa-angle-double-down" id="meArrow"></i>
        </span>
        <div class="cropped-img">
        <img src={MyImage} className="card-img-top dcf-w-100% about-me-img" alt="Me"></img>
        </div>
        </div>
        <div className="col-md">
        <br></br>
        <p className="lead text-center">I am a Paralegal and World Traveler turned Web Developer who is a graduate of a full stack web development program from the University of Denver.</p>
        <br></br>
        <p className="lead text-center">I am passionate about making responsive user-friendly sites and applications with a clean, modern flare.</p>
        <br></br>
        <p className="lead text-center">Feel free to poke around and check out my work</p>
        </div>
        </div>
        <TopBtn />
    </div>
  )
}

export default AboutMe;