<template>
  <div class="news-page-container">
    <div class="news-page-top-container">
      <img class="news-bg-img" src="../assets/news-bg.jpg" alt="" />
      <section class="news-item-container">
        <a href="#" v-for="item in 5" :key="item">
          <section class="news-item">
            <section class="img-box"></section>
            <section
              class="news-item-content"
              :ref="`news-item-content-${item}`"
            >
              <h1>涉及危险废物的企业都需要编制环境应急预案吗？附：编制要点</h1>
              <p>涉及危险废物的企业都需要编制环境应急预案吗？附：编制要点</p>
              <p>
                发布时间：<span>{{ timeNow }}</span>
              </p>
            </section>
          </section>
        </a>
      </section>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="630"
      :page-size="5"
    >
    </el-pagination>
    <my-footer></my-footer>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  data() {
    return {
      timeStamp: 0
    }
  },
  methods: {
    getData() {
      let getNewsList = () => {
        this.$http
          .get('api/get_information_list', {
            pageNo: 1,
            pageSize: 5
          })
          .then(({ data: res }) => {
            console.log(res, 'news')
            // this.homeNavigationList = res.data
          })
          .catch((err) => {
            console.log('error', err)
          })
      }
      getNewsList()
    }
  },
  created() {
    this.getData()
    this.timeStamp = Date.now()
    setInterval(() => {
      this.timeStamp = Date.now()
    }, 1000)
  },
  computed: {
    timeNow() {
      return dayjs(this.timeStamp).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  mounted() {
    this.$refs[`news-item-content-5`][0].style.borderBottom =
      '1px solid transparent'
  }
}
</script>

<style lang="less" scoped>
@primary-color: #4aa1f0;
a {
  display: block;
  text-decoration: none;
  color: black;
}

.news-page-container {
  .news-page-top-container {
    background-color: rgba(211, 211, 211, 0.4);
    padding-bottom: 20px;
  }
  .news-bg-img {
    width: 100%;
    height: 384px;
  }
  .news-item-container {
    width: 1025px;
    margin: 0 auto;
    .news-item {
      height: 129px;
      background-color: white;
      // padding: 10px;
      display: flex;
      justify-content: space-between;

      .img-box {
        width: 200px;
        height: 129px;
        // background-color: pink;
        background: url('../assets/news-img.jpg') no-repeat;
        // background-image: url('../assets/news-img.jpg');
        background-size: 175px 105px;
        background-position: 10px 12px;
      }
      .news-item-content {
        padding: 16px;
        width: 790px;
        height: 129px;
        margin-right: 30px;
        border-bottom: 1px solid grey;

        h1 {
          font-size: 20px;
          margin-bottom: 10px;
          &:hover {
            color: @primary-color;
            cursor: pointer;
          }
        }
        p {
          font-size: 16px;
          margin-bottom: 12px;
          color: #888;

          ~ P {
            font-size: 14px;
            color: #b2b2b2;
          }
        }
      }
    }
  }
  .el-pagination {
    background-color: rgba(211, 211, 211, 0.4);
    // margin: 0 auto;
    padding-left: 550px;
    // transform: translateX(-50%);
    // margin-left: -50%;
  }
}
</style>
