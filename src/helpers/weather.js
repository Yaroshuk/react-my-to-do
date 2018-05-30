import { STORE_NAME } from 'constants/weather';

export const requestDataSelector = (state) => {
  return {
    cityId: state.getIn([STORE_NAME, 'cityId']),
    APPID: state.getIn([STORE_NAME, 'APPID'])
  };
};