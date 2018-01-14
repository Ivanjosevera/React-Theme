import React from 'react';

import classes from './Button.css';

const button = props => {
  let style = {
    'backgroundColor': props.bgcolor
  }

  return (
    <button style={style} className={classes.Button}>{props.children}</button>
  )
}

export default button; 