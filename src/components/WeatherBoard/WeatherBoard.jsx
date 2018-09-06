import React from "react";
import WeatherTiles from '../WeatherTiles/WeatherTiles';

import './WeatherBoard_styles.css';

// board posiadający listę kafelków

export default class WeatherBoard extends React.Component{

  render(){

    if (!this.props.weatherList) {
      return <div>brak propsa</div>;
    }else

    //console.log('WeatherBoard.jsx' + this.props.weatherList.date);
    return(
      <div className="weather-board">
        <div className="background"></div>
        {this.props.weatherList.map((dayWeather, index) =>{
          return (<WeatherTiles
            key = {index}
            dayWeather = {dayWeather}/>)
        })}

      </div>
    );
  }
}
