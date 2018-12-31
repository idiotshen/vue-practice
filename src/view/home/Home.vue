<template>
  <el-container class="wrapper">
    <el-aside width="15%">
      <my-menu></my-menu>
    </el-aside>
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import menu from './Menu';
import header from './Header';

export default {
  name: 'Index',
  components: {
    'my-menu': menu,
    'my-header': header,
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}

.el-aside {
  width: 15%;
  height: 100%;
}

.el-header {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  margin-bottom: 3px;
  background-color: white
}

.el-container {
  background-color: #f4f4f4;
}

.el-main{
  background-color: white;
  margin: 15px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
</style>
