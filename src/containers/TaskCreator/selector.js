import { createSelector } from 'reselect';

const storeName = 'tasks';

const getStore = (state) => {
  return state.get(storeName);
};

export default createSelector(
  getStore,
  (state) => {
    return {
      title: state.getIn(['taskCreator', 'title'])
    };
  }
);