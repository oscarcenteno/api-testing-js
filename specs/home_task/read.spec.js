const { api } = require('../../helpers/api.helper');

describe('Home Task / Read', () => {
  it('Getting a resource', async () => {
    const response = await api.get('posts/1');

    expect(response.status).to.equal(200);
  });

  it('Listing all resources', async () => {
    const response = await api.get('posts');

    expect(response.status).to.equal(200);
  });

  it('Filtering resources', async () => {
    const response = await api.get('posts?userId=1');

    expect(response.status).to.equal(200);
  });
});
