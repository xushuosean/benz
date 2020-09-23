<template>
  <div class="home">
    <div class="bar">
      <div class="timeBar">
        <el-progress v-show="progressShow" :text-inside="true" :format="format" :stroke-width="26" :percentage="percentage" color="gray"></el-progress>
      </div>
      <img src="../assets/logo.png" alt="">
    </div>
    <router-view @startProgree="start"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      percentage: 0,
      format: () => null,
      timer: null
    }
  },
  computed: {
    progressShow () {
      return this.$route.path !== '/home/orientation'
    }
  },
  created () {
    console.log(this.$route)
  },
  beforeDestory () {
    clearInterval(this.timer)
  },
  methods: {
    start () {
      clearInterval(this.timer)
      let allTime = 15 * 60
      const constTime = allTime
      this.timer = setInterval(() => {
        const time = allTime--
        if (time <= 0) {
          clearInterval(this.timer)
        }
        if (time % 10 === 0) {
          this.percentage = parseInt((constTime - time) / constTime * 100)
        }
        this.format = () => this.resultFormat(time)
      }, 1000)
    },
    resultFormat (result) {
      var m = Math.floor(result / 60 % 60)
      var s = Math.floor(result % 60)
      return `${m}分${s}秒`
    }
  }
}
</script>

<style lang="scss" scoped>
.bar {
  background-color: black;
  text-align: right;
  display: flex;
  align-items: center;
  /deep/ .timeBar {
    padding: 0 20px;
    flex: 1;
    .el-progress-bar__innerText {
      color: black;
    }
  }
  img {
    width: 70px;
    height: 64px;
    // justify-content: flex-end;
  }
}
</style>
