<template>
  <div class="bg">
    <div class="error-wrap">
      <h2>403错误，请重新登陆</h2>
      <el-button class="jump-button" type="primary">跳转至登陆页面</el-button>
    </div>
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="30"
      shapeType="star"
      :particleSize="5"
      linesColor="#fff"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: 'Error',
};
</script>

<style>
  .bg {
    height:100%;
    width:100%;
    background-position: -20% 10%;
    background-size: contain;
    background-image: url('../../../static/sky.jpg');
  }

  #particles-js {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .error-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background-color: rgba(255,255,255,0.5);
    border-radius: 5px;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    z-index: 3;
  }

  .error-wrap h2 {
    text-align: center;
    width: 100%;
    margin-bottom: 5%;
  }
</style>
