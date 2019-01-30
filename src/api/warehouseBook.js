import request from '../axios/request';

export default {
  async createWarehouseBook({ warehouseId, productId, count }) {
    return request('post', '/warehouseBook', { warehouseId, productId, count });
  },
};
