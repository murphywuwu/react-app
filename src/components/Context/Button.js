
import React from 'react';
import { Context } from './index';
function Button (props) {
  return (
    <Context.Consumer>
      {
        (({ theme }) => (
          <button>{theme}</button>
        ))
      }
    </Context.Consumer>
  )
}

export default Button;