<template>
  <div class="login">
    <div class="titleBar">
      <div class="centerTitle">
        <p class="title">TSC</p>
        <span class="desc">经销商管理层目标选才中心系统</span>
      </div>
      <div class="logo">
        <img src="../assets/logo.png" alt="logo">
      </div>
    </div>
    <div class="content">
      <div class="form">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-button type="primary" @click="submit">登陆</el-button>
        </el-form>
      </div>
    </div>

    <div class="corner">
      <p>培训与零售认证|管理培训</p>
      <p>北京梅赛德斯-奔驰销售服务有限公司</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        name: 'guest',
        password: 'guest'
      }
    }
  },
  methods: {
    submit () {
      console.log('submit')
      this.$router.push('/home/orientation')
    }
  }
}
</script>

<style lang="scss" scoped>
.titleBar {
  background: black;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .centerTitle {
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    .title {
      font-size: 26px;
    }
    .desc {
      font-size: 30px;
    }
  }
  .logo {
    // margin-left: auto;
    // margin-left: auto;
    // text-align: rig;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 70px;
      height: 64px;
    }
  }
}
.content {
  width: 1200px;
  position : absolute;
  top : 100px;
  bottom : 0px;
  background: url("../assets/backimg.png") no-repeat center center;
  background-size:cover;
  background-attachment:fixed;
  background-color:#CCCCCC;
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    width: 400px;
    /deep/ .el-form {
      text-align: center;
      .el-form-item__label {
        font-weight: bold;
        color: black;
      }
    }
  }
}

.corner {
  position: absolute;
  bottom: 50px;
  margin-left: 50px;
  text-align: left;
  color: black;
  font-weight: bold;
  line-height: 40px;
}
</style>
