import React from "react";
import "../../styles/home.css"
import QuarImage from "../../styles/one.PNG"
import NerdImage from "../../styles/two.PNG"
import WeatherImage from "../../styles/three.PNG"
import BudgetImage from "../../styles/four.PNG"
import TopBtn from "../TopBtn"

function Work() {

  return (
    <div className="jumbotron jumbotron-fluid" id="workdiv">
        <h1 className="display-4 text-center">My Work</h1>
        <hr id="breakline"></hr>
        
        <div className="row" id="workcontainer">
        <div className="card shadow-drop-2-center">
            <img src={QuarImage} className="card-img-top workimages" alt="quarantivities"></img>
            <div className="card-body">
                <h5 className="card-title">Quarantivities</h5>
                <a href="https://rocky-inlet-27187.herokuapp.com/" class="card-link" target="blank">Visit My App</a>
            </div>
        </div>
        <div className="card shadow-drop-2-center">
            <img src={WeatherImage} className="card-img-top workimages" alt="Weather"></img>
            <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
                <a href="https://hmbudzinski.github.io/WeatherApp/" className="card-link" target="blank">Visit My App</a>
            </div>
        </div>

        <div className="card shadow-drop-2-center">
            <img src={BudgetImage} className="card-img-top workimages" alt="Budget"></img>
            <div className="card-body">
                <h5 className="card-title">Budget-Tracker</h5>
                <a href="https://vast-hamlet-59362.herokuapp.com/" className="card-link" target="blank">Visit My App</a>
            </div>
        </div>
        <div className="card shadow-drop-2-center">
            <img src={NerdImage} className="card-img-top workimages" alt="Nerdify"></img>
            <div className="card-body">
                <h5 className="card-title">Nerdify</h5>
                <a href="https://calm-reef-29496.herokuapp.com/" className="card-link" target="blank">Visit My App</a>
            </div>
        </div>
        </div>
        <TopBtn />
    </div>
  )
}

export default Work;