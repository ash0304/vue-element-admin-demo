
<script>
const options = (newMember, logined, date) => {
  return {
    tooltip: {
      trigger: 'axis',
    },
    dataZoom: [{ type: 'inside', start: 0, end: 100, minValueSpan: 5 }],
    grid: { left: 35, right: 15, bottom: 50, height: '60%' },
    legend: {
      data: ['新注册会员数', '会员登录数'],
      right: 10, // 向右靠其10px
      itemGap: 35, // 相隔35px
      formatter: (name) => {
        // 圖例樣式，使用formater 判斷使用標籤(設定不同色)
        let text
        if (name === '新注册会员数') text = `{a|${name}}`
        else text = `{b|${name}}`
        return text
      },
      textStyle: {
        fontSize: 13,
        rich: {
          a: {
            color: '#658dd4',
          },
          b: {
            color: '#bbbcf1',
          },
        },
      },
      icon: 'circle',
    },
    xAxis: {
      // x軸
      type: 'category',
      axisTick: { show: false },
      axisLabel: { margin: 15 }, // x軸刻度文字與軸間隔
      axisLine: {
        lineStyle: {
          color: '#7f95c5', // x軸線及文字的顏色
        },
      },
      boundaryGap: false, // 轉折點不要在中間
      data: date,
    },
    yAxis: {
      type: 'value',
      // minInterval: 1,
      axisTick: { show: false },
      axisLabel: { margin: 15 }, // y軸刻度文字與軸間隔
      axisLine: {
        lineStyle: {
          color: '#7f95c5',
        },
      },
      splitLine: { lineStyle: { color: '#dceaff' }}, // 分割線顏色
      splitArea: {
        // 分割線背景
        show: true,
        areaStyle: {
          color: ['#fff', '#F1F6FF'],
        },
      },
    },
    series: [
      {
        symbol: 'circle', // 轉折點樣式
        symbolSize: 10, // 大小10px
        name: '新注册会员数',
        data: newMember,
        type: 'line',
        lineStyle: { color: '#658dd4', width: 3 }, // 線顏色
        itemStyle: { color: '#658dd4' }, // 轉折點顏色
      },
      {
        symbol: 'circle',
        symbolSize: 10,
        name: '会员登录数',
        data: logined,
        type: 'line',
        lineStyle: { color: '#bbbcf1', width: 3 },
        itemStyle: { color: '#bbbcf1' },
      },
    ],
  }
}

import echarts from 'echarts'
export default {
  name: 'Charts',
  props: {
    newMember: {
      type: Object,
      default: () => {
        return {}
      },
    },
    logined: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      chart: null,
    }
  },
  watch: {
    '$store.state.app.size'() {
      this.chart.resize()
    },
  },
  mounted() {
    // this.$nextTick(this.initChart)
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el)
      this.chart.setOption(
        options(this.newMember.data, this.logined.data, this.newMember.date)
      )
    },
  },
  render(h) {
    const node = h('div', { class: 'dashboard-chart' })
    return node
  },
}
</script>
<style lang="scss" scoped>
.dashboard-chart {
  height: 270px;
}
</style>
