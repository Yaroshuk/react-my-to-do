import React from 'react';
import Task from 'components/Task/index';

class TasksList extends React.PureComponent {
  getTasks = () => {
    const { tasks, onChangeTaskCompleted } = this.props

    return tasks.map((task) => {
      const id = task.get('id');
      const title = task.get('title');
      const completed = task.get('completed');

      return (
        <Task
          key={id}
          title={title}
          completed={completed}
          onChangeCompleted={value => onChangeTaskCompleted(id, value)}
        />
      );
    });
  } ;

  render() {
    return (
      <div className="task-list">
        {this.getTasks()}
      </div>
    );
  }
}

export default TasksList;