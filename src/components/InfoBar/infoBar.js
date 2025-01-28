import React, { Component, useState, useEffect } from "react";
import axios from "axios";

// class infoBar extends React.Component {


// {/* <div className="topblack row" >
//   <div className="col-md-7">
//       <span>
//           +1312 243 5977  
//       </span>
//       |
//       <span>
//           <i className="fa-clock-o"/>
//           Mon - Sun 7:00 am - 8:00 pm
//       </span>
//       |
//       <span>
//           Weather: {this.state.weatherData[0]}°F
//       </span>
//   </div>
// </div> */}

function infoBar() {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    fetch('https://api.weather.gov/gridpoint/TWLX/CHI/123')
      .then(res => res.json())
      .then(data => {
        const forecastUrl = data.properties.forecast;
        fetch(forecastUrl)
          .then(res => res.json())
          .then(data => setTemp(data.properties.periods[0].temperature));
      })
      .catch(error => console.error('Error:', error));
  }, []);

  if (!temp) return <div>Loading...</div>;

  return <div>Current temperature in Chicago: {temp}°C</div>;
}

export default infoBar;