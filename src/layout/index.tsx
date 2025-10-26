import React from 'react'
import { Layout, theme, Watermark } from 'antd'
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import SiderMenu from '@/components/Menu'

const { Header, Content, Footer, Sider } = Layout

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <Watermark content={'Tszkong Cheng'}>
      <Layout>
        <Sider>
          <SiderMenu />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <NavHeader />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG
              }}
            >
              content
            </div>
          </Content>
          <Footer>
            <NavFooter />
          </Footer>
        </Layout>
      </Layout>
    </Watermark>
  )
}

export default App
