import { connect } from 'react-redux';
import { changeFilter } from 'actions/filter';
import Container from './Container';
import selector from './selectors';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChange: (...rest) => {
      dispatch(changeFilter(...rest));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);