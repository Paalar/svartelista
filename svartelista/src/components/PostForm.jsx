import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import LandlordCity from './LandlordCity';
import LandlordDescription from './LandlordDescription';
import LandlordName from './LandlordName';
import LandlordAddress from './LandlordAddress';
import './css/CreatePost.css';
import './css/Page.css';
import { CREATE_POST, NEW_POST } from '../constants/Text';

class PostForm extends Component {
  send = (event) => {
    event.preventDefault();
    const { resetForm, createPost, form } = this.props;
    const {
      city, landlord, description, address,
    } = form;
    // eslint-disable-next-line no-underscore-dangle
    const _landlord = landlord.toLowerCase();
    const post = {
      landlord, city, description, address, _landlord,
    };
    createPost(post);
    resetForm();
  }

  render() {
    const { style, form, formStyle } = this.props;
    const {
      onClick, setLandlord, setDescription, setCity, setAddress,
    } = this.props;
    return (
      <div className='create-post'>
        <div
          style={formStyle}
          className='new-post'
          onClick={() => onClick()}
        >
          {NEW_POST}
        </div>
        <div className='post-form' style={style}>
          <form onSubmit={event => this.send(event)}>
            {LandlordName(setLandlord, form.landlord)}
            {LandlordAddress(form.address, setAddress)}
            <LandlordCity value={form.city} setCity={setCity} />
            {LandlordDescription(setDescription, form.description)}
            <Button color='white' className='form-button'>{CREATE_POST}</Button>
          </form>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  resetForm: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  style: PropTypes.shape({
    display: PropTypes.string.isRequired,
  }).isRequired,
  formStyle: PropTypes.shape({
    borderRadius: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    landlord: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  setLandlord: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
};

export default PostForm;
