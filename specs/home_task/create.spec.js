const { api } = require('../../helpers/api.helper');

describe('Home Task / Create a resource (using post() method)', () => {
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
