import request from '../axios/request';

export default {
  product() {
    return request('get', '/product');
  },

  createProduct({ name, singleCover }) {
    return request('post', '/product', { name, singleCover });
  },
};
