import React from "react";
import TopBtn from "../TopBtn"
import "../../styles/progress.css"
import "../../styles/home.css"

function Exp() {

  return (
    <>
    <div className="jumbotron jumbotron-fluid" id="servicesdiv">
    <div className="container">
        <h1 className="display-4 text-center">Services</h1>
        <hr id="breakline"></hr>
        <p className="lead text-center">Thumbnails on what i use here</p>
    </div>

    <section id="about-us">
      <div className="container">

        <div className="row">
        <div className="col-lg-12 text-center">
        <h2 className="section-heading">About Us</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="about-info">
          <h2>About us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <div className="col-sm-6">
          <h4 className="progress-title">HTML</h4>
          <div className="progress">
          <div className="progress-bar bar3">
          <div className="progress-value">90%</div>
        </div>
      </div>

      <h4 className="progress-title">JavaScript</h4>
        <div className="progress">
        <div className="progress-bar bar1">
        <div className="progress-value">45%</div>
        </div>
        </div>
      <h4 className="progress-title">CSS</h4>
        <div className="progress">
        <div className="progress-bar bar2">
        <div className="progress-value">78%</div>
        </div>
        </div>
      <h4 className="progress-title">React</h4>
        <div className="progress">
        <div className="progress-bar bar2">
        <div className="progress-value">78%</div>
        </div>
        </div>
      <h4 className="progress-title">Node</h4>
        <div className="progress">
        <div className="progress-bar bar2">
        <div className="progress-value">78%</div>
        </div>
        </div>
      <h4 className="progress-title">Wordpress</h4>
        <div className="progress">
        <div className="progress-bar bar1">
        <div className="progress-value">45%</div>
        </div>
        </div>
      </div>
      </div>
      </div>
  </section>

    <TopBtn />
    </div>
    </>
  )
}

export default Exp;