import React from "react";
import ReactDOM from "react-dom";

import './WeatherTiles_styles.css';

// pojedyńczy kafelek z pogodą


export default class WeatherTiles extends React.Component{

    render(){

      if (!this.props.dayWeather) {
        return <div />;
      }

      return <div className="tile">
          <div className="date">{this.props.dayWeather.date}</div>
          <div className="image">
            <img src={'http://openweathermap.org/img/w/' + this.props.dayWeather.iconId} alt="image" />
          </div>
        <div className="temperature">{this.props.dayWeather.temp}</div>
        <div className="humidity">{this.props.dayWeather.humidity}</div>
        </div>;
    }

}

/*WeatherTiles.propTypes = {
    date: React.PropTypes.string.isRequired,
    iconId: React.PropTypes.string.isRequired,
    temp: React.PropTypes.string.isRequired,
    humidity: React.PropTypes.string.isRequired
};*/

ReactDOM.render(<WeatherTiles/>, document.getElementById('root'));
