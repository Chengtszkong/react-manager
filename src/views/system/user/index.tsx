import React from 'react'
import { Button, Form, Input, Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import type { User } from '@/types/api.ts'

const dataSource = [
  {
    key: '1',
    username: '胡彦斌',
    userId: 32,
    avatar: '西湖区湖底公园1号'
  },
  {
    key: '2',
    username: '胡彦祖',
    userId: 42,
    avatar: '西湖区湖底公园1号'
  }
]

const columns: ColumnsType<User.UserItem> = [
  {
    title: '用户ID',
    dataIndex: 'userId',
    key: 'userId'
  },
  {
    title: '用户名称',
    dataIndex: 'username',
    key: 'username'
  },
  {
    title: '用户头像',
    dataIndex: 'avatar',
    key: 'avatar'
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render() {
      return (
        <Space>
          <Button type='text'>编辑</Button>
          <Button type='text' danger>
            删除
          </Button>
        </Space>
      )
    }
  }
]

const UserList: React.FC = () => {
  return (
    <div className='user-list'>
      <Form className='search-form' layout='inline'>
        <Form.Item name='userId' label='用户ID'>
          <Input />
        </Form.Item>
        <Form.Item name='username' label='用户名称'>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type='primary' className='!mr-4'>
            查询
          </Button>
          <Button type='default'>重置</Button>
        </Form.Item>
      </Form>

      <div className='base-table'>
        <div className='header-wrapper'>
          <div className='title'>用户列表</div>
          <div className='action'>
            <Button type='primary'>新增</Button>
            <Button type='primary' danger>
              批量删除
            </Button>
          </div>
        </div>
        <Table className='!px-6' dataSource={dataSource} columns={columns} />
      </div>
    </div>
  )
}

export default UserList
