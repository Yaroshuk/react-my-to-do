import { all } from 'redux-saga/effects';
import { weatherSaga } from './sagas/weather';

export default function* sagas() {
  yield all([
    weatherSaga()
  ]);
}