import React from 'react';
import { shallow, mount, render } from 'enzyme';
import StarRating from '../StarRating';


describe('StarRating component', () => {
  it('should render correctly', () => {
    const component = shallow(<StarRating />);

    expect(component.exists()).toBe(true);
  });
});



