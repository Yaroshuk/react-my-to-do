import React from 'react';
import Content from 'components/layout/Content';
import TasksList from 'containers/TasksList';

import './style.css';

class HomePage extends React.PureComponent {
  render() {
    return (
      <Content
        title="Task list"
      >
        <TasksList />
      </Content>
    );
  }
}

export default HomePage;