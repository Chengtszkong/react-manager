import React from 'react'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Layout, Menu, theme, Watermark } from 'antd'
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'

const { Header, Content, Footer, Sider } = Layout

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`
}))

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <Watermark content={'Tszkong Cheng'}>
      <Layout>
        <Sider breakpoint='lg' collapsedWidth='0'>
          <div className='demo-logo-vertical' />

          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={['4']}
            items={items}
          />
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
