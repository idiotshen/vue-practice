<template>
  <el-dialog title="在库列表"
    width="60%"
    :visible.sync="warehouseBookDialogVisible"
    @open="getWarehouseBook"
    @close="closeWarehouseProDialog">
    <el-table :data="warehouseBookListMock" show-summary :summary-method="getSummaries">
      <el-table-column property="product.name" label="产品名称" width="150"></el-table-column>
      <el-table-column property="product.singleCover" label="单个占地" width="150"></el-table-column>
      <el-table-column property="count" label="产品数量" width="200">
      </el-table-column>
      <el-table-column label="总占地">
        <template slot-scope="scope">
          <span>{{ scope.row.cover }}</span>
          <span>
            <i v-bind:class="scope.row.compareIcon"></i>
          </span>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <span @click="handleCount(scope.$index, -1)">
            <i class="el-icon-remove-outline"></i>
          </span>
          <div class="table-input-wrapper">
            <el-input size='small' v-model="scope.row.changeCount"/>
          </div>
          <span @click="handleCount(scope.$index, +1)">
            <i class="el-icon-circle-plus-outline"></i>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <div class="action-wrapper">
      <el-button type="primary" id="update-product-count"
        @click="updateWarehouseBookList">
        确定
      </el-button>
      <el-button type="info" id="export-to-excel"
        @click="exportExcel">
        导出excel
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
import moment from 'moment';

import warehouseBookApi from '../../api/warehouseBook';
import excelUtils from '../../utils/excelUtils';


export default {
  name: 'WarehouseBookDialog',

  props: ['warehouseBookDialogVisible', 'warehouseId', 'warehouseName', 'totalCover'],

  data() {
    return {
      upIcon: 'el-icon-caret-top',
      downIcon: 'el-icon-caret-bottom',
      warehouseBookList: [],
      warehouseBookListMock: [],
    };
  },
  methods: {
    getWarehouseBook() {
      warehouseBookApi.getWarehouseBookByWarehouseId(this.warehouseId)
        .then((res) => {
          this.warehouseBookList = res;
          this.warehouseBookListMock = this.warehouseBookList.map(value => Object.assign({ changeCount: 0 }, value));
        });
    },

    handleCount(index, flag) {
      const warehouseBook = this.warehouseBookListMock[index];
      warehouseBook.count += warehouseBook.changeCount * flag;
      warehouseBook.cover = warehouseBook.count * warehouseBook.product.singleCover;

      if (warehouseBook.cover > this.warehouseBookList[index].cover) {
        warehouseBook.compareIcon = this.upIcon;
      } else if (warehouseBook.cover < this.warehouseBookList[index].cover) {
        warehouseBook.compareIcon = this.downIcon;
      } else {
        warehouseBook.compareIcon = '';
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

    closeWarehouseProDialog(flag = false) {
      this.$emit('closeWarehouseProDialog', 'warehouseBookDialogVisible', flag);
    },

    updateWarehouseBookList() {
      const updateWarehouseBookList = [];
      this.warehouseBookListMock.forEach((warehouseBook, index) => {
        if (warehouseBook.count !== this.warehouseBookList[index].count) {
          // eslint-disable-next-line no-param-reassign
          const tempWarehouseBook = Object.assign({}, warehouseBook);
          tempWarehouseBook.productId = warehouseBook.product._id;
          updateWarehouseBookList.push(tempWarehouseBook);
        }
      });

      if (this.totalCover < this.warehouseUsedCover) {
        this.$alert('超出库存上限', '通知', {
          confirmButtonText: '确定',
        });
      } else if (updateWarehouseBookList.length > 0) {
        warehouseBookApi.updateWarehouseBookList(updateWarehouseBookList)
          .then(() => {
            this.$alert('修改成功', '通知', {
              confirmButtonText: '确定',
              callback: () => {
                this.closeWarehouseProDialog(true);
              },
            });
          });
      }
    },

    exportExcel() {
      excelUtils(['产品名', '产品单个面积', '数量', '总占地'],
        this.warehouseBookList.map(warehouseBook => [warehouseBook.product.name, warehouseBook.product.singleCover, warehouseBook.count, warehouseBook.cover]),
        `${this.warehouseName}-${moment().format('YYYY-MM-DD')}-在库列表`);
    },
  },
  computed: {
    warehouseUsedCover() {
      return this.warehouseBookListMock.reduce(
        (pre, current) => pre + current.cover, 0,
      );
    },
  },
};
</script>

<style scoped>
  .action-wrapper {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }

  .table-input-wrapper{
    display: inline-block;
    width: 50%;
  }
</style>
