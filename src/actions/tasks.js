import {
  CHANGE_TASK_COMPLETED,
  CHANGE_TASK_CREATOR_TITLE,
  ADD_NEW_TASK
} from 'constants/tasks';


export const addNewTask = () => {
  return {
    type: ADD_NEW_TASK,
    data: {}
  };
};

export const changeTaskCompleted = (taskId, value) => {
  return {
    type: CHANGE_TASK_COMPLETED,
    data: {
      id: taskId,
      value
    }
  };
};

export const changeTaskCreatorTitle = (value) => {
  return {
    type: CHANGE_TASK_CREATOR_TITLE,
    data: value
  };
};