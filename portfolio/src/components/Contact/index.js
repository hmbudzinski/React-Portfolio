import React from "react";

export function Contact() {

  return (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
        <h1 className="display-4 text-center">Want to collab on a project? Contact me below!</h1>
        {/* <form action="https://mailthis.to/@gmail.com" 
        method="POST"> */}
        <input type="text" className="form-control" placeholder="Full Name" name="name"></input>
        <input type="text" className="form-control" placeholder="Email" name="email"></input>
        <div class="input-group">
        <textarea class="form-control" aria-label="With textarea" placeholder="Message"></textarea>
        </div>        
        <button type="submit" onClick="">Send</button>
        {/* </form> */}
    </div>
    </div>
  )
}

export default Contact;