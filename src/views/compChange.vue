<template>
  <div class="compChange">
    <div class="leftContainer">
      <h2>你的任务</h2>
      <img src="../assets/person1.png" alt="person1">
      <p>{{ from }}</p>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="sendBox">
      <h2>你的答复</h2>
      <el-input
        type="textarea"
        :rows="10"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      <el-button type="primary" @click="enterDown">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'compChange',
  props: {
    from: {
      default: '',
      type: String
    },
    value: {
      default: '',
      type: String
    }
  },
  computed: {
    textarea: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    enterDown () {
      this.$emit('enterDown')
    }
  }
}
</script>

<style lang="scss" scoped>
.compChange {
  color: white;
  width: 1200px;
  position : absolute;
  top : 64px;
  bottom : 0px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .leftContainer {
    width: 200px;
    background: gray;
    padding: 20px 0 0 20px;
    line-height: 40px;
  }
  .content {
    width: 400px;
    // background: red;
    padding: 20px 0 0 20px;
  }
  .sendBox {
    width: 400px;
    background: gray;
    padding: 30px;
    text-align: right;
    h2 {
      text-align: left;
    }
    /deep/ .el-button {
      margin-top: 40px;
    }
  }
}
</style>
