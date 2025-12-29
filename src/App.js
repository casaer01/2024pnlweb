// import logo from './logo.svg'clear;
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Topnavbar from './components/TopNavbar/Topnavbar';
import InfoBar from './components/InfoBar/infoBar';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/footer';
import MenuRegular from './components/MenuRegular/menuRegular';
import Order from './components/Orders/order';
import CookiesMenu from './components/cookiesMenu/cookiesMenu'
import TortillasMenu from './components/TortillasMenu/TortillasMenu';

// Maybe this thread has the answer? https://www.reddit.com/r/reactjs/comments/r1usv4/how_do_i_display_multiple_components_on_a_single/
//Using the tag fragment maybe the answer to combine mutliple elements to show on one page.
// const root = createRoot(document.getElementById("root"));


function App() {
  return (
      <div>
        <Topnavbar />
        <InfoBar />
        <Routes>

          <Route path='/' element={ <Homepage/> } ></Route>


          <Route path='/menu' element={<MenuRegular/>} />

          <Route path='/order' element={ <Order/>} />

          <Route path='/menucookies' element={ < CookiesMenu /> } />

          <Route path='/tortillas' element={ <TortillasMenu/> } />

        </Routes>
        <Footer />
      </div>
  );
}

// Layout routes may be the true answer https://reactrouter.com/6.30.1/route/route#layout-routes
//Offical document not enough & explains too little.

// https://www.w3schools.com/react/react_router.asp current version of react router.


export default App;


