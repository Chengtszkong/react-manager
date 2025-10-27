import React from 'react'
import styles from './index.module.scss'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Dropdown, type MenuProps, Switch } from 'antd'
import storage from '@/utils/storage.ts'
import { useBearStore } from '@/store'

const NavHeader: React.FC = () => {
  const { userInfo, collapsed, updateCollapsed } = useBearStore()
  const breadList = [{ title: '首页' }, { title: '工作台' }]

  const items: MenuProps['items'] = [
    { key: 'code', label: `工号：${userInfo.userId}` },
    { key: 'logout', label: '退出' }
  ]

  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'logout') {
      storage.remove('token')
      window.location.href = `/login?callback=${encodeURIComponent(window.location.href)}`
    }
  }

  return (
    <div className={styles.navHeader}>
      <div className={styles.left}>
        <Button
          type='text'
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => updateCollapsed()}
        />
        <Breadcrumb items={breadList} style={{ marginLeft: '10px' }} />
      </div>
      <div className={styles.right}>
        <Switch
          checkedChildren='暗黑'
          unCheckedChildren='默认'
          style={{ marginRight: '10px' }}
        />
        <Dropdown menu={{ items, onClick }} trigger={['click']}>
          <span className={styles.nickname}>{userInfo.username}</span>
        </Dropdown>
      </div>
    </div>
  )
}

export default NavHeader
