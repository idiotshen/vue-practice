<template>
  <el-dialog :visible.sync="warehouseInputDialogVisible"
    @close="closeWarehouseInputDialog"
    @open="getWarehouseExcludedProductList"
    title="产品入库">
    <el-form :inline="true" :model="inputProduct" class="demo-form-inline">
      <el-form-item label="产品名称">
        <el-select v-model="inputProduct.productId" @change="changeSelectedProduct">
          <el-option v-for="(product,key) in productList"
            :key="key"
            :label="product.name"
            :value = "product._id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="单个面积">
        <el-input v-model="inputProduct.singleCover" readonly></el-input>
      </el-form-item>
      <el-form-item label="入库数量">
        <el-input v-model="inputProduct.count"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="createWarehouseBook">确定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import warehouseApi from '../../api/warehouse';
import warehouseBookApi from '../../api/warehouseBook';

export default {
  name: 'WarehouseInputDialog',

  props: ['warehouseInputDialogVisible', 'warehouseId'],

  data() {
    return {
      productList: [],

      inputProduct: {
        productId: '',
        count: '',
        singleCover: '',
      },
    };
  },

  methods: {
    closeWarehouseInputDialog() {
      this.$emit('closeWarehouseInputDialog');
    },

    getWarehouseExcludedProductList() {
      warehouseApi.warehouseExcludedProductList(this.warehouseId)
        .then((result) => {
          this.productList = result;
        });
    },

    changeSelectedProduct(value) {
      this.productList.some((product) => {
        if (value === product._id) {
          this.inputProduct.singleCover = product.singleCover;
          return true;
        }

        return false;
      });
    },

    createWarehouseBook() {
      warehouseBookApi.createWarehouseBook(Object.assign(this.inputProduct, { warehouseId: this.warehouseId }))
        .then(() => {
          this.$alert('入库成功', '通知', {
            confirmButtonText: '确定',
            callback: () => {
              this.closeWarehouseInputDialog();
            },
          });
        });
    },
  },
};
</script>

<style scope>
.action-wrapper {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
