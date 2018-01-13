import React from 'react';

import classes from './TitleBold.css';

const titleBold = props => <h1 className={classes.TitleBold}>{props.children}</h1>;

export default titleBold;
