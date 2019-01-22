<template>
  <el-dialog :visible.sync="warehouseInputDialogVisible" @close="closeWarehouseInputDialog"
    title="产品入库">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="产品名称">
        <el-select v-model="formInline.region">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="单个面积">
        <el-input readonly></el-input>
      </el-form-item>
      <el-form-item label="入库数量">
        <el-input readonly></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'WarehouseInputDialog',

  props: ['warehouseInputDialogVisible'],

  data() {
    return {
      formInline: {},
    };
  },
  methods: {
    closeWarehouseInputDialog() {
      this.$emit('closeWarehouseInputDialog');
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
