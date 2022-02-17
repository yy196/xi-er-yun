<template>
  <div class="map-container" id="map-con" ref="mapBox">></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      echartsOptions: {
        title: {
          text: 'ECharts Getting Started Example'
        },
        xAxis: {
          data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
        },
        yAxis: {},
        series: [
          {
            name: '销售额',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    }
  },
  methods: {
    initEchart() {
      let myChart = echarts.init(this.$refs.mapBox)
      myChart.setOption(this.echartsOptions)
    }
  },
  mounted() {
    this.initEchart()
  }
}
</script>

<style lang="less" scoped>
.map-container {
  width: 1044px;
  height: 380px;
}
</style>
