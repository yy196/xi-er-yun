<template>
  <section class="custom-pagination">
    <section class="pagination-bar">
      <span ref="prev" class="el-icon-arrow-left"></span>
      <span
        v-for="item in pageNum"
        :key="item"
        :class="`page${item}`"
        :ref="`page${item}`"
        >{{ item }}</span
      >
      <span ref="next" class="el-icon-arrow-right"></span>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    pageNum: {
      type: Number,
      default: 1
    },
    currentPageNum: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      currentPage: this.currentPageNum,
      spanRefs: [],
      paginationRefs: ['prev', 'next']
    }
  },
  methods: {
    resetPaginationStyle() {
      this.spanRefs.forEach((item) => {
        this.$refs[item][0].classList.remove('hover-normal-style')
      })
    },
    initializePaginationState() {
      this.$refs.prev.classList.add('disabled-style')

      this.$refs.page1[0].classList.add('hover-normal-style')
      this.spanRefs.forEach((item, index) => {
        this.$refs[item][0].addEventListener('click', () => {
          this.currentPage = index + 1
        })
      })

      this.$refs.prev.addEventListener('click', () => {
        if (this.currentPage > 1) {
          this.currentPage--
        }
      })
      this.$refs.next.addEventListener('click', () => {
        if (this.currentPage < this.pageNum) {
          this.currentPage++
        }
      })
      this.paginationRefs.forEach((item) => {
        if (
          this.paginationRefs.indexOf(item) !== 0 &&
          this.paginationRefs.indexOf(item) !== this.paginationRefs.length - 1
        ) {
          this.$refs[item][0].addEventListener('mouseover', (e) => {
            if (!e.target.classList.contains('disabled-style')) {
              e.target.classList.add('hover-normal-style')
            }
          })
          this.$refs[item][0].addEventListener('mouseout', (e) => {
            if (!e.target.classList.contains(`page${this.currentPage}`)) {
              e.target.classList.remove('hover-normal-style')
            }
          })
        } else {
          this.$refs[item].addEventListener('mouseover', (e) => {
            if (!e.target.classList.contains('disabled-style')) {
              e.target.classList.add('hover-normal-style')
            }
          })
          this.$refs[item].addEventListener('mouseout', (e) => {
            if (!e.target.classList.contains(`page${this.currentPage}`)) {
              e.target.classList.remove('hover-normal-style')
            }
          })
        }
      })
    }
  },
  created() {
    for (let i = 1; i < this.pageNum + 1; i++) {
      this.spanRefs.push(`page${i}`)
      this.paginationRefs.splice(-1, 0, `page${i}`)
    }
  },
  mounted() {
    this.initializePaginationState()
  },

  watch: {
    currentPage: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.spanRefs.forEach((item) => {
            if (
              this.$refs[item][0].classList.contains(`page${this.currentPage}`)
            ) {
              this.resetPaginationStyle()
              this.$refs[item][0].classList.add('hover-normal-style')
            }
          })
          this.$emit('update:currentPageNum', newVal)
        }
        if (this.currentPage === 1) {
          this.$refs.prev.classList.add('disabled-style')
          this.$refs.next.classList.remove('disabled-style')
        } else if (this.currentPage === this.pageNum) {
          this.$refs.prev.classList.remove('disabled-style')

          this.$refs.next.classList.add('disabled-style')
        } else {
          this.$refs.prev.classList.remove('disabled-style')

          this.$refs.next.classList.remove('disabled-style')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@primary-color: #4aa1f0;
.custom-pagination {
  background-color: rgba(211, 211, 211, 0.4);
  .pagination-bar {
    margin: 0 auto;
    height: 30px;
    display: flex;
    justify-content: center;
    span {
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #fff;
      border: 0.5px solid rgba(211, 211, 211);
      border-radius: 5px;
      cursor: pointer;
      margin: 0 3px;
    }
    .hover-normal-style {
      border: 0.5px solid @primary-color;
      color: @primary-color;
      // cursor: pointer;
    }
    .disabled-style {
      cursor: not-allowed;
      // color: @primary-color;
      // color: black;
    }
  }
}
</style>
