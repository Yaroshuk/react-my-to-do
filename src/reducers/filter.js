import { fromJS } from 'immutable';
import { CHANGE_FILTER } from 'constants/filter';

const initialState = fromJS({
  active: 'ALL'
});

const changeFilter = (state, value) => {
  return state.set('active', value);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return changeFilter(state, action.data);
    default:
      return state;
  }
};