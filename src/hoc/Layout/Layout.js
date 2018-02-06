import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import { withRouter } from 'react-router-dom';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import NavLevels from '../../components/NavLevels/NavLevels';
import { changeLocale } from '../../lib/react-i18n-helper';

class Layout extends Component {
  state = {
      showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
      this.setState( { showSideDrawer: false } );
  }

  sideDrawerToggleHandler = () => {
      this.setState( ( prevState ) => {
          return { showSideDrawer: !prevState.showSideDrawer };
      } );
  }

  handlerRedirectHome = () => {
      this.props.history.push('/')
  }

  render () {
    return (
      <React.Fragment>
        <div>
            <button onClick={() => changeLocale("pt-PT")}>Portugues</button>
            <button onClick={() => changeLocale("en-GB")}>Ingles</button>
            <button onClick={() => changeLocale("fr-FR")}>Francia</button>
            <button onClick={() => changeLocale("es-ES")}>Español</button>
        </div>
        <Toolbar 
            clickRedirect={this.handlerRedirectHome}
            drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler} />
        <Container fluid>
            <Row>
                <Col md={2} style={{height: '85vh'}}>
                    <NavLevels />
                </Col>
                <Col md={9}>
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                </Col>
            </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default withRouter(Layout);