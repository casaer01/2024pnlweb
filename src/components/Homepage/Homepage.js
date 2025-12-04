import React, { Component } from 'react'
import SlideShow from '../SlideShow/Slideshow';
import Aboutus from '../AboutPNL/AboutPNL';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <SlideShow />
                <Aboutus />
            </div>
        )
    }
}
