export const getLastTaskId = (tasks) => {
  return tasks.reduce((prevId, curTask) => {
    const curId = curTask.get('id');

    return curId > prevId ? curId : prevId;
  }, 0);
};

export const getEmptyTask = () => {
  return {
    id: 0,
    title: '',
    completed: false
  };
};