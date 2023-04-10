const axios = require('axios');
const { BASE_PATH } = require('../config/endpoints');

class APIHelper {
  constructor() {
    // put here any Environment initialization that may be required
  }

  async get(path) {
    return sendRequest(path);
  }

  async post(path, data) {
    return sendRequest(path, data, 'post');
  }

  async put(path, data) {
    return sendRequest(path, data, 'put');
  }

  async delete(path) {
    return sendRequest(path, {}, 'delete');
  }
}

const sendRequest = async (path, data = null, method = 'get') => {
  try {
    const url = `${BASE_PATH}/${path}`;
    const response = await axios({
      method,
      url,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      data,
    });
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response.status,
    };
  }
};

const api = new APIHelper();

module.exports = { api };
