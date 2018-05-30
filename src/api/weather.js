import axios from 'axios';

export const getWeather = ({ cityId, APPID }) => {
  return axios.get('http://api.openweathermap.org/data/2.5/weather', {
    params: {
      units: 'metric',
      id: cityId,
      APPID
    }
  })
    .then((response) => {
      return response;
    });
};