import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Container = ({ children }) => {
  return (
    <Grid>
      <Row>
        <Col xs={6} xsOffset={3}>
          {children}
        </Col>
      </Row>
    </Grid>
  );
};

export default Container;