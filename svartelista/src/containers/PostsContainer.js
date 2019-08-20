import { connect } from 'react-redux';
import Posts from '../components/Posts';

const mapStateToProps = state => ({
  posts: state.app.posts,
});

const LoadPostContainer = connect(
  mapStateToProps,
  null,
)(Posts);

export default LoadPostContainer;
