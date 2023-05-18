import React from 'react';

const Input = ({ type, placeholder, onChange, value, className, id}) => {
  return (
    <div>
      <input
        class={ className}
        value={ value }
        onChange={ onChange }
        type={ type }
        placeholder={ placeholder }
        id={ id }
        ></input>
    </div>
  )
}

export default Input;
