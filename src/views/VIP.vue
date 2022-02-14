<template>
  <div class="VIP-container">
    <aside-bar></aside-bar>
    <div class="VIP-center-container">
      <div class="top-img">
        <div class="membership-box">
          <div class="title">开通西尔云学苑VIP</div>
          <ul>
            <li>原价</li>
            <li>￥1200/年</li>
            <li>限时折扣价</li>
            <li>￥ <span>999</span>元/年</li>
          </ul>
          <a href="">
            <div>立即开通</div>
          </a>
          <p>全年畅学无阻</p>
        </div>
      </div>
      <img class="img-title" src="../assets/six-privilige.png" alt="" />

      <div class="customer-category">
        <div class="customer-box">
          <div class="customer-title normal-title">普通用户</div>
          <ul class="customer-normal-privilege">
            <li>原价单次购买课程</li>
            <li>原价购买课程书籍</li>
            <li>没有优惠折扣券</li>
            <li>购买书籍及其他实体</li>
            <li>物品原价邮费</li>
            <li>购买直播课程</li>
            <li>付费参与学习</li>
            <li>原价单次购买课程</li>
            <li>有效期最长两个月</li>
            <li>原价单次购买</li>
            <li>环保相关文创产品</li>
          </ul>
        </div>
        <div class="customer-box">
          <div class="customer-title VIP-title">普通用户</div>
          <ul class="customer-normal-privilege">
            <li>原价单次购买课程</li>
            <li>原价购买课程书籍</li>
            <li>没有优惠折扣券</li>
            <li>购买书籍及其他实体</li>
            <li>物品原价邮费</li>
            <li>购买直播课程</li>
            <li>付费参与学习</li>
            <li>原价单次购买课程</li>
            <li>有效期最长两个月</li>
            <li>原价单次购买</li>
            <li>环保相关文创产品</li>
          </ul>
        </div>
      </div>
      <div class="cross-bar"></div>
      <div class="VIP-free">
        <div class="VIP-free-item" v-for="item in 5" :key="item">
          <div class="img-box">
            <img src="../assets/vip_kecheng.jpg" alt="" />
          </div>
          <div class="free-description">
            <h1>修订后《固体废物污染环境防治法》生态环境保护</h1>
            <p>有效时常30天</p>
            <span>企业环境守法</span>
            <span>固体废物管理</span>
            <div class="vip-free">
              <span>会员免费学</span>
              <span>原价<span>¥42</span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="more-course">
        <a href="">查看更多VIP专属课程</a>
      </div>
      <div class="cross-bar2"></div>
      <img class="img-title" src="../assets/buy-to-know.png" alt="" />
      <div class="last-content">
        <div class="content-item">
          1.所有西尔云学苑VIP标识课程会员全部免费学习。
        </div>
        <div class="content-item">
          2.VIP专属折扣券由系统自动发放至会员账户。
        </div>
        <div class="content-item">
          3.会员服务为虚拟产品，一经售出暂不支持退款。
        </div>
        <img src="../assets/flower-bg.png" alt="" />
      </div>
    </div>

    <my-footer></my-footer>
  </div>
</template>

<script>
import asideBar from '../components/asideBar.vue'
export default {
  components: { asideBar },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
  // color: black;
}
.VIP-container {
  background-color: rgba(211, 211, 211, 0.4);
  .VIP-center-container {
    width: 1150px;
    margin: 0 auto;
    background-color: #fff;
    padding-bottom: 60px;

    .top-img {
      height: 290px;
      background: url('../assets/VIP-top-img.png');
      background-size: 100%;
      position: relative;
      margin-bottom: 25px;

      .membership-box {
        position: absolute;
        right: 100px;
        top: 30px;
        width: 200px;
        height: 230px;
        background-color: #fff;
        border-radius: 10px;
        .title {
          height: 40px;
          line-height: 40px;
          font-weight: 900;
          text-align: center;
          border-bottom: 1px solid rgba(211, 211, 211, 0.6);
        }
        ul {
          display: flex;
          flex-direction: column;
          align-items: center;
          li {
            &:first-child {
              color: #888;
              height: 23px;
              font-size: 12.5px;
            }
            &:nth-child(2) {
              color: #222;
              height: 30px;
              line-height: 30px;
              text-decoration: line-through;
              font-size: 14px;
              font-weight: 500;
            }
            &:nth-child(3) {
              color: #888;
              height: 23px;
              font-size: 12.5px;
            }
            &:last-child {
              color: orange;
              height: 23px;
              font-size: 12.5px;
              font-weight: 700;

              span {
                font-size: 27px;
              }
            }
          }
        }
        a {
          display: block;
          margin-top: 10px;

          div {
            width: 153px;
            height: 39px;
            line-height: 39px;
            margin: 0 auto;
            text-align: center;
            background: linear-gradient(to right, #ffd659, #ffa524);
            font-size: 17px;
            color: white;
            border-radius: 10px;
            cursor: pointer;
          }
        }
        p {
          color: #888;
          font-size: 12.6px;
          text-align: center;
          font-weight: 600;
          margin-top: 10px;
        }
      }
    }
    .img-title {
      width: 474px;
      height: 60px;
      // margin: 0 auto;
      // margin-left: 1000px;
      margin-left: 50%;
      transform: translateX(-50%);
    }
    .customer-category {
      width: 1060px;
      height: 650px;
      display: flex;
      justify-content: space-between;
      margin: 25px auto 30px;
      // margin-top: 25px;
      // margin-bottom: 30px;
      .customer-box {
        width: 480px;
        height: 650px;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 0 10px grey;
        .customer-title {
          font-size: 40px;
          text-align: center;
          height: 100px;
          line-height: 100px;
          letter-spacing: 2px;
        }
        .normal-title {
          background-color: grey;
          color: black;
        }
        .VIP-title {
          background: linear-gradient(to right, #ffd659, #ffa524);
          color: white;
        }
        .customer-normal-privilege {
          font-size: 30px;
          text-align: center;
          li {
            height: 50px;
            line-height: 50px;
          }
        }
      }
    }
    .cross-bar {
      height: 5px;
      background-color: rgba(211, 211, 211, 0.2);
    }
    .VIP-free {
      padding-top: 30px;

      .VIP-free-item {
        padding: 6px 0;
        width: 890px;
        height: 205px;
        margin: 0 auto;
        border-bottom: 2px solid rgba(211, 211, 211, 0.2);
        // background-color: orange;
        border-top: 1px solid transparent;
        display: flex;
        justify-content: space-between;
        .img-box {
          width: 267px;
          height: 178px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          margin-top: 7px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
          }
        }
        .free-description {
          padding: 6px 0;
          padding-right: 10px;
          width: 534px;
          h1 {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 35px;
            line-height: 35px;
            font-size: 25px;
            font-weight: normal;
          }
          p {
            height: 30px;
            line-height: 30px;
            font-size: 18px;
            width: 100%;
            color: #989898;
            margin-bottom: 6px;
            margin-top: 4px;
          }
          span {
            display: inline-block;
            padding: 0 2px;
            height: 40px;
            line-height: 40px;
            font-size: 18px;
            background-color: #f3f3f3;
            color: #666;
            margin-right: 10px;
          }
          .vip-free {
            margin-top: 20px;
            span {
              height: 45px;
              line-height: 45px;
              font-size: 20px;
              background-color: transparent;
              &:first-child {
                color: #fdb34a;
                margin-right: 35px;
              }
              &:last-child {
                color: #bbb;
                span {
                  text-decoration: line-through;
                }
              }
            }
          }
        }
      }
    }
    .more-course {
      width: 400px;
      height: 80px;
      border: 3px solid #fdb34a;
      font-size: 36px;
      line-height: 80px;
      text-align: center;
      color: #fdb34a;
      border-radius: 40px;
      margin: 45px auto;
      a {
        color: #fdb34a;
      }
    }
    .cross-bar2 {
      margin: 0 auto;
      width: 920px;
      height: 5px;
      background-color: rgba(211, 211, 211, 0.2);
      margin-bottom: 20px;
    }
    .last-content {
      width: 1000px;
      height: 300px;
      // margin-right: 100px;
      margin-left: 100px;
      margin-top: 20px;
      padding-left: 224px;
      position: relative;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(211, 211, 211, 0.8);
      .content-item {
        width: 630px;
        height: 100px;
        font-size: 28px;
        line-height: 100px;
      }
      img {
        position: absolute;
        top: 0;
        right: 0;
        height: 300px;
      }
    }
  }
}
</style>
