import './SearchBar_styles.css';
import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.onContentChange = this.onContentChange.bind(this);
    this.onEnterPressed = this.onEnterPressed.bind(this);
  }

  onContentChange(event) {
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  }

  onEnterPressed(event) {
    if (event.key === 'Enter') {
      this.props.cityName(this.state.text);
      this.setState({ text: '' });
      //dodaj text z search box do listy i zrob update requestu z tym tekstem
      console.log(event.target.value);
    }
  }

  render() {
    return (
      <input
        id="search-bar"
        placeholder="Enter city name"
        value={this.state.text}
        onChange={this.onContentChange}
        onKeyPress={this.onEnterPressed}
      />
    );
  }
}

// wyszukiwarka
