const { api } = require('../../helpers/api.helper');

describe('Home Task / Update a resource (using put() method);', () => {
  it('PUT posts', async () => {
    const modified = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const response = await api.put('posts/1', modified);

    expect(response.status).to.equal(200);
  });
});
