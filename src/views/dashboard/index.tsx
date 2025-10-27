import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { Button, Card, Descriptions, type DescriptionsProps } from 'antd'
import { useBearStore } from '@/store'
import {
  renderLineChart,
  renderPieChartAge,
  renderPieChartCity,
  renderRadarChart
} from '@/views/dashboard/charts.ts'

const items: DescriptionsProps['items'] = [
  {
    label: '用户ID',
    children: <p>100001</p>
  },
  {
    label: '邮箱',
    children: <p>chengtszkong@outlook.com</p>
  },
  {
    label: '状态',
    children: <p>在职</p>
  },
  {
    label: '手机号',
    children: <p>12345678901</p>
  },
  {
    label: '岗位',
    children: <p>前端工程师</p>
  },
  {
    label: '部门',
    children: <p>大前端</p>
  }
]

const reports = [
  { label: '司机数量', data: '100', unit: '个', color: '#f4864f' },
  { label: '总流水', data: '10000', unit: '元', color: '#887edc' },
  { label: '总订单', data: '2000', unit: '单', color: '#4f95e5' },
  { label: '开通城市', data: '50', unit: '座', color: '#6dc3d7' }
]

const Dashboard: React.FC = () => {
  const userInfo = useBearStore(state => state.userInfo)

  useEffect(() => {
    renderLineChart()
    renderPieChartCity()
    renderPieChartAge()
    renderRadarChart()
  }, [])

  return (
    <div className={styles.dashboard}>
      <div className={styles.userInfo}>
        {userInfo.avatar && (
          <img src={userInfo.avatar} alt='avatar' className={styles.avatar} />
        )}
        <Descriptions
          title={`👏 欢迎 ${userInfo.username}，每天都要开心！😊`}
          items={items}
        />
      </div>
      <div className={styles.report}>
        {reports.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundColor: item.color }}
          >
            <div className={styles.title}>{item.label}</div>
            <div className={styles.data}>
              {item.data}
              {item.unit}
            </div>
          </div>
        ))}
      </div>

      <Card
        className={styles.chart}
        title='订单和流水走势图'
        extra={<Button type='primary'>刷新</Button>}
      >
        <div id='lineChart' className={styles.itemChart}></div>
      </Card>
      <Card
        className={styles.chart}
        title='司机分布'
        extra={<Button type='primary'>刷新</Button>}
      >
        <div className={styles.pieChart}>
          <div id='pieChartCity' className={styles.itemPie}></div>
          <div id='pieChartAge' className={styles.itemPie}></div>
        </div>
      </Card>
      <Card
        className={styles.chart}
        title='模型诊断'
        extra={<Button type='primary'>刷新</Button>}
      >
        <div id='radarChart' className={styles.itemChart}></div>
      </Card>
    </div>
  )
}

export default Dashboard
