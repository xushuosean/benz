<template>
  <div class="audio">
    <div @click="audioClick" class="con">
      <div class="status">
        <img v-if="status" src="../assets/play.png" alt="play">
        <img v-else src="../assets/stop.png" alt="stop">
      </div>
      <slot></slot>
    </div>
    <audio controls="controls" ref="audio">
      <source :src="audioLink" type="audio/mp3" />
    </audio>
  </div>
</template>

<script>
export default {
  name: 'el-audio',
  props: {
    audioLink: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      status: false
    }
  },
  created () {
    this.$nextTick(() => {
      this.$refs.audio.addEventListener('ended', () => {
        this.status = false
      }, false)
    })
  },
  methods: {
    audioClick () {
      if (this.status) {
        this.pause()
      } else {
        this.play()
      }
    },
    play () {
      this.$refs.audio.play()
      this.status = true
    },
    pause () {
      this.$refs.audio.pause()
      this.status = false
    }
  }
}
</script>

<style lang="scss" scoped>
.audio {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  audio {
    outline: none;
  }
}
.con {
  background-color: gray;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  .status {
    display: inline-block;
    img {
      height: 40px;
      width: 40px;
    }
  }
}
</style>
