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
    onAddTask: (...rest) => {
      dispatch(addNewTask(...rest));
    },

    onChangeTaskTitle: (...rest) => {
      dispatch(changeTaskCreatorTitle(...rest));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);