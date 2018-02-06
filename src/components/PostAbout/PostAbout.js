import React from 'react';
import classes from './PostAbout.css';

const PostAbout = props => {
  return (
    <article className={classes.PostAbout} alt={props.title}>
      <img src={props.img} alt={props.alt || 'Image information'}/>
      <span>{props.title}</span>
    </article>
  )
}
 
export default PostAbout;