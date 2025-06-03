import React, { Component } from 'react';
import "./order.css";
import { Button } from 'bootstrap';

export class order extends Component{
    render() {
        return(
            <div>
                <div className='orderFormCenter'>
                    <h1>Custom orders</h1>
                    <p>Our bakery takes in custom orders needed by our customers. Do you need a certain amount of conchas, cookies, or slices of cakes, then we can help you fulfill the order for any event.</p>
                    <p>We can be contacted by phone or email</p>

                    <button class="learn-more"> Learn More
                    </button>
                    {/* <Button>
                        <a href="mailto:pnlpilsen@gmail.com?subject=Custom Order&body=Place custom order here.">
                        </a>
                    </Button> */}
                </div>
            </div>
        )
    }
}

export default order