import React, { Component } from 'react';
import TitleBold from '../../components/TitleBold/TitleBold';
import HireUsButton from '../../components/UI/HireUsButton/HireUsButton';

import { Container, Row, Col } from 'react-grid-system';
import classes from './About.css';


class AboutContainer extends Component {
  render() { 
    return (
      <React.Fragment>
        <Container fluid>
          <Row>    
            <Col md={12}  className={classes.About}>
              <TitleBold>We<br/>Believe<br/>Passionate<br/>People<br/></TitleBold>
              <HireUsButton show arrowMode isTransparent/>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
      
    )
  }
}
 
export default AboutContainer;