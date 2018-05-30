import { combineReducers } from 'redux-immutable';
import tasksReducer from 'reducers/tasks';
import filterReducer from 'reducers/filter';
import weatherReducer from 'reducers/weather';

export default combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
  weather: weatherReducer
});