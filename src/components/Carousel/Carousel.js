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
    let data = this.props.data,
        count = 1,
        ComponentItem = this.props.componentItem || Item,
        items = data.map((e, index) => {
          if (index >= this.state.index && count <= this.state.slidesToShow) {
            count++;
            return <ComponentItem {...e} key={e.id}/>
          }
        });
      
    return (
      <React.Fragment>
        <Arrow
          prev
          clicked={this.handleClickPrev}
          disabled={this.state.index === 0}/>
        <CSSTransitionGroup
          transitionName={ {
            enter: classes.CarouselItemEnter,
            enterActive: classes.CarouselItemEnterActive,
            leave: classes.CarouselItemLeave,
            leaveActive: classes.CarouselItemLeaveActive
          } }
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="div"
          className={classes.Carousel}>
          { items }
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