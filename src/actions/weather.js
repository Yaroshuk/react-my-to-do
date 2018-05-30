import {
  WEATHER_FETCH_REQUESTED,
  WEATHER_FETCH_SUCCEEDED
} from 'constants/weather';

export const weatherFetchRequest = () => {
  return {
    type: WEATHER_FETCH_REQUESTED
  };
};

export const weatherFetchSucceeded = (value) => {
  return {
    type: WEATHER_FETCH_SUCCEEDED,
    data: value
  };
};