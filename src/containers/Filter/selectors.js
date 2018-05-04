import { createSelector } from 'reselect';
import { STORE_NAME as filterStore } from 'constants/filter';

const getFilterStore = (state) => {
  return state.get(filterStore);
};

export default createSelector(
  getFilterStore,
  (state) => {
    return {
      activeFilter: state.get('active')
    };
  }
);