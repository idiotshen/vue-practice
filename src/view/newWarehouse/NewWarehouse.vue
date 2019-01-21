<template>
  <div class="new-warehouse-wrapper">
    <div class="new-warehouse-header">
      <div class="new-warehouse-title">
        <h3>新建仓库</h3>
      </div>
    </div>
    <div class="new-warehouse-panel-wrapper">
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
    </div>
  </div>
</template>

<script>
import warehouse from '../../api/warehouse';

export default {
  name: 'NewWarehouse',

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
              this.$router.push({ path: '/home/warehouse-list' });
            },
          });
        });
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
