import {
  CHANGE_FILTER
} from 'constants/filter';

export const changeFilter = (value) => {
  return {
    type: CHANGE_FILTER,
    data: value
  };
};