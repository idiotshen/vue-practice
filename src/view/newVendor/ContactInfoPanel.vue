<template>
  <el-form ref="materialInfo" label-width="150px" label-position="left">
    <el-form-item label="商务联系人中文名">
      <el-input v-model="vendor.abbreviation"></el-input>
    </el-form-item>
    <el-form-item label="商务联系人英文名">
      <el-input v-model="vendor.abbreviation"></el-input>
    </el-form-item>
    <el-form-item label="商务联系人职务">
      <el-input v-model="vendor.abbreviation"></el-input>
    </el-form-item>
    <el-form-item label="商务联系人移动电话">
      <el-input v-model="vendor.abbreviation"></el-input>
    </el-form-item>
    <el-form-item label="商务联系人固定电话">
      <el-input v-model="vendor.abbreviation"></el-input>
    </el-form-item>
    <el-form-item label="商务联系人邮箱">
      <el-input v-model="vendor.abbreviation"></el-input>
    </el-form-item>
    <el-form-item label="商务联系人固定电话">
      <el-input v-model="vendor.abbreviation"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'ContactInfoPanel',

  props: ['vendor'],
};
</script>

<style scoped>
</style>
