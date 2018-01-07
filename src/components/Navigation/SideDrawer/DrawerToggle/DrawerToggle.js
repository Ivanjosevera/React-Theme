import React from 'react';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => {
    let direction = props.left ? 'left' : 'right';
    return (
        <div className={classes.DrawerToggle} onClick={props.clicked} style={{float: direction}}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};

export default drawerToggle;