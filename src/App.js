import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

import ContactContainer from './containers/Contact/Contact';
import WorksContainer from './containers/Works/Works';
import HomeContainer from './containers/Home/Home';
import AboutContainer from './containers/About/About';

import Layout from './hoc/Layout/Layout';
import CustomAnimatedSwitch from './hoc/CustomAnimatedSwitch/CustomAnimatedSwitch';
import withI18NTranslation from './hoc/withI18NTranslation/withI18NTranslation';

import I18NinitialState from './i18n/en-GB.json';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Layout> 
          <CustomAnimatedSwitch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/works" exact component={WorksContainer} />
            <Route path="/about" exact component={AboutContainer} />
            <Route path="/contact" exact component={ContactContainer} />
            <Redirect to="/" />
          </CustomAnimatedSwitch>
        </Layout>
      </React.Fragment>
    );
  }
}

export default withI18NTranslation(
  withRouter(App), {
    fallBackLocale : "en-GB",
    initialState : {
      locale : "en-GB",
      data : I18NinitialState
    }
  }
);