<template>
  <el-container>
    <el-header
      v-if="$route.path != '/home/login' && $route.path != '/home/register'"
    >
      <div class="main-center-container title-wrapper flex-center">
        <div class="logo-wrapper"></div>
        <el-dropdown v-if="$route.path === '/home'" placement="bottom">
          <span class="el-dropdown-link">
            全部课程<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-popover
              placement="right-start"
              width="700"
              trigger="hover"
              v-for="item in homeNavigationList"
              :key="item.seriesID"
            >
              <div class="popover-detail">
                <div
                  class="popover-detail-item"
                  v-for="item1 in item.childrenList"
                  :key="item1.seriesName"
                >
                  <div class="popover-detail-item-title">
                    <span class="title">{{ item1.seriesName }}</span>
                    <div class="cross-bar"></div>
                  </div>
                  <div class="popover-detail-item-description">
                    <span
                      v-for="item2 in item1.courseList"
                      :key="item2.productName"
                      >{{ item2.productName }}</span
                    >
                  </div>
                </div>
              </div>
              <el-dropdown-item slot="reference"
                >{{ item.navigationName }}<i class="el-icon-arrow-right"></i
              ></el-dropdown-item>
            </el-popover>
          </el-dropdown-menu>
        </el-dropdown>
        <div v-else class="substituteBox"></div>
        <div class="tab-box" ref="home" @click="changePathToHome">首页</div>
        <div class="tab-box" ref="book" @click="changePathToBook">图书馆</div>
        <div class="tab-box" ref="teacher" @click="changePathToTeacher">
          优秀教师
        </div>
        <div class="tab-box" ref="hotNews" @click="changePathToHotNews">
          热门资讯
        </div>
        <div class="input-wrapper">
          <el-input
            placeholder="课程、班级、书籍等"
            @focus="handleFocus"
            @blur="handleBlur"
          >
          </el-input>
          <el-button icon="el-icon-search"></el-button>
        </div>
        <div class="VIP" @click="handleVIP">VIP畅学</div>
        <el-popover placement="bottom" trigger="hover" width="200">
          <img src="../assets/erweima.png" alt="" style="width: 100%" />
          <div slot="reference">
            <img
              class="download-icon"
              src="../assets/download-icon.png"
              alt=""
            />
            下载APP
          </div>
        </el-popover>
        <el-popover
          ref="popover"
          placement="bottom"
          width="240"
          trigger="click"
          v-model="isPopoverVisible"
        >
          <div class="login-popover">
            <div class="avatar-box">
              <el-avatar
                :size="60"
                icon="el-icon-user-solid"
                style="font-size: 40px"
              ></el-avatar>
            </div>
            <p>欢迎来到西尔云学苑</p>
            <div class="to-login" @click="handleLogin">去登录</div>
            <div class="to-register" @click="handleRegister">注册好礼</div>
          </div>
        </el-popover>
        <div v-popover:popover>登录/注册</div>
        <div class="check-certificate" @click="handleCertificate">查询证书</div>
      </div>
    </el-header>
    <el-header v-else class="loginHeader">
      <div class="main-center-container flex-center">
        <div class="logo-wrapper2"></div>
      </div>
    </el-header>
    <el-main
      v-if="$route.path != '/home/login' && $route.path != '/home/register'"
      ref="elMain"
      class="home-el-main"
    >
      <div v-show="$route.path === '/home'" class="home-main-container">
        <aside-bar></aside-bar>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="item in picture_rotation" :key="item.imageUrl"
            ><img :src="item.imageUrl" alt=""
          /></swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <!-- drawer图 -->
        <div class="drawer-container">
          <div class="drawer-main-box">
            <div class="drawer-item-mini1" ref="drawerMini1">
              <img src="../assets/drawer1.jpg" alt="" />
            </div>
            <div class="drawer-item1" ref="drawer1">
              <img src="../assets/drawer2.jpg" alt="" />
            </div>
            <div class="drawer-item-mini2" ref="drawerMini2">
              <img src="../assets/drawer3.jpg" alt="" />
            </div>
            <div class="drawer-item2" ref="drawer2">
              <img src="../assets/drawer4.jpg" alt="" />
            </div>
            <div class="drawer-item-mini3" ref="drawerMini3">
              <img src="../assets/drawer5.jpg" alt="" />
            </div>
            <div class="drawer-item3" ref="drawer3">
              <img src="../assets/drawer6.jpg" alt="" />
            </div>
          </div>
        </div>
        <!-- 地图 -->
        <div class="china-map-container">
          <div class="map-title">
            <img src="../assets/mapTitle.png" alt="" />
            培训数据
            <div class="block-blue"></div>
          </div>
        </div>
        <!-- 广告区域 -->
        <div class="advertising-area">
          <div class="main-center-box">
            <!-- 具体广告区位 -->
            <!-- 正在进行 -->
            <div class="on-progress">
              <div class="on-progress-title">
                <span> <span class="block-blue"></span> 正在进行</span>
                <span style="cursor: pointer"
                  >更多 <i class="el-icon-arrow-right"></i>
                </span>
              </div>
              <div class="on-progress-content">
                <div class="on-progress-item">
                  <img src="../assets/on-progress1.jpg" alt="" />
                  <span class="on-progress-item-title"
                    >《碳排放核算员培训班》</span
                  >
                  <span>
                    <img src="../assets/fire.png" alt="" /> 17人已购买</span
                  >
                  <div>
                    <span>主讲人 西尔</span>
                    <span>￥2000</span>
                  </div>
                </div>
                <div class="on-progress-item">
                  <img src="../assets/on-progress2.jpg" alt="" />
                  <span class="on-progress-item-title"
                    >2022年通辽市生态环境保护综合行政执法远程岗位培训班</span
                  >
                  <span>
                    <img src="../assets/fire.png" alt="" /> 102人已购买</span
                  >
                  <div>
                    <span>主讲人 西尔</span>
                    <span>￥0</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 培训专栏 -->

            <div class="train-center">
              <div class="train-title">
                <img src="../assets/mapTitle.png" alt="" />
                培训专栏
                <div class="block-blue"></div>
              </div>
              <train-content
                v-for="(item, index) in floorData.length"
                :key="item"
                :floorData="floorData[index]"
              ></train-content>
            </div>
          </div>
        </div>
        <!-- 西尔荣誉 -->
        <div class="honor-container main-center-container">
          <img class="honor-bg" src="../assets/honor.png" alt="" />
          <div class="honor-title">
            <img src="../assets/mapTitle.png" alt="" />
            西尔荣誉
            <div class="block-blue"></div>
          </div>
          <el-carousel :interval="5000" arrow="always" height="390">
            <el-carousel-item>
              <div>
                <img src="../assets/honor-carousel1.jpg" alt="" />
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div>
                <img src="../assets/honor-carousel2.jpg" alt="" />
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div>
                <img src="../assets/honor-carousel3.jpg" alt="" />
              </div>
            </el-carousel-item>
          </el-carousel>
          <div class="honor-title">
            <img src="../assets/mapTitle.png" alt="" />
            课程优势
            <div class="block-blue"></div>
          </div>
          <div class="course-advantage">
            <div
              class="advantage-item"
              v-for="item in courseAdvantage"
              :key="item.imgPath"
            >
              <span>{{ item.title }}</span>
              <span>{{ item.advantage }}</span>
            </div>
          </div>
        </div>
      </div>

      <router-view></router-view>
    </el-main>
    <el-main v-else class="loginMain">
      <router-view></router-view>
    </el-main>
    <el-footer v-if="$route.path === '/home'">
      <div class="main-center-container footer-top-container">
        <tab-bar :tabNum="2" :footerStyle="true">
          <template #title-item1>生态环境部及直属单位 </template>
          <template #title-item2>各省市服务单位 </template>
          <template #content-item1>
            <div class="content-box">
              <a
                href=""
                target="_blank"
                v-for="item in footerLinks1"
                :key="item"
              >
                {{ item }}
              </a>
            </div>
          </template>
          <template #content-item2
            ><div class="content-box">
              <a
                href=""
                target="_blank"
                v-for="item in footerLinks2"
                :key="item"
              >
                {{ item }}
              </a>
            </div>
          </template>
        </tab-bar>
      </div>
      <!-- <div class="top main-center-container">111</div> -->
      <my-footer></my-footer>
    </el-footer>
  </el-container>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import TrainContent from '../components/trainContent.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    TrainContent
  },
  name: 'Home',
  data() {
    return {
      isPopoverVisible: false,
      activePath: '/home',
      currentPath: '/home',
      activeName: 'second',
      tabNumArray: [0, 1, 2, 3],
      // 首页轮播图相关数据
      picture_rotation_num: 0,
      picture_rotation: [],

      // 首页全部课程弹出框相关数据
      homeNavigationList: [],
      floorData: [],
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            let menus = [
              '年度报告',
              '新书上架',
              '新媒体矩阵',
              'VIP管理',
              '送法入企',
              '环境监测',
              '环境执法',
              '第三方服务'
            ]

            return '<span class="' + className + '">' + menus[index] + '</span>'
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      courseAdvantage: [
        {
          title: '落实基础',
          advantage: '课程优势',
          imgPath: '../assets/advantage1.png'
        },
        {
          title: '分层教学',
          advantage: '课程优势',
          imgPath: '../assets/advantage2.png'
        },
        {
          title: '效果反馈',
          advantage: '课程优势',
          imgPath: '../assets/advantage3.png'
        },
        {
          title: '落实基础',
          advantage: '拓展转化',
          imgPath: '../assets/advantage4.png'
        },
        {
          title: '落实基础',
          advantage: '专属报告',
          imgPath: '../assets/advantage5.png'
        }
      ],
      //  footer栏a链接的内容
      footerLinks1: [
        '行政体制与人事司',
        '生态环境执法局',
        '生态环境监测司',
        '应对气候变化司',
        '中国环境监测总站',
        '环保部宣传教育中心',
        '环境应急与事故调查中心',
        '中国环境报社',
        '环境规划院',
        '中国-东盟环境保护合作中心',
        '中日友好环境保护中心(环境发展中心)',
        '环境与经济政策研究中心',
        '北京会议与培训基地',
        '北戴河环境技术交流中心'
      ],
      footerLinks2: [
        '北京市环境监测中心',
        '山西省环境监察总队',
        '辽宁省环境执法局',
        '营口市环境保护局',
        '丹东市环境保护局',
        '吉林省环境监察总队',
        '长春市环境保护局',
        '黑龙江省环境监察局',
        '上海市环境监察局',
        '安徽省环境监察局',
        '福建省环境监察局',
        '山东省环境监察局',
        '河南省环境监察总队',
        '湖北省环境监察总队',
        '湖南省生态环境网',
        '广东省环保厅',
        '海南省生态环境厅法规处',
        '海南省生态环境监察总队',
        '重庆市环境监察总队',
        '重庆市江北区环保局',
        '贵州省环境监察总队',
        '云南省环境监察总队',
        '甘肃省环境监察局',
        '青海省环境监察总队',
        '新疆维吾尔自治区环境监察总队',
        '新疆生产建设兵团环境监察总队',
        '内蒙古自治区环境监察局',
        '内蒙古自治区西部环境保护督察中心'
      ]
    }
  },
  created() {
    // 轮播图数据
    this.getData()
  },
  mounted() {
    if (
      this.$route.path !== '/home/login' &&
      this.$route.path !== '/home/register'
    ) {
      if (this.$route.path.endsWith('home')) {
        this.$refs.home.classList.add('active-path-class')
      } else if (this.$route.path.endsWith('book')) {
        this.$refs.book.classList.add('active-path-class')
      } else if (this.$route.path.endsWith('teacher')) {
        this.$refs.teacher.classList.add('active-path-class')
      } else if (this.$route.path.endsWith('news')) {
        this.$refs.hotNews.classList.add('active-path-class')
      }

      this.$refs.drawer3.style.width = '600px'
      this.$refs.drawer1.style.transition = 'all .6s linear'
      this.$refs.drawer2.style.transition = 'all .6s linear'
      this.$refs.drawer3.style.transition = 'all .6s linear'

      this.$refs.drawerMini1.addEventListener('mouseover', () => {
        this.resetAllDrawerStyle()
        this.$refs.drawer1.style.width = '600px'
      })
      this.$refs.drawerMini2.addEventListener('mouseover', () => {
        this.resetAllDrawerStyle()
        this.$refs.drawer2.style.width = '600px'
      })
      this.$refs.drawerMini3.addEventListener('mouseover', () => {
        this.resetAllDrawerStyle()
        this.$refs.drawer3.style.width = '600px'
      })

      // tab栏切换
    }
  },
  destroyed() {
    console.log('destroyed')
  },
  computed: {},
  watch: {},
  methods: {
    removeAllActiveClassAndCheck(e, pushPath) {
      this.$refs.home.classList.remove('active-path-class')
      this.$refs.book.classList.remove('active-path-class')
      this.$refs.teacher.classList.remove('active-path-class')
      this.$refs.hotNews.classList.remove('active-path-class')
      if (this.currentPath !== pushPath) {
        this.$router.push(pushPath)
      }
      this.currentPath = this.$router.currentRoute.path
      if (this.currentPath === pushPath) {
        e.target.classList.add('active-path-class')
      }
    },
    changePathToHome(e) {
      this.removeAllActiveClassAndCheck(e, '/home')
    },
    changePathToBook(e) {
      this.removeAllActiveClassAndCheck(e, '/home/book')
    },
    changePathToTeacher(e) {
      this.removeAllActiveClassAndCheck(e, '/home/teacher')
    },
    changePathToHotNews(e) {
      this.removeAllActiveClassAndCheck(e, '/home/news')
    },
    handleFocus(e) {
      e.target.parentElement.style.border = '1px solid #4aa1f0'
    },
    handleBlur(e) {
      e.target.parentElement.style.border = 'none'
    },
    handleLogin() {
      this.$router.push('/home/login')
      this.isPopoverVisible = false
    },
    handleRegister() {
      this.$router.push('/home/register')
      this.isPopoverVisible = false
    },

    handleVIP() {
      this.$router.push('/home/vip')
    },
    handleCertificate() {
      this.$router.push('/home/certificate')
    },

    resetAllDrawerStyle() {
      this.$refs.drawer1.style.width = '0px'
      this.$refs.drawer2.style.width = '0px'
      this.$refs.drawer3.style.width = '0px'
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },

    getData() {
      let getRotationData = () => {
        this.$http
          .get('api/get_picture_rotation')
          .then(({ data: res }) => {
            this.picture_rotation_num = res.data.length
            for (let i = 0; i < this.picture_rotation_num; i++) {
              this.picture_rotation.push({
                imageUrl: res.data[i].imageUrl,
                channelName: res.data[i].channelName
              })
            }
          })
          .catch((err) => {
            console.log('error', err)
          })
      }
      let getNavListData = () => {
        this.$http
          .get('api/get_navigation_list', {
            pageNo: 1,
            pageSize: 8
          })
          .then(({ data: res }) => {
            this.homeNavigationList = res.data
          })
          .catch((err) => {
            console.log('error', err)
          })
      }
      let getFloor1Data = () => {
        return this.$http.get('api/search_home_floor_product_web_recom_list', {
          params: {
            floorID: 1
          }
        })
      }
      let getFloor2Data = () => {
        return this.$http.get('api/search_home_floor_product_web_recom_list', {
          params: {
            floorID: 2
          }
        })
      }
      let getFloor3Data = () => {
        return this.$http.get('api/search_home_floor_product_web_recom_list', {
          params: {
            floorID: 3
          }
        })
      }
      let getFloor4Data = () => {
        return this.$http.get('api/search_home_floor_product_web_recom_list', {
          params: {
            floorID: 4
          }
        })
      }
      // 获取轮播图数据
      getRotationData()
      // 获取导航栏数据
      getNavListData()
      // 获取主页tab栏数据

      this.$http
        .all([
          getFloor1Data(),
          getFloor2Data(),
          getFloor3Data(),
          getFloor4Data()
        ])
        .then(
          this.$http.spread(
            (
              { data: res1 },
              { data: res2 },
              { data: res3 },
              { data: res4 }
            ) => {
              this.floorData.push(res1.data, res2.data, res3.data, res4.data)
              console.log(this.floorData)
            }
          )
        )
        .catch((err) => {
          console.log('err', err)
        })
    }
  }
}
</script>

<style lang="less" scoped>
@primary-color: #63aaec;
.active-path-class {
  color: #4aa1f0;
  border-bottom: 3px solid #4aa1f0;
  cursor: pointer;
}

.el-main {
  margin-top: 60px;
}
.el-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  // background-color: red;
  font-size: 16px;
  font-weight: 200;
  z-index: 10000000000000000;
  background-color: #fff;
  box-shadow: 0 0px 8px #7cc2ce;
}
.el-footer {
  padding: 0;
  background-color: black;
  height: 500px !important;
  .footer-top-container {
    // background-color: orange;
    // height: 260px;
    .content-box {
      border-top: 2px solid white;
      border-bottom: 2px solid white;
      display: flex;
      flex-wrap: wrap;
      padding: 10px 0;
      a {
        width: 245px;
        // height: 44px;
        padding: 10px;
        font-size: 16px;
        font-weight: 400;
        color: white;
        text-decoration: none;
      }
    }
  }
}
.title-wrapper {
  height: 100%;
  div {
    padding: 0 15px;
  }
}
.logo-wrapper {
  width: 138px;
  height: 100%;
  background: url('../assets/logo.png') no-repeat 0% 75%;
  background-size: 90%;
}
.logo-wrapper2 {
  width: 172px;
  height: 46px;
  margin: 18px 0;
  background: url('../assets/logo.png') no-repeat 0% 55%;
  background-size: 100%;
}
.el-dropdown {
  padding: 0 0 0 10px !important;
}
.el-popover {
  margin-top: 15px;
}
.popover-detail {
  margin-top: 40px;
  .popover-detail-item {
    margin-bottom: 15px;
    .popover-detail-item-title {
      display: flex;
      .title {
        color: @primary-color;
        font-size: 16px;
        font-weight: 600;
      }
      .cross-bar {
        margin-left: 15px;
        margin-top: 12px;
        flex-grow: 1;
        height: 1px;
        // border: 1px solid grey;
        background-color: lightgrey;
      }
    }
    .popover-detail-item-description {
      padding-left: 10px;
      font-size: 14px;
      color: #84bff7;
      display: flex;
      flex-wrap: wrap;

      span {
        margin: 20px 0 0px 20px;
      }
    }
  }
}
.substituteBox {
  width: 125px;
  height: 56px;
}
.el-dropdown-link {
  display: inline-block;
  height: 56px;
  line-height: 56px;
  padding: 0 15px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  background-color: #4aa1f0;
}
.tab-box {
  height: 100%;
  line-height: 60px;

  &:hover {
    color: #4aa1f0;
    border-bottom: 3px solid #4aa1f0;
    cursor: pointer;
  }
}

.input-wrapper {
  margin: 0 px;
  padding: 0 !important;
  width: 180px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(239, 239, 239);
  .el-input {
    width: 130px !important;
    padding-left: 0;
    border: 1px solid transparent;
  }
  /deep/.el-input__inner {
    border: 0 !important;
    width: 130px;
    padding: 0 11px;
  }
  .el-button {
    border: 0;
    width: 50px;
    border-radius: 0px;
    &:hover {
      background-color: #4aa1f0;
      color: white;
    }
  }
}

.login-popover {
  padding-bottom: 50px;
  .avatar-box {
    width: 60px;
    margin: 0 auto;
  }
  p {
    color: grey;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-top: 30px;
  }
  div {
    width: 180px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    border-radius: 10px;
    font-weight: 500;
    margin: 0 auto;
    cursor: pointer;
  }
  .to-login {
    background-color: @primary-color;
    margin-top: 30px;
    color: white;
  }
  .to-register {
    color: @primary-color;
    border: 1px solid @primary-color;
    margin-top: 15px;
  }
}

.VIP {
  color: orange;
  font-weight: 900;
  font-size: 17px;
  padding: 0 7px;
  cursor: pointer;

  & ~ div {
    padding: 0 7px;
    cursor: pointer;
    font-size: 15px;
  }
}
.download-icon {
  width: 15px;
  vertical-align: -40%;
}
.check-certificate {
  // width: 50px;
  height: 30px;
  line-height: 30px;
  background-color: #4aa1f0;
  border-radius: 15px;
  color: white;
  margin-left: 15px;
}

// login界面
.el-container {
  .loginHeader {
    height: 80px !important;
    // background-color: turquoise;
    position: relative;
  }
  .loginMain {
    margin: 0;
    padding: 0;
  }
}

// 侧边导航栏

//home组件的main-container
.home-el-main {
  padding: 0;
}

.swiper {
  .swiper-slide {
    height: 460px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  /deep/ .swiper-pagination-bullet {
    width: 150px !important;
    height: 42px !important;
    border-radius: 0;
    &:not(:last-child) {
      border-right: 2px solid white;
    }
    margin-right: 0;
    margin-left: 0;
    line-height: 42px !important;
    text-align: center;
    color: white;
    opacity: 0.7;
    background: orange;
    background-size: 100% 200%;

    // transition: all 3;

    &:hover {
      opacity: 1;
    }

    &.swiper-pagination-bullet-active {
      opacity: 1;
      color: white;
      background: #007aff;
    }
  }
}

//drawer样式
.drawer-container {
  height: 270px;
  display: flex;
  justify-content: center;
  margin: 50px 0;
  .drawer-main-box {
    height: 270px;
    width: 1200px;
    border-radius: 10px;
    overflow: hidden;
    div:nth-child(2n + 1) {
      float: left;
      width: 200px;
      height: 270px;
      // z-index: 10;
      // background-color: turquoise;
      img {
        width: 200px;
        height: 100%;
      }
    }
    div:nth-child(2n) {
      float: left;

      width: 0;
      height: 270px;
      // position: absolute;
      // z-index: -10;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

//map
.china-map-container {
  height: 421px;
  .map-title {
    margin: 20px 0;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    font-size: 40px;
    position: relative;
    img {
      margin-right: 20px;
    }
    .block-blue {
      width: 15px;
      height: 15px;
      position: absolute;
      top: 26px;
      left: 880px;
      background-color: lightblue;
    }
  }
}

//广告区域
.advertising-area {
  background-color: rgba(211, 211, 211, 0.4);
  padding-top: 30px;
  .main-center-box {
    width: 1230px;
    margin: 0 auto;
    .on-progress {
      padding: 10px 20px;
      background-color: #fff;

      .on-progress-title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-weight: 700;
        font-size: 18px;
        padding: 0;
        margin-bottom: 15px;
        span {
          display: flex;
          align-items: center;
          span {
            width: 10px;
            height: 10px;
            background-color: #4aa1f0;
            margin-right: 15px;
          }
        }
      }
      .on-progress-content {
        display: flex;
      }
      .on-progress-item {
        width: 223px;
        height: 240px;
        padding: 0;
        margin-right: 12px;
        border-radius: 6px;
        overflow: hidden;
        img {
          width: 100%;
          height: 120px;
        }
        span {
          display: block;
          img {
            width: 10px;
            height: 10px;
          }
        }
        .on-progress-item-title {
          font-size: 16px;
          font-weight: 700;
          // margin-bottom: 30px;
          height: 55px;
        }
        div {
          display: flex;
          justify-content: space-between;
          padding: 0;
          margin-top: 10px;
          span:last-child {
            color: red;
            font-size: 20px;
          }
        }
      }
    }
  }

  // 培训专栏
  .train-center {
    // height: 100px;
    .train-title {
      margin: 60px 0;
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: center;
      font-size: 40px;
      position: relative;
      img {
        margin-right: 20px;
      }
      .block-blue {
        width: 15px;
        height: 15px;
        position: absolute;
        top: 26px;
        left: 750px;
        background-color: #4aa1f0;
      }
    }
    // .train-content {
    //   height: 810px;
    //   border-radius: 10px;
    //   // background-color: #fff;
    //   &:not(last-child) {
    //     margin-bottom: 15px;
    //   }
    //   .train-top {
    //     height: 600px;
    //     display: flex;
    //     justify-content: space-between;
    //     .train-top-left {
    //       height: 100%;
    //       width: 230px;
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: space-between;
    //       div {
    //         border-radius: 10px;
    //         height: 288px;
    //         overflow: hidden;
    //         img {
    //           width: 100%;
    //           height: 100%;
    //         }
    //       }
    //     }
    //     .train-top-right {
    //       height: 100%;
    //       width: 980px;
    //       background-color: white;
    //       border-radius: 10px;
    //       overflow: hidden;
    //       display: flex;
    //       justify-content: space-between;
    //       .left {
    //         width: 675px;
    //         height: 100%;
    //         padding: 0 16px;
    //         // background-color: orange;
    //         .title {
    //           height: 60px;
    //           display: flex;
    //           justify-content: space-between;
    //           align-items: center;
    //           position: relative;
    //           font-size: 15px;
    //           font-weight: 700;
    //           .block-blue {
    //             background-color: #4aa1f0;
    //             width: 10px;
    //             height: 10px;
    //             position: absolute;
    //             top: 26px;
    //             left: -20px;
    //           }
    //           div:first-child {
    //             margin-left: 20px;
    //           }
    //           // tab栏切换
    //           .tab-bar {
    //             display: flex;
    //             justify-content: space-between;
    //             align-items: center;
    //             div {
    //               margin: 0 10px;
    //               height: 35px;
    //               line-height: 35px;
    //               cursor: pointer;
    //               &:first-child {
    //                 border-bottom: 2px solid #4aa1f0;
    //               }
    //             }
    //           }
    //         }
    //         .tab-content1 {
    //           position: absolute;
    //           width: 645px;
    //           visibility: hidden;
    //           height: 600px;
    //           // width: 100%;
    //           // background-color: pink;
    //           display: flex;
    //           flex-wrap: wrap;
    //           // align-items: flex-start;
    //           justify-content: space-between;
    //           padding-top: 10px;
    //           .tab-content1-item {
    //             // flex-grow: 1;
    //             cursor: pointer;
    //             width: 200px;
    //             height: 240px;
    //             padding: 0;
    //             // margin-right: 12px;
    //             border-radius: 6px;
    //             overflow: hidden;
    //             position: relative;
    //             img {
    //               width: 100%;
    //               height: 120px;
    //               border-radius: 6px;
    //             }
    //             span {
    //               display: block;
    //               font-size: 12px;
    //               img {
    //                 width: 10px;
    //                 height: 10px;
    //               }
    //             }
    //             .tab-content1-item-title {
    //               font-size: 16px;
    //               font-weight: 700;
    //               // margin-bottom: 30px;
    //               height: 45px;
    //               overflow: hidden;

    //               text-overflow: ellipsis;

    //               display: -webkit-box;

    //               -webkit-line-clamp: 2;

    //               overflow: hidden;

    //               /*! autoprefixer: off */

    //               -webkit-box-orient: vertical;
    //             }
    //             div {
    //               display: flex;
    //               justify-content: space-between;
    //               padding: 0;
    //               margin-top: 10px;
    //               span {
    //                 font-size: 13px;
    //               }
    //               span:last-child {
    //                 color: red;
    //                 font-size: 20px;
    //               }
    //             }
    //             .on-line {
    //               padding: 5px 8px;
    //               border-radius: 4px;
    //               position: absolute;
    //               top: 10px;
    //               right: 10px;
    //               font-size: 13px;
    //               color: white;
    //               background-color: rgba(3, 0, 0, 0.3);
    //             }
    //           }
    //           .tab-content1-item-far {
    //             // flex-grow: 1;
    //             cursor: pointer;

    //             width: 310px;
    //             height: 288px;
    //             padding: 0;
    //             margin-top: -50px;
    //             // margin-right: 12px;
    //             border-radius: 6px;
    //             overflow: hidden;
    //             position: relative;
    //             img {
    //               width: 100%;
    //               height: 180px;
    //               border-radius: 6px;
    //             }
    //             span {
    //               display: block;
    //               font-size: 12px;

    //               img {
    //                 width: 10px;
    //                 height: 10px;
    //               }
    //             }

    //             .tab-content1-item-title {
    //               font-size: 16px;
    //               font-weight: 700;
    //               // margin-bottom: 30px;
    //               height: 45px;
    //             }
    //             div {
    //               display: flex;
    //               justify-content: space-between;
    //               padding: 0;
    //               margin-top: 10px;
    //               span {
    //                 font-size: 13px;
    //               }
    //               span:last-child {
    //                 color: red;
    //                 font-size: 20px;
    //               }
    //             }
    //             .on-line {
    //               padding: 5px 8px;
    //               border-radius: 4px;
    //               position: absolute;
    //               top: 10px;
    //               right: 10px;
    //               font-size: 13px;
    //               color: white;
    //               background-color: rgba(3, 0, 0, 0.3);
    //             }
    //           }
    //         }
    //         .tab-content2 {
    //           visibility: hidden;
    //           width: 645px;
    //           height: 540px;
    //           position: absolute;
    //           padding: 20px 30px;
    //           display: flex;
    //           flex-wrap: wrap;
    //           // align-items: flex-start;
    //           justify-content: space-between;
    //           // background-color: orange;
    //           .tab-content2-item {
    //             // flex-grow: 1;
    //             cursor: pointer;
    //             width: 180px;
    //             height: 240px;
    //             padding: 0;
    //             // margin-right: 12px;
    //             border-radius: 6px;
    //             overflow: hidden;
    //             position: relative;
    //             img {
    //               width: 100%;
    //               height: 120px;
    //               border-radius: 6px;
    //             }
    //             span {
    //               display: block;
    //               font-size: 12px;
    //               img {
    //                 width: 10px;
    //                 height: 10px;
    //               }
    //             }
    //             .tab-content2-item-title {
    //               font-size: 16px;
    //               font-weight: 700;
    //               // margin-bottom: 30px;
    //               height: 45px;
    //               overflow: hidden;

    //               text-overflow: ellipsis;

    //               display: -webkit-box;

    //               -webkit-line-clamp: 2;

    //               overflow: hidden;

    //               /*! autoprefixer: off */

    //               -webkit-box-orient: vertical;
    //             }
    //             div {
    //               display: flex;
    //               justify-content: space-between;
    //               padding: 0;
    //               margin-top: 10px;
    //               span {
    //                 font-size: 13px;
    //               }
    //               span:last-child {
    //                 color: red;
    //                 font-size: 20px;
    //               }
    //             }
    //             .on-line {
    //               padding: 5px 8px;
    //               border-radius: 4px;
    //               position: absolute;
    //               top: 10px;
    //               right: 10px;
    //               font-size: 13px;
    //               color: white;
    //               background-color: rgba(3, 0, 0, 0.3);
    //             }
    //           }
    //         }
    //         .tab-content3 {
    //           visibility: hidden;
    //           position: absolute;
    //           padding: 0 15px;
    //           width: 645px;
    //           height: 540px;
    //           // background-color: orange;
    //           display: flex;
    //           flex-wrap: wrap;
    //           // align-items: flex-start;
    //           justify-content: space-between;
    //           .tab-content3-item-far {
    //             // flex-grow: 1;
    //             cursor: pointer;

    //             width: 295px;
    //             height: 270px;
    //             padding: 0;
    //             // margin-top: -50px;
    //             // margin-right: 12px;
    //             border-radius: 6px;
    //             overflow: hidden;
    //             position: relative;
    //             img {
    //               width: 100%;
    //               height: 150px;
    //               border-radius: 6px;
    //             }
    //             span {
    //               display: block;
    //               font-size: 12px;

    //               img {
    //                 width: 10px;
    //                 height: 10px;
    //               }
    //             }

    //             .tab-content3-item-title {
    //               font-size: 16px;
    //               font-weight: 700;
    //               // margin-bottom: 30px;
    //               height: 45px;
    //             }
    //             div {
    //               display: flex;
    //               justify-content: space-between;
    //               padding: 0;
    //               margin-top: 8px;
    //               span {
    //                 font-size: 13px;
    //               }
    //               span:last-child {
    //                 color: red;
    //                 font-size: 20px;
    //               }
    //             }
    //             .on-line {
    //               padding: 5px 8px;
    //               border-radius: 4px;
    //               position: absolute;
    //               top: 10px;
    //               right: 10px;
    //               font-size: 13px;
    //               color: white;
    //               background-color: rgba(3, 0, 0, 0.3);
    //             }
    //           }
    //         }
    //         .tab-content4 {
    //           visibility: hidden;
    //           position: absolute;
    //           padding: 0 15px;
    //           width: 645px;
    //           height: 540px;
    //           // background-color: orange;
    //           display: flex;
    //           flex-wrap: wrap;
    //           // align-items: flex-start;
    //           justify-content: space-between;
    //           .tab-content4-item-far {
    //             // flex-grow: 1;
    //             cursor: pointer;

    //             width: 295px;
    //             height: 270px;
    //             padding: 0;
    //             // margin-top: -50px;
    //             // margin-right: 12px;
    //             border-radius: 6px;
    //             overflow: hidden;
    //             position: relative;
    //             img {
    //               width: 100%;
    //               height: 150px;
    //               border-radius: 6px;
    //             }
    //             span {
    //               display: block;
    //               font-size: 12px;

    //               img {
    //                 width: 10px;
    //                 height: 10px;
    //               }
    //             }

    //             .tab-content4-item-title {
    //               font-size: 16px;
    //               font-weight: 700;
    //               // margin-bottom: 30px;
    //               height: 45px;
    //             }
    //             div {
    //               display: flex;
    //               justify-content: space-between;
    //               padding: 0;
    //               margin-top: 8px;
    //               span {
    //                 font-size: 13px;
    //               }
    //               span:last-child {
    //                 color: red;
    //                 font-size: 20px;
    //               }
    //             }
    //             .on-line {
    //               padding: 5px 8px;
    //               border-radius: 4px;
    //               position: absolute;
    //               top: 10px;
    //               right: 10px;
    //               font-size: 13px;
    //               color: white;
    //               background-color: rgba(3, 0, 0, 0.3);
    //             }
    //           }
    //         }
    //         .active-tab-content {
    //           visibility: visible;
    //           position: absolute;
    //         }
    //       }
    //       .right {
    //         width: 275px;
    //         height: 100%;
    //         padding: 5px 7.5px;
    //         // background-color: orange;
    //         .title {
    //           height: 50px;
    //           display: flex;
    //           justify-content: space-between;
    //           align-items: center;
    //           position: relative;
    //           font-size: 15px;
    //           font-weight: 700;
    //           .block-blue {
    //             background-color: #4aa1f0;
    //             width: 10px;
    //             height: 10px;
    //             position: absolute;
    //             top: 21px;
    //             left: -20px;
    //           }
    //           div:first-child {
    //             margin-left: 20px;
    //             cursor: pointer;
    //           }
    //         }
    //         .text-content {
    //           height: 245px;
    //           display: flex;
    //           flex-wrap: wrap;
    //           align-items: stretch;
    //           border-bottom: 1px solid rgba(3, 0, 0, 0.3);
    //           .text-content-item {
    //             cursor: pointer;
    //             width: 260px;
    //             h4 {
    //               font-weight: 400;
    //             }
    //             p {
    //               font-weight: 400;
    //               font-size: 12px;
    //               margin-top: 35px;
    //             }
    //           }
    //         }
    //         .tab-container {
    //           margin-top: 10px;
    //           .content-item1 {
    //             p:nth-of-type(1) {
    //               margin-top: 10px;
    //             }
    //             .imgBar {
    //               margin-top: 10px;
    //               img {
    //                 &:first-child {
    //                   width: 45px;
    //                   height: 45px;
    //                   vertical-align: middle;
    //                   margin-right: 5px;
    //                 }
    //                 &:nth-child(2) {
    //                   width: 20px;
    //                   height: 20px;
    //                   margin-left: 140px;
    //                   vertical-align: middle;
    //                 }
    //               }
    //               span {
    //                 margin-left: 5px;
    //                 color: red;
    //               }
    //               & + p {
    //                 margin-top: 10px;
    //                 background-color: #fffaf2;
    //               }
    //             }
    //             > span {
    //               color: #4aa1f0;
    //               margin-left: 228px;
    //               cursor: pointer;
    //               &:last-child {
    //                 display: block;
    //                 width: 65px;
    //                 height: 28px;
    //                 margin: 0 auto;
    //                 color: black;
    //                 text-align: center;
    //                 line-height: 28px;
    //                 border: 1px solid black;
    //                 border-radius: 10px;
    //               }
    //             }
    //           }
    //           .content-item2 {
    //             h2 {
    //               font-size: 16px;
    //               color: #4aa1f0;
    //               font-weight: 400;
    //               margin: 15px 0;
    //             }
    //             p {
    //               font-size: 14px;
    //               font-weight: 300;
    //             }
    //             > span {
    //               color: #4aa1f0;
    //               margin-left: 228px;
    //               cursor: pointer;
    //               &:last-child {
    //                 display: block;
    //                 width: 65px;
    //                 height: 28px;
    //                 margin: 10px auto;
    //                 color: black;
    //                 text-align: center;
    //                 line-height: 28px;
    //                 border: 1px solid black;
    //                 border-radius: 10px;
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    //   .train-bottom {
    //     height: 200px;
    //     display: flex;
    //     justify-content: space-between;
    //     margin-top: 10px;
    //     img {
    //       width: 600px;
    //       height: 100%;
    //       border-radius: 10px;
    //     }
    //   }
    // }
  }
}
.honor-container {
  // margin-top: -80px;
  .honor-bg {
    display: block;
    width: 1190px;
    height: 55px;
    margin: 50px auto;
  }
  .honor-title {
    margin: 60px 0;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    font-size: 40px;
    position: relative;
    img {
      margin-right: 20px;
    }
    .block-blue {
      width: 15px;
      height: 15px;
      position: absolute;
      top: 26px;
      left: 780px;
      padding: 0;
      background-color: #4aa1f0;
    }
  }
  .el-carousel {
    .el-carousel__item {
      div {
        // width: 1010px;
        // height: 390px;
        img {
          width: 1010px;
          height: 300px;
          // margin: 0 auto;
          margin-left: 80px;
        }
      }
    }
  }
  .course-advantage {
    display: flex;
    height: 130px;
    padding: 0;

    justify-content: space-between;
    margin-bottom: 25px;
    .advantage-item {
      width: 221px;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-content: center;
      &:nth-child(1) {
        background: url('../assets/advantage1.png');
      }
      &:nth-child(2) {
        background: url('../assets/advantage2.png');
      }
      &:nth-child(3) {
        background: url('../assets/advantage3.png');
      }
      &:nth-child(4) {
        background: url('../assets/advantage4.png');
      }
      &:nth-child(5) {
        background: url('../assets/advantage5.png');
      }
      span {
        width: 221px;
        margin-top: 10px;
        color: white;
        text-align: center;
        &:first-child {
          font-size: 23px;
        }
        &:last-child {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
