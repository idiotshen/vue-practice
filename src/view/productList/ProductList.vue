<template>
  <div class="product-list-wrapper">
    <div class="product-list-header">
      <div class="product-list-title">
        <h3>产品列表</h3>
      </div>
      <div class="product-list-add-product">
        <el-button type="primary" @click="createProductDialogVisible = true">新建产品</el-button>
      </div>
    </div>
    <div class="product-table-wrapper">
      <el-table :data="productList" style="width: 100%;">
        <el-table-column fixed prop="name" label="产品名称" min-width="33%"></el-table-column>
        <el-table-column prop="singleCover" label="单个面积" min-width="33%"></el-table-column>
        <el-table-column min-width="33%">
          <template slot="header" slot-scope="scope">
            <el-input size="mini" placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button @click="productProDialogVisible = true"
              type="text" size="small">
              查看分布列表
            </el-button>
            <el-button @click="productInputDialogVisible = true"
              type="text" size="small">
              查看操作记录
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <create-product-dialog :createProductDialogVisible='createProductDialogVisible'
      @closeCreateProductDialog='closeCreateProductDialog'>
    </create-product-dialog>
  </div>
</template>

<script>
import CreateProductDialog from './createProductDialog';
import productApi from '../../api/product';

export default {
  name: 'ProductList',

  components: {
    'create-product-dialog': CreateProductDialog,
  },

  data() {
    return {
      productList: [],

      createProductDialogVisible: false,
    };
  },

  mounted() {
    this.getProductList();
  },

  methods: {
    getProductList() {
      productApi.product()
        .then((result) => {
          this.productList = result;
        });
    },

    closeCreateProductDialog(flag) {
      this.createProductDialogVisible = false;

      if (flag) {
        this.getProductList();
      }
    },
  },
};
</script>

<style>
.product-list-wrapper {
  height: 100%;
}

.product-list-wrapper .product-list-header .product-list-title {
  display: inline-block;
  width: fit-content;
  height: 10%;
}

.product-list-wrapper .product-list-header .product-list-add-product {
  float: right;
}

.product-list-wrapper .product-table-wrapper {
  height: 90%;
}
</style>
