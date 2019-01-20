<template>
  <div class="vendor-list-wrapper">
    <div class="vendor-list-header">
      <div class="vendor-list-title">
        <h3>仓库列表</h3>
      </div>
      <div class="vendor-list-add-vendor">
        <el-button type="primary" @click="newVendor">新建仓库</el-button>
      </div>
    </div>
    <div class="vendor-table-wrapper">
      <el-table :data="warehouseList" style="width: 100%;" height="500">
        <el-table-column fixed prop="name" label="仓库名称" width="350"></el-table-column>
        <el-table-column prop="location" label="仓库地址" width="350"></el-table-column>
        <el-table-column prop="totalCover" label="仓库容量" width="150"></el-table-column>
        <el-table-column prop="hasUsed" label="仓库已用" width="150"></el-table-column>
        <el-table-column width="200">
          <template slot="header" slot-scope="scope">
            <el-input size="mini" placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button @click="dialogVisible = true" type="text" size="small">查看在库列表</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <warehouse-product-dialog :warehouseId='warehouseId' :dialogVisible="dialogVisible" @closeDialog="closeDialog">
    </warehouse-product-dialog>
  </div>
</template>

<script>
import WarehouseProductDialog from '../warehouseList/WarehouseProductDialog';
import warehouseApi from '../../api/warehouse';

export default {
  name: 'WarehouseList',

  components: {
    'warehouse-product-dialog': WarehouseProductDialog,
  },

  // mounted() {
  //   warehouseApi.warehouseList()
  //     .then((res) => {
  //       this.warehouseList = res.list;
  //     });
  // },

  data() {
    return {
      dialogVisible: false,

      warehouseId: '',

      productList: [],

      totalCover: 30,

      warehouseList: [],
    };
  },

  methods: {
    newVendor() {
      this.$router.push('/home/new-warehouse');
    },

    closeDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style>
.vendor-list-wrapper {
  height: 100%;
}

.vendor-list-wrapper .vendor-list-header .vendor-list-title {
  display: inline-block;
  width: fit-content;
  height: 10%;
}

.vendor-list-wrapper .vendor-list-header .vendor-list-add-vendor {
  float: right;
}

.vendor-list-wrapper .vendor-table-wrapper {
  height: 90%;
}
</style>
