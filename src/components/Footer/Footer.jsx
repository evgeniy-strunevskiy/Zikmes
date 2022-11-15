import React from 'react'
import cl from 'classnames/bind'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={cl(styles.footer)}>
      <div className={cl(styles.footer_container)}>
        2022
      </div>
    </footer>
  )
}
