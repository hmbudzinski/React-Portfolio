import React from 'react';
import "./style.css";

function Card() {
return (      
        <div className="card">
            <img src="..." classNamt="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Example Text</p>
                <a href="#" class="card-link">Card link</a>
            </div>
        </div>
    );
}

export default Card;