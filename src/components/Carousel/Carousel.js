import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import classes from './Carousel.css';
import Arrow from './Arrows/Arrow';
import Item from './Item/Item';

class Carousel extends Component {
  state = {
    index: 0,
    slidesToShow: 0,
    totalSlides: 0
  }

  componentDidMount() {
    this.setState({
      slidesToShow: this.props.slidesToShow,
      totalSlides: this.props.data.length
    });
  }

  handleClickNext = () => {
    this.setState((currentState) => {
      return {
        index: currentState.index < currentState.slidesToShow ? currentState.index + 1 : currentState.slidesToShow + 1
      }
    });
  }

  handleClickPrev = () => {
    this.setState((currentState) => {
      return {
        index: currentState.index > 0 ? currentState.index - 1 : 0
      }
    });
  }

  render() {
    const data = this.props.data;
    const ComponentItem = this.props.componentItem || Item;
    let count = 1;
    const items = data.map((item, index) => {
      if (index >= this.state.index && count <= this.state.slidesToShow) {
        let customStyles = {};
        count++;

        if (this.state.totalSlides % 2 !== 0) {
          const oddIndex = Math.round(this.state.slidesToShow / 2) + 1;

          if (count === oddIndex) {
            console.log(index, oddIndex)

            customStyles = {
              transform: 'scale(1.5, 1.5)'
            }
          }
        }

        return <ComponentItem {...item} key={item.id} style={customStyles} />
      }
    });
    const transitionClasess = {
      enter: classes.CarouselItemEnter,
      enterActive: classes.CarouselItemEnterActive,
      leave: classes.CarouselItemLeave,
      leaveActive: classes.CarouselItemLeaveActive
    };
      
    return (
      <React.Fragment>
        <Arrow
          prev
          clicked={this.handleClickPrev}
          disabled={this.state.index === 0}/>
        <CSSTransitionGroup
          transitionName={transitionClasess}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={700}
          component='div'
          className={classes.Carousel}>
          {items}
        </CSSTransitionGroup>
        <Arrow
          next
          clicked={this.handleClickNext}
          disabled={this.state.totalSlides - (this.state.index + this.state.slidesToShow) === 0}/>
      </React.Fragment>
    );
  }
}

export default Carousel;