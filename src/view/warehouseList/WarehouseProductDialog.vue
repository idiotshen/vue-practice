<template>
  <el-dialog title="在库列表" :visible.sync="warehouseProDialogVisible"
    @close="closeWarehouseProDialog">
    <el-table :data="productListMock" show-summary :summary-method="getSummaries">
      <el-table-column property="name" label="产品名称" width="150"></el-table-column>
      <el-table-column property="singleCover" label="单个占地" width="150"></el-table-column>
      <el-table-column label="产品数量" width="200">
        <template slot-scope="scope">
          <span @click="handleCount(scope.$index, +1)">
            <i class="el-icon-remove-outline"></i>
          </span>
          <span>{{ scope.row.count }}</span>
          <span @click="handleCount(scope.$index, -1)">
            <i class="el-icon-circle-plus-outline"></i>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="总占地">
        <template slot-scope="scope">
          <span>{{ scope.row.totalCover }}</span>
          <span>
            <i v-bind:class="scope.row.compareIcon"></i>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <div class="action-wrapper">
    <el-button type="primary" id="update-product-count"
      @click="closeWarehouseProDialog">
      确定
    </el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'WarehouseProductDialog',

  props: ['warehouseProDialogVisible'],

  data() {
    return {
      // productListMock: this.productList.map(value => Object.assign({ compareIcon: '' }, value)),
      upIcon: 'el-icon-caret-top',
      downIcon: 'el-icon-caret-bottom',
      productListMock: [],
    };
  },
  methods: {
    handleCount(index, number) {
      const product = this.productListMock[index];
      product.count -= number;
      product.totalCover = product.count * product.singleCover;

      if (product.totalCover > this.productList[index].totalCover) {
        product.compareIcon = this.upIcon;
      } else if (product.totalCover < this.productList[index].totalCover) {
        product.compareIcon = this.downIcon;
      } else {
        product.compareIcon = '';
      }
    },

    getSummaries() {
      const sums = [];
      sums[0] = '仓库总占地';
      sums[1] = this.totalCover;
      sums[2] = '已用占地';
      sums[3] = this.warehouseUsedCover;
      return sums;
    },

    closeWarehouseProDialog() {
      this.$emit('closeWarehouseProDialog');
    },
  },
  computed: {
    warehouseUsedCover() {
      return this.productListMock.reduce(
        (pre, current) => pre + current.totalCover, 0,
      );
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
