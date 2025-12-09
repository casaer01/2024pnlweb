import React, { Component } from "react";
import {About} from '../AboutPNL/AboutPNL'
import Link from "react-router-dom";
import logo from "../../images/PNLdistlogo.png";
import sidebrand from "../../images/papelred.png";
import './topnavbar.css';


export default class Topnavbar extends Component {
    render() {
        return (
            <div>
                <div className="blank container-fluid navbar navbar-expand-lg p-0">
                    <img src={sidebrand} alt="paper Picado" className="bakeryIcon " />
                </div>
                <div className="d-flex">
                    <nav className="navbar d-flex navbar-expand-lg navbar-dark fixed-top mask-custom p-0 shadow-3">
                        
                        <div className="container-fluid navBody justify-content-between p-0">

                            <img src={sidebrand} alt="paper Picado" className="bakeryIcon no-gutter" />
                            <img src={logo} alt="Bakery Logo" className="bakeryLogo " />

                            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse justify-content-end navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav rightBlock mx-auto me-auto mb-2 mb-lg-1">
                                    <li className="nav-item ">
                                        <Link className="nav-link" to="/" >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/">Tortillas</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/menu">Bread</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/">Orders</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/order">Contact Us</Link>
                                    </li>
                                </ul>

                            </div>
                            
                        </div>
                    </nav>

                </div>
            </div>
        );
    }
}

// export default Topnavbar;