import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ name, style, onClick }) => (
  <li
    style={style}
    onClick={onClick}
  >
    { name }
  </li>
);

Link.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.shape({
    borderBottom: PropTypes.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
