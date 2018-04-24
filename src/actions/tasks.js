import { CHANGE_TASK_COMPLETED } from 'constants/tasks';

export const changeTaskCompleted = (taskId, value) => {
  return {
    type: CHANGE_TASK_COMPLETED,
    data: {
      id: taskId,
      value
    }
  };
};