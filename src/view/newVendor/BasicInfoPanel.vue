<template>
  <el-form ref="basicInfo" label-width="150px" label-position="left">
    <el-form-item label="国内或国外">
      <el-radio-group v-model="vendor.domestic" size="medium">
        <el-radio label="domestic">国内</el-radio>
        <el-radio label="aboard">国外</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="供应商中文名">
      <el-input v-model="vendor.vendorNameZh"></el-input>
    </el-form-item>
    <el-form-item label="供应商英文名">
      <el-input v-model="vendor.vendorNameEn"></el-input>
    </el-form-item>
    <el-form-item label="供应商简称">
      <el-input v-model="vendor.abbreviation"></el-input>
    </el-form-item>
    <el-form-item label="供应商属性">
      <el-radio-group v-model="vendor.type" size="medium">
        <el-radio label="PP">PP供应商</el-radio>
        <el-radio label="NPP">NPP供应商</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="潜在冲突">
      <el-radio-group v-model="vendor.conflict" size="medium">
        <el-radio label="true">有</el-radio>
        <el-radio label="false">没有</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'BasicInfoPanel',

  props: ['vendor'],
};
</script>

<style scoped>
</style>
