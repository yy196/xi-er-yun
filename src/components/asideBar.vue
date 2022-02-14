<template>
  <div class="asideBar">
    <div class="backTopTarget" @click="backTop">
      <i class="el-icon-top"></i>
    </div>

    <el-popover placement="left" trigger="hover" width="200">
      <img src="../assets/erweima.png" alt="" style="width: 100%" />
      <div slot="reference" class="scanQRCode">
        <i class="el-icon-camera"></i>
      </div>
    </el-popover>
    <el-popover
      placement="left"
      trigger="hover"
      ref="popover1"
      content="联系客服"
    >
    </el-popover>
    <div v-popover:popover1>
      <i class="el-icon-s-custom"></i>
    </div>
    <el-popover
      placement="left"
      trigger="hover"
      ref="popover2"
      content="400-081-0101"
    >
    </el-popover>

    <div v-popover:popover2><i class="el-icon-phone"></i></div>
  </div>
</template>

<script>
export default {
  methods: {
    backTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped lang="less">
.asideBar {
  position: fixed;
  z-index: 10000;
  top: 280px;
  right: 30px;
  background-color: #fff;
  border: 2px solid #f0f2f5;
  .scanQRCode {
    border-bottom: 2px solid #f0f2f5;
  }
  div {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    &:not(:last-child) {
      border-bottom: 2px solid #f0f2f5;
    }
  }
}
</style>
