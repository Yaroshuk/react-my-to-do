import todos from 'todos';
import { fromJS } from 'immutable';
import { CHANGE_TASK_COMPLETED } from 'constants/tasks';

const initialState = fromJS(todos);

const changeTaskCompleted = (state, { id, value }) => {
  const taskIndex = state.findIndex((elem) => {
    return elem.get('id') === id;
  });

  return state.setIn([taskIndex, 'completed'], value);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TASK_COMPLETED:
      return changeTaskCompleted(state, action.data);
    default:
      return state;
  }
};