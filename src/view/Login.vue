<template>
  <div class="bg">
    <div class="login-wrap">
      <div class="title-wrap">
        <h2 class="title">思索仓库管理系统</h2>
      </div>
      <div class="form-wrap">
        <div class="input-wrap">
          <el-form ref="form" :model="form">
            <el-form-item>
              <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
            </el-form-item>
          </el-form>
        </div>

        <div class="action-wrap">
          <div class="pwd-action-wrap">
            <el-checkbox text-color="#FFF">记住密码</el-checkbox>
            <a class="forget-pwd-action">忘记密码</a>
          </div>
          <div class="login-action-wrap">
            <el-button type="primary" @click="onSubmit">登陆</el-button>
          </div>
        </div>
      </div>
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
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },

  methods: {
    onSubmit() {
      this.$store.dispatch('login', this.form)
        .then(() => {
          this.$router.push({ path: '/' });
        });
    },
  },
};
</script>

<style>
  .bg {
    height:100%;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: -20% 10%;
    background-size: contain;
    background-image: url('../../static/sky.jpg');
  }

  #particles-js {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .bg .login-wrap{
    width: 350px;
    background-color: rgba(255,255,255,0.5);
    border-radius: 5px;
    z-index: 3;
    margin-right: -37%;
  }

  .bg .title-wrap{
    width: 100%;
    height: 100px;
    line-height: 50px;
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .bg .title-wrap .title{
    width: fit-content;
    margin: 0 auto;
    color: #FFF;
  }

  .bg .form-wrap{
    width: 90%;
    margin: 30px auto 50px;
  }

  .bg .form-wrap .input-wrap{
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .bg .form-wrap .action-wrap .pwd-action-wrap{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
    color: #FFF !important;
  }

  .bg .form-wrap .action-wrap .pwd-action-wrap .el-checkbox__label{
    color: #FFF;
  }

  .bg .form-wrap .action-wrap .pwd-action-wrap a{
    color: #FFF;
    font-size: 14px;
  }

  .bg .form-wrap .action-wrap .login-action-wrap{
    width: 100%;
  }

  .bg .form-wrap .action-wrap .login-action-wrap button{
    width: 100%;
  }
</style>
