import React from 'react'
import styles from './index.module.scss'
import { App, Button, Form, Input, type FormProps } from 'antd'
import { type Login } from '@/types/api.ts'
import api from '@/api'
import storage from '@/utils/storage.ts'

type FieldType = {
  username?: string
  password?: string
}

const LoginFC: React.FC = () => {
  const { message } = App.useApp()

  const onFinish = async (values: Login.params) => {
    const data = await api.login(values)
    storage.set('token', data)
    message.success('登录成功')
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={styles.login}>
      <Form
        className={styles.loginForm}
        name='login-form'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className={styles.title}>系统登录</div>
        <Form.Item<FieldType>
          name='username'
          rules={[{ required: false, message: '请输入用户名！' }]}
        >
          <Input placeholder='请输入用户名' />
        </Form.Item>

        <Form.Item<FieldType>
          name='password'
          rules={[{ required: true, message: '请输入密码！' }]}
        >
          <Input.Password placeholder='请输入密码' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginFC
