import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { Layout, theme, Watermark } from 'antd'
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import SiderMenu from '@/components/Menu'
import { Outlet } from 'react-router-dom'
import api from '@/api'
import { useBearStore } from '@/store'

const { Header, Content, Sider } = Layout

const App: React.FC = () => {
  const { collapsed, updateUserInfo } = useBearStore()
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const getUserInfo = async () => {
    const data = await api.getUserInfo()
    updateUserInfo(data)
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <Watermark content={''}>
      <Layout>
        <Sider collapsed={collapsed}>
          <SiderMenu />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <NavHeader />
          </Header>
          <Content className={styles.content}>
            <div className={styles.wrapper}>
              <Outlet />
            </div>
            <NavFooter />
          </Content>
        </Layout>
      </Layout>
    </Watermark>
  )
}

export default App
