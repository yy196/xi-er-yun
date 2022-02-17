<template>
  <div class="train-content" ref="train">
    <!-- 上部分 -->
    <div class="train-top">
      <div class="train-top-left">
        <!-- <div
          v-for="item in floorData2[indexProvided].leftAdvertisementList"
          :key="item.imageUrl"
        >
          <img :src="item.imageUrl" alt="" />
        </div> -->
        <div
          v-for="item in floorData2.leftAdvertisementList"
          :key="item.imageUrl"
        >
          <img :src="item.imageUrl" alt="" />
        </div>
      </div>
      <div class="train-top-right">
        <div class="left">
          <div class="title">
            <div>
              <div class="block-blue"></div>
              第三方服务
            </div>
            <!-- tab栏切换 -->
            <div class="tab-bar" ref="tabBar">
              <div ref="tab11" data-tab="1">推荐</div>
              <div ref="tab22" data-tab="2">在线课程</div>
              <div ref="tab33" data-tab="3">远程培训班</div>
              <div ref="tab44" data-tab="4">面授培训班</div>
            </div>
            <span
              >更多
              <i class="el-icon-arrow-right"></i>
            </span>
          </div>
          <div class="tabContent" ref="tabContent">
            <div class="tab-content1 active-tab-content" data-content="1">
              <div
                class="tab-content1-item"
                v-for="(item, index) in floorData.courseList"
                :key="index"
              >
                <img :src="item.thumbnailUrl" alt="" />
                <span class="tab-content1-item-title">{{
                  item.productName
                }}</span>
                <span>
                  <img src="../assets/fire.png" alt="" />
                  {{ item.buyCount }}人已购买</span
                >
                <div>
                  <span>主讲人 {{ item.teacherName }}</span>
                  <span>￥{{ item.basicPrice }}</span>
                </div>
                <span class="on-line">在线</span>
              </div>

              <div
                class="tab-content1-item-far"
                v-for="(item, index) in floorData.classList"
                :key="index + 'A'"
              >
                <img :src="item.thumbnailUrl" alt="" />

                <span class="tab-content1-item-title">{{
                  item.productName
                }}</span>
                <span>
                  <img src="../assets/fire.png" alt="" />
                  {{ item.buyCount }}人已购买</span
                >
                <div>
                  <span>主讲人 西尔</span>
                  <span>￥{{ item.basicPrice }}</span>
                </div>
                <span class="on-line">远程</span>
              </div>
            </div>
            <div class="tab-content2" data-content="2">
              <div class="tab-content2-item">
                <img src="../assets/train3.jpg" alt="" />
                <span class="tab-content2-item-title"
                  >第一集：环境综合服务市场占不住？业务实践大力拓展市场渠道！</span
                >
                <span>
                  <img src="../assets/fire.png" alt="" />
                  17人已购买</span
                >
                <div>
                  <span>主讲人 西尔</span>
                  <span>￥2000</span>
                </div>
                <span class="on-line">在线</span>
              </div>
              <div class="tab-content2-item">
                <img src="../assets/train3.jpg" alt="" />
                <span class="tab-content2-item-title"
                  >第一集：环境综合服务市场占不住？业务实践大力拓展市场渠道！</span
                >
                <span>
                  <img src="../assets/fire.png" alt="" />
                  17人已购买</span
                >
                <div>
                  <span>主讲人 西尔</span>
                  <span>￥2000</span>
                </div>
                <span class="on-line">在线</span>
              </div>
              <div class="tab-content2-item">
                <img src="../assets/train3.jpg" alt="" />
                <span class="tab-content2-item-title"
                  >第一集：环境综合服务市场占不住？业务实践大力拓展市场渠道！</span
                >
                <span>
                  <img src="../assets/fire.png" alt="" />
                  17人已购买</span
                >
                <div>
                  <span>主讲人 西尔</span>
                  <span>￥2000</span>
                </div>
                <span class="on-line">在线</span>
              </div>
              <div class="tab-content2-item">
                <img src="../assets/train3.jpg" alt="" />
                <span class="tab-content2-item-title"
                  >第一集：环境综合服务市场占不住？业务实践大力拓展市场渠道！</span
                >
                <span>
                  <img src="../assets/fire.png" alt="" />
                  17人已购买</span
                >
                <div>
                  <span>主讲人 西尔</span>
                  <span>￥2000</span>
                </div>
                <span class="on-line">在线</span>
              </div>
              <div class="tab-content2-item">
                <img src="../assets/train3.jpg" alt="" />
                <span class="tab-content2-item-title"
                  >第一集：环境综合服务市场占不住？业务实践大力拓展市场渠道！</span
                >
                <span>
                  <img src="../assets/fire.png" alt="" />
                  17人已购买</span
                >
                <div>
                  <span>主讲人 西尔</span>
                  <span>￥2000</span>
                </div>
                <span class="on-line">在线</span>
              </div>
              <div class="tab-content2-item">
                <img src="../assets/train3.jpg" alt="" />
                <span class="tab-content2-item-title"
                  >第一集：环境综合服务市场占不住？业务实践大力拓展市场渠道！</span
                >
                <span>
                  <img src="../assets/fire.png" alt="" />
                  17人已购买</span
                >
                <div>
                  <span>主讲人 西尔</span>
                  <span>￥2000</span>
                </div>
                <span class="on-line">在线</span>
              </div>
            </div>
            <div class="tab-content3" data-content="3">
              <div class="tab-content3-item-far">
                <img src="../assets/train7.jpg" alt="" />

                <span class="tab-content3-item-title"
                  >“环保管家”第三方能力提升班</span
                >
                <span>
                  <img src="../assets/fire.png" alt="" />
                  17人已购买</span
                >
                <div>
                  <span>主讲人 西尔</span>
                  <span>￥2000</span>
                </div>
                <span class="on-line">远程</span>
              </div>
              <div class="tab-content3-item-far">
                <img src="../assets/train7.jpg" alt="" />

                <span class="tab-content3-item-title"
                  >“环保管家”第三方能力提升班</span
                >
                <span>
                  <img src="../assets/fire.png" alt="" />
                  17人已购买</span
                >
                <div>
                  <span>主讲人 西尔</span>
                  <span>￥2000</span>
                </div>
                <span class="on-line">远程</span>
              </div>
              <div class="tab-content3-item-far">
                <img src="../assets/train7.jpg" alt="" />

                <span class="tab-content3-item-title"
                  >“环保管家”第三方能力提升班</span
                >
                <span>
                  <img src="../assets/fire.png" alt="" />
                  17人已购买</span
                >
                <div>
                  <span>主讲人 西尔</span>
                  <span>￥2000</span>
                </div>
                <span class="on-line">远程</span>
              </div>
              <div class="tab-content3-item-far">
                <img src="../assets/train7.jpg" alt="" />

                <span class="tab-content3-item-title"
                  >“环保管家”第三方能力提升班</span
                >
                <span>
                  <img src="../assets/fire.png" alt="" />
                  17人已购买</span
                >
                <div>
                  <span>主讲人 西尔</span>
                  <span>￥2000</span>
                </div>
                <span class="on-line">远程</span>
              </div>
            </div>
            <div class="tab-content4" data-content="4">
              <div class="tab-content4-item-far">
                <img src="../assets/train7.jpg" alt="" />

                <span class="tab-content4-item-title"
                  >“环保管家”第三方能力提升班</span
                >
                <span>
                  <img src="../assets/fire.png" alt="" />
                  17人已购买</span
                >
                <div>
                  <span>主讲人 西尔</span>
                  <span>￥2000</span>
                </div>
                <span class="on-line">远程</span>
              </div>
              <div class="tab-content4-item-far">
                <img src="../assets/train7.jpg" alt="" />

                <span class="tab-content4-item-title"
                  >“环保管家”第三方能力提升班</span
                >
                <span>
                  <img src="../assets/fire.png" alt="" />
                  17人已购买</span
                >
                <div>
                  <span>主讲人 西尔</span>
                  <span>￥2000</span>
                </div>
                <span class="on-line">远程</span>
              </div>
              <div class="tab-content4-item-far">
                <img src="../assets/train7.jpg" alt="" />

                <span class="tab-content4-item-title"
                  >“环保管家”第三方能力提升班</span
                >
                <span>
                  <img src="../assets/fire.png" alt="" />
                  17人已购买</span
                >
                <div>
                  <span>主讲人 西尔</span>
                  <span>￥2000</span>
                </div>
                <span class="on-line">远程</span>
              </div>
              <div class="tab-content4-item-far">
                <img src="../assets/train7.jpg" alt="" />

                <span class="tab-content4-item-title"
                  >“环保管家”第三方能力提升班</span
                >
                <span>
                  <img src="../assets/fire.png" alt="" />
                  17人已购买</span
                >
                <div>
                  <span>主讲人 西尔</span>
                  <span>￥2000</span>
                </div>
                <span class="on-line">远程</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="title">
            <div>
              <div class="block-blue"></div>
              第三方服务
            </div>
            <span
              >更多
              <i class="el-icon-arrow-right"></i>
            </span>
          </div>
          <div class="text-content">
            <div class="text-content-item">
              <h4>《云南省土壤污染防治条例》全文</h4>
              <p class="time">2022-01-12</p>
            </div>
            <div class="text-content-item">
              <h4>丁仲礼：碳中和对中国的挑战和机遇</h4>
              <p class="time">2022-01-12</p>
            </div>
            <div class="text-content-item">
              <h4>展望2022丨统筹有序推进碳达峰碳中和</h4>

              <p class="time">2022-01-12</p>
            </div>
          </div>
          <div class="tab-container">
            <tab-bar :tabNum="2" :bgc="false">
              <template #title-item1> 热门问答 </template>
              <template #title-item2> 免费资料 </template>
              <template #content-item1>
                <section class="content-item1">
                  <p>电厂冷却用的温排水是否属于清净下水?</p>
                  <div>333</div>
                  <section class="imgBar">
                    <img src="../assets/icon-1.png" alt="" />
                    金妍
                    <img src="../assets/thumb.png" alt="" />
                    <span>2</span>
                  </section>
                  <p>
                    在排放标准中，一般不使用“清净下水”这一术语。但在日常环境管理中，一般认为清净下水包括温排水、锅炉循环水等。考虑到这类清净下水通常为循环水，运行中
                  </p>
                  <span>查看</span>
                  <span>更多 <i class="el-icon-arrow-right"></i> </span>
                </section>
              </template>
              <template #content-item2>
                <section class="content-item2">
                  <h2>“环保管家”服务合同模版</h2>
                  <p>发布时间: 2018-10-10</p>
                  <p>实施时间: 2018-10-10</p>
                  <h2>企业突发环境事件应急管理隐患自查表</h2>
                  <p>发布时间: 2018-10-10</p>
                  <p>实施时间: 2018-10-10</p>
                  <span>更多 <i class="el-icon-arrow-right"></i> </span>
                </section>
              </template>
            </tab-bar>
          </div>
        </div>
      </div>
    </div>
    <!-- 下部分 -->
    <div class="train-bottom">
      <img
        v-for="item in floorData2.downAdvertisementList"
        :key="item.imageUrl"
        :src="item.imageUrl"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['floorData', 'indexProvided', 'floorData2'],
  data() {
    return {
      tabNum: 4
      // floorData2: []
    }
  },
  methods: {
    activateTabContent(e) {
      for (let i = 0; i < this.tabNum; i++) {
        this.$refs.tabContent.children[i].classList.remove('active-tab-content')

        if (
          this.$refs.tabContent.children[i].dataset.content ===
          e.target.dataset.tab
        ) {
          this.$refs.tabContent.children[i].classList.add('active-tab-content')
        }
      }
    },
    resetAllTabs() {
      this.$refs.tab11.style.color = 'black'
      this.$refs.tab11.style.borderBottom = 'none'
      this.$refs.tab22.style.color = 'black'
      this.$refs.tab22.style.borderBottom = 'none'
      this.$refs.tab33.style.color = 'black'
      this.$refs.tab33.style.borderBottom = 'none'
      this.$refs.tab44.style.color = 'black'
      this.$refs.tab44.style.borderBottom = 'none'
    }
  },
  created() {
    console.log(this.indexProvided)
    console.log(this.floorData2, '999999999999')
    console.log(this.floorData2[this.indexProvided])

    // let getFloorData2 = () => {
    //   this.$http
    //     .get('api/search_home_floor_list')
    //     .then(({ data: res }) => {
    //       for (let i = 0; i < res.data.length; i++) {
    //         this.floorData2.push(res.data[i])
    //       }
    //       console.log(this.floorData2[this.indexProvided], '1111111111111')
    //     })
    //     .catch((err) => {
    //       console.log('error', err)
    //     })
    // }
    // getFloorData2()
  },
  mounted() {
    this.$refs.tab11.addEventListener('click', (e) => {
      this.resetAllTabs()
      this.activateTabContent(e)

      e.target.style.borderBottom = '2px solid #4aa1f0'
      e.target.style.color = '#4aa1f0'
    })
    this.$refs.tab22.addEventListener('click', (e) => {
      this.resetAllTabs()
      this.activateTabContent(e)

      e.target.style.borderBottom = '2px solid #4aa1f0'
      e.target.style.color = '#4aa1f0'
    })
    this.$refs.tab33.addEventListener('click', (e) => {
      this.resetAllTabs()
      this.activateTabContent(e)

      e.target.style.borderBottom = '2px solid #4aa1f0'
      e.target.style.color = '#4aa1f0'
    })
    this.$refs.tab44.addEventListener('click', (e) => {
      this.resetAllTabs()
      this.activateTabContent(e)

      e.target.style.borderBottom = '2px solid #4aa1f0'
      e.target.style.color = '#4aa1f0'
    })
  }
}
</script>

<style lang="less" scoped>
.train-content {
  height: 810px;
  border-radius: 10px;
  // background-color: #fff;
  &:not(last-child) {
    margin-bottom: 15px;
  }
  .train-top {
    height: 600px;
    display: flex;
    justify-content: space-between;
    .train-top-left {
      height: 100%;
      width: 230px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div {
        border-radius: 10px;
        height: 288px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .train-top-right {
      height: 100%;
      width: 980px;
      background-color: white;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      .left {
        width: 675px;
        height: 100%;
        padding: 0 16px;
        // background-color: orange;
        .title {
          height: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          font-size: 15px;
          font-weight: 700;
          .block-blue {
            background-color: #4aa1f0;
            width: 10px;
            height: 10px;
            position: absolute;
            top: 26px;
            left: -20px;
          }
          div:first-child {
            margin-left: 20px;
          }
          // tab栏切换
          .tab-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            div {
              margin: 0 10px;
              height: 35px;
              line-height: 35px;
              cursor: pointer;
              &:first-child {
                border-bottom: 2px solid #4aa1f0;
              }
            }
          }
        }
        .tab-content1 {
          position: absolute;
          width: 645px;
          visibility: hidden;
          height: 600px;
          // width: 100%;
          // background-color: pink;
          display: flex;
          flex-wrap: wrap;
          // align-items: flex-start;
          justify-content: space-between;
          padding-top: 10px;
          .tab-content1-item {
            // flex-grow: 1;
            cursor: pointer;
            width: 200px;
            height: 240px;
            padding: 0;
            // margin-right: 12px;
            border-radius: 6px;
            overflow: hidden;
            position: relative;
            img {
              width: 100%;
              height: 120px;
              border-radius: 6px;
            }
            span {
              display: block;
              font-size: 12px;
              img {
                width: 10px;
                height: 10px;
              }
            }
            .tab-content1-item-title {
              font-size: 16px;
              font-weight: 700;
              // margin-bottom: 30px;
              height: 45px;
              overflow: hidden;

              text-overflow: ellipsis;

              display: -webkit-box;

              -webkit-line-clamp: 2;

              overflow: hidden;

              /*! autoprefixer: off */

              -webkit-box-orient: vertical;
            }
            div {
              display: flex;
              justify-content: space-between;
              padding: 0;
              margin-top: 10px;
              span {
                font-size: 13px;
              }
              span:last-child {
                color: red;
                font-size: 20px;
              }
            }
            .on-line {
              padding: 5px 8px;
              border-radius: 4px;
              position: absolute;
              top: 10px;
              right: 10px;
              font-size: 13px;
              color: white;
              background-color: rgba(3, 0, 0, 0.3);
            }
          }
          .tab-content1-item-far {
            // flex-grow: 1;
            cursor: pointer;

            width: 310px;
            height: 288px;
            padding: 0;
            margin-top: -50px;
            // margin-right: 12px;
            border-radius: 6px;
            overflow: hidden;
            position: relative;
            img {
              width: 100%;
              height: 180px;
              border-radius: 6px;
            }
            span {
              display: block;
              font-size: 12px;

              img {
                width: 10px;
                height: 10px;
              }
            }

            .tab-content1-item-title {
              font-size: 16px;
              font-weight: 700;
              // margin-bottom: 30px;
              height: 45px;
            }
            div {
              display: flex;
              justify-content: space-between;
              padding: 0;
              margin-top: 10px;
              span {
                font-size: 13px;
              }
              span:last-child {
                color: red;
                font-size: 20px;
              }
            }
            .on-line {
              padding: 5px 8px;
              border-radius: 4px;
              position: absolute;
              top: 10px;
              right: 10px;
              font-size: 13px;
              color: white;
              background-color: rgba(3, 0, 0, 0.3);
            }
          }
        }
        .tab-content2 {
          visibility: hidden;
          width: 645px;
          height: 540px;
          position: absolute;
          padding: 20px 30px;
          display: flex;
          flex-wrap: wrap;
          // align-items: flex-start;
          justify-content: space-between;
          // background-color: orange;
          .tab-content2-item {
            // flex-grow: 1;
            cursor: pointer;
            width: 180px;
            height: 240px;
            padding: 0;
            // margin-right: 12px;
            border-radius: 6px;
            overflow: hidden;
            position: relative;
            img {
              width: 100%;
              height: 120px;
              border-radius: 6px;
            }
            span {
              display: block;
              font-size: 12px;
              img {
                width: 10px;
                height: 10px;
              }
            }
            .tab-content2-item-title {
              font-size: 16px;
              font-weight: 700;
              // margin-bottom: 30px;
              height: 45px;
              overflow: hidden;

              text-overflow: ellipsis;

              display: -webkit-box;

              -webkit-line-clamp: 2;

              overflow: hidden;

              /*! autoprefixer: off */

              -webkit-box-orient: vertical;
            }
            div {
              display: flex;
              justify-content: space-between;
              padding: 0;
              margin-top: 10px;
              span {
                font-size: 13px;
              }
              span:last-child {
                color: red;
                font-size: 20px;
              }
            }
            .on-line {
              padding: 5px 8px;
              border-radius: 4px;
              position: absolute;
              top: 10px;
              right: 10px;
              font-size: 13px;
              color: white;
              background-color: rgba(3, 0, 0, 0.3);
            }
          }
        }
        .tab-content3 {
          visibility: hidden;
          position: absolute;
          padding: 0 15px;
          width: 645px;
          height: 540px;
          // background-color: orange;
          display: flex;
          flex-wrap: wrap;
          // align-items: flex-start;
          justify-content: space-between;
          .tab-content3-item-far {
            // flex-grow: 1;
            cursor: pointer;

            width: 295px;
            height: 270px;
            padding: 0;
            // margin-top: -50px;
            // margin-right: 12px;
            border-radius: 6px;
            overflow: hidden;
            position: relative;
            img {
              width: 100%;
              height: 150px;
              border-radius: 6px;
            }
            span {
              display: block;
              font-size: 12px;

              img {
                width: 10px;
                height: 10px;
              }
            }

            .tab-content3-item-title {
              font-size: 16px;
              font-weight: 700;
              // margin-bottom: 30px;
              height: 45px;
            }
            div {
              display: flex;
              justify-content: space-between;
              padding: 0;
              margin-top: 8px;
              span {
                font-size: 13px;
              }
              span:last-child {
                color: red;
                font-size: 20px;
              }
            }
            .on-line {
              padding: 5px 8px;
              border-radius: 4px;
              position: absolute;
              top: 10px;
              right: 10px;
              font-size: 13px;
              color: white;
              background-color: rgba(3, 0, 0, 0.3);
            }
          }
        }
        .tab-content4 {
          visibility: hidden;
          position: absolute;
          padding: 0 15px;
          width: 645px;
          height: 540px;
          // background-color: orange;
          display: flex;
          flex-wrap: wrap;
          // align-items: flex-start;
          justify-content: space-between;
          .tab-content4-item-far {
            // flex-grow: 1;
            cursor: pointer;

            width: 295px;
            height: 270px;
            padding: 0;
            // margin-top: -50px;
            // margin-right: 12px;
            border-radius: 6px;
            overflow: hidden;
            position: relative;
            img {
              width: 100%;
              height: 150px;
              border-radius: 6px;
            }
            span {
              display: block;
              font-size: 12px;

              img {
                width: 10px;
                height: 10px;
              }
            }

            .tab-content4-item-title {
              font-size: 16px;
              font-weight: 700;
              // margin-bottom: 30px;
              height: 45px;
            }
            div {
              display: flex;
              justify-content: space-between;
              padding: 0;
              margin-top: 8px;
              span {
                font-size: 13px;
              }
              span:last-child {
                color: red;
                font-size: 20px;
              }
            }
            .on-line {
              padding: 5px 8px;
              border-radius: 4px;
              position: absolute;
              top: 10px;
              right: 10px;
              font-size: 13px;
              color: white;
              background-color: rgba(3, 0, 0, 0.3);
            }
          }
        }
        .active-tab-content {
          visibility: visible;
          position: absolute;
        }
      }
      .right {
        width: 275px;
        height: 100%;
        padding: 5px 7.5px;
        // background-color: orange;
        .title {
          height: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          font-size: 15px;
          font-weight: 700;
          .block-blue {
            background-color: #4aa1f0;
            width: 10px;
            height: 10px;
            position: absolute;
            top: 21px;
            left: -20px;
          }
          div:first-child {
            margin-left: 20px;
            cursor: pointer;
          }
        }
        .text-content {
          height: 245px;
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          border-bottom: 1px solid rgba(3, 0, 0, 0.3);
          .text-content-item {
            cursor: pointer;
            width: 260px;
            h4 {
              font-weight: 400;
            }
            p {
              font-weight: 400;
              font-size: 12px;
              margin-top: 35px;
            }
          }
        }
        .tab-container {
          margin-top: 10px;
          .content-item1 {
            p:nth-of-type(1) {
              margin-top: 10px;
            }
            .imgBar {
              margin-top: 10px;
              img {
                &:first-child {
                  width: 45px;
                  height: 45px;
                  vertical-align: middle;
                  margin-right: 5px;
                }
                &:nth-child(2) {
                  width: 20px;
                  height: 20px;
                  margin-left: 140px;
                  vertical-align: middle;
                }
              }
              span {
                margin-left: 5px;
                color: red;
              }
              & + p {
                margin-top: 10px;
                background-color: #fffaf2;
              }
            }
            > span {
              color: #4aa1f0;
              margin-left: 228px;
              cursor: pointer;
              &:last-child {
                display: block;
                width: 65px;
                height: 28px;
                margin: 0 auto;
                color: black;
                text-align: center;
                line-height: 28px;
                border: 1px solid black;
                border-radius: 10px;
              }
            }
          }
          .content-item2 {
            h2 {
              font-size: 16px;
              color: #4aa1f0;
              font-weight: 400;
              margin: 15px 0;
            }
            p {
              font-size: 14px;
              font-weight: 300;
            }
            > span {
              color: #4aa1f0;
              margin-left: 228px;
              cursor: pointer;
              &:last-child {
                display: block;
                width: 65px;
                height: 28px;
                margin: 10px auto;
                color: black;
                text-align: center;
                line-height: 28px;
                border: 1px solid black;
                border-radius: 10px;
              }
            }
          }
        }
      }
    }
  }
  .train-bottom {
    height: 200px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    img {
      width: 600px;
      height: 100%;
      border-radius: 10px;
    }
  }
}
</style>
