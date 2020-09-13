import React from 'react';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import arrow from "./arrow.png"
import './project.css';

function Project () {
    return (
        <div className="project">
            <h2 className="project__title">Featured Projects</h2>
            <p>Brief details of new and popular projects. To view full listings, you will be required to
                sign up and become a member.</p>
                <a className="project__button" href="#">Become a Member</a>

                <ul className="project__cards">
                    <li className="project__cards__item">
                        <img src={img1}></img>
                        <h3 className="project__cards__item__title"></h3>
                        <p className="project__cards__item__text"></p>
                        <span className="project__cards__item__text-span__percent"></span>
                        <span className="project__cards__item__text-span__day"></span>
                        <a className="project__cards__item__link" href="#"> See Project Details<img src={arrow}></img></a>
                    </li>
                    <li className="cards__item"></li>
                    <li className="cards__item"></li>
                </ul>
        </div>
        
       
    )
}

export default Project;