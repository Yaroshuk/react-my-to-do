import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Container = ({ children }) => {
  return (
    <Grid>
      <Row>
        <Col
          xs={12}
          sm={10}
          smOffset={1}
          md={6}
          mdOffset={3}
        >
          {children}
        </Col>
      </Row>
    </Grid>
  );
};

export default Container;