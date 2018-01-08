import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import classes from './Home.css';
import PostTitlePreview from '../../components/PostLitlePreview/PostLitlePreview';


class HomeContainer extends Component {
  render() { 
    return (
      <Container fluid>
        <Row>
          <Col md={12} className={classes.HomeTitle}>
            <h1>Your next<br/>interactive<br/>experience</h1>
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