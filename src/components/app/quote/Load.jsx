import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onButtonClick }) => (
  <button onClick={onButtonClick}>get-a-quote!</button>
);

Load.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Load;
