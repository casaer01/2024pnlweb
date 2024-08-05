import React, { Component } from 'react';
import "./footer.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const link = "http://panaderianuevoleonpilsen.com/";

export default class footer extends Component {
    render() {
        return (
            <footer className='text-center text-lg-start bg-body-tertiary text-muted'>
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom footerSandwich">

                    <div class="me-5 d-none d-lg-block">
                        <span>Get connected with us on our social networks:</span>
                    </div>

                    <div>
                    <a href="https://www.tiktok.com/" class="me-4 text-reset">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="https://www.tiktok.com/" class="me-4 text-reset">
                        <i class="bi bi-twitter-x"></i>
                    </a>
                    <a href="https://www.tiktok.com/" class="me-4 text-reset">
                        <i class="bi bi-google"></i>
                    </a>
                    <a href="https://www.tiktok.com/" class="me-4 text-reset">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.tiktok.com/" class="me-auto text-reset">
                        <i class="bi bi-tiktok"></i>
                    </a>
                    </div>
                </section>
                <section class="footerCenter">
                    <div class="container text-center text-md-start pt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Laravel</a>
                            </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                            </h6>
                                <p>
                                    <a href="#!" class="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Help</a>
                                </p>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p>
                                        <i class="fas fa-home me-3"></i> New York, NY 10012, US
                                    </p>
                                    <p>
                                        <i class="fas fa-envelope me-3"></i>info@example.com
                                    </p>
                                    <a href="tel:+13122435977" class="fas fa-phone me-3" >
                                        <i class="fas fa-phone me-3">+ (312)243-5977</i> 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="text-center p-4 footerSandwich" >
                        © 2024 Copyright: 
                        <a class="text-reset fw-bold" href={link}>Panaderia Nuevo Leon</a>
                    </div>
            </footer>
        )
    }
}