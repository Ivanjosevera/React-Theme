import React, { Component } from 'react';
import TitleBold from '../../components/TitleBold/TitleBold';
import HireUsButton from '../../components/UI/HireUsButton/HireUsButton';

import { Container, Row, Col } from 'react-grid-system';
import classes from './About.css';
import PostAbout from '../../components/PostAbout/PostAbout';


class AboutContainer extends Component {
  state = {
    aboutPosts: [
      {
        id: 1,
        img: 'https://images.unsplash.com/photo-1510940252408-e28cd88f624b?auto=format&fit=crop&w=1051&q=80',
        title: 'Winners'
      },
      {
        id: 2,
        img: 'https://images.unsplash.com/photo-1507566218255-bfdc14d2ccf1?auto=format&fit=crop&w=1050&q=80',
        title: 'Philosophy'
      },
      {
        id: 3,
        img: 'https://images.unsplash.com/photo-1483782817618-9804403024ba?auto=format&fit=crop&w=1373&q=80',
        title: 'History'
      }
    ]
  }

  render() {
    return (
        <Container fluid>
          <Row>    
            <Col md={12} className={classes.About}>
              <TitleBold>We<br/>Believe<br/>Passionate<br/>People<br/></TitleBold>
              <HireUsButton show arrowMode isTransparent>
                CAREER
              </HireUsButton>
            </Col>
          </Row>
          <Row nogutter style={{'margin': '20px 0'}}>
            {this.state.aboutPosts.map(post => {
              return (
                <Col md={3} key={post.id}>
                  <PostAbout
                    img={post.img}
                    title={post.title} />
                </Col>  
              )
            })}
          </Row>
        </Container>
    )
  }
}
 
export default AboutContainer;