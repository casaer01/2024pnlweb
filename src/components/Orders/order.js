import React, { Component } from 'react';
import "./order.css";

export class order extends Component{
    render() {
        return(
            <div>
                <h1>Custom orders</h1>
                <p>Our bakery takes in custom orders needed by our customers. Do you need a certain amount of conchas, cookies, or slices of cakes, then we can help you fulfill the order for any event.</p>
                <p>We can be contacted by phone or email</p>
                <a href="mailto:[email protected]?subject=Custom Order&body=Hi there">
                    
                </a>
            </div>
        )
    }
}