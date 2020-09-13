import React from 'react';
import logo from './logo.png';
import glasses from './logo_tab.jpg';
import './presentation.css';

function Presentation () {
    return (
        
        <div className="presentation">
            <img className="presentation__logo" src={logo}></img>
            <h2 className="presentation__title">Our work is the presentation of our capabilities.</h2>
            <p className="presentation__text-top">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  </p>
            <p className="presentation__text-bottom">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <ul className="presentation__tab">
            <li className="presentation__tab__item presentation__tab__item-active"><div className="presentation__tab__item__wrapper presentation__tab__item__wrapper-active"><span className="presentation__tab__number">1</span></div> <p className="presentation__tab__text" >Simple</p></li>
            <li className="presentation__tab__item"><div className="presentation__tab__item__wrapper"><span className="presentation__tab__number">2</span></div> <p className="presentation__tab__text" >Transparent</p></li>
            <li className="presentation__tab__item"><div className="presentation__tab__item__wrapper"><span className="presentation__tab__number">3</span></div> <p className="presentation__tab__text" >Collaborative</p></li>
        </ul> 
            <div className="persentation__wrapper">
                <img className="presentation__logo" src={glasses}></img>
                <div className="persentation__text-wrapper">
                    <h2 className="persentation__glass-title">Browse projects, like booking a hotel online !</h2>
                    <p className="persentation__glass-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
       
       
    )
}

export default Presentation;