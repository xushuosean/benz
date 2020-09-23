<template>
  <div class="change">
    <comp-change :from="from" v-model="textarea" @enterDown="enterClick">
      <template #content>
        <div class="inner">
          <p>韩宇:</p>
          <p class="text">你好。欢迎加入恒星。今天是你入职的第一天，由于我出差在外，不能进行面谈，但有个紧急事情需要你替我处理一下。以下是今年第一季度的运营数据，我希望你对数据进行分析，并将看到的问题、可能产生的原因以及后续如何改善形成详细的方案发送至我邮箱。</p>
          <el-image
            style="width: 100px; height: 100px"
            src="../assets/pic1.png"
            :preview-src-list="srcList">
          </el-image>
          <el-audio audioLink="../assets/hello.m4a">
            <div class="audiobox">
              录音
            </div>
          </el-audio>
        </div>
      </template>
    </comp-change>
  </div>
</template>

<script>
import compChange from './compChange.vue'
import elAudio from './audio.vue'
export default {
  components: {
    compChange,
    elAudio
  },
  data () {
    return {
      from: '来自运营总监杜子夫的邮件',
      textarea: '',
      srcList: [
        '../assets/pic1.png'
      ]
    }
  },
  methods: {
    enterClick () {
      this.$router.push('/home/customer')
    }
  }
}
</script>

<style lang="scss" scoped>
.inner {
  display: flex;
  flex-direction: column;
  .el-image {
    align-self: center;
    width: 200px;
  }
  .text {
    text-indent: 2em;
  }
}
</style>
