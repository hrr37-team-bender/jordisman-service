import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../App';

describe('App', () => {
  it('should render correctly', () => {
    const component = shallow(<App />);
    expect(component.exists()).toBe(true);
  });

  it('should render one component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });

});

