import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Col, Row } from 'react-bootstrap';
import WeatherPlace from 'containers/WeatherPlace';

import './style.css';

class Header extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row className="header">
          <Col xs={9}>
            <Link to="/"><h1>My-To-Do</h1></Link>
          </Col>
          <Col xs={3}>
            <WeatherPlace />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Header;