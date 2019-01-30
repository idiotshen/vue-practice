<template>
  <el-dialog
    :visible.sync="createProductDialogVisible"
    @close="closeCreateProductDialog(false)"
  >
    <el-form ref="form" :model="product" label-width="80px" :inline="true">
      <el-form-item label ="产品名称">
        <el-input v-model="product.name"></el-input>
      </el-form-item>
      <el-form-item label="单个容量">
        <el-input v-model="product.singleCover" placeholder="立方米"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="createProduct">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import productApi from '../../api/product';

export default {
  name: 'CreateProduct',

  props: ['createProductDialogVisible'],

  data() {
    return {
      product: {
        name: '',
        singleCover: '',
      },
    };
  },

  methods: {
    createProduct() {
      productApi.createProduct(this.product)
        .then(() => {
          this.$alert('创建成功', '通知', {
            confirmButtonText: '确定',
            callback: () => {
              this.closeCreateProductDialog(true);
            },
          });
        });
    },

    closeCreateProductDialog(flag) {
      this.$emit('closeCreateProductDialog', flag);
    },
  },
};
</script>

<style scoped>
</style>
