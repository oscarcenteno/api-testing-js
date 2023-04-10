const { api } = require('../../helpers/api.helper');

describe('Home Task / Delete a resource (using delete() method)', () => {
  it('DELETE posts/1', async () => {
    const response = await api.delete('posts/1');

    expect(response.status).to.equal(200);
  });
});
