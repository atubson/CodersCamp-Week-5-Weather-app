import React, { PureComponent, Fragment } from 'react';
import CityList from '../../components/CityList/CityList';
// import SearchBar from '../../components/SearchBar';
// import VideoBackground from '../../components/VideoBackground';
// import WeatherBoard from '../../components/WeatherBoard';
// import WeatherMenu from '../../components/WeatherMenu';
// import Header from '../../components/Header';
// import WeatherTiles from '../../components/WeatherTiles';

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <CityList text="CodersCrew" color="primary" />
      </Fragment>
    );
  }
}

export default App;
