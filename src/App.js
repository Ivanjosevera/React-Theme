import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

import WorksContainer from './containers/Works/Works';
import HomeContainer from './containers/Home/Home';
import AboutContainer from './containers/About/About';
import Layout from './hoc/Layout/Layout';
import CustomAnimatedSwitch from './hoc/CustomAnimatedSwitch/CustomAnimatedSwitch';

class App extends Component {
  render () {
    return (
      <div>
        <Layout> 
          <CustomAnimatedSwitch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/works" exact component={WorksContainer} />
            <Route path="/about" exact component={AboutContainer} />
            <Redirect to="/" />
          </CustomAnimatedSwitch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App)