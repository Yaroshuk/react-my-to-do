import todos from 'todos';
import { fromJS } from 'immutable';

const initialState = fromJS(todos);

export default (state = initialState, action) => {
  return state;
}