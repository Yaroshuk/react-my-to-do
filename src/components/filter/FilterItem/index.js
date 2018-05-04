import React from 'react';
import classnames from 'classnames';
import { Col } from 'react-bootstrap';

import './style.css';

const FilterItem = ({
  onFilterChange,
  filter,
  isActive,
  isLast
}) => {
  return (
    <Col xs={4}>
      <div
        className={classnames(
          'filter-item',
          isActive && 'active',
          isLast && 'no-border'
        )}
        onClick={() => onFilterChange(filter)}
      >
        {filter}
      </div>
    </Col>
  );
};

export default FilterItem;