import './VideoBackground_styles.css';
// background z video
import './VideoBackground_styles.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const currentDate = new Date();
// background z video
class VideoBackground extends Component {
  constructor(props) {
    super(props);
  }

  changeFilm() {
    if (this.props.choosenCity[0].weatherId == 800) //clear sky
    {
      if (currentDate.getHours() <= 20 && currentDate.getHours() >= 6) {
        return 'clear_sky_day';
      } else {
        return 'clear_sky_night';
      }
    } else if (this.props.choosenCity[0].weatherId == 801) { /* few clouds */
      if (currentDate.getHours() <= 20 && currentDate.getHours() >= 6) {
        return 'sun_clouds_day';
      } else {
        return 'sun_clouds_night';
      }
    } else if (this.props.choosenCity[0].weatherId > 801) { /* clouds */
      if (currentDate.getHours() <= 20 && currentDate.getHours() >= 6) {
        return 'clouds_day';
      } else {
        return 'clouds_night';
      }
    } else if (this.props.choosenCity[0].weatherId == 701 || this.props.choosenCity[0].weatherId == 711) { /* mists */
        return 'mist_day';
    } else if (this.props.choosenCity[0].weatherId >= 600 && this.props.choosenCity[0].weatherId <= 622) { /* snow */
      if (currentDate.getHours() <= 20 && currentDate.getHours() >= 6) {
        return 'snow_day';
      } else {
        return 'snow_night';
      }
    } else if (this.props.choosenCity[0].weatherId >= 500 && this.props.choosenCity[0].weatherId <= 531) { /* rain-sun */
      if (currentDate.getHours() <= 20 && currentDate.getHours() >= 6) {
        return 'rain_sun_day';
      } else {
        return 'rain_sun_night';
      }
    } else if (this.props.choosenCity[0].weatherId >= 200 && this.props.choosenCity[0].weatherId <= 232) { /* storm */
      if (currentDate.getHours() <= 20 && currentDate.getHours() >= 6) {
        return 'storm_day';
      } else {
        return 'storm_night';
      }
    }
  }
  
  render() {
    if (!this.props.choosenCity) {
      return <div>brak propsa</div>;
    } else {
      return <video key={this.changeFilm()} loop autoPlay>
        <source src={'/src/videos/' + this.changeFilm() + '.mp4'} type="video/mp4" />
      </video>;
    }
  }
}

// ReactDOM.render(<VideoBackground />, document.getElementById('root'));

export default VideoBackground;
