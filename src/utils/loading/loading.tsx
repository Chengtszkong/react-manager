import React from 'react'
import { Spin } from 'antd'
import './loading.scss'

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4
}

const content = <div style={contentStyle} />

export default function Loading({ tip = 'Loading' }: { tip?: string }) {
  return (
    <Spin tip={tip} size='large' className='request-loading'>
      {content}
    </Spin>
  )
}
