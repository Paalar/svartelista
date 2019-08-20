import { connect } from 'react-redux';
import Link from '../components/Link';
import {
  setPage,
} from '../actions/appActions';

const activeStyle = {
  borderBottom: '5px solid #ff5151',
};

const unActiveStyle = {
  borderBottom: null,
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.name === state.app.activePage,
  style: ownProps.name === state.app.activePage ? activeStyle : unActiveStyle,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setPage(ownProps.name)),
});

const LinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default LinkContainer;
