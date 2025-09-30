import React, { Component } from 'react'
import './cookiesMenu.css'

export class cookiesMenu extends Component {
  render() {
    return (
      <div className="container-fluid menuBackground" >

        <div className='row'>
          <div className='col-sm cardMain'>
            <div className='cardOuter'>
              <div className='cardHead'>
                <h1>Concha</h1>
              </div>
              <div className='cardDesc'>
                <p>Traditional mexican pan dulce sweet bread or known amoung regulars as a "Concha". The mexican bread called "Concha" is not only one of the sigatures of the bakery but also in mexican culture love for bread. The Concha is a fitting for any time of the day and can be enjoyed with milk, hot chocolate, or even with refried beans.</p>
              </div>
            </div>
          </div>

          <div className='col-sm cardMain'>
            <div className='cardOuter'>
              <div className='cardHead'>
                <img src={cookie} className='imgCard' alt='bread' />
                <h1>Concha Trigo</h1>
              </div>
              <div className='cardDesc'>
                <p>Traditional mexican pan dulce that uses wheat flour instead of white flour. A bread with more fiber and vitamins which is perfect for those wanting a healther option.</p>
              </div>
            </div>
          </div>

          <div className='col-sm cardMain'>
            <div className='cardOuter'>
              <div className='cardHead'>
                <h1>ManteConcha</h1>
              </div>
              <div className='cardDesc'>
                <p>A mexican mix between cupcakes and mexican conchas. Instead of a regular muffen top a small concha is placed.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default cookiesMenu