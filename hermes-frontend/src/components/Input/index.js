import React from 'react';

const Input = ({ type, placeholder, onChange, value}) => {
  return (
    <div>
      <input
        class="form-control"
        value={ value }
        onChange={ onChange }
        type={ type }
        placeholder={ placeholder }
        ></input>
    </div>
  )
}

export default Input;
