import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider, App as AntdApp } from 'antd'
import Router from './router'
import AntdGlobal from '@/utils/AntdGlobal.tsx'
import './App.css'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#F47E2A'
        }
      }}
    >
      <AntdApp>
        <AntdGlobal />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
