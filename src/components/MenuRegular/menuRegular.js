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
            <img src='' alt='Orajas that is crunchy and covered in sugar.'></img>
            <div className='card-body'>
              <h3 className='card-title' >Orajas</h3>
              <p className='card-text' >
                A fried golden crunchy outside covered in sugar while having a soft and warm inside. It is named due to its similar look of ears.
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='Cemas, circular and round top which can be treated as a bun for sandwiches.'></img>
            <div className='card-body'>
              <h3 className='card-title' >Cemas</h3>
              <p className='card-text' >
                Round shape soft bread that can be used for sandwiches and burgers.
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='Cemas Trigo, a wheat version of the orginal mexican buns.'></img>
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
            <img src='' alt='Donuts, circular bread with a hole in the middle and comes in chocolate, sugar, vanilla, or plain.'></img>
            <div className='card-body'>
              <h3 className='card-title' >Donuts</h3>
              <p className='card-text' >
                Craving something sweet? Our bakery serves up mouthwatering donuts in chocolate, vanilla, or sprinkles. Stop by for a treat that hits the spot!
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='Semi circle shaped bread with crunchy outside and filling on the inside similar to a pie.'></img>
            <div className='card-body'>
              <h3 className='card-title' >Empanada de fruta</h3>
              <p className='card-text' >
                Dive into our fruity empanada paradise! From classic to unique flavors, find your perfect sweet treat that’s sure to delight every bite taken.
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='Bisquet, a bread roll that is mildy sweet with a golden top.'></img>
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
            <img src='' alt='Marranito, mexican take of the Gingerbread man that is shaped into a pig.'></img>
            <div className='card-body'>
              <h3 className='card-title' >Marranito</h3>
              <p className='card-text' >
                Mexican Gingerbread pigs are a sweet bread commonly eaten with a glass of milk or coffee.
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='Churro, long, crispy, and covered in cinnamon sugar'></img>
            <div className='card-body'>
              <h3 className='card-title' >Churro</h3>
              <p className='card-text' >
                Famous mexican bread with a sweet flavor with a crispy outside while a soft and fluffy inside coated in cinnamon sugar.
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='Upside-down pineapple cupcake, moist and buttery with a cherry on top.'></img>
            <div className='card-body'>
              <h3 className='card-title' >Pineapple upside-down cupcake</h3>
              <p className='card-text' >
                a moist, buttery cake topped with caramelized pineapple and cherries, offering a perfect balance of sweet and tangy flavors. Its soft texture and rich caramel glaze make it a tropical dessert favorite in Latin American kitchens. 
              </p>
            </div>
          </div>

        </div>


        <div className="row">

          <div className="card col-sm">
            <img src='' alt='Square mini-cakes with frosting on top with sprinkles.'></img>
            <div className='card-body'>
              <h3 className='card-title' >Cuadro Pasteito</h3>
              <p className='card-text' >
                Squares pieces of a much larger size bread. Each piece featuring a mild sweetness and buttery flavor, complemented by a light, fluffy texture and a slight crunchy glaze. Enjoy eating this treat more with coffee or milk.
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='U-shape pan with butter on top and soft on the inside.'></img>
            <div className='card-body'>
              <h3 className='card-title' >Cuernos de Agua</h3>
              <p className='card-text' >
                Taste the simplicity of Cuernos de agua! Its slightly crisp exterior and soft, comforting inside make it a perfect treat for any occasion.
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='U-shape pan that soft on the inside and outside.'></img>
            <div className='card-body'>
              <h3 className='card-title' >Cuernos Mantequilla</h3>
              <p className='card-text' >
                Shaped like a croissant but lighter with a glaze outer layer giving it a outer shine and is completed with a touch of sweetness. This can be enjoyed with a hot cup of coffee or cappuccino or putting a spread on like jam or butter.
              </p>
            </div>
          </div>

        </div>


        <div className="row">

          <div className="card col-sm">
            <img src='' alt='Soft and chewy croissant filled with chocolate.'></img>
            <div className='card-body'>
              <h3 className='card-title' >Cuerno Nutella</h3>
              <p className='card-text' >
                Similar to a croissant it is soft and chewy on the inside and has a slight crunch on the outer layer, but with the added chocolate layer on the inside increasing it's sweetness.
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='Deep-fried puffy U-shaped bread.'></img>
            <div className='card-body'>
              <h3 className='card-title' >Orejas</h3>
              <p className='card-text' >
                Orejas are crisp, golden pastries with a rich, buttery flavor and a caramelized sugar coating that creates a perfect balance of sweetness and crunch. Each bite melts in your mouth with layers of light, flaky dough and a hint of toasted sugar that adds depth and warmth to the overall taste.
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='mexican pound cake shaped like square sponge cake.'></img>
            <div className='card-body'>
              <h3 className='card-title' >Panque</h3>
              <p className='card-text' >
                A mexican pound cake with a dense and tender inside like a sponge cake with a protective crumbling edge. The bread itself is sweet, buttery, and has a taste of vanilla.
              </p>
            </div>
          </div>

        </div>


        <div className="row">

          <div className="card col-sm">
            <img src='' alt='Rolled up pastery.'></img>
            <div className='card-body'>
              <h3 className='card-title' >Taquitos</h3>
              <p className='card-text' >
                Rolled up sweet pastry that is sweet and buttery. Soft and fluffy on the inside while a chrunchy outside.
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='Rolled up pastery with chocolate filling.'></img>
            <div className='card-body'>
              <h3 className='card-title' >Taquitos chocolate</h3>
              <p className='card-text' >
                Roller up mexican pastry that instead has a chocolate filling on the inside.
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt='Long bread that is twisted with semi hard layer.'></img>
            <div className='card-body'>
              <h3 className='card-title' >Tornillos</h3>
              <p className='card-text' >
                A mildly sweet bread that is soft and fluffy on the inside and has crunchy outside. It is shaped as if the bread was twisted like a screw.
              </p>
            </div>
          </div>

        </div>


        <div className="row">

          <div className="card col-sm">
            <img src='' alt=''></img>
            <div className='card-body'>
              <h3 className='card-title' ></h3>
              <p className='card-text' >
                
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt=''></img>
            <div className='card-body'>
              <h3 className='card-title' ></h3>
              <p className='card-text' >
                
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt=''></img>
            <div className='card-body'>
              <h3 className='card-title' ></h3>
              <p className='card-text' >
                
              </p>
            </div>
          </div>

        </div>


        <div className="row">

          <div className="card col-sm">
            <img src='' alt=''></img>
            <div className='card-body'>
              <h3 className='card-title' ></h3>
              <p className='card-text' >
                
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt=''></img>
            <div className='card-body'>
              <h3 className='card-title' ></h3>
              <p className='card-text' >
                
              </p>
            </div>
          </div>

          <div className="card col-sm">
            <img src='' alt=''></img>
            <div className='card-body'>
              <h3 className='card-title' ></h3>
              <p className='card-text' >
                
              </p>
            </div>
          </div>

        </div>


      </div>
    )
  }
}

export default menuRegular