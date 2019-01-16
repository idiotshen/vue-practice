<template>
  <el-table :data="productList">
    <el-table-column property="name" label="产品名称" width="150"></el-table-column>
    <el-table-column property="singleCover" label="单个占地" width="150"></el-table-column>
    <el-table-column label="产品数量" width="200">
      <template slot-scope="scope">
        <span @click="handleMinus(scope.$index, scope.row)">
          <i class="el-icon-remove-outline"></i>
        </span>
        <span>{{ scope.row.count }}</span>
        <span @click="handleAdd(scope.$index, scope.row)">
          <i class="el-icon-circle-plus-outline"></i>
        </span>
      </template>
    </el-table-column>
    <el-table-column property="totalCover" label="总占地"></el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ['productList'],

  data() {
    return {};
  },
  methods: {
    handleMinus(index) {
      this.productList[index].count -= 1;
      this.productList[index].totalCover = this.productList[index].count * this.productList[index].singleCover;
    },

    handleAdd(index) {
      this.productList[index].count += 1;
      this.productList[index].totalCover = this.productList[index].count * this.productList[index].singleCover;
    },
  },
};
</script>
