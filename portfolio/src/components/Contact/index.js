import React from "react";
import "../../styles/home.css"
import TopBtn from "../TopBtn"

export function Contact() {

  return (
    <div className="jumbotron jumbotron-fluid" id="contactdiv">
    <div className="container">
        <h1 className="text-center">Want to collab on a project?</h1>
        {/* <form action="https://mailthis.to/@gmail.com" 
        method="POST"> */}
        {/* <input type="text" className="form-control" placeholder="Full Name" name="name"></input>
        <input type="text" className="form-control" placeholder="Email" name="email"></input>
        <div class="input-group">
        <textarea class="form-control" aria-label="With textarea" placeholder="Message"></textarea>
        </div>        
        <button type="submit" onClick="">Send</button> */}
        {/* </form> */}
        <div id="contact-box">
          <h3 className="text-center">You can reach me through the following methods:
          </h3>
          <h4>Email: hayleybudzinski@gmail.com</h4>
          <h4> LinkedIn:
          <a href="https://vast-hamlet-59362.herokuapp.com/" class="card-link"> www.linkedin.com/in/hayley-budzinski</a>
          </h4>
          <h4> GitHub:
          <a href="https://github.com/hmbudzinski" class="card-link"> https://github.com/hmbudzinski</a>
          </h4>
        </div>
    </div>
    <TopBtn />
    </div>
  )
}

export default Contact;