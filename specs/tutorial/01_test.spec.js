const axios = require('axios');

describe('API Test Suite', () => {
  it('GET posts/1', async () => {
    const response = await axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
    });

    expect(response.status).to.equal(200);
  });

  it('POST posts', async () => {
    const response = await axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      data: {
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
    });

    expect(response.status).to.equal(201);
  });
});
