// import logo from './logo.svg'clear;
import './App.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route } from 'react-router-dom';

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


// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// https://www.w3schools.com/react/react_router.asp current version of react router.

class App extends Component {
  render() {
    return (
      <Router basename="/app">
        <Route>
          <Route path="/" Component={Topnavbar} />


          <Route path='' Component={Footer} />
        </Route>
      </Router>
    );
  }
}

export default App;
