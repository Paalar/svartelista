import React, { Fragment } from 'react';
import PostFormContainer from '../containers/PostFormContainer';
import PostsContainer from '../containers/PostsContainer';
import FilterContainer from '../containers/FilterContainer';
import './css/Page.css';

const LandLordPage = () => (
  <Fragment>
    <PostFormContainer />
    <PostsContainer />
    <FilterContainer />
  </Fragment>
);

export default LandLordPage;
