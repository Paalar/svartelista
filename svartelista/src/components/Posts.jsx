import React from 'react';
import PropTypes from 'prop-types';
import PostCard from './PostCard';
import './css/Page.css';

const Posts = ({ posts }) => {
  const cards = (posts == null)
    ? false
    : Object.entries(posts).map(key => (
      <PostCard
        key={Object.values(key[0])}
        post={key[1]}
        id={key[0]}
      />));
  return (
    <div className='post-cards'>
      {cards}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.shape({
    _landlord: PropTypes.string,
    landlord: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    description: PropTypes.string,
    likes: PropTypes.number,
  }).isRequired,
};

export default Posts;
