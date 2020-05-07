import React from "react";
import "../../styles/home.css"

export function TopBtn() {

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

  return (
    <>
    <div id="btn-container">
    <button className="btn-form btn btn-outline-secondary btn-md" onClick={topFunction} title="Go to top">Top</button>
    </div>
    </>
  )
}

export default TopBtn;