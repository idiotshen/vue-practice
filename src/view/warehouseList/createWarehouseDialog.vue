<template>
  <el-dialog :visible.sync="createWarehouseDialogVisible" @close="closeCreateWarehouseDialog(false)">
    <el-form ref="form" :model="warehouse" label-width="80px">
        <el-form-item label="仓库名称">
          <el-input v-model="warehouse.name" style="width: 50%;"></el-input>
        </el-form-item>
        <el-form-item label="厂区地址">
          <el-select v-model="warehouse.location" placeholder="请选择厂区地址">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="最大容量">
          <el-input v-model="warehouse.totalCover" style="width: 50%;" placeholder="立方米"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="createWarehouse">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
  </el-dialog>

</template>

<script>
import warehouse from '../../api/warehouse';

export default {
  name: 'NewWarehouse',

  props: ['createWarehouseDialogVisible'],

  data() {
    return {
      warehouse: {
        name: '',
        location: '',
        totalCover: '',
      },
    };
  },

  methods: {
    createWarehouse() {
      warehouse.createWarehouse(this.warehouse)
        .then(() => {
          this.$alert('创建成功', '通知', {
            confirmButtonText: '确定',
            callback: () => {
              this.closeCreateWarehouseDialog(true);
            },
          });
        });
    },

    closeCreateWarehouseDialog(flag) {
      this.$emit('closeCreateWarehouseDialog', flag);
    },
  },
};
</script>

<style scoped>
.new-warehouse-wrapper {
  height: 100%;
}

.new-warehouse-header {
  height: 10%;
}

.el-tab-pane {
  padding: 0px 250px 0px 15px;
}

.new-warehouse-action-wrapper {
  padding-right: 250px;
}

.new-warehouse-action-wrapper .el-button {
  float: right;
  margin-left: 20px;
}
</style>
