import { combineReducers } from 'redux-immutable';
import tasksReducer from 'reducers/tasks';
import filterReducer from 'reducers/filter';

export default combineReducers({
  tasks: tasksReducer,
  filter: filterReducer
});