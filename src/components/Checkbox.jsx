import React from 'react';
import PropTypes from 'prop-types';

export const Checkbox = ({ id, taskDesc }) => {


  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      aria-label={`Mark ${taskDesc} as done?`}
      role="button"
      tabIndex={0}
    >
      <span className="checkbox" />
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  taskDesc: PropTypes.string.isRequired,
};