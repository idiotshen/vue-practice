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
        <el-form-item label="所属厂区">
          <el-select v-model="warehouse.region" placeholder="请选择厂区">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="最大容量">
          <el-input v-model="warehouse.name" style="width: 50%;" placeholder="立方米"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewWarehouse',

  data() {
    return {
      warehouse: {
        domestic: '',
      },
    };
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
