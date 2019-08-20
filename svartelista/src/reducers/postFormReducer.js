import {
  SET_LANDLORD,
  SET_CITY,
  SET_DESCRIPTION,
  SET_CREATE_POST_VISIBILITY,
  RESET_POST,
  SET_ADDRESS,
} from '../actions/types';

const initialState = {
  landlord: '',
  city: '',
  description: '',
  address: '',
  show: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LANDLORD: {
      return { ...state, landlord: action.payload };
    }
    case SET_ADDRESS: {
      return { ...state, address: action.payload };
    }
    case SET_CITY: {
      return { ...state, city: action.payload };
    }
    case SET_DESCRIPTION: {
      return { ...state, description: action.payload };
    }
    case SET_CREATE_POST_VISIBILITY: {
      return { ...state, show: !state.show };
    }
    case RESET_POST: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};
