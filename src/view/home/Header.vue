<template>
  <div class="hearder-wrapper">
    <div class="header-title-wrapper">
      <h2>业务伙伴筛选系统</h2>
    </div>
    <div class="header-face-wrapper">
      <face></face>
    </div>
  </div>
</template>

<script>
import face from './Face';

export default {
  name: 'Header',
  components: {
    face,
  },
};
</script>

<style>
.header-title-wrapper {
  float: left;
  height: 60px;
  line-height: 60px;
}

.header-face-wrapper {
  width: 200px;
  float: right;
  height: 60px;
  line-height: 60px;
  margin-right: 30px;
}
</style>
