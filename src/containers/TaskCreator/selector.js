import { createSelector } from 'reselect';
import { STORE_NAME as tasksStore } from 'constants/tasks';

const getTasksStore = (state) => {
  return state.get(tasksStore);
};

export default createSelector(
  getTasksStore,
  (state) => {
    return {
      title: state.getIn(['taskCreator', 'title'])
    };
  }
);