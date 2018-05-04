import { createSelector } from 'reselect';
import { STORE_NAME as filterStore } from 'constants/filter';
import { STORE_NAME as tasksStore } from 'constants/tasks';

const getFilterStore = (state) => {
  return state.get(filterStore);
};

const getTasksStore = (state) => {
  return state.get(tasksStore);
};

const getActiveFilter = createSelector(
  getFilterStore,
  store => store.get('active')
);

const getTasks = createSelector(
  getTasksStore,
  store => store.get('taskList')
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
  getActiveFilter,
  getCompletedTasks,
  getUncompletedTasks,
  (activeFilter, completedTasks, uncompletedTasks) => {
    switch (activeFilter) {
      case 'COMPLETED':
        return {
          tasks: completedTasks
        };
      case 'UNCOMPLETED':
        return {
          tasks: uncompletedTasks
        };
      default:
        return {
          tasks: uncompletedTasks.concat(completedTasks)
        };
    }
  }
);