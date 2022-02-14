<template>
  <div class="main-container">
    <div class="tab-container">
      <span>筛选:</span>

      <tab-bar :tabNum="5" :bgc="true">
        <template #title-item1> 全部 </template>
        <template #title-item2> 热门环保书籍 </template>
        <template #title-item3> 碳排放核算系列书籍 </template>
        <template #title-item4> 绿色发展书籍 </template>
        <template #title-item5> 生态环境执法 </template>
        <template #content-item1>
          <section class="book-list-container">
            <section v-if="currentPage === 1" class="page page1">
              <a href="javascript:;" v-for="item in 20" :key="item">
                <section class="book-item-1">
                  <img src="../assets/book-item1.jpg" alt="" />
                  <span>《生态环境监管执法300问》</span>
                  <span>￥69</span>
                </section>
              </a>
            </section>
            <section v-else-if="currentPage === 2" class="page page2">
              <a href="javascript:;" v-for="item in 19" :key="item">
                <section class="book-item-1">
                  <img src="../assets/book-item2.jpg" alt="" />
                  <span>碳排放核查程序要求与核查报告范例</span>
                  <span>￥50</span>
                </section>
              </a>
            </section>
          </section>

          <pagination
            :pageNum="2"
            :currentPageNum.sync="currentPage"
          ></pagination>
        </template>
        <template #content-item2>
          <section class="book-list-container">
            <section v-if="currentPage === 1" class="page page1">
              <a href="javascript:;" v-for="item in 10" :key="item">
                <section class="book-item-1">
                  <img src="../assets/book-item3.jpg" alt="" />
                  <span>国内外空气质量标准与基准汇编</span>
                  <span>￥49</span>
                </section>
              </a>
            </section>
          </section>

          <pagination
            :pageNum="1"
            :currentPageNum.sync="currentPage"
          ></pagination>
        </template>
        <template #content-item3>
          <section class="book-list-container">
            <section v-if="currentPage === 1" class="page page1">
              <a href="javascript:;" v-for="item in 10" :key="item">
                <section class="book-item-1">
                  <img src="../assets/book-item4.jpg" alt="" />
                  <span>中国其他有色金属冶炼和压延加工企业</span>
                  <span>￥55</span>
                </section>
              </a>
            </section>
          </section>

          <pagination
            :pageNum="1"
            :currentPageNum.sync="currentPage"
          ></pagination>
        </template>
        <template #content-item4>
          <section class="book-list-container">
            <section v-if="currentPage === 1" class="page page1">
              <a href="javascript:;" v-for="item in 10" :key="item">
                <section class="book-item-1">
                  <img src="../assets/book-item5.jpg" alt="" />
                  <span>绿色发展新理念系列-绿色供应链</span>
                  <span>￥38</span>
                </section>
              </a>
            </section>
          </section>

          <pagination
            :pageNum="1"
            :currentPageNum.sync="currentPage"
          ></pagination>
        </template>
        <template #content-item5>
          <section class="book-list-container">
            <section v-if="currentPage === 1" class="page page1">
              <a href="javascript:;" v-for="item in 5" :key="item">
                <section class="book-item-1">
                  <img src="../assets/book-item6.jpg" alt="" />
                  <span>《生态环境监管执法300问》</span>
                  <span>￥69</span>
                </section>
              </a>
            </section>
          </section>

          <pagination
            :pageNum="1"
            :currentPageNum.sync="currentPage"
          ></pagination>
        </template>
      </tab-bar>
    </div>
    <div class="recommendation-box">
      <div class="recommendation-item">
        <div class="recommendation-title">西尔推荐</div>
        <a href="">
          <img src="../assets/recommendation-1.jpg" alt="" />
          <span>在线</span>
        </a>
        <p>各行业现场执法要点提升培训班</p>
      </div>
      <div class="recommendation-item">
        <a href="">
          <img src="../assets/recommendation-2.jpg" alt="" />
          <span>在线</span>
        </a>
        <p>《生态环境综合服务（生态环保管家）及延伸》在线培训班</p>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1
    }
  }
}
</script>

<style lang="less" scoped>
@primary-color: #4aa1f0;

a {
  text-decoration: none;
  color: black;
  // display: flex;
  &:last-child {
    margin-bottom: 40px;
  }
}
.main-container {
  background-color: rgba(211, 211, 211, 0.4);

  padding-top: 20px;
  position: relative;
  .tab-container {
    width: 970px;
    margin-left: 143px;
    position: relative;

    > span {
      font-size: 14px;
      font-weight: 400;
      position: absolute;
      top: 22px;
      left: 20px;
    }
  }
  .recommendation-box {
    position: absolute;
    top: 20px;
    right: 145px;
    width: 240px;
    height: 400px;
    padding: 10px 20px;
    background-color: #fff;
    .recommendation-item {
      margin-bottom: 20px;
      .recommendation-title {
        height: 21px;
        border-left: 2px solid @primary-color;
        padding-left: 5px;
        margin-bottom: 10px;
      }
      a {
        display: block;
        // width: 100%;
        position: relative;
        img {
          // width: 200px;
          height: 120px;
          width: 100%;
        }
        span {
          height: 24px;
          padding: 3px 5px;
          position: absolute;
          top: 5px;
          right: 5px;
          color: white;
          background-color: gray;
          border-radius: 5px;
        }
      }
      P {
        margin: 5px 0;
        font-size: 13px;
      }
    }
  }
}
.book-list-container {
  .page {
    display: flex;
    flex-wrap: wrap;
  }
  .book-item-1 {
    display: flex;
    width: 120px;
    // height: 200px;
    flex-direction: column;
    padding-top: 20px;
    margin: 0 37px;
    img {
      width: 120px;
      height: 140px;
      margin-bottom: 10px;
    }
    span {
      &:first-child {
        font-size: 14px;
        font-weight: 300;
        height: 20px;
      }
      &:last-child {
        color: red;
        font-size: 18px;
        font-weight: 600;
        margin-top: 10px;
      }
    }
  }
}
</style>
