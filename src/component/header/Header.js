import React from 'react';
import '../header/header.css';
import logo from '../header/logo.jpg'

function Header() {
  return (
    <div className="header">
      <img src={logo}/>
      <ul className="header__menu">                       
          <li className="header__menu__item"> <a className="header__menu__item__link" href="#">HOME</a> </li>
          <li className="header__menu__item"> <a className="header__menu__item__link" href="#">HOW IT WORKS</a> </li>
          <li className="header__menu__item"> <a className="header__menu__item__link" href="#">DISCOVER A PROJECT</a></li>
          <li className="header__menu__item"> <a className="header__menu__item__link" href="#">BLOG</a></li>
          <li className="header__menu__item"><a className="header__menu__item__link" href="#">FIND OUT MORE</a></li>
      </ul>
      <a href= "#" className= "header__button">login</a>
    </div>
  );
}

export default Header;
