<template>
  <div class="backMsg">
    <div class="msg">
      <p class="title">恒星4S店背景信息</p>
      <ul>
        <li>恒星4S店位于S市，S市属于国内二线城市，常驻人口780万，去年地区生产总值7500亿。截止去年底，S市已开业汽车4S店88家，涉及所有主流品牌，多数品牌拥有2家及以上经销商。目前国内各高端汽车品牌基本都在S市设有授权经销商。其中，本品鹏泽已开设2家（除恒星4S店外，另有德捷10年开业），竞品大安有3家，竞品魔品有2家。</li>
        <li>恒星4S店隶属星远汽车集团，专注于经营豪华和中高档品牌组合。恒星4S店自五年前建店以来，秉持集团核心理念与发展策略，全力配合鹏泽品牌区域市场发展战略与任务要求，运营至今，在集团及4S店总经理领导带领下不断克服种种困难，市场份额走势逐年上升。</li>
      </ul>
    </div>
    <div class="video">
      <video-player class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions">
      </video-player>
      <el-button type="primary" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4', // 类型
          src: 'https://ddileaf-test-report-pdf.oss-cn-shanghai.aliyuncs.com/tmp/MercedesBenz/1600913707999013.mp4?Expires=1600917386&OSSAccessKeyId=TMP.3KgxMGP4DHHpse89RN72EBdPE8xwSKzBqveQpwDwCZHKdVYZZuzkkQXv3rEZoUdt8M7HDianyko7bDswsuNQwcF8fcv8Uz&Signature=LFhPcNzuYtodnAdOZ%2FKpBqEyu5Y%3D&versionId=CAEQFhiBgIDdpsr3pRciIDI3NWMyZWRmNDBhOTQzYTI4YTI1YzJmNDAyZGUxNTNi&response-content-type=application%2Foctet-stream' // url地址
        }],
        poster: '', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      }
    }
  },
  created () {
    this.$emit('startProgree')
  },
  methods: {
    next () {
      this.$router.push('/home/change')
    }
  }
}
</script>

<style lang="scss" scoped>
.backMsg {
  color: white;
  width: 1200px;
  position : absolute;
  top : 64px;
  bottom : 0px;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  .msg {
    width: 400px;
  }
  .video {
    width: 400px;
    .el-button {
      margin-top: 40px;
    }
  }
}
</style>
