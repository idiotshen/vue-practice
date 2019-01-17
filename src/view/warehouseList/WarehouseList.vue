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
      <el-table :data="tableData3" style="width: 100%;" height="500">
        <el-table-column fixed prop="warehouseName" label="仓库名称" width="350"></el-table-column>
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
    <warehouse-product-dialog></warehouse-product-dialog>
    <el-dialog title="收货地址" :visible.sync="dialogVisible">
      <warehouse-product-table :productList="productList" :totalCover="totalCover"></warehouse-product-table>
    </el-dialog>
  </div>
</template>

<script>
import WarehouseProductTable from '../warehouseList/WarehouseProductTable';

export default {
  name: 'WarehouseList',

  components: {
    'warehouse-product-table': WarehouseProductTable,
  },

  data() {
    return {
      dialogVisible: false,

      warehouseId: '',

      productList: [
        {
          name: '产品1',
          count: 12,
          singleCover: 1,
          totalCover: 12,
        },
        {
          name: '产品1',
          count: 12,
          singleCover: 1,
          totalCover: 12,
        },
        {
          name: '产品1',
          count: 12,
          singleCover: 1,
          totalCover: 12,
        },
        {
          name: '产品1',
          count: 12,
          singleCover: 1,
          totalCover: 12,
        },
      ],

      totalCover: 30,

      tableData3: [
        {
          warehouseName: '仓库1',
          location: '上海',
          province: '上海',
          totalCover: '30',
          hasUsed: '15',
        },
        {
          warehouseName: '仓库1',
          location: '上海',
          province: '上海',
          totalCover: '30',
          hasUsed: '15',
        },
        {
          warehouseName: '仓库1',
          location: '上海',
          province: '上海',
          totalCover: '30',
          hasUsed: '15',
        },
        {
          warehouseName: '仓库1',
          location: '上海',
          province: '上海',
          totalCover: '30',
          hasUsed: '15',
        },
        {
          warehouseName: '仓库1',
          location: '上海',
          province: '上海',
          totalCover: '30',
          hasUsed: '15',
        },
        {
          warehouseName: '仓库1',
          location: '上海',
          province: '上海',
          totalCover: '30',
          hasUsed: '15',
        },
        {
          warehouseName: '仓库1',
          location: '上海',
          province: '上海',
          totalCover: '30',
          hasUsed: '15',
        },
        {
          warehouseName: '仓库1',
          location: '上海',
          province: '上海',
          totalCover: '30',
          hasUsed: '15',
        },
        {
          warehouseName: '仓库1',
          location: '上海',
          province: '上海',
          totalCover: '30',
          hasUsed: '15',
        },
        {
          warehouseName: '仓库1',
          location: '上海',
          province: '上海',
          totalCover: '30',
          hasUsed: '15',
        },
        {
          warehouseName: '仓库1',
          location: '上海',
          province: '上海',
          totalCover: '30',
          hasUsed: '15',
        },
        {
          warehouseName: '仓库1',
          location: '上海',
          province: '上海',
          totalCover: '30',
          hasUsed: '15',
        },
        {
          warehouseName: '仓库1',
          location: '上海',
          province: '上海',
          totalCover: '30',
          hasUsed: '15',
        },
      ],
    };
  },

  methods: {
    newVendor() {
      this.$router.push('/home/new-warehouse');
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
