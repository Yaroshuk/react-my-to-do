import todos from 'todos';
import { fromJS } from 'immutable';
import {
  CHANGE_TASK_COMPLETED,
  CHANGE_TASK_CREATOR_TITLE,
  ADD_NEW_TASK
} from 'constants/tasks';
import {
  getLastTaskId,
  getEmptyTask
} from 'helpers/tasks';

const initialState = fromJS({
  taskCreator: {
    id: 0,
    title: '',
    completed: false
  },
  taskList: todos
});

const setTaskCreatorEmptyTask = (state) => {
  const emptyTask = fromJS(getEmptyTask());

  return state.set('taskCreator', emptyTask);
};

const addNewTask = (state) => {
  const lastId = getLastTaskId(state.get('taskList'));

  const newTask = state.get('taskCreator').set('id', lastId + 1);

  state = setTaskCreatorEmptyTask(state);

  return state.update('taskList', arr => arr.push(newTask));
};

const changeTaskCompleted = (state, { id, value }) => {
  const taskIndex = state.get('taskList').findIndex((elem) => {
    return elem.get('id') === id;
  });

  return state.setIn(['taskList', taskIndex, 'completed'], value);
};

const changeTaskCreatorTitle = (state, value) => {
  return state.setIn(['taskCreator', 'title'], value);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TASK_COMPLETED:
      return changeTaskCompleted(state, action.data);
    case CHANGE_TASK_CREATOR_TITLE:
      return changeTaskCreatorTitle(state, action.data);
    case ADD_NEW_TASK:
      return addNewTask(state);
    default:
      return state;
  }
};