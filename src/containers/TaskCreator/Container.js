import React from 'react';
import TaskCreator from 'components/TaskCreator/index';

const Container = ({ title, onChangeTaskTitle, onAddTask }) => {
  return (
    <TaskCreator
      title={title}
      changeTaskTitle={onChangeTaskTitle}
      addTask={onAddTask}
    />
  );
};

export default Container;
