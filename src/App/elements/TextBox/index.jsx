import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({
  placeholder, id, onChanges, cssClass, min, max,
}) => {
  const handleChanges = (ev) => {
    if (onChanges && typeof onChanges === 'function') { onChanges(ev.target.value); }
  };
  return (
    <article>
      <input
        id={id}
        type="text"
        onChange={handleChanges}
        placeholder={placeholder}
        className={cssClass}
        min-length={min}
        max-length={max}
      />
    </article>
  );
};
TextBox.defaultProps = {
  placeholder: 'Enter Text',
  min: 3,
  max: 999,
};
TextBox.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChanges: PropTypes.func.isRequired,
  cssClass: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};
export default TextBox;
