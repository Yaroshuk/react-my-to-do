import React from 'react';
import WeatherPlace from 'components/WeatherPlace';

const Container = (props) => {
  return (
    <WeatherPlace
      {...props}
    />
  );
};

export default Container;