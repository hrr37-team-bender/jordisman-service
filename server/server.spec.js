const axios = require('axios');

const port = 3003;

describe('index', () => {
  let response;

  beforeAll(() => {
    return axios
      .get(`http://localhost:${port}/api/reviews`)
      .then(res => {
        response = res;
      })
      .catch(() => console.log('beforeAll FAILED'));
  });

  it('should handle get requests', () => {
    expect(response.status).toBe(200);
  });

  it('should return an array with length of 6', () => {
    expect(Array.isArray(res.results)).toBe(true);
    expect(response.results.length).toBe(6);
  });
});