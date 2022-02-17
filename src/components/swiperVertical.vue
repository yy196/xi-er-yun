<template>
  <div class="scroll-container">
    <div class="swiper-title">
      <span v-for="item in scrollTitleList" :key="item">{{ item }}</span>
    </div>
    <swiper
      :style="{ height: scrollHeight + 'px' }"
      v-if="scrollListData.length > 0"
      class="swiper"
      :options="swiperOption"
    >
      <swiper-slide
        class="swiper-item"
        v-for="item in scrollListData"
        :key="item.topicScrollID"
      >
        <span>{{ item.topicScrollName }}</span>
        <span>{{ item.periodsNumber }}</span>
        <span>{{ item.peopleNumber }}</span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    scrollTitleList: {
      default: () => {
        return ['城市', '期数', '总培训人数']
      }
    },
    scrollListData: {
      default: () => {
        return []
      }
    },
    scrollHeight: {
      default: 245
    }
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        // height: 35,
        autoplay: {
          delay: 1000,
          waitForTransition: true,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        grabCursor: true,
        slidesPerView: Number(this.scrollHeight) / 35,
        mousewheel: {
          sensitivity: 100
        }
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.scroll-container {
  text-align: center;
  width: 280px;
  // height: 300px;

  .swiper-title {
    display: flex;
    height: 40px;
    line-height: 40px;
    color: white;
    background-color: #428ddd;
    span {
      flex: 1;
      border: 1px solid lightgray;
    }
  }
  .swiper {
    .swiper-item {
      display: flex;
      height: 35px;
      line-height: 35px;
      span {
        flex: 1;
        border: 1px solid lightgray;
        height: 35px;
      }
    }
  }
  /deep/.swiper-wrapper {
    transition-timing-function: linear;
  }
}
</style>
