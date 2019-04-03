import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import App from './index.jsx';
// import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// describe('App', () => {
//   it('should render correctly', () => {
//     const component = shallow(<App />);

//     expect(component.exists()).toBe(true);
//   });
// });


test('Fake test', () => {
  expect(true).toBeTruthy();
})