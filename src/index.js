import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css';

import Topnavbar from './components/TopNavbar/Topnavbar';
import InfoBar from './components/InfoBar/infoBar';
import SlideShow from './components/SlideShow/Slideshow';
import Footer from './components/Footer/footer';
import AboutUs from './components/AboutPNL/AboutPNL';
import MenuRegular from './components/MenuRegular/menuRegular';
import Order from './components/Orders/order';
import cookiesMenu from './components/cookiesMenu/cookiesMenu'

// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <BrowserRouter>
//     <Topnavbar />
//     <InfoBar />
//     <SlideShow />
//     <App />
//     <AboutUs />
//     <Footer />
//     <MenuRegular />
//     <cookiesMenu />
//     <Order />
// </BrowserRouter>
// );

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename='/' >
    <App />
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals