import React from 'react';
import logo from './logo.png';
import './presentation.css';

function Presentation () {
    return (
        <div className="presentation">
            <img className="presentation__logo" src={logo}></img>
            <h2 className="presentation__title">Our work is the presentation of our capabilities.</h2>
            <p className="presentation__text-top">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  </p>
            <p className="presentation__text-bottom">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    )
}

export default Presentation;