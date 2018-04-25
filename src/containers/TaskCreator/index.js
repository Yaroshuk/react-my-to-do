import { connect } from 'react-redux';
import {
  changeTaskCreatorTitle,
  addNewTask
} from 'actions/tasks';
import Container from './Container';
import selector from './selector';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (...rest) => {
      dispatch(addNewTask(...rest));
    },

    changeTaskTitle: (...rest) => {
      dispatch(changeTaskCreatorTitle(...rest));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);