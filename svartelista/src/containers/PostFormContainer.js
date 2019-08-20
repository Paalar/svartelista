import { connect } from 'react-redux'
import PostForm from '../components/PostForm'
import {
  setLandlord,
  setCity,
  setDescription,
  setVisibility,
  resetPost,
  setAddress,
} from '../actions/formActions';
import { createPost } from '../actions/appActions';

const shown = {
  display: 'block',
};

const hidden = {
  display: 'none',
};

const formShown = {
  borderRadius: '1em 1em 0 0',
  width: '100%',
};

const formHidden = {
  borderRadius: '1em',
};

const mapStateToProps = state => ({
  form: state.postForm,
  style: state.postForm.show ? shown : hidden,
  formStyle: state.postForm.show ? formShown : formHidden,
  resetPost: resetPost(),
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(setVisibility()),
  setCity: city => dispatch(setCity(city)),
  setLandlord: landlord => dispatch(setLandlord(landlord)),
  setDescription: description => dispatch(setDescription(description)),
  setAddress: address => dispatch(setAddress(address)),
  resetForm: () => dispatch(resetPost()),
  createPost: post => dispatch(createPost(post)),
});

const PostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostForm);

export default PostFormContainer;
