import {
  FILTER_SEARCH,
  ADD_CITY,
  REMOVE_CITY,
} from '../actions/types';

const initialState = {
  cities: [],
  searchText: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_SEARCH: {
      return { ...state, searchText: action.payload };
    }
    case ADD_CITY: {
      const { cities } = state;
      const filteredCities = cities.map(city => city);
      filteredCities.push(action.payload);
      return { ...state, cities: filteredCities };
    }
    case REMOVE_CITY: {
      const { cities } = state;
      const filteredCities = cities.filter(city => city !== action.payload);
      return { ...state, cities: filteredCities };
    }
    default: {
      return state;
    }
  }
};
