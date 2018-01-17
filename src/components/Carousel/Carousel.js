import React, { Component } from 'react';
import Transition from "react-transition-group/Transition";

import classes from './Carousel.css';
import Arrow from './Arrows/Arrow';
import Item from './Item/Item';

const animationTiming = {
  enter: 1000,
  exit: 1000
};

class Carousel extends Component {
  state = {
    index: 0,
    slidesToShow: 0,
    totalSlides: 0,
    moving: false
  }

  componentDidMount() {
    this.setState({
      slidesToShow: this.props.slidesToShow,
      totalSlides: this.props.data.length,
      moving: true
    });
  }

  handleClickNext = () => {
    this.setState((currentState) => {
      return {
        index: currentState.index < currentState.slidesToShow ? currentState.index + 1 : currentState.slidesToShow + 1,
        moving: false
      }
    });
  }

  handleClickPrev = () => {
    this.setState((currentState) => {
      return {
        index: currentState.index > 0 ? currentState.index - 1 : 0,
        moving: false
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
            customStyles = {
              transform: 'scale(1.5, 1.5)'
            }
          }
        }
        return <ComponentItem {...item} key={item.id} style={customStyles} />
      }
    });

    return (
      <React.Fragment>
        <Arrow
          prev
          clicked={this.handleClickPrev}
          disabled={this.state.index === 0}/>
          <Transition
            mountOnEnter 
            unmountOnExit 
            in={this.state.moving} 
            timeout={animationTiming}
            onExiting={() => this.state.moving || this.setState({moving: true})}>
            {state => {
              const cssClasses = [
                classes.Carousel,
                state === "entering"
                  ? classes.FadeIn
                  : state === "exiting"
                    ? classes.FadeOut
                    : null
              ];
              return (
                <div className={cssClasses.join(" ")}>
                  {items}
                </div>
              );
            }}
          </Transition>
        <Arrow
          next
          clicked={this.handleClickNext}
          disabled={this.state.totalSlides - (this.state.index + this.state.slidesToShow) === 0}/>
      </React.Fragment>
    );
  }
}

export default Carousel;