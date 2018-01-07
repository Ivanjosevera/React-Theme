import React from 'react';

import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}} onClick={props.clicked}>
        <h1>Theme in React</h1>
    </div>
);

export default logo;