<template>
  <div class="final">
    <div class="panel">
      <div class="title">
        <h2>恭喜！</h2>
      </div>
      <div class="contentBox">
        <div class="message">
          <p>恭喜！</p>
          <p>您已经完成全面测评。</p>
          <p>请点击<b>完成</b>按钮退出。</p>
        </div>
        <el-button>完成</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.final {
  position: absolute;
  top: 64px;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  .panel {
    width: 400px;
    height: 200px;
    border-radius: 20px;
    .title {
      height: 40px;
      background-color: gray;
      line-height: 40px;
      padding-left: 20px;
    }
    .contentBox {
      height: 160px;
      color: black;
      background-color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .message {
        margin-left: 20px;
      }
      .el-button {
        align-self: flex-end;
        margin: 0 20px 20px 0;
      }
    }
  }
}
</style>
