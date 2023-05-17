import React from 'react';

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <div>
      <button
        class="btn btn-outline-success"
        type={ Type }
        onClick={ onClick }
      >{ Text }</button>
    </div>
  )
}

export default Button;
