import React, { PureComponent } from 'react';
import { string, oneOf } from 'prop-types';
import {
  Container,
  UnorderedList,
  ListItem,
  City,
  FavButton,
  DelButton,
  IHeart,
  ITrash,
} from './CityList_styles';

const cityList = ['Wrocław', 'Paryż', 'New York'];
const favCityList = [];
class CityList extends PureComponent {
  constructor(props) {
    super(props);
    this.cityUlList = [];
    this.addCity(props.text);
    this.changeCity = this.props.changeCity.bind(this);
  }

  addCity(city) {
    if (!cityList.includes(city)) {
      cityList.unshift(city);
      this.refreshCityList();
    } else this.refreshCityList();
  }

  checkCity(city) {
    if (!favCityList.includes(city)) {
      return <IHeart className="far fa-heart"> </IHeart>;
    } else return <IHeart className="fas fa-heart"> </IHeart>;
  }

  refreshCityList() {
    this.cityUlList = cityList.map(city => {
      return (
        <ListItem key={city}>
          <City onClick={() => this.changeCity(city)}>{city}</City>
          <FavButton onClick={() => this.addToFav(city)}>{this.checkCity(city)}</FavButton>
          <DelButton onClick={() => this.deleteListItem(city)}>
            <ITrash className="fas fa-trash"> </ITrash>
          </DelButton>
        </ListItem>
      );
    });
  }

  addToFav(city) {
    cityList.splice(cityList.indexOf(city), 1);
    if (favCityList.includes(city)) {
      favCityList.splice(favCityList.indexOf(city), 1);
      cityList.push(city);
    } else {
      cityList.unshift(city);
      favCityList.unshift(city);
    }
    this.refreshCityList();
    this.forceUpdate();
  }

  deleteListItem(city) {
    cityList.splice(cityList.indexOf(city), 1);
    this.refreshCityList();
    this.forceUpdate();
  }

  render() {
    const { color } = this.props;
    return (
      <Container color={color}>
        <UnorderedList>{this.cityUlList}</UnorderedList>
      </Container>
    );
  }
}

CityList.propTypes = {
  text: string,
  color: oneOf(['default', 'primary']),
};

CityList.defaultProps = {
  text: 'Hi World',
  color: 'default',
};

export default CityList;
