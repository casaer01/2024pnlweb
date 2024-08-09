import React, { Component } from 'react';
import "./footer.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const link = "http://panaderianuevoleonpilsen.com/";

export default class footer extends Component {
    render() {
        return (
            <footer className='text-center text-lg-start bg-body-tertiary text-muted'>
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom footerSandwich">

                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on our social networks:</span>
                    </div>

                    <div>
                    <a href="https://www.tiktok.com/" className="me-4 text-reset">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://www.tiktok.com/" className="me-4 text-reset">
                        <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="https://www.tiktok.com/" className="me-4 text-reset">
                        <i className="bi bi-google"></i>
                    </a>
                    <a href="https://www.tiktok.com/" className="me-4 text-reset">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.tiktok.com/" className="me-auto text-reset">
                        <i className="bi bi-tiktok"></i>
                    </a>
                    </div>
                </section>
                <section className="footerCenter">
                    <div className="container text-center text-md-start pt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Panaderia Nuevo Leon
                                </h6>
                                <p>
                                    In the Pilsen Community of Chicago since 1973, we're a traditional self-serve mexican bakery having a wide varity of sweets, cakes, cookies, conchas, and tortillas. 
                                    In addition, our bakers also serve vegan goods that is baked daily and delicious.
                                </p>
                            </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Our services.
                            </h6>
                            <p className='footerLink' >
                                <a href="#!" className="text-reset ">Tortillas</a>
                            </p>
                            <p className='footerLink'>
                                <a href="#!" className="text-reset">Bread</a>
                            </p>
                            <p className='footerLink'>
                                <a href='#!' className='text-reset'>Deserts</a>
                            </p>
                            <p className='footerLink'>
                                <a href='#!' className='text-reset'>Vegan Pastries</a>
                            </p>

                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                            </h6>
                                <p className='footerLink'>
                                    <a href="#!" className="text-reset">Menu</a>
                                </p>
                                <p className='footerLink'>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p className='footerLink'>
                                    <a href="#!" className="text-reset">About us</a>
                                </p>
                                <p className='footerLink'>
                                    <a href="#!" className="text-reset">Contact us</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p>
                                        <i className="fas fa-home me-3 text-reset"></i> 1634 W. 18th Street. Chicago, Illinois
                                    </p>
                                    <p>
                                        <i className="fas fa-envelope me-3"></i>
                                        <a href='mailto:pnlpilsen@gmail.com?subject=PNL question' >pnlpilsen@gmail.com</a>
                                    </p>
                                        <i className="fas fa-phone me-3"></i>
                                        <a href="tel:+13122435977" className="fas fa-phone me-3" > +(312)243-5977</a>
                                    
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="text-center p-4 footerSandwich" >
                        © 2024 Copyright: 
                        <a className="text-reset fw-bold" href={link}>Panaderia Nuevo Leon</a>
                    </div>
            </footer>
        )
    }
}