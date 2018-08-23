import React, { PureComponent } from 'react';
import { string, oneOf } from 'prop-types';
import { Container } from './CityList_styles';

class CityList extends PureComponent {
  render() {
    const { color, text } = this.props;
    return <Container color={color}>{text}</Container>;
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
