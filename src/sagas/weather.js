import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getWeather } from 'api/weather';
import { requestDataSelector } from 'helpers/weather';
import { WEATHER_FETCH_REQUESTED } from 'constants/weather';
import { hasStatusSuccess } from 'helpers/api';
import { weatherFetchSucceeded } from 'actions/weather';

function* fetchWeather() {
  const requestData = yield select(requestDataSelector);
  const weatherResponse = yield call(getWeather, requestData);

  if (hasStatusSuccess(weatherResponse)) {
    yield put(weatherFetchSucceeded(weatherResponse.data));
  }
}

export function* weatherSaga() {
  yield takeLatest(WEATHER_FETCH_REQUESTED, fetchWeather);
}