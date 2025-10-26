import React from 'react'
import styles from './index.module.scss'
import { MenuFoldOutlined } from '@ant-design/icons'
import { Breadcrumb, Dropdown, type MenuProps, Switch } from 'antd'

const NavHeader: React.FC = () => {
  const breadList = [{ title: '首页' }, { title: '工作台' }]

  const items: MenuProps['items'] = [
    { key: '1', label: '邮箱：chengtszkong@outlook.com' },
    { key: '2', label: '退出' }
  ]

  return (
    <div className={styles.navHeader}>
      <div className={styles.left}>
        <MenuFoldOutlined />
        <Breadcrumb items={breadList} style={{ marginLeft: '10px' }} />
      </div>
      <div className={styles.right}>
        <Switch
          checkedChildren='暗黑'
          unCheckedChildren='默认'
          style={{ marginRight: '10px' }}
        />
        <Dropdown menu={{ items }} trigger={['click']}>
          <span className={styles.nickname}>TszkongCheng</span>
        </Dropdown>
      </div>
    </div>
  )
}

export default NavHeader
