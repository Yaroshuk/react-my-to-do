import React from 'react';
import Content from 'components/layout/Content';
import TasksList from 'containers/TasksList';
import TaskCreator from 'containers/TaskCreator';
import FilterList from 'containers/FilterList';

import './style.css';

class HomePage extends React.PureComponent {
  render() {
    return (
      <Content
        title="Task list"
      >
        <TaskCreator />
        <FilterList />
        <TasksList />
      </Content>
    );
  }
}

export default HomePage;