import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css"

const styles ={
  nav: {
    fontSize: "30px",
    cursor: "pointer"
  }
}

function Nav() {
// function Nav({ page }) {

  function Top(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }

  function About(){
    document.body.scrollTop = (980); 
    document.documentElement.scrollTop = (980);
  }

  function Work(){
    document.body.scrollTop = (2700); 
    document.documentElement.scrollTop = (2700);
  }

  function Exp(){
    document.body.scrollTop = (3440); 
    document.documentElement.scrollTop = (3440);
  }
  
  function Contact(){
    document.body.scrollTop = (4000); 
    document.documentElement.scrollTop = (4000);
  }

  function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("main").style.marginLeft = "0";
  }

  function openNav(){
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("main").style.marginLeft = "250px";
  }

  return (
<>
<nav style={styles.nav} onClick={openNav} id="hamburger">&#9776;</nav>
<div id="mySidenav" className="sidenav">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
  <ul className="navbar-nav">
  <Link href="#" onClick={Top}>Home </Link>
  <Link href="#" onClick={About}>About Me</Link>
  <Link href="#" onClick={Work}>My Work</Link>
  <Link href="#" onClick={Exp}>Services </Link>
  <Link href="#" onClick={Contact}>Contact </Link>
  </ul>
</div>
</>
    // <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
    //   <div>
    //     <Link className="navbar-brand" onClick={Top}>
    //       Hayley Budzinski
    //     </Link>
    //   </div>

    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //   <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //   <div>
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link
    //           onClick={About}
    //           className={
    //             (window.location.pathname === "/home")
    //               ? "nav-link active"
    //               : "nav-link"
    //           }
    //         >
    //           About Me
    //           </Link>
    //       </li>
    //     </ul>
    //   </div>

    //   <div>
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link className={(page === "Work") ? "nav-link active" : "nav-link"}
    //           onClick={Work}
    //           >My Work</Link>
    //       </li>
    //     </ul>
    //   </div>

    //   <div>
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link className={(page === "Experience") ? "nav-link active" : "nav-link"}
    //           onClick={Exp}
    //         >My Experience</Link>
    //       </li>
    //     </ul>
    //   </div>

    //   <div>
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link className={(page === "Contact") ? "nav-link active" : "nav-link"}
    //           onClick={Contact}>Contact Me</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   </div>

    // </nav>
  )
}

export default Nav;