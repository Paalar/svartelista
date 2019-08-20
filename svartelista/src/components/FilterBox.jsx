import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/FilterBox.css';
import FilterCities from './FilterCities';
import FilterSearch from './FilterSearch';
import { FILTER_TITLE } from '../constants/Text';

class FilterBox extends Component {
  componentDidUpdate = () => {
    const { queryPosts, filter } = this.props;
    const { cities, searchText } = filter;
    queryPosts(searchText, cities);
  }

  render() {
    const {
      setSearchText,
      addCity,
      removeCity,
      filter,
    } = this.props;
    const { cities, searchText } = filter;
    return (
      <div className='filterBox'>
        <h2>{FILTER_TITLE}</h2>
        {FilterSearch(setSearchText, searchText)}
        <FilterCities
          cities={cities}
          addCity={addCity}
          removeCity={removeCity}
          query={this.queryDatabase}
        />
      </div>
    );
  }
}

FilterBox.propTypes = {
  filter: PropTypes.shape({
    cities: PropTypes.arrayOf(PropTypes.string).isRequired,
    searchText: PropTypes.string.isRequired,
  }).isRequired,
  queryPosts: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
  addCity: PropTypes.func.isRequired,
  removeCity: PropTypes.func.isRequired,
};

export default FilterBox;
