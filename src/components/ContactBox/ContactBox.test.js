import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './Button/Button';
import ContactBox from './ContactBox';

configure({adapter: new Adapter()})

describe('<ContactBox />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ContactBox />)
  })

  it('Have 3 <Button />', () => {
    expect(wrapper.find(Button).length).toBe(3)
  })
})