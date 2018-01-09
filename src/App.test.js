
import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Layout from './hoc/Layout/Layout';

configure({adapter: new Adapter()})

describe('<App />', () => {
  let wrapper;
  let app = (
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  );

  beforeEach(() => {
    wrapper = mount(app)
  })

  it('Have the <Layout />', () => {
    expect(wrapper.find(Layout).length).toBe(1)
  })
})