import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import FilterItem from 'components/filter/FilterItem';
import { getFilterModel } from 'helpers/filter';

import './style.css';

class FilterList extends React.Component {
  getFilterItems = () => {
    const {
      onFilterChange,
      activeFilter
    } = this.props;

    return getFilterModel().map((item, index, array) => {
      return (
        <FilterItem
          key={item.filter}
          onFilterChange={onFilterChange}
          filter={item.filter}
          isActive={item.filter === activeFilter}
          isLast={index === array.length - 1}
        />
      );
    });
  };

  render() {
    return (
      <div className="filter-list">
        <Grid fluid>
          <Row className="no-gutter">
            {this.getFilterItems()}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default FilterList;