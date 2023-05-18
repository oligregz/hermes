import React from 'react';

const Button = ({ Text, onClick, Type, id}) => {
  return (
    <div>
      <button
        class="btn btn-outline-success"
        type={ Type }
        onClick={ onClick }
        id={ id }
      >{ Text }</button>
    </div>
  )
}

export default Button;
