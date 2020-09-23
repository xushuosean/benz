<template>
  <div class="orientation">
    <div class="title">
      <div class="text">欢迎来到梅赛德斯奔驰-经销商管理层目标选才中心</div>
    </div>
    <div class="content">
      <div class="left">
        <p>开始测评</p>
        <p class="tips">您即将开始您的测评。请仔细阅读以下说明。</p>
        <ol>
          <li>请完整观看右侧视屏，将为您详细介绍今天的测评环节及内容。</li>
          <li>请关闭您计算机上打开的其他所有程序。</li>
          <li>若要开始，请单击开始。</li>
        </ol>
        <el-button type="primary" @click="start">开始</el-button>
      </div>
      <div class="right">
        <div class="video">
          <video-player class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions">
          </video-player>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Orientation',
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
          src: '../assets/big_buck_bunny.mp4' // url地址
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
  methods: {
    start () {
      this.$router.push('/home/backmsg')
    }
  }
}
</script>

<style lang="scss" scoped>
.orientation {
  color: white;
  width: 1200px;
  position : absolute;
  top : 64px;
  bottom : 0px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    font-size: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    .text {
      width: 780px;
    }
  }
  .content {
    width: 100%;
    position : absolute;
    top : 114px;
    bottom : 0px;
    left : 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .left {
      width: 400px;
      .el-button {
        margin-top: 40px;
      }
    }
    .right {
      width: 400px;
    }
  }
}
</style>>
