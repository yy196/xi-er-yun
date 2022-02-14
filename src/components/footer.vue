<template>
  <div class="footer-container">
    <div class="main-center-container">
      <div class="footer-content">
        <div class="left-content">
          <p class="title">客服咨询</p>
          <p>服务电话:&nbsp;&nbsp; <i class="el-icon-phone"></i> 4000810101</p>
          <p class="online-customer-service">
            在线客服:&nbsp;&nbsp;<span>
              <i class="el-icon-chat-dot-round"></i> 立即咨询</span
            >
          </p>
          <p>服务邮箱:&nbsp;&nbsp;<span>passport@cei.net.cn</span></p>
          <p>周一至周五:&nbsp;&nbsp;9:00-18:00</p>
        </div>
        <div class="right-content">
          <div class="right-content1 common-style">
            <p class="title">精品课程</p>
            <a href="javascript:;">生态环境执法培训</a>
            <a href="javascript:;">生态环境监测培训</a>

            <a href="javascript:;">排污企业培训</a>

            <a href="javascript:;">第三方环保公司培训</a>
          </div>
          <div class="right-content2 common-style">
            <p class="title">快速入口</p>
            <a href="javascript:;">个人中心</a>
            <a href="javascript:;">购物车</a>

            <a href="javascript:;">我的订单</a>

            <a href="javascript:;">登录注册</a>
          </div>
          <div class="right-content3 common-style">
            <p class="title">关于我们</p>
            <a href="javascript:;">西尔介绍</a>
            <a href="javascript:;">版权声明</a>

            <a href="javascript:;">愿景与使命</a>

            <a href="javascript:;">大事记</a>
            <a href="javascript:;">合作伙伴</a>
          </div>
          <div class="QRCode-item">
            <img src="../assets/subscribe-QRCode1.jpg" alt="" />
            <p>关注西尔微信</p>
          </div>
          <div class="QRCode-item">
            <img src="../assets/subscribe-QRCode2.png" alt="" />
            <p>西尔云学苑APP</p>
          </div>
        </div>
      </div>
      <div class="police">
        <img src="../assets/police-icon.png" alt="" />
        京公网安备 11010102004423号
      </div>
    </div>
    <div class="copy-right">
      Copyright2021 西尔环境教育（CEI）版权所有
      主办单位：北京西尔云教育科技有限公司 承办单位：
      辽宁省两山科技有限公司提供技术开发和技术维护
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
        京ICP备19011394号-2
      </a>
      出版物经营许可证：新出发京零字第海180213号
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@primary-font-size: 13.6px;
@title-font-size: 15px;
a {
  display: block;
  color: white;
  font-size: @primary-font-size;
  text-decoration: none;
}
.footer-container {
  background-color: black;
  color: white;
  font-size: @primary-font-size;
  .main-center-container {
    padding: 25px 115px 0px;
    .footer-content {
      display: flex;
      height: 184px;
      .left-content {
        width: 271px;
        height: 155px;
        margin-right: 60px;
        border-right: 2px solid white;
        .title {
          height: 32px;
          font-size: @title-font-size;
          margin-bottom: 10px;
        }
        p {
          &:not(:first-child) {
            padding-top: 8px;
          }
        }
        .online-customer-service {
          span {
            color: #1fa2f8;
            cursor: pointer;
          }
        }
      }
      .right-content {
        display: flex;
        .common-style {
          width: 125px;
          .title {
            height: 32px;
            font-size: @title-font-size;
            margin-bottom: 10px;
          }

          a {
            padding-top: 8px;
          }
        }
        .right-content1 {
          width: 166px;
        }
        .QRCode-item {
          width: 120px;
          img {
            width: 120px;
            height: 120px;
          }
          p {
            font-size: @title-font-size;
            text-align: center;
            margin-top: 15px;
          }
          &:not(:last-child) {
            margin-right: 20px;
          }
        }
      }
    }
    .police {
      margin: 40px auto 20px;
      text-align: center;
      font-size: @title-font-size;

      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
    }
  }
  .copy-right {
    background-color: #454545;
    height: 31px;
    padding: 5px 0;
    text-align: center;
    font-size: 14px;
    a {
      display: inline;
      color: #1fa2f8;
      font-size: 14px;
    }
  }
}
</style>
