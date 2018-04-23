import React from 'react';
import './style.css';

class Task extends React.Component {
  render() {
    const { title, completed } = this.props;

    return (
      <div>{title}</div>
    );
  }
}

export default Task;