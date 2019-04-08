
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App.jsx';


test('it should contain DOM element', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('div')).toHaveLength(3)
})