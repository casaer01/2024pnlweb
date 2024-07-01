import React, { Component } from "react";
import logo from "../../images/PNLdistlogo.png";
import './topnavbar.css';


class Topnavbar extends Component {
    render() {
        return (
            <header>
            {/* <!-- Navbar --> */}
            <nav class="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
                <div class="container">
                    <img src={logo} alt="Bakery Logo" class="bakeryLogo" />

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#!">Offer</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#!">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#!">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#!">Reference</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#!">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#!">Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#!">Contact</a>
                            </li>
                        </ul>

                    </div>
                    
                </div>
            </nav>
            {/* <!-- Navbar --> */}

            {/* <!--Section: Design Block--> */}

            {/* <!--Section: Design Block--> */}
            </header>
        );
    }
}

export default Topnavbar;