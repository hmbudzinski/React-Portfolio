import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css"

function Nav({ page }) {

  function Top(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }

  function About(){
    document.body.scrollTop = (920); 
    document.documentElement.scrollTop = (920);
  }

  function Work(){
    document.body.scrollTop = (2350); 
    document.documentElement.scrollTop = (2350);
  }

  function Exp(){
    document.body.scrollTop = (3170); 
    document.documentElement.scrollTop = (3170);
  }
  
  function Contact(){
    document.body.scrollTop = (4000); 
    document.documentElement.scrollTop = (4000);
  }

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      <div>
        <Link className="navbar-brand" onClick={Top}>
          Hayley Budzinski
        </Link>
      </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              onClick={About}
              className={
                (window.location.pathname === "/home")
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Me
              </Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={(page === "Work") ? "nav-link active" : "nav-link"}
              onClick={Work}
              >My Work</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={(page === "Experience") ? "nav-link active" : "nav-link"}
              onClick={Exp}
            >My Experience</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={(page === "Contact") ? "nav-link active" : "nav-link"}
              onClick={Contact}>Contact Me</Link>
          </li>
        </ul>
      </div>
      </div>

    </nav>
  )
}

export default Nav;