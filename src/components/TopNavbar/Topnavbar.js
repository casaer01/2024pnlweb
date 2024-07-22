import React, { Component } from "react";
import logo from "../../images/PNLdistlogo.png";
import sidebrand from "../../images/papelred.png";
import './topnavbar.css';


class Topnavbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top mask-custom shadow-3">
                    <div className="container-fluid navBody ">

                        <img src={sidebrand} alt="paper Picado" className="bakeryLogo" />
                        <img src={logo} alt="Bakery Logo" className="bakeryLogo" />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Tortillas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Orders</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Contact Us</a>
                                </li>
                            </ul>

                        </div>
                        
                    </div>
                </nav>

            </div>
        );
    }
}

export default Topnavbar;