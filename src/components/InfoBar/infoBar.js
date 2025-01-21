import React, { Component, useState, useEffect } from "react";
import axios from "axios";

class infoBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          weatherData: null,
          error: null
        };
      }
    
      componentDidMount() {
        this.fetchWeather();
      }
    
      fetchWeather = async () => {
        try {
          // Get current conditions
          const response1 = await axios.get(
            'https://api.weather.gov/points/41.8781,-87.6298',
            {
              headers: {
                'User-Agent': 'MyChicagoWeatherApp'
              }
            }
          );
    
          const forecastUrl = response1.data.properties.forecast;
          
          // Get forecast data
          const response2 = await axios.get(forecastUrl);
          
          this.setState({
            weatherData: {
              location: response1.data.properties.location,
              forecast: response2.data
            }
          });
        } catch (err) {
          this.setState({ error: err.message });
        }
      }
    
    //   <h2>Current Weather in Chicago</h2>
    //   <p>Temperature: {weatherData.location.currentTemp}°F</p>
    //   <p>Conditions: {weatherData.location.conditions}</p>

    render() {
        return(
            <div className="topblack row" >
                <div className="col-md-7">
                    <span>
                        +1312 243 5977  
                    </span>
                    |
                    <span>
                        <i className="fa-clock-o"/>
                        Mon - Sun 7:00 am - 8:00 pm
                    </span>
                    |
                    <span>
                        Weather: {weatherData.location.currentTemp}°F
                    </span>
                </div>
            </div>
    )}
}

export default infoBar;