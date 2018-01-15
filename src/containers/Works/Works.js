import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
// import classes from './Works.css';
import Carousel from '../../components/Carousel/Carousel';
import Title from '../../components/UI/Title/Title';

class WorksContainer extends Component {
  state = {
    works: [
      { 'id': 1,
        'href':'/',
        'src':'https://cdn.pixabay.com/photo/2018/01/02/15/20/nature-3056427__340.jpg',
        'alt':'Styles image',
        'title':'Styles',
        'description':'Some examples in the documentation use style'
      },
      {
        'id': 2,
        'href':'/',
        'src':'https://cdn.pixabay.com/photo/2017/08/31/11/55/wedding-2700495__340.jpg',
        'alt':'Styles image',
        'title':'Styles',
        'description':'Some examples in the documentation use style'
      },
      {
        'id': 3,
        'href':'/',
        'src':'https://cdn.pixabay.com/photo/2016/05/04/19/39/stones-1372677__340.jpg',
        'alt':'Styles image',
        'title':'Styles',
        'description':'Some examples in the documentation use style'
      },
      {
        'id': 4,
        'href':'/',
        'src':'https://cdn.pixabay.com/photo/2018/01/03/05/46/tee-3057632__340.jpg',
        'alt':'Other image',
        'title':'Styles',
        'description':'Some examples in the documentation use style'
      },
      {
        'id': 5,
        'href':'/',
        'src':'https://www.redditstatic.com/desktop-onboarding-snoo.png',
        'alt':'Other image',
        'title':'Styles',
        'description':'Some examples in the documentation use style'
      }
    ]
  }

  render() { 
    return (
      <Container fluid>
        <Row style={{ marginTop: '100px' }}>
          <Col md={12} style={{ marginBottom: '50px' }}>
            <Title text='Work' />
          </Col>
          <Col md={12} align="center">
            <Carousel
              data={this.state.works}
              slidesToShow={3}/>
          </Col>
        </Row>
      </Container>
    )
  }
}
 
export default WorksContainer;