import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ContactBox from '../../components/ContactBox/ContactBox';

import classes from './Contact.css';


class ContactContainer extends Component {
  render() { 
    return (
      <Container fluid className={classes.Contact}>
        <Row align="end">
          <Col md={4} offset={{ md: 8 }} debug>
            <ContactBox/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ContactContainer;