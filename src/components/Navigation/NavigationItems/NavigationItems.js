import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>Home</NavigationItem>
      <NavigationItem link="/works">Works</NavigationItem>
      <NavigationItem link="/About">About</NavigationItem>
    </ul>
  )
};

export default navigationItems;