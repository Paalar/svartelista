import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Cities } from '../constants/Cities';

class FilterCities extends Component {
  handleCheck = (city, checked) => {
    const { addCity, removeCity } = this.props;
    if (checked) addCity(city);
    else removeCity(city);
  }

  createCheckboxes = () => {
    const { cities } = this.props;
    return Cities.map((city) => {
      const checked = cities.includes(city);
      const checkboxId = `box${city}`;
      return (
        <div key={city} className='filter-cities'>
          <input
            type='checkbox'
            checked={checked}
            id={checkboxId}
            value={city}
            onChange={event => this.handleCheck(event.target.value, event.target.checked)}
          />
          <label
            htmlFor={checkboxId}
          >
            {city}
          </label>
        </div>
      );
    });
  }

  render() {
    const cityCheckboxes = this.createCheckboxes();
    return (
      <div className='filter-checkboxes'>
        {cityCheckboxes}
      </div>
    );
  }
}

FilterCities.propTypes = {
  addCity: PropTypes.func.isRequired,
  removeCity: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterCities;
