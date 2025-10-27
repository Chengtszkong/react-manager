import * as echarts from 'echarts'

export const renderLineChart = () => {
  const chartDom = document.getElementById('lineChart')
  const chartInstance = echarts.init(chartDom as HTMLElement)
  chartInstance.setOption({
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top: 0,
      data: ['订单', '流水']
    },
    grid: {
      left: '5%',
      right: '5%',
      top: '14%',
      bottom: '10%'
    },
    xAxis: {
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月'
      ]
    },
    yAxis: { type: 'value' },
    series: [
      {
        name: '订单',
        type: 'line',
        data: [10, 20, 20, 30, 40, 50, 60, 80, 100, 150, 200, 300]
      },
      {
        name: '流水',
        type: 'line',
        data: [1000, 2000, 3000, 5000, 8000, 10000, 15000, 20000, 30000]
      }
    ]
  })
}

export const renderPieChartCity = () => {
  const chartDom = document.getElementById('pieChartCity')
  const chartInstance = echarts.init(chartDom as HTMLElement)
  chartInstance.setOption({
    title: {
      text: '司机城市分布',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      top: 20,
      left: 'left'
    },
    series: [
      {
        name: '城市分布',
        type: 'pie',
        top: 60,
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 32,
            fontWeight: 'bold'
          }
        },
        label: {
          formatter: '{d}'
        },
        labelLine: {
          show: true,
          smooth: true
        },
        data: [
          { value: 1048, name: '北京' },
          { value: 735, name: '上海' },
          { value: 580, name: '广州' },
          { value: 484, name: '南京' },
          { value: 300, name: '深圳' }
        ]
      }
    ]
  })
}

export const renderPieChartAge = () => {
  const chartDom = document.getElementById('pieChartAge')
  const chartInstance = echarts.init(chartDom as HTMLElement)
  chartInstance.setOption({
    title: {
      text: '司机年龄分布',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      top: 20,
      left: 'left'
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        top: 60,
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 32,
            fontWeight: 'bold'
          }
        },
        label: {
          formatter: '{d}'
        },
        labelLine: {
          show: true,
          smooth: true
        },
        data: [
          { value: 30, name: '北京' },
          { value: 35, name: '上海' },
          { value: 60, name: '广州' },
          { value: 20, name: '南京' },
          { value: 48, name: '深圳' }
        ]
      }
    ]
  })
}

export const renderRadarChart = () => {
  const chartDom = document.getElementById('radarChart')
  const chartInstance = echarts.init(chartDom as HTMLElement)
  chartInstance.setOption({
    legend: {
      data: ['司机模型诊断']
    },
    radar: {
      indicator: [
        { name: '服务态度', max: 10 },
        { name: '在线时长', max: 600 },
        { name: '接单率', max: 100 },
        { name: '评分', max: 5 },
        { name: '关注度', max: 10000 }
      ]
    },
    series: [
      {
        name: '模型诊断',
        type: 'radar',
        data: [{ value: [8, 300, 80, 4, 9000], name: '司机模型诊断' }]
      }
    ]
  })
}
