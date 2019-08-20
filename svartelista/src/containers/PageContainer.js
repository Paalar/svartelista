import { connect } from 'react-redux';
import Page from '../components/Page';
import { fetchPosts } from '../actions/appActions';

const mapStateToProps = state => ({
  activePage: state.app.activePage,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default PageContainer;
