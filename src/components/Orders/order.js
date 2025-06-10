import React, { Component, useState } from 'react';
import "./order.css";

const [isShown, setIsShown] = useState(false)

export class order extends Component{

    
    
    emailto() {
        // var tag = document.getElementsByClassName("learn-more")
        window.location.href = "mailto:pnlpilsen@gmail.com?subject=Custom Order&body=Place custom order here.";
        setIsShown(current => !current);
        // alert('button clicked');
    }

    render() {
        return(
            <div>
                <div className='orderFormCenter'>
                    <h1>Custom orders</h1>
                    <p>Our authentic panaderia takes in custom orders needed by our customers. Do you need a certain amount of conchas, cookies, or slices of cakes, then we can help you fulfill the order for any special event. We also do delivery when needed.</p>
                    <p>We can be contacted by phone or email</p>

                    
                    <button onClick={this.emailto} class="learn-more"> 
                            Create Order
                    </button>
                    
                </div>
            </div>
        )
    }
}

export default order