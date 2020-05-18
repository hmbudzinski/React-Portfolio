import React from "react";
import "../../styles/home.css"
import QuarImage from "../../styles/one.PNG"
import TopBtn from "../TopBtn"


function Work() {

  return (
    <div className="jumbotron jumbotron-fluid" id="workdiv">
        <h1 className="display-4 text-center">My Work</h1>
        <hr id="breakline"></hr>
        <div className="row">
        <div className="card">
            <img src={QuarImage} className="card-img-top" alt="quarantivities"></img>
            <div className="card-body">
                <h5 className="card-title">Quarantivities</h5>
                <p className="card-text">Example Text</p>
                <a href="https://vast-hamlet-59362.herokuapp.com/" class="card-link">Visit My App</a>
            </div>
        </div>
        <div className="card">
            <img src={QuarImage} className="card-img-top" alt="Weather"></img>
            <div className="card-body">
                <h5 className="card-title">Weather</h5>
                <p className="card-text">Example Text</p>
                <a href="#" className="card-link">Visit My App</a>
            </div>
        </div>
        <div className="card">
            <img src={QuarImage} className="card-img-top" alt="Budget"></img>
            <div className="card-body">
                <h5 className="card-title">Budget-Tracker</h5>
                <p className="card-text">Example Text</p>
                <a href="#" className="card-link">Visit My App</a>
            </div>
        </div>
        <div className="card">
            <img src={QuarImage} className="card-img-top" alt="Nerdify"></img>
            <div className="card-body">
                <h5 className="card-title">Nerdify</h5>
                <p className="card-text">Example Text</p>
                <a href="#" className="card-link">Visit My App</a>
            </div>
        </div>
        </div>
        <TopBtn />
    </div>
  )
}

export default Work;