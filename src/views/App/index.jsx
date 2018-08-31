import React, { PureComponent, Fragment } from 'react';
import axios from 'axios';
import {workWithResponse} from './Request';
import WeatherBoard from '../../components/WeatherBoard/WeatherBoard';



class App extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      searchCity: 'Warszawa',
      response: null
    }
  }

  doRequest(){
    const request = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.searchCity}&mode=json&units=metric&APPID=436d1eea572e5d346f8cd5eb7c8dfa14`;
    axios.get(request)
          .then(res => {
            const response = workWithResponse(res.data, this.state.searchCity);
            this.setState({ response: response });
          })
  }

  componentWillMount(){
    this.doRequest();
  }

  render() {

    if(!this.state.response){
      return <div></div>;
    }

    return (<Fragment>
        <WeatherBoard weatherList = {this.state.response} />
    </Fragment>);
  }
}

export default App;
