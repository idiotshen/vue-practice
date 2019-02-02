<template>
  <div class="warehouse-list-wrapper">
    <div class="warehouse-list-header">
      <div class="warehouse-list-title">
        <h3>仓库列表</h3>
      </div>
      <div class="warehouse-list-add-warehouse">
        <el-button type="primary" @click="newwarehouse">新建仓库</el-button>
      </div>
    </div>
    <div class="warehouse-table-wrapper">
      <el-table :data="warehouseList" style="width: 100%;">
        <el-table-column fixed prop="name" label="仓库名称" width="350"></el-table-column>
        <el-table-column prop="location" label="仓库地址" width="350"></el-table-column>
        <el-table-column prop="totalCover" label="仓库容量" width="150"></el-table-column>
        <el-table-column prop="hasUsed" label="仓库已用" width="150"></el-table-column>
        <el-table-column width="200">
          <template slot="header" slot-scope="scope">
            <el-input size="mini" placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button @click="openDialog(scope.row, 'warehouseBookDialogVisible')"
              type="text" size="small">
              查看在库列表
            </el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button @click="openDialog(scope.row, 'warehouseInputDialogVisible')"
              type="text" size="small">
              入库
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <warehouse-product-dialog
      :warehouseId='warehouseId'
      :totalCover='totalCover'
      :warehouseBookDialogVisible="warehouseBookDialogVisible"
      @closeWarehouseProDialog="closeWarehouseProDialog">
    </warehouse-product-dialog>
    <warehouse-input-dialog
      :warehouseId='warehouseId'
      @closeWarehouseInputDialog="closeWarehouseInputDialog"
      :warehouseInputDialogVisible="warehouseInputDialogVisible">
    </warehouse-input-dialog>
    <create-warehouse-dialog
      @closeCreateWarehouseDialog="closeCreateWarehouseDialog"
      :createWarehouseDialogVisible="createWarehouseDialogVisible"
    >
    </create-warehouse-dialog>
  </div>
</template>

<script>
import WarehouseBookDialog from './WarehouseBookDialog';
import WarehouseInputDialog from './WarehouseInputDialog';
import CreateWarehouseDialog from './createWarehouseDialog';

import warehouse from '../../api/warehouse';

export default {
  name: 'WarehouseList',

  components: {
    'warehouse-product-dialog': WarehouseBookDialog,
    'warehouse-input-dialog': WarehouseInputDialog,
    'create-warehouse-dialog': CreateWarehouseDialog,
  },

  mounted() {
    this.getWarehouseList();
  },

  data() {
    return {
      warehouseBookDialogVisible: false,

      warehouseInputDialogVisible: false,

      createWarehouseDialogVisible: false,

      warehouseId: '',

      totalCover: 0,

      warehouseList: [],
    };
  },

  methods: {
    getWarehouseList() {
      warehouse.warehouseList()
        .then((warehouseList) => {
          this.warehouseList = warehouseList;
        });
    },

    newwarehouse() {
      this.createWarehouseDialogVisible = true;
    },

    openDialog(row, dialogArg) {
      this.warehouseId = row._id;
      this.totalCover = row.totalCover;
      this[dialogArg] = true;
    },

    closeWarehouseProDialog() {
      this.warehouseBookDialogVisible = false;
    },

    closeWarehouseInputDialog() {
      this.warehouseInputDialogVisible = false;
    },

    closeCreateWarehouseDialog(flag) {
      this.createWarehouseDialogVisible = false;
      if (flag) {
        this.getWarehouseList();
      }
    },
  },
};
</script>

<style>
.warehouse-list-wrapper {
  height: 100%;
}

.warehouse-list-wrapper .warehouse-list-header .warehouse-list-title {
  display: inline-block;
  width: fit-content;
  height: 10%;
}

.warehouse-list-wrapper .warehouse-list-header .warehouse-list-add-warehouse {
  float: right;
}

.warehouse-list-wrapper .warehouse-table-wrapper {
  height: 90%;
}
</style>
