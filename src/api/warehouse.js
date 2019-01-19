import request from '../axios/request';

export default {
  warehouseList() {
    return request('get', '/warehouseList');
  },

  warehouse() {

  },
};
