import React from 'react';

import classes from './HireUsButton.css';


const hireUsButton = (props) => {
  let style = {
    'display': props.show ? 'inline-block' : 'none'
  }
  return (
    <div className={classes.HireUsButton}>
      <button style={style}>HIRE US</button>
    </div>
  )
};

export default hireUsButton;