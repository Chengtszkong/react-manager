import React from 'react'
import styles from './index.module.scss'
import logoPng from '@/assets/images/logo.png'
import { Menu } from 'antd'
import {
  DesktopOutlined,
  SettingOutlined,
  TeamOutlined
} from '@ant-design/icons'
import type { ItemType, MenuItemType } from 'antd/es/menu/interface'
import { useNavigate } from 'react-router-dom'

const items: ItemType<MenuItemType>[] = [
  {
    key: '1',
    icon: React.createElement(DesktopOutlined),
    label: '工作台'
  },
  {
    key: '2',
    icon: React.createElement(SettingOutlined),
    label: '系统管理',
    children: [
      {
        key: '3',
        icon: React.createElement(TeamOutlined),
        label: '用户管理'
      }
    ]
  }
]

const SiderMenu: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className={styles.logo} onClick={() => navigate('/welcome')}>
        <img src={logoPng} alt='logo' />
      </div>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['1']}
        items={items}
      />
    </>
  )
}

export default SiderMenu
