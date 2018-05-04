import React from 'react';

import './style.css';

class TaskCreator extends React.Component {
  onKeyDown = (event) => {
    const { addTask } = this.props;

    if (event.keyCode !== 13 || !event.target.value) return;

    addTask();
  };

  render() {
    const { title, changeTaskTitle } = this.props;

    return (
      <div className="task-creator">
        <input
          type="text"
          value={title}
          onChange={event => changeTaskTitle(event.target.value)}
          placeholder="Add new task..."
          onKeyDown={this.onKeyDown}
        />
      </div>
    );
  }
}

export default TaskCreator;