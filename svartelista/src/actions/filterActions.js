import {
  FILTER_SEARCH,
  FETCH_POSTS,
  ADD_CITY,
  REMOVE_CITY,
} from './types';
import { postsRef } from '../config/firebase';


export const filterSearch = filterText => ({
  type: FILTER_SEARCH,
  payload: filterText,
});

export const addCity = city => ({
  type: ADD_CITY,
  payload: city,
});

export const removeCity = city => ({
  type: REMOVE_CITY,
  payload: city,
});

const filterOnCities = (posts, cities) => {
  const filteredPosts = {};
  if (posts == null) return {};
  Object.entries(posts).forEach((post) => {
    if (cities.includes(post[1].city)) {
      const key = post[0];
      const value = post[1];
      filteredPosts[key] = value;
    }
  });
  return filteredPosts;
};

export const queryPosts = (text, cities) => async (dispatch) => {
  const endText = `${text}\uf8ff`;
  postsRef
    .orderByChild('_landlord')
    .startAt(text)
    .endAt(endText)
    .on('value', (snapshot) => {
      const filteredSnapshot = cities.length > 0
        ? filterOnCities(snapshot.val(), cities)
        : snapshot.val();
      dispatch({
        type: FETCH_POSTS,
        payload: filteredSnapshot != null ? filteredSnapshot : {},
      });
    });
};
