import React, { Component } from "react";
import slideConcha from "../../images/slideshowConchas.png";
import slideTort from "../../images/slideshowTortillas.png";
import slideSweet from "../../images/slideshowSweets.png";
import slideVegans from "../../images/slideshowVegans.png";
import './SlideShow.css';

class Slideshow extends Component {
    render() {
        return (
            <div>
                <div className="topblack row" >
                    <div className="col-md-7">
                        <span>
                            +1 312 243 5977  
                        </span>
                         |
                        <span>
                            <i className="fa-clock-o"/>
                            Mon - Sun 7:00 am - 8:00 pm
                        </span>
                         |
                         <span>
                            Weather:
                         </span>
                    </div>
                </div>
                <div className="Block" ></div>   
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slideConcha} className="d-block w-100" alt="Conchas baked fresh everyday"/>
                        </div>
                        <div className="carousel-item">
                            <img src={slideTort} className="d-block w-100" alt="12 flavors of tortillas"/>
                        </div>
                        <div className="carousel-item">
                            <img src={slideSweet} className="d-block w-100" alt="Pasteries, cookies, & muffins"/>
                        </div>
                        <div className="carousel-item">
                            <img src={slideVegans} className="d-block w-100" alt="Vegan mexican bread sold"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Slideshow;