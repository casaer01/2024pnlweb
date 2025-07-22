import React, { Component } from 'react';
import cookie from '../../images/Cookie_MandM.jpg'
import './menuRegular.css';

export class menuRegular extends Component {
  render() {
    return (
      <div className="container-fluid menuBackground">

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

        <div className="row">

          <div className='col-sm cardMain'>
            <div className='cardOuter'>
              <div className='cardHead'>
                <h1>Bolillo</h1>
              </div>
              <div className='cardDesc'>
                <p>Simple mexican rolls that can be seen as a mexican's version of the french baguette. Crispy on the outside and soft on the inside these bolillos are used as a side for soups or can be cut and used for sandwiches.</p>
              </div>
            </div>
          </div>

          <div className='col-sm cardMain'>
            <div className='cardOuter'>
              <div className='cardHead'>
                <h1>Telera</h1>
              </div>
              <div className='cardDesc'>
                <p>Mexican version of a white bread roll that is soft and fluffy in a oval shape. Telera can be used to make any range of sandwiches or can simply enjoyed with butter on it.</p>
              </div>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='soft & fluffy bread'></img>
            <div className='card-body'>
              <h3 className='card-title' >Wheat Bolillo</h3>
              <p className='card-text' >
                Same as the regular Bolillo but instead of white flour wheat is used for customers who enjoy the wheat version of bread.
              </p>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="card col-sm">
            <img src='' alt='soft & fluffy bread'></img>
            <div className='card-body'>
              <h3 className='card-title' >Orajas</h3>
              <p className='card-text' >
                A fried golden crunchy outside covered in sugar while having a soft and warm inside. It is named due to its similar look of ears.
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='soft & fluffy bread'></img>
            <div className='card-body'>
              <h3 className='card-title' >Cemas</h3>
              <p className='card-text' >
                Round shape soft bread that can be used for sandwiches and burgers.
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='soft & fluffy bread'></img>
            <div className='card-body'>
              <h3 className='card-title' >Cemas Trigo</h3>
              <p className='card-text' >
                Similar to the regular cemas but using wheat flour to make the bread. Cemas de trigo (wheat) is also sold alongside with the regular version. 
              </p>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="card col-sm">
            <img src='' alt='soft & fluffy bread'></img>
            <div className='card-body'>
              <h3 className='card-title' >Donuts</h3>
              <p className='card-text' >
                Craving something sweet? Our bakery serves up mouthwatering donuts in chocolate, vanilla, or sprinkles. Stop by for a treat that hits the spot!
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='soft & fluffy bread'></img>
            <div className='card-body'>
              <h3 className='card-title' >Empanada de fruta</h3>
              <p className='card-text' >
                Dive into our fruity empanada paradise! From classic to unique flavors, find your perfect sweet treat that’s sure to delight every bite taken.
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='soft & fluffy bread'></img>
            <div className='card-body'>
              <h3 className='card-title' >Bisquet</h3>
              <p className='card-text' >
                Mexican sweet biscuits that has nice crunchy top. A flaky and buttery sweet bread traditional enjoyed at the end of the day with a cup of coffee.
              </p>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="card col-sm">
            <img src='' alt='soft & fluffy bread'></img>
            <div className='card-body'>
              <h3 className='card-title' >Marranito</h3>
              <p className='card-text' >
                Craving something sweet? Our bakery serves up mouthwatering donuts in chocolate, vanilla, or sprinkles. Stop by for a treat that hits the spot!
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='soft & fluffy bread'></img>
            <div className='card-body'>
              <h3 className='card-title' >Churro</h3>
              <p className='card-text' >
                Dive into our fruity empanada paradise! From classic to unique flavors, find your perfect sweet treat that’s sure to delight every bite taken.
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='soft & fluffy bread'></img>
            <div className='card-body'>
              <h3 className='card-title' ></h3>
              <p className='card-text' >
                Mexican sweet biscuits that has nice crunchy top. A flaky and buttery sweet bread traditional enjoyed at the end of the day with a cup of coffee.
              </p>
            </div>
          </div>

        </div>


      </div>
    )
  }
}

export default menuRegular