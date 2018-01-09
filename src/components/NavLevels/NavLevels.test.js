import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NavLink } from 'react-router-dom';

import NavLevels from './NavLevels';

configure({adapter: new Adapter()})

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavLevels />)
  })

  it('Have 4 <NavLink />', () => {
    expect(wrapper.find(NavLink).length).toBe(4)
  })
})