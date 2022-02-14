<template>
  <div>
    <div class="main-center-container">
      <div class="title">证书查询系统</div>
      <div class="certificate-check-content">
        <p class="system-description">
          本系统支持生态环境部宣传教育中心、生态环境部固体废物与化学危险品管理技术中心、
          中国生态文明研究与促进会和中国环境科学学会和中华环保联合会与我司联合举办发证
          的证书查询。
        </p>
        <div class="input-box">
          <div class="input-row">
            <span>考生姓名：</span>
            <el-input v-model="name" placeholder="请输入考生姓名"></el-input>
          </div>
          <div class="input-row">
            <span>身份证号：</span>
            <el-input
              v-model="IDCardNum"
              placeholder="请输入身份证号"
            ></el-input>
          </div>
          <div class="input-row">
            <span>证书编号：</span>
            <el-input
              v-model="serialNumber"
              placeholder="请输入证书编号"
            ></el-input>
          </div>
          <p class="tip">注:三项输入任意两项信息即可查询</p>
          <button class="check">点击查询</button>
        </div>
        <div class="certificate-icon-box">
          <img src="../assets/certificate-icon1.png" alt="" />
          <img src="../assets/certificate-icon2.png" alt="" />
          <img src="../assets/certificate-icon3.png" alt="" />
          <img src="../assets/certificate-icon4.png" alt="" />
          <img src="../assets/certificate-icon5.png" alt="" />
          <img src="../assets/certificate-icon6.png" alt="" />
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      IDCardNum: '',
      serialNumber: ''
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.title {
  height: 112px;
  background-color: #0f6691;
  font-size: 60px;
  color: #fff;
  line-height: 112px;
  text-align: center;
  letter-spacing: 18px;
  margin-bottom: 20px;
}
.certificate-check-content {
  border-top: 20px solid red;
  border-bottom: 20px solid red;
  .system-description {
    padding: 20px;
    font-size: 25px;
    letter-spacing: 3px;
  }
  .input-box {
    width: 600px;
    margin: 20px auto;
    .input-row {
      display: flex;
      margin-bottom: 15px;
      span {
        width: 149px;
        height: 34px;
        font-size: 23px;
        line-height: 34px;
        flex-shrink: 0;
      }
    }
    .tip {
      width: 100%;
      font-size: 21px;
      color: #aaa;
      letter-spacing: 2px;
      margin: 25px 0 35px;
    }
    .check {
      border: none;
      width: 190px;
      height: 50px;
      border-radius: 25px;
      text-align: center;
      line-height: 50px;
      background-color: #ec0f0f;
      color: #fff;
      font-size: 23px;
      letter-spacing: 3px;
      cursor: pointer;
      // margin-left: 160px;
      margin-left: 50%;
      transform: translateX(-50%);
      margin-bottom: 35px;
    }
  }
  .certificate-icon-box {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
}
</style>
