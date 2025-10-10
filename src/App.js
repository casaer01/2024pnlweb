// import logo from './logo.svg'clear;
import './App.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route } from 'react-router-dom';



// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
