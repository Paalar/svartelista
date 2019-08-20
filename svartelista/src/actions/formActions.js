import {
  SET_LANDLORD,
  SET_CITY,
  SET_DESCRIPTION,
  SET_CREATE_POST_VISIBILITY,
  RESET_POST,
  SET_ADDRESS,
} from './types';

export const setLandlord = landlord => ({
  type: SET_LANDLORD,
  payload: landlord,
});

export const setAddress = address => ({
  type: SET_ADDRESS,
  payload: address,
});

export const setCity = city => ({
  type: SET_CITY,
  payload: city,
});

export const setDescription = description => ({
  type: SET_DESCRIPTION,
  payload: description,
});

export const setVisibility = () => ({
  type: SET_CREATE_POST_VISIBILITY,
});

export const resetPost = () => ({
  type: RESET_POST,
});
