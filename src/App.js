// import logo from './logo.svg'clear;
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";

import Topnavbar from './components/TopNavbar/Topnavbar';
import InfoBar from './components/InfoBar/infoBar';
import SlideShow from './components/SlideShow/Slideshow';
import Footer from './components/Footer/footer';
import AboutUs from './components/AboutPNL/AboutPNL';
import MenuRegular from './components/MenuRegular/menuRegular';
import Order from './components/Orders/order';
import cookiesMenu from './components/cookiesMenu/cookiesMenu'
import { Component } from 'react';
import { render } from '@testing-library/react';

const root = createRoot(document.getElementById("root"));

export default function App() {
  return (
      
        <Routes>
          <Route path='/' element= { <Topnavbar/> } />
          
          <Route path='/' element={ <SlideShow/> } />
          <Route path='/' element={ <InfoBar/> } />

          <Route path='/aboutus' element={ <AboutUs/> } />

          <Route path='/' element={ <Footer/> } />
        </Routes>
      
  );
}

// https://www.w3schools.com/react/react_router.asp current version of react router.


// export default App;


