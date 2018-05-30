import { connect } from 'react-redux';
import { weatherFetchRequest } from 'actions/weather';
import Container from './Container';
import selector from './selectors';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = (dispatch) => {
  return {
    onWeatherFetch: (...rest) => {
      dispatch(weatherFetchRequest(...rest));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);