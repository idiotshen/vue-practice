<template>
  <div class="face-wrapper">
    <div class="i-face" @mouseover="enter()" @mouseleave="leave()" ref="face">
      <img class="img-face" src="../../../static/img/face.png" alt>
    </div>
    <div class="i-info" @mouseover="enter()" @mouseleave="leave()" ref="info">
      <div class="info-wrapper i-info-wrapper">
        <span class="i-name i-float-left">idiot_shen</span>
        <span class="i-job i-float-right">软件工程师</span>
      </div>
      <div class="task-wrapper i-info-wrapper">
        <span class="i-float-left">我的待办事项</span>
        <span class="i-float-right">5</span>
      </div>
      <div class="action-wrapper i-info-wrapper">
        <a class="i-float-right">退出</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'face',
  methods: {
    showInfo() {
      this.$refs.info.style.display = 'block';
    },

    hideInfo() {
      this.$refs.info.style.display = 'none';
    },

    blowUpFace() {
      this.$refs.face.style.height = '120%';
      this.$refs.face.style['padding-top'] = '30px';
      this.$refs.face.style.margin = '0 auto';
    },

    reduceFace() {
      this.$refs.face.style.height = '80%';
      this.$refs.face.style['padding-top'] = '0';
      this.$refs.face.style.margin = '0 auto';
    },

    enter() {
      this.blowUpFace();
      this.showInfo();
    },

    leave() {
      this.hideInfo();
      this.reduceFace();
    },
  },
};
</script>

<style>
.face-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.i-face {
  position: relative;
  z-index: 3;
  width: fit-content;
  height: 80%;
  top: 0%;
  line-height: 60px;
  margin: 0 auto;
  border-radius: 50%;
  transition: all 0.5s linear;
}

.img-face {
  width: auto;
  height: 100%;
  vertical-align: middle;
}

.i-info {
  position: absolute;
  width: 200px;
  top: 100%;
  right: 0%;
  padding-top: 30px;
  z-index: 2;
  display: none;
  background-color: hsla(0, 0%, 100%, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  box-shadow: 0px 1px 1px black;
  transition: opacity 0.5s ease;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  font-size: 12px;
}

.i-info::before {
  content: "";
  z-index: -1;
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  filter: blur(20px);
  background-color: white
}

.i-info .i-info-wrapper {
  height: 30px;
  width: 150px;
  margin: 0 auto;
}

.i-info .i-info-wrapper span {
  height: 1em;
}

.i-info .i-info-wrapper::after {
  content: "";
  display: block;
  clear: both;
}

.i-float-left {
  float: left;
}

.i-float-right {
  float: right;
}
</style>
