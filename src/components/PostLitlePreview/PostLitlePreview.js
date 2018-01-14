import React from 'react';
import classes from './PostLitlePreview.css';

const postTitlePreview = props => (
  <a href={props.to} className={classes.postTitlePreview}>
    <h3>{props.title}</h3>
    <p>{props.description} ... <strong>Read more</strong> </p>
  </a>
);

export default postTitlePreview;