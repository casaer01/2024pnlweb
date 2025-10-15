import React ,{ Component } from "react";
import pnldistlogo from '../../../src/images/PNLdistlogo.png';
import pnldistmenu from '../../../src/images/PNLdistmenu.png';
import pnlstrip from '../../images/breads.png';
import "./AboutPNL.css"


export default class AboutPNL extends Component{

    render() {
        return (
        <div className="aboutpnl" id="aboutpnl"  >
            <span>
                <img className="pnlstrip" src={pnlstrip} alt="pnl strip of bread" />
            </span>
            <div>
                <div className="pnllogosRow row">
                    <div className="col">
                        <img src={pnldistlogo} alt="PNL's logo " width='100%' />
                    </div>
                    <div className="col">
                        <img src={pnldistmenu} alt="Pnl's short menu" width='100%' />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <p className='info' >
            In the Pilsen Community of Chicago since 1973, we're a traditional self-serve mexican bakery where you grab a tray and tongs when you enter then the fun begins picking your favorites from conchas, gorditas dulces, delicious empanadas or from our large assortment of cookies and sweets.
                Our pan dulce is made fresh daily from scratch with quality ingredients and baked throughout the day.
                A favorite among our customers is our scrumptious flour tortillas. 
            Made at our location with only the freshest ingredients in a variety of tempting flavors such as mole, habanero, chile morita, black bean with jalapeño, and many more.
            </p>
            <br />
            <p className='info'>
            We have a growing selection of Vegan breads, sweets, and tortillas - Stop by today to see all the delicacies we have to offer!
            </p>
            <span>
                <img className="pnlstrip" src={pnlstrip} alt="pnl strip of bread" />
            </span>
        </div>);
    }
}

// export default AboutPNL;