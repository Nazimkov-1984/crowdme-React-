import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './component/header/Header';
import Mainscreen from './component/MainScreen/Mainscreen';
import MyComponent from './component/MainScreen/Mainscreen';
import Main from './component/Main/Main';
import Presentation from './component/Presentation/Presentation';
import Cards from './component/Cards/Cards';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Presentation />
    <Cards />
  </React.StrictMode>,
  document.getElementById('root')
);


