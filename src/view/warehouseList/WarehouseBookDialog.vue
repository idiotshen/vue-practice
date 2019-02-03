<template>
  <el-dialog title="在库列表"
    :visible.sync="warehouseBookDialogVisible"
    @open="getWarehouseBook"
    @close="closeWarehouseProDialog">
    <el-table :data="warehouseBookListMock" show-summary :summary-method="getSummaries">
      <el-table-column property="product.name" label="产品名称" width="150"></el-table-column>
      <el-table-column property="product.singleCover" label="单个占地" width="150"></el-table-column>
      <el-table-column label="产品数量" width="200">
        <template slot-scope="scope">
          <span @click="handleCount(scope.$index, +1)">
            <i class="el-icon-remove-outline"></i>
          </span>
          <div class="table-input-wrapper">
            <el-input size='small' v-model="scope.row.count"></el-input>
          </div>
          <span @click="handleCount(scope.$index, -1)">
            <i class="el-icon-circle-plus-outline"></i>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="总占地">
        <template slot-scope="scope">
          <span>{{ scope.row.cover }}</span>
          <span>
            <i v-bind:class="scope.row.compareIcon"></i>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <div class="action-wrapper">
    <el-button type="primary" id="update-product-count"
      @click="updateWarehouseBookList">
      确定
    </el-button>
    </div>
  </el-dialog>
</template>

<script>
import warehouseBookApi from '../../api/warehouseBook';

export default {
  name: 'WarehouseBookDialog',

  props: ['warehouseBookDialogVisible', 'warehouseId', 'totalCover'],

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
          this.warehouseBookListMock = this.warehouseBookList.map(value => Object.assign({}, value));
        });
    },

    handleCount(index, number) {
      const warehouseBook = this.warehouseBookListMock[index];
      warehouseBook.count -= number;
      warehouseBook.cover = warehouseBook.count * warehouseBook.product.singleCover;

      if (warehouseBook.cover > this.warehouseBookList[index].cover) {
        warehouseBook.compareIcon = this.upIcon;
      } else if (warehouseBook.cover < this.warehouseBookList[index].cover) {
        warehouseBook.compareIcon = this.downIcon;
      } else {
        warehouseBook.compareIcon = '';
      }
    },

    changeCount(index) {
      const warehouseBook = this.warehouseBookListMock[index];
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

    closeWarehouseProDialog() {
      this.$emit('closeWarehouseProDialog');
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

      if (updateWarehouseBookList.length > 0) {
        warehouseBookApi.updateWarehouseBookList(updateWarehouseBookList);
      }
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

<style>
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
