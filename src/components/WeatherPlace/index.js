import React from 'react';

import './style.css';

class WeatherPlace extends React.Component {
  componentDidMount() {
    this.getWeather();
  }

  getWeather = () => {
    this.props.onWeatherFetch();
  };

  getRender = () => {
    const { cityName, countryName, temp } = this.props;
    const isWeatherReady = cityName && countryName && temp;

    if (!isWeatherReady) {
      return <span>Get Weather</span>;
    }

    return (
      <React.Fragment>
        <div>
          <span>{`${cityName}, ${countryName}`}</span>
        </div>
        <div>
          <span>{`${temp} °C`}</span>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div
        onClick={this.getWeather}
        className="weather-wrapper"
      >
        {this.getRender()}
      </div>
    );
  }
}

export default WeatherPlace;