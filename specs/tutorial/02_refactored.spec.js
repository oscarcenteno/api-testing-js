const { api } = require('../../helpers/api.helper');

describe('API Test Suite', () => {
  it('GET posts/1', async () => {
    const response = await api.get('posts/1');

    expect(response.status).to.equal(200);
  });

  it('POST posts', async () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const response = await api.post('posts', newPost);

    expect(response.status).to.equal(201);
  });
});
