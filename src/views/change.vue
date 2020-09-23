<template>
  <div class="change">
    <comp-change :from="from" v-model="textarea" @enterDown="enterClick">
      <template #content>
        <div class="inner">
          <p>韩宇:</p>
          <p class="text">你好。欢迎加入恒星。今天是你入职的第一天，由于我出差在外，不能进行面谈，但有个紧急事情需要你替我处理一下。以下是今年第一季度的运营数据，我希望你对数据进行分析，并将看到的问题、可能产生的原因以及后续如何改善形成详细的方案发送至我邮箱。</p>
          <img class="pic1" src="../assets/pic1.png" style="margin-top: 40px;" alt="pic1">
          <el-audio audioLink="http://sc1.111ttt.cn/2017/1/05/09/298092035545.mp3">
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
      textarea: ''
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
  .pic1 {
    align-self: center;
    width: 200px;
  }
  .text {
    text-indent: 2em;
  }
}
</style>
