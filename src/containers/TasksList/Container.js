import React from 'react';
import Task from 'components/Task';

class TasksList extends React.PureComponent {
  render() {
    const { tasks } = this.props;

    const listOfTasks = tasks.map((task) => {
      return <Task title={task.get('title')} />;
    });

    return (
      <div>
        {listOfTasks}
      </div>
    );
  }
}

export default TasksList;