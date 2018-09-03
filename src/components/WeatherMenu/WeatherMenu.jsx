import './WeatherMenu_styles.css';
import SearchBar from '../SearchBar/SearchBar';
// Komponent trzymający aktualne miasto, przycisk refresh oraz wyszukiwarke
import React, { Component } from 'react';

export default class WeatherMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="weather-menu">
        <div className="search-city">{this.props.searchCity}</div>
        <div className="refresh-button" onClick={this.props.refresh}>
          {' '}
        </div>
        <SearchBar cityName={this.props.updateSearchCity} />
      </div>
    );
  }
}
