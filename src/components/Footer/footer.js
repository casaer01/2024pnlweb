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
                                    <i class="fas fa-gem me-3"></i>Panaderia Nuevo Leon
                                </h6>
                                <p>
                                    In the Pilsen Community of Chicago since 1973, we're a traditional self-serve mexican bakery having a wide varity of sweets, cakes, cookies, conchas, and tortillas. 
                                    In addition, our bakers also serve vegan goods that is baked daily and delicious.
                                </p>
                            </div>

                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Our services.
                            </h6>
                            <p className='footerLink' >
                                <a href="#!" className="text-reset ">Tortillas</a>
                            </p>
                            <p className='footerLink'>
                                <a href="#!" class="text-reset">Bread</a>
                            </p>
                            <p className='footerLink'>
                                <a href='#!' className='text-reset'>Deserts</a>
                            </p>
                            <p className='footerLink'>
                                <a href='#!' className='text-reset'>Vegan Pastries</a>
                            </p>

                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                            </h6>
                                <p className='footerLink'>
                                    <a href="#!" class="text-reset">Menu</a>
                                </p>
                                <p className='footerLink'>
                                    <a href="#!" class="text-reset">Orders</a>
                                </p>
                                <p className='footerLink'>
                                    <a href="#!" class="text-reset">About us</a>
                                </p>
                                <p className='footerLink'>
                                    <a href="#!" class="text-reset">Contact us</a>
                                </p>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p>
                                        <i class="fas fa-home me-3 text-reset"></i> 1634 W. 18th Street. Chicago, Illinois
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