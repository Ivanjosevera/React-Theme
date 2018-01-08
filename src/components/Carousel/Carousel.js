import React, { Component } from 'react';
import Slider from 'react-slick';
import classes from './Carousel.css';
import Arrow from './Arrows/Arrow';
import Item from './Item/Item';

class Carousel extends React.Component {
  render() {
    let data = this.props.data,
        ComponentItem = this.props.componentItem || Item,
        items = data.map(e => {
          return <ComponentItem {...e} key={e.id}/>
        });
    return (
      <React.Fragment>
        <Arrow prev />
        { items }
        <Arrow next />
      </React.Fragment>
    );
  }
}

export default Carousel;