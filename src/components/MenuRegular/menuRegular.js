import React, { Component } from 'react';
import './menuRegular.css';

export class menuRegular extends Component {
  render() {
    return (
      <div className="container">

        <div className='row' >
          <div className='col-sm'>
            <img src='' alt='mexican sweet bread concha'></img>
            <h2>Concha</h2>
            <p>
              Traditional mexican pan dulce sweet bread or known amoung regulars as a "Concha". 
              The mexican bread called "Concha" is not only one of the sigatures of the bakery but also in mexican culture love for bread. 
              The Concha is a fitting for any time of the day and can be enjoyed with milk, hot chocolate, or even with refried beans.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <img src='' alt='mexican muffin with a concha on top'></img>
            <h2>ManteConcha</h2>
            <p>
              A mexican mix between the two popular pasteries muffin and a conchas. Instead of a regular muffen top a crisp mini concha takes its place.
            </p>
          </div>
          <div className="col-sm">
            <img src='' alt='bread desc'></img>
            <h2>Pastery</h2>
            <p>
              desc
            </p>
          </div>
          <div className="col-sm">
            <img src='' alt='bread desc'></img>
            <h2>Pastery</h2>
            <p>
              desc
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            One of three columns
          </div>
          <div className="col-sm">
            One of three columns
          </div>
          <div className="col-sm">
            One of three columns
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            One of three columns
          </div>
          <div className="col-sm">
            One of three columns
          </div>
          <div className="col-sm">
            One of three columns
          </div>
        </div>
      </div>
    )
  }
}

export default menuRegular