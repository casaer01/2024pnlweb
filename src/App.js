// import logo from './logo.svg'clear;
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
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
        <InfoBar />
        <Routes>
          {/* <Route path='/' element= { <Topnavbar/> } /> */}

          {/* <Route path='/' element={ <InfoBar/> } />           */}

          <Route path='/' element={ <SlideShow/> } > 
            <Route index element={ <AboutUs /> } />
          </Route>


          {/* <Route path='/aboutus' element={ <AboutUs/> } /> */}

          <Route path='/menu' element={<MenuRegular/>} />

          <Route path='/order' element={ <Order/>} />

          <Route path='/menucookies' element={ < CookiesMenu />} />

          {/* <Route path='/' element={ <Footer/> } /> */}
        </Routes>
        <Footer />
      </div>
  );
}

// Use useRoutes to display page with mulitple elements.  https://stackoverflow.com/questions/40541994/multiple-path-names-for-a-same-component-in-react-router
// Use nested routes?

// Layout routes may be the true answer https://reactrouter.com/6.30.1/route/route#layout-routes

// https://www.w3schools.com/react/react_router.asp current version of react router.


export default App;


