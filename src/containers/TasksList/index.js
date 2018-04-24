import { connect } from 'react-redux';
import { changeTaskCompleted } from 'actions/tasks';
import Container from './Container';
import selector from './selectors';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeTaskCompleted: (...rest) => {
      dispatch(changeTaskCompleted(...rest));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);