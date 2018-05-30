import { createSelector } from 'reselect';
import { STORE_NAME as weatherStore } from 'constants/weather';

const getWeatherStore = (state) => {
  return state.get(weatherStore);
};

export default createSelector(
  getWeatherStore,
  (state) => {
    return {
      cityName: state.getIn(['data', 'name']),
      countryName: state.getIn(['data', 'sys', 'country']),
      temp: state.getIn(['data', 'main', 'temp'])
    };
  }
);