import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/appActions';
import NavBar from './components/NavBar';
import PageContainer from './containers/PageContainer';

class _App extends Component {
  componentDidMount = () => {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <PageContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchPosts()),
});

const App = connect(
  null,
  mapDispatchToProps,
)(_App);

_App.propTypes = {
  fetch: PropTypes.func.isRequired,
};

export default App;
