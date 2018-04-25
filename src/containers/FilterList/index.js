import { connect } from 'react-redux';
import Container from './Container';

const mapStateToProps = (state) => {
  return {
    filter: state.get('filter')
  };
};

export default connect(mapStateToProps, null)(Container);