/**
 * @jest-environment node
 */

const axios = require('axios');
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const options = {
  headers: { 'access-control-allow-origin': '*' }
}

test('retrieve all reviews for a particular product by product id', () => {
  return axios.get('http://localhost:3003/api/reviews/81420')
  .then(response => {
    expect(response.data.length).toBe(8);
  });
})