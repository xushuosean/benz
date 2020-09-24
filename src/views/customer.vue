<template>
  <div class="change">
    <comp-change :from="from" v-model="textarea" @enterDown="enterClick">
      <template #content>
        <div class="inner">
          <p>韩总，您好！</p>
          <p class="text">今天有个比较棘手的客户投诉，需要你出面帮忙处理。具体情况如下：
客户李钰是去年10月份在我们这里买的车，20天前车辆的后挡风玻璃破裂了，因为他没有购买玻璃险，这个不在保险公司的赔付范围，所以他就把车辆放在店里，要求我们负责赔偿。
我让车间经理看过，车辆到店里的时候，玻璃已经碎裂地比较厉害，都已经看不出来是什么原因造成的，后来在客户的坚持下，我们还是上报了厂家，厂家回复说，玻璃破裂是外力造成的，不是质量问题，不在保修范围内。
但是客户不认可这样的结果，不仅要求我们更换玻璃，还要我们赔偿一万元的误工费和交通费，现在客户天天到店里来，我一直跟他沟通，都没有什么效果。
昨天客户提出今天要跟总经理进行沟通，我们已经将客户投诉录音发送给您，请您给出具体的指示，我们如何处理较为妥当。
谢谢你的支持！</p>
            <el-audio audioLink="https://s19.aconvert.com/convert/p3r68-cdx67/o2r0z-wwi6l.mp3">
              <div class="audiobox">
                投诉录音
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
      from: '来自售后经理苏适的邮件',
      textarea: ''
    }
  },
  methods: {
    enterClick () {
      this.$router.push('/home/final')
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
