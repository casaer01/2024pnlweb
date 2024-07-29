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
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={slideConcha} class="d-block w-100" alt="Conchas baked fresh everyday"/>
                        </div>
                        <div class="carousel-item">
                            <img src={slideTort} class="d-block w-100" alt="12 flavors of tortillas"/>
                        </div>
                        <div class="carousel-item">
                            <img src={slideSweet} class="d-block w-100" alt="Pasteries, cookies, & muffins"/>
                        </div>
                        <div class="carousel-item">
                            <img src={slideVegans} class="d-block w-100" alt="Vegan mexican bread sold"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Slideshow;