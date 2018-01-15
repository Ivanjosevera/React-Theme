import React from 'react';
import classes from './Item.css';

const item = props => ( 
  <div {...props} className={classes.Item}>
    <a href={props.href}>
      <div>
        <img src={props.src} alt={props.alt} />
      </div>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </a>
  </div>
)
 
export default item;