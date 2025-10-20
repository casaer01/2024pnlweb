// import logo from './logo.svg'clear;
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { createRoot } from "react-dom/client";

import Topnavbar from './components/TopNavbar/Topnavbar';
import InfoBar from './components/InfoBar/infoBar';
import SlideShow from './components/SlideShow/Slideshow';
import Footer from './components/Footer/footer';
import AboutUs from './components/AboutPNL/AboutPNL';
import MenuRegular from './components/MenuRegular/menuRegular';
import Order from './components/Orders/order';
import CookiesMenu from './components/cookiesMenu/cookiesMenu'


// const root = createRoot(document.getElementById("root"));

function App() {
  return (
      <div>
        <Topnavbar />
        <Routes>
          {/* <Route path='/' element= { <Topnavbar/> } /> */}

          {/* <Route path='/' element={ <InfoBar/> } />           */}
          <Route path='/' element={ <SlideShow/> } />


          <Route path='/aboutus' element={ <AboutUs/> } />

          <Route path='/' element={<MenuRegular/>} />

          <Route path='/' element={ <Order/>} />

          <Route path='/' element={ < CookiesMenu />} />

          <Route path='/' element={ <Footer/> } />
        </Routes>
      </div>
  );
}

// https://www.w3schools.com/react/react_router.asp current version of react router.


export default App;


