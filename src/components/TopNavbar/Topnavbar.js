import React, { Component } from "react";
import logo from "../../images/PNLdistlogo.png";
import sidebrand from "../../images/papelred.png";
import './topnavbar.css';


class Topnavbar extends Component {
    render() {
        return (
            <div className="d-flex">
                <nav className="navbar d-flex navbar-expand-lg navbar-dark fixed-top mask-custom shadow-3 ">
                    <div className="container-fluid navBody justify-content-between">

                        <img src={sidebrand} alt="paper Picado" className="bakeryIcon " />
                        <img src={logo} alt="Bakery Logo" className="bakeryLogo " />

                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse justify-content-end navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav rightBlock mx-auto me-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <a className="nav-link " href="#!">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Tortillas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Orders</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">About</a>
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