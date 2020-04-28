import React from "react";
import { Link } from "react-router-dom";
// import API from "../../utils/API"

function Nav({ page }) {

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <Link className="navbar-brand" to="/home">
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
              to="/home"
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
            <Link className={(page === "Experience") ? "nav-link active" : "nav-link"}
              to={{
                pathname: "/body",
                state: {
                  location: 'Experience'
                }
              }}
            >My Experience</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={(page === "Work") ? "nav-link active" : "nav-link"}
              to={{
                pathname: '/body',
                state: {
                  location: 'Work'
                }
              }}>My Work</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={(page === "Contact") ? "nav-link active" : "nav-link"}
              to={{
                pathname: '/body',
                state: {
                  category: 'Contact'
                }
              }}>Contact Me</Link>
          </li>
        </ul>
      </div>
      </div>

    </nav>
  )
}

export default Nav;