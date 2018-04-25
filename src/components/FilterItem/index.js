import React from 'react';
import classnames from 'classnames';
import { Col } from 'react-bootstrap';

import './style.css';

const FilterItem = ({ className }) => {
  return (
    <Col xs={4}>
      <div className={classnames(
        'filter-item',
        className
      )}
      >
        Filter
      </div>
    </Col>
  );
};

export default FilterItem;