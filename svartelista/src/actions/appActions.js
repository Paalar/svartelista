import {
  SET_PAGE,
  FETCH_POSTS,
} from './types';
import { postsRef } from '../config/firebase';

export const setPage = page => ({
  type: SET_PAGE,
  payload: page,
});

export const createPost = newPost => async () => {
  postsRef.push().set(newPost);
};

export const fetchPosts = () => async (dispatch) => {
  postsRef
    .on('value', (snapshot) => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val(),
      });
    });
};
