import React, { Component } from 'react'
import SlideShow from './components/SlideShow/Slideshow';
import Aboutus from './components/AboutPNL/AboutPNL';

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
