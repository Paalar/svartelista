import { combineReducers } from 'redux';
import postForm from './postFormReducer';
import app from './appReducer';
import filterBox from './filterReducer';

export default combineReducers({
  app,
  postForm,
  filterBox,
});
