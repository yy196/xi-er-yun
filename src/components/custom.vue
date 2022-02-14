<template>
  <section>
    <span :ref="'page0'">0</span>
    <span v-for="item in pageNum" :key="item" :ref="`page${item}`">{{
      item
    }}</span>
  </section>
</template>

<script>
export default {
  props: {
    pageNum: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      spanRefs: ['page1', 'page2']
    }
  },
  methods: {},
  mounted() {
    // console.log(this.$refs.page1)
    // console.log('------')
    // console.log(this.$refs.page1[0])
    // console.log(this.$refs.page1[0].classList)
    // console.log(this.$refs.page1[0].addEventListener)
    // console.log(this.$refs.page2[0])
    // console.log(this.$refs.page2[0].classList)
    // console.log(this.$refs.page2[0].addEventListener)
    // console.log(this.$refs.page0)

    console.log('---------')

    this.spanRefs.forEach((item) => {
      console.log(this.$refs[item])
      // console.log(this.$refs[item].classList)
      console.log(this.$refs[item][0])
      console.log(this.$refs[item][0].classList)
      console.log(this.$refs[item][0].addEventListener)
    })
  }
}
</script>

<style scoped></style>
