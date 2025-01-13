import React, { Component, useState, useEffect } from "react";

// https://www.codingdeft.com/posts/react-fetch-data-api/#fetching-data-in-react-using-async-await
const CurrWeather = () => {
    const [weatherData, setweatherData] = useState(null);
    const latitude = "41.878113";
    const longitude = "-87.629799";

    const fetchWeather = async () => {
        const response = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`);
        const data = await response.json();
        setweatherData(data)
    };

    useEffect(() => {
        fetchWeather()
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
                    Weather: {weatherData}
                </span>
            </div>
        </div>
    }
}

export default infoBar;