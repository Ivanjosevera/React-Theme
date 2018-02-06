import React, { Component } from 'react';
import { i18nStore } from '../../lib/react-i18n-helper/index';
import { setupI18NConfiguration } from '../../lib/react-i18n-helper';

const withI18NTranslation = (WrappedComponent, configurationObject) => {
  return class extends Component {
    constructor(props) {
      super(props);    
      setupI18NConfiguration(configurationObject)
    }
  
    componentDidMount() {
      this.i18nUnsubscribe = i18nStore.subscribe(this.reRenderOnI18NEvent.bind(this));
    }
    componentWillUnmount() {
      this.i18nUnsubscribe();
    }
  
    reRenderOnI18NEvent() {
      this.forceUpdate();
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withI18NTranslation;