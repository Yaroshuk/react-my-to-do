import React from 'react';
import { Grid, Row, Clearfix } from 'react-bootstrap';
import FilterItem from 'components/FilterItem';

import './style.css';

class FilterList extends React.Component {
  render() {
    return (
      <div className="filter-list">
        <Grid fluid>
          <Row className="no-gutter">
            <FilterItem />
            <FilterItem />
            <FilterItem
              className="no-border"
            />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default FilterList;