import React from 'react'
import styles from './index.module.scss'

const NavFooter: React.FC = () => {
  const items = [
    { href: 'https://www.imooc.com/u/1343480', text: 'Chengtszkong 博客' },
    {
      href: 'https://coding.imooc.com/class/644.html',
      text: 'React18+TS开发通用后台'
    },
    { href: 'https://github.com/Chengtszkong', text: 'Chengtszkong Github' },
    {
      href: 'https://open-source-license-chooser.toolsnav.top/zh/',
      text: '开源许可证选择器'
    }
  ]

  return (
    <div className={styles.footer}>
      <div>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className={styles.gutter}>|</span>}
            <a href={item.href} target='_blank' rel='noopener noreferrer'>
              {item.text}
            </a>
          </React.Fragment>
        ))}
      </div>
      <div>Copyright © 2025 All Rights Reserved.</div>
    </div>
  )
}

export default NavFooter
