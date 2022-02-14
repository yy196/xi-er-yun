<template>
  <div class="tabBar-container">
    <div ref="tabTitle">
      <!-- <p v-if="bgc === true"></p> -->
      <section
        @click.stop="activate"
        v-if="1 < tabNum + 1"
        class="span-container"
      >
        <span class="tab-title-item1" data-title="1">
          <slot name="title-item1"></slot>
        </span>
      </section>
      <section
        @click.stop="activate"
        v-if="2 < tabNum + 1"
        class="span-container"
      >
        <span class="tab-title-item2" data-title="2"
          ><slot name="title-item2"></slot
        ></span>
      </section>

      <section
        @click.stop="activate"
        v-if="3 < tabNum + 1"
        class="span-container"
      >
        <span class="tab-title-item3" data-title="3"
          ><slot name="title-item3"></slot
        ></span>
      </section>

      <section
        @click.stop="activate"
        v-if="4 < tabNum + 1"
        class="span-container"
      >
        <span class="tab-title-item4" data-title="4"
          ><slot name="title-item4"></slot
        ></span>
      </section>

      <section
        @click.stop="activate"
        v-if="5 < tabNum + 1"
        class="span-container"
      >
        <span class="tab-title-item5" data-title="5"
          ><slot name="title-item5"></slot
        ></span>
      </section>
    </div>
    <div class="tab-content" ref="tabContent">
      <div v-if="1 < tabNum + 1" class="tab-content-item1" data-content="1">
        <slot name="content-item1"></slot>
      </div>
      <div v-if="2 < tabNum + 1" class="tab-content-item2" data-content="2">
        <slot name="content-item2"></slot>
      </div>
      <div v-if="3 < tabNum + 1" class="tab-content-item3" data-content="3">
        <slot name="content-item3"></slot>
      </div>
      <div v-if="4 < tabNum + 1" class="tab-content-item4" data-content="4">
        <slot name="content-item4"></slot>
      </div>
      <div v-if="5 < tabNum + 1" class="tab-content-item5" data-content="5">
        <slot name="content-item5"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabNum: {
      type: Number,
      default: 0
    },

    bgc: {
      type: Boolean,
      default: false
    },
    footerStyle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tabNumArray: []
    }
  },
  methods: {
    activate(e) {
      this.deActivate()
      if (e.target.nodeName === 'SECTION') {
        if (this.bgc !== true && this.footerStyle !== true) {
          e.target.children[0].classList.add('active-tab-underline')
          console.log(e.target.dataset.title)
        } else if (this.bgc === true) {
          e.target.children[0].classList.add('active-tab-bgc')
        } else if (this.footerStyle === true) {
          e.target.children[0].classList.add('active-tab-footer-style')
        }
        this.tabNumArray.forEach((i) => {
          if (
            this.$refs.tabContent.children[i].dataset.content ===
            e.target.children[0].dataset.title
          ) {
            this.$refs.tabContent.children[i].classList.add('active-content')
          }
        })
      } else if (e.target.nodeName === 'SPAN') {
        if (this.bgc !== true && this.footerStyle !== true) {
          e.target.classList.add('active-tab-underline')
          console.log(e.target.dataset.title)
        } else if (this.bgc === true) {
          e.target.classList.add('active-tab-bgc')
        } else if (this.footerStyle === true) {
          e.target.classList.add('active-tab-footer-style')
        }
        this.tabNumArray.forEach((i) => {
          if (
            this.$refs.tabContent.children[i].dataset.content ===
            e.target.dataset.title
          ) {
            this.$refs.tabContent.children[i].classList.add('active-content')
          }
        })
      }
    },
    deActivate() {
      // this.$refs.tabTitle.children[0].classList.remove('active-tab-underline')

      this.tabNumArray.forEach((i) => {
        this.$refs.tabTitle.children[i].children[0].classList.remove(
          'active-tab-underline'
        )
        this.$refs.tabTitle.children[i].children[0].classList.remove(
          'active-tab-bgc'
        )
        this.$refs.tabTitle.children[i].children[0].classList.remove(
          'active-tab-footer-style'
        )
        this.$refs.tabContent.children[i].classList.remove('active-content')
      })
    }
  },
  created() {
    for (let i = 0; i < this.tabNum; i++) {
      this.tabNumArray.push(i)
    }
    // console.log(this.footerStyle + '111')
  },
  mounted() {
    // this.$refs.tabTitle.parentElement.style.width = this.width
    // this.$refs.tabTitle.parentElement.style.height = this.height
    // this.$refs.tabTitle.addEventListener('click', (e) => {
    //   this.activate(e)
    // })
    this.$refs.tabContent.children[0].classList.add('active-content')

    if (this.bgc === false && this.footerStyle === false && this.tabNumArray) {
      this.$refs.tabTitle.classList.add('tab-title')

      this.$refs.tabTitle.children[0].children[0].classList.add(
        'active-tab-underline'
      )
      this.$refs.tabContent.classList.add('tab-content')
    } else if (this.bgc === true && this.tabNumArray) {
      this.$refs.tabTitle.classList.add('tab-title-bgc')
      this.$refs.tabTitle.children[0].children[0].classList.add(
        'active-tab-bgc'
      )
      this.$refs.tabContent.classList.add('tab-content-bgc')
    } else if (this.footerStyle === true && this.tabNumArray) {
      this.$refs.tabTitle.classList.add('tab-title-footer-style')
      this.$refs.tabTitle.children[0].children[0].classList.add(
        'active-tab-footer-style'
      )
      this.$refs.tabContent.classList.add('tab-content')
    }
  }
}
</script>

<style lang="less" scoped>
@primary-color: #4aa1f0;
.active-tab-underline {
  color: @primary-color;
  border-bottom: 2px solid @primary-color;
}

.tab-title {
  display: flex;
  // flex-wrap: nowrap;
  justify-content: space-between;
  .span-container {
    padding: 10px 16px;
    cursor: pointer;
  }
  span {
    font-size: 17px;
    font-weight: 700;
    padding: 8px 15px;
  }
}
.tab-title-bgc {
  display: flex;
  // flex-wrap: nowrap;
  // justify-content: space-between;
  background-color: #fff;
  padding-left: 55px;
  margin-bottom: 20px;
  .span-container {
    padding: 20px 5px;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    padding: 2px 10px;
    border-radius: 8px;
  }
  .active-tab-bgc {
    color: white;

    background-color: @primary-color;
  }
}
.tab-title-footer-style {
  @footer-font-size: 17px;
  display: flex;
  // flex-wrap: nowrap;
  justify-content: space-around;
  padding: 15px 0;
  .span-container {
    width: 50%;
    display: flex;
  }
  span {
    width: 100%;
    font-size: @footer-font-size;
    font-weight: 400;
    cursor: pointer;
    padding: 10px 15px;
    // margin: 10px 0;
    color: white;
    // flex-grow: 1;
    text-align: center;
    // border-radius: 8px;
  }
  .active-tab-footer-style {
    color: @primary-color;
    border: 1px solid #1fa2f8;

    // background-color: @primary-color;
  }
}
.tab-content {
  div {
    display: none;
    // background-color: #fff;
    // padding: 0 10px 30px;
  }
  .active-content {
    display: block;
  }
}

.tab-content-bgc {
  div {
    display: none;
    background-color: #fff;
    // padding: 0 10px 0px;
  }
  .active-content {
    display: block;
  }
}
</style>
