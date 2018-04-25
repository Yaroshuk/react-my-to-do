import { createSelector } from 'reselect';

const storeName = 'tasks';

const getStore = (state) => {
  return state.get(storeName);
};

const getTasks = createSelector(
  getStore,
  state => state.get('taskList')
);

const getCompletedTasks = createSelector(
  getTasks,
  tasks => tasks.filter(task => task.get('completed') === true)
);

const getUncompletedTasks = createSelector(
  getTasks,
  tasks => tasks.filter(task => task.get('completed') === false)
);


export default createSelector(
  getCompletedTasks,
  getUncompletedTasks,
  (completedTasks, uncompletedTasks) => {
    return {
      tasks: uncompletedTasks.concat(completedTasks)
    };
  }
);