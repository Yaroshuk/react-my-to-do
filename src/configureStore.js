import { createStore, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import tasksReducer from 'containers/TasksList/reducer';

const reducers = combineReducers({
  tasks: tasksReducer
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
/*  applyMiddleware(...middleware),
  // other store enhancers if any*/
);


const store = createStore(reducers, enhancer);

export default store;