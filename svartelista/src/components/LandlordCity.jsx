import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Cities } from '../constants/Cities';
import { STUDENT_CITY } from '../constants/Text';

class LandlordCity extends Component {
  createRadioButton = () => {
    const { setCity } = this.props;
    return Cities.map((city) => {
      const radioId = `radio${city}`;
      return (
        <div className='city-label' key={city}>
          <input
            type='radio'
            required
            value={city}
            id={radioId}
            name='city'
            onChange={() => setCity(city)}
          />
          <label
            htmlFor={radioId}
          >
            {city}

          </label>
        </div>
      );
    });
  }

  render() {
    const radio = this.createRadioButton();
    return (
      <div className='city-radio'>
        <p>{STUDENT_CITY}</p>
        <div className='item-city'>
          {radio}
        </div>
      </div>
    );
  }
}

LandlordCity.propTypes = {
  setCity: PropTypes.func.isRequired,
};

export default LandlordCity;
