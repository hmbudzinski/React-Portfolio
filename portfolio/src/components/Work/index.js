import React from "react";
// import Card from "../WorkCard";
import "../../styles/home.css"


function Work() {

  return (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
        <h1 className="display-4 text-center">My work</h1>
        <p className="lead text-center">Put Thumbnail Links to my Work here</p>
        <div className="card">
            <img src="..." classNamt="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Example Text</p>
                <a href="#" class="card-link">Card link</a>
            </div>
        </div>
        <div className="card">
            <img src="..." classNamt="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Example Text</p>
                <a href="#" class="card-link">Card link</a>
            </div>
        </div>
        <div className="card">
            <img src="..." classNamt="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Example Text</p>
                <a href="#" class="card-link">Card link</a>
            </div>
        </div>
        <div className="card">
            <img src="..." classNamt="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Example Text</p>
                <a href="#" class="card-link">Card link</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Work;