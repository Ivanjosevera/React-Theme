import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import classes from './Home.css';
import PostTitlePreview from '../../components/PostLitlePreview/PostLitlePreview';
import HireUsButton from '../../components/UI/HireUsButton/HireUsButton';
import TitleBold from '../../components/TitleBold/TitleBold';


class HomeContainer extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Title 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
      },
      {
        id: 2,
        title: 'Title 2',
        description: 'Ipsum dolor sit amet, consectetur elit sed do.'
      },
      {
        id: 3,
        title: 'Title 3',
        description: 'Lorem ipsum sit amet, consectetur adipisicing elit sed do.'
      }
    ]
  }
  render() { 
    return (
      <Container fluid>
        <Row>
          <Col md={12} className={classes.HomeTitle}>
            <TitleBold>Your next<br/>interactive<br/>experience</TitleBold>
            <HireUsButton show arrowMode>HIRE US</HireUsButton>
          </Col>
        </Row>
        <Row>
          {this.state.posts.map(post => {
            return (
              <Col md={4} key={post.id}>
                <PostTitlePreview
                  to={'/'.concat(post.id)}
                  title={post.title}
                  description={post.description} />
              </Col>  
            )
          })}
        </Row>
      </Container>
    )
  }
}
 
export default HomeContainer;