import React from 'react';
import './cards.css';
import img1 from './cards_1img.png';
import img2 from './cards_2img.png';



function Cards () {
    return (
        
        <div className="cards">
            <ul className="cards__wrapper">
                <li className="cards__item"> 
                <img className="cards__img" src={img1}></img>
                <div className="cards__text-wrapper">
                <h2 className="cards__title">Find Properties</h2>
                <p className="cards__text">Sign up to browse the portfolio.
Your journey to becoming a real estate baron starts here.</p>
                <a href="#" className="cards__button">Become A Member</a>
                </div>
                </li>

                <li className="cards__item">
                    <img className="cards__img" src={img2}></img>
                    <div className="cards__text-wrapper">
                    <h2 className="cards__title">Find Buyers</h2>
                    <p className="cards__text">Sign up to browse the portfolio.
Your journey to becoming a real estate baron starts here.</p>
                    <a href="#" className="cards__button cards__button--green">Submit Your Project</a>
                    </div>
                </li>
            </ul>
        </div>
       
       
    )
}

export default Cards;