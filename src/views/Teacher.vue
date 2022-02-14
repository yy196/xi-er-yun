<template>
  <div class="main-container">
    <aside-bar></aside-bar>
    <div class="tab-container">
      <span>筛选:</span>

      <tab-bar :tabNum="5" :bgc="true">
        <template #title-item1> 全部 </template>
        <template #title-item2> 环境执法 </template>
        <template #title-item3> 环境监测 </template>
        <template #title-item4> 企业 </template>
        <template #title-item5> 碳交易 </template>
        <template #content-item1>
          <section class="teacher-container">
            <section class="teacher-item" v-for="item in 36" :key="item">
              <a href="">
                <img src="../assets/teacher1.jpg" alt="" />
                <section class="description-box">
                  <h1>李庆瑞</h1>
                  <p>中国生态文明研究与促进会执行副会长</p>
                  <p>
                    中国生态文明研究与促进会执行副会长，原环境保护部政策法规司司长、人事司司长，河南省环保厅原厅长；曾参与中央环保督查及生态
                  </p>
                  <span>老师主页 <i class="el-icon-right"></i> </span>
                </section>
              </a>
            </section>
          </section>
        </template>
        <template #content-item2>
          <section class="teacher-container">
            <section class="teacher-item" v-for="item in 36" :key="item">
              <a href="">
                <img src="../assets/teacher1.jpg" alt="" />
                <section class="description-box">
                  <h1>李庆瑞</h1>
                  <p>中国生态文明研究与促进会执行副会长</p>
                  <p>
                    中国生态文明研究与促进会执行副会长，原环境保护部政策法规司司长、人事司司长，河南省环保厅原厅长；曾参与中央环保督查及生态
                  </p>
                  <span>老师主页 <i class="el-icon-right"></i> </span>
                </section>
              </a>
            </section>
          </section>
        </template>
        <template #content-item3>
          <section class="teacher-container">
            <section class="teacher-item" v-for="item in 36" :key="item">
              <a href="">
                <img src="../assets/teacher2.jpg" alt="" />
                <section class="description-box">
                  <h1>曹晓凡</h1>
                  <p>河北环境工程学院（中国环境管理干部学院）</p>
                  <p>
                    曹晓凡，任职于河北环境工程学院（中国环境管理干部学院）、执业律师；武汉大学环境法研究所研究员；国家信息中心“中经视频”特
                  </p>
                  <span>老师主页 <i class="el-icon-right"></i> </span>
                </section>
              </a>
            </section>
          </section>
        </template>
        <template #content-item4>
          <section class="teacher-container">
            <section class="teacher-item" v-for="item in 36" :key="item">
              <a href="">
                <img src="../assets/teacher3.jpg" alt="" />
                <section class="description-box">
                  <h1>王仲旭</h1>
                  <p>河北环境工程学院 副教授</p>
                  <p>
                    擅长领域：环境工程、环境监察、行业环境监管
                    曾参与重要的工作： ①
                    主持河北省科技厅课题《雾霾危机下政府创新环境监管模式研究－以钢铁企业为例》；
                    ② 主持河北
                  </p>
                  <span>老师主页 <i class="el-icon-right"></i> </span>
                </section>
              </a>
            </section>
          </section>
        </template>
        <template #content-item5>
          <section class="teacher-container">
            <section class="teacher-item" v-for="item in 36" :key="item">
              <a href="">
                <img src="../assets/teacher4.jpg" alt="" />
                <section class="description-box">
                  <h1>缪旭波</h1>
                  <p>环保部华东督查中心原副主任</p>
                  <p>环保部华东督查中心原副主任</p>
                  <span>老师主页 <i class="el-icon-right"></i> </span>
                </section>
              </a>
            </section>
          </section>
        </template>
      </tab-bar>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    this.$http
      .get('api/get_navigation_list?pageNo=1&pageSize=8')
      .then(({ data: res }) => {
        console.log(res)
      })
      .catch((err) => {
        console.log('err', err)
      })
  },
  // beforeRouteEnter(to, from, next) {
  //   next(() => {
  //     // vm.addEventListener()
  //     console.log('routerEnter')
  //   })
  // },
  methods: {}
}
</script>

<style lang="less" scoped>
@primary-color: #4aa1f0;
a {
  text-decoration: none;
  color: black;
}
.main-container {
  background-color: rgba(211, 211, 211, 0.4);

  padding-top: 40px;
  position: relative;
  .tab-container {
    width: 1230px;
    margin-left: 143px;
    position: relative;

    > span {
      font-size: 14px;
      font-weight: 400;
      position: absolute;
      top: 20px;
      left: 20px;
    }
  }
}
.teacher-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: rgba(211, 211, 211, 0.4);

  .teacher-item {
    width: 390px;
    height: 208px;
    padding: 10px;
    margin-bottom: 32px;
    background-color: white;
    border-radius: 12px;
    transition: all 0.2s linear;

    &:hover {
      transform: translate(0, -3px);
      // box-shadow: 0px 0px 10px 15px rgb(211 211 211 / 80%);
      box-shadow: 0px 0px 20px 10px rgba(211, 211, 211, 0.4);
    }
    a {
      display: flex;
      justify-content: space-between;
      img {
        width: 140px;
        height: 180px;
      }
      .description-box {
        width: 200px;
        padding: 10px 0;
        h1 {
          margin-bottom: 6px;
          font-size: 16px;
        }
        p {
          margin-bottom: 6px;
          font-size: 14px;
          ~ p {
            font-size: 13px;
            color: #999;
          }
        }
        span {
          float: right;
          margin-right: 10px;
          font-size: 12px;
          color: @primary-color;
        }
      }
    }
  }
}
</style>
