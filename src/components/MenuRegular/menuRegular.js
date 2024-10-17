import React, { Component } from 'react';
import './menuRegular.css';

export class menuRegular extends Component {
  render() {
    return (
      <div className="container-fluid menuBackground">

        <div className="row" >
          <div className="col-sm">
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

          {/* <div className="col-sm">
            <img src='' alt='mexican muffin with a concha on top'></img>
            <h2>ManteConcha</h2>
            <p>
              A mexican mix between the two popular pasteries muffin and a conchas. 
              Instead of a regular muffen top a crisp mini concha takes its place.
            </p>
          </div> */}

          <div class="card col-sm">
            <img src="..." class="card-img-top" alt="mexican muffin with a concha on top"/>
            <div class="card-body">
              <h3 class="card-title">ManteConcha</h3>
              <p class="card-text">A mexican mix between the two popular pasteries muffin and a conchas. 
              Instead of a regular muffen top a crisp mini concha takes its place.</p>
            </div>
          </div>

          <div className="col-sm">
            <img src='' alt='bread desc'></img>
            <h2>Bolillo</h2>
            <p>
              Simple mexican rolls that can be seen as a mexican's version of the french baguette. 
              Crispy on the outside and soft on the inside these bolillos are used as a side for soups or can be cut and used for sandwiches.
            </p>
          </div>
          <div className="col-sm">
            <img src='' alt='bread desc'></img>
            <h2>Telera</h2>
            <p>
              Mexican version of a white bread roll that is soft and fluffy in a oval shape. 
              Telera can be used to make any range of sandwiches or can simply enjoyed with butter on it.
            </p>
          </div>
        </div>

        <div className="row">

          <div class="card col-sm">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h3 class="card-title">Buñuelos</h3>
              <p class="card-text">Disc of fried dough that is covered in cinnamon sugar or can be topped in sryup. While this fried dough is popular to eat during the holidays it is enjoyed thoughout the year.</p>
            </div>
          </div>

          <div class="card col-sm">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h3 class="card-title">Orajas</h3>
              <p class="card-text">These puff pastry cookies are sweet and crunchy treats with a coating of caramelized sugar. Orejas are perfect to have with a cup of coffee or alone as a pick-me-up.</p>
            </div>
          </div>

          <div class="card col-sm">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h3 class="card-title">Empanada</h3>
              <p class="card-text">Delicious sweet dough that has a baked outside and has fruit filling inside of the bread. Raspberry, pineapple, apple are one of possible filling flavors.</p>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-sm">
            One of two columns
          </div>

          <div className="col-sm">
            One of two columns
          </div>

        </div>
      </div>
    )
  }
}

export default menuRegular