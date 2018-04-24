import React from 'react';
import { Row, Col } from 'react-bootstrap';
import classnames from 'classnames';

import './style.css';

class Task extends React.Component {
  render() {
    const { title, completed, onChangeCompleted } = this.props;

    return (
      <div className={classnames(
        'task-wrapper',
        completed && 'completed'
      )}
      >
        <Row>
          <Col xs={10}>
            <div className="task-title">
              <h3>{title}</h3>
            </div>
          </Col>
          <Col xs={2}>
            <div className="task-control">
              <input
                type="checkbox"
                checked={completed}
                onChange={event => onChangeCompleted(event.target.checked)}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Task;