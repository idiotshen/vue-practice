import request from '../axios/request';

const BASE_URL = '/warehouseBook';

export default {
  async createWarehouseBook({ warehouseId, productId, count }) {
    return request('post', BASE_URL, { warehouseId, productId, count });
  },

  async getWarehouseBookByWarehouseId(warehouseId) {
    return request('get', `${BASE_URL}/warehouse/${warehouseId}`);
  },

  /**
   *
   * @param {Array} updateWarehouseBookList
   * @returns
   */
  async updateWarehouseBookList(updateWarehouseBookList) {
    return request('put', BASE_URL, { updateWarehouseBookList });
  },
};
