import React, { Component, useState, useEffect } from "react";

function callWeather() {
    const [userData, setUserData] = useState(null);
    const latitude = "41.878113";
    const longitude = "-87.629799";

    useEffect(() => {
  
      fetch(`https://api.weather.gov/points/${latitude},${longitude}`)
  
        .then(response => response.json())
  
        .then(data => setUserData(data));
  
    }, []);
}

class infoBar extends Component {
    render() {
        <div className="topblack row" >
            <div className="col-md-7">
                <span>
                    +1 312 243 5977  
                </span>
                |
                <span>
                    <i className="fa-clock-o"/>
                    Mon - Sun 7:00 am - 8:00 pm
                </span>
                |
                <span>
                    Weather:
                </span>
            </div>
        </div>
    }
}

export default infoBar;