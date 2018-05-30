import { fromJS } from 'immutable';
import { WEATHER_FETCH_SUCCEEDED } from 'constants/weather';

const initialState = fromJS({
  cityId: '625144',
  APPID: '361bccebb52ee69e07cb01241a1cde58',
  data: null
});

const setWeather = (state, value) => {
  return state.set('data', fromJS(value));
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_FETCH_SUCCEEDED:
      return setWeather(state, action.data);
    default:
      return state;
  }
};