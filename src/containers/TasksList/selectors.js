import { createSelector } from 'reselect';

export const storeName = 'tasks';

export const getStore = (state) => {
  return state.get(storeName);
};

export default createSelector(
  getStore,
  (state) => {
    return {
      tasks: state
    };
  }
);