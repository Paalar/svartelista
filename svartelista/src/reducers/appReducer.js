import {
  SET_PAGE,
  FETCH_POSTS,
} from '../actions/types';
import { LANDLORDS } from '../constants/pages';

const initialState = {
  posts: {},
  activePage: LANDLORDS,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS: {
      return { ...state, posts: action.payload };
    }
    case SET_PAGE: {
      return { ...state, activePage: action.payload };
    }
    default: {
      return state;
    }
  }
};
