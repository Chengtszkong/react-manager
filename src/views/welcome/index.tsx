import React from 'react'
import styles from './index.module.scss'

const Welcome: React.FC = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.content}>
        <div className={styles.subTitle}>欢迎体验</div>
        <div className={styles.title}>React18 通用后台管理系统</div>
        <div className={styles.desc}>
          React18 + ReactRouter6 + Antd Design + Typescript Vite
          实现通用后台管理系统
        </div>
      </div>
      <div className={styles.img}></div>
    </div>
  )
}

export default Welcome
