import request from '../axios/request';

export default {
  warehouseList() {
    return request('get', '/warehouse');
  },

  createWarehouse({ name, location, totalCover }) {
    return request('post', '/warehouse', { name, location, totalCover });
  },

  warehouseExcludedProductList(warehouseId) {
    return request('get', `/warehouse/${warehouseId}/excludedProductList`);
  },
};
