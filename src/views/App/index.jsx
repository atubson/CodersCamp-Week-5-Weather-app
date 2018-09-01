import React, { PureComponent, Fragment } from 'react';
import axios from 'axios';
import {workWithResponse} from './Request';
import WeatherBoard from '../../components/WeatherBoard/WeatherBoard';
import WeatherMenu from '../../components/WeatherMenu/WeatherMenu';

const API_KEY = '436d1eea572e5d346f8cd5eb7c8dfa14';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchCity: 'Warszawa',
      response: null,
    };

    this.doRequest = this.doRequest.bind(this);
  }

  doRequest() {
    const request = `http://api.openweathermap.org/data/2.5/forecast?q=${
      this.state.searchCity
    }&mode=json&units=metric&APPID=${API_KEY}`;
    axios.get(request).then(res => {
      const response = workWithResponse(res.data, this.state.searchCity);
      this.setState({ response: response });
    });
  }

  UNSAFE_componentWillMount() {
    this.doRequest();
  }

  render() {
    if (!this.state.response) {
      return <div />;
    }

    return <Fragment>
        <WeatherMenu
          searchCity={this.state.searchCity}
          updateSearchCity={city => this.setState({ searchCity: city }, this.doRequest)}
          refresh={this.doRequest}
        />
        <WeatherBoard weatherList={this.state.response} />
      </Fragment>;
  }
}

export default App;
