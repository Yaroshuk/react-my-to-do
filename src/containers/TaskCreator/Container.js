import React from 'react';
import TaskCreator from 'components/TaskCreator';

const Container = ({ title, changeTaskTitle, addTask }) => {
  return (
    <TaskCreator
      title={title}
      changeTaskTitle={changeTaskTitle}
      addTask={addTask}
    />
  );
};

export default Container;
