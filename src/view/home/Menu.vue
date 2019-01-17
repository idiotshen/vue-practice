<template>
  <div class="index-nav-menu-wrapper">
    <div class="menu-title-wrap">
      <h2 class="menu-title">TPT</h2>
    </div>
    <el-menu background-color="#3f4d67" text-color="#FFFFFF">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <router-link slot="title" to="/">仓库管理</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <router-link slot="title">产品管理</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'MyMenu',
};
</script>

<style scoped>
.index-nav-menu-wrapper {
  width: 100%;
  height: 100%;
}

.el-menu {
  height: 90%;
  border: none;
}

.menu-title-wrap {
  width: 100%;
  height: 10%;
  line-height: 72px;
  background-color: #3f4d67;
}

.menu-title-wrap .menu-title {
  width: fit-content;
  margin: 0 auto;
  color: #ffffff;
}

a {
  color: #ffffff;
  text-decoration: none;
}
</style>
