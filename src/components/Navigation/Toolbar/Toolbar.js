import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import HireUsButton from '../../UI/HireUsButton/HireUsButton';

const toolbar = ( props ) => (
    <Container fluid>
        <Row>
            <Col md={2}>
                <Logo clicked={props.clickRedirect}/>
            </Col>

            <Col md={2} offset={{ md: 3 }}>
                <HireUsButton show />
            </Col>

            <Col md={2} offset={{ md: 2.5 }}>
                <DrawerToggle />
            </Col>
        </Row>
    </Container>
);

export default toolbar;