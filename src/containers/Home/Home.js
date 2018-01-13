import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import classes from './Home.css';
import PostTitlePreview from '../../components/PostLitlePreview/PostLitlePreview';
import HireUsButton from '../../components/UI/HireUsButton/HireUsButton';
import TitleBold from '../../components/TitleBold/TitleBold';


class HomeContainer extends Component {
  render() { 
    return (
      <Container fluid>
        <Row>
          <Col md={12} className={classes.HomeTitle}>
            <TitleBold>Your next<br/>interactive<br/>experience</TitleBold>
            <HireUsButton show arrowMode/>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <PostTitlePreview
              to="/"
              title="Metiew &amp; Smith"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do." />
          </Col>
          <Col md={4}>
            <PostTitlePreview
              to="/"
              title="Metiew &amp; Smith"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do." />
          </Col>
          <Col md={4}>
            <PostTitlePreview
              to="/"
              title="Metiew &amp; Smith"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do." />
          </Col>
        </Row>
      </Container>
    )
  }
}
 
export default HomeContainer;