<template>
  <el-form ref="materialInfo" label-width="150px" label-position="left">
    <el-form-item label="物料族">
      <el-input v-model="vendor.material"></el-input>
    </el-form-item>
    <el-form-item label="主要物料类型">
      <el-input v-model="vendor.subMaterial"></el-input>
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="vendor.materialComment"></el-input>
    </el-form-item>
    <el-form-item label="销售与工厂">
      <el-radio-group v-model="vendor.saleAndFactory" size="medium">
        <el-radio label="true">销售</el-radio>
        <el-radio label="false">销售与工厂</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'MaterialInfoPanel',

  props: ['vendor'],
};
</script>

<style scoped>
</style>
