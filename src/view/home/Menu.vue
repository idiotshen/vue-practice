<template>
  <div class="index-nav-menu-wrapper">
    <div class="menu-title-wrap">
      <h2 class="menu-title">TPT</h2>
    </div>
    <el-menu background-color="#3f4d67" text-color="#FFFFFF">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <router-link slot="title" to="/">首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <router-link slot="title" to="/home/vendor-list">我的供应商清单</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-tickets"></i>
        <router-link slot="title" to="">我的任务清单</router-link>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>管理</span>
        </template>
        <el-menu-item index="5">
          <router-link slot="title" to="">黑名单</router-link>
        </el-menu-item>
        <el-menu-item index="6">
          <router-link slot="title" to="">利益冲突</router-link>
        </el-menu-item>
        <el-menu-item index="7">
          <router-link slot="title" to="">关联方</router-link>
        </el-menu-item>
        <el-menu-item index="8">
          <router-link slot="title" to="">用户</router-link>
        </el-menu-item>
      </el-submenu>
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
