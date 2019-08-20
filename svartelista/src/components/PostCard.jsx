import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardDetail from './CardDetail';
import { postsRef } from '../config/firebase';
import './css/PostCard.css';
import {
  NO_ADDRESS,
  LIKE_POST,
  UNLIKE_POST,
  CITY,
  LANDLORD,
  ADDRESS,
  DESCRIPTION,
  COMMENTS,
} from '../constants/Text';

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: 0,
    };
  }

  componentDidMount = () => {
    const { id } = this.props;
    const likeRef = postsRef.child(`${id}/likes`);
    likeRef.on('value', (snapshot) => {
      const likes = snapshot.val() != null ? snapshot.val() : 0;
      this.setState({ likes });
    });
  };

  componentWillUnmount = () => {
    const { id } = this.props;
    const likeRef = postsRef.child(`${id}/likes`);
    likeRef.off();
  };

  likePost = () => {
    const { id } = this.props;
    const { likes, liked } = this.state;
    const likeRef = postsRef.child(`${id}`);
    const change = liked ? likes - 1 : likes + 1;
    likeRef.update({ likes: change });
    this.setState({ liked: !liked });
  };

  render() {
    const { post } = this.props;
    const {
      city,
      landlord,
      description,
      address,
    } = post;
    const { liked, likes } = this.state;
    const addressText = address !== '' ? address : NO_ADDRESS;
    const icon = liked ? UNLIKE_POST : LIKE_POST;
    return (
      <div className='postCard'>
        <div className='right-card'>
          <p className='card-landlord'><b>{LANDLORD}</b></p>
          <p className='card-landlord-name' onClick={() => alert('Kommentarer coming soon^tm')}>{landlord}</p>
          {CardDetail('card-city', CITY, city)}
          {CardDetail('card-address', ADDRESS, addressText)}
          {CardDetail('card-description', DESCRIPTION, description)}
        </div>
        <div className='left-card'>
          <div className='likes-div'>
            <img id='plus-one' src={icon} alt='plus one' onClick={() => this.likePost()} />
            <p className='card-likes'>{likes}</p>
          </div>
          <div className='comments-div'>
            <p className='comment-link' onClick={() => alert('Kommentarer coming soon^tm')}><b>{COMMENTS}</b></p>
            <p className='comment-count'>0</p>
          </div>
        </div>
      </div>
    );
  }
}

PostCard.propTypes = {
  id: PropTypes.string.isRequired,
  post: PropTypes.shape({
    city: PropTypes.string.isRequired,
    landlord: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
