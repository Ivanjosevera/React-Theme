import React from 'react';
import classes from './PostLitlePreview.css';

const postTitlePreview = props => (
  <a href="{props.link}" className={classes.postTitlePreview}>
    <h3>{props.title}</h3>
    <p>{props.description} ...</p>
  </a>
);

export default postTitlePreview;