import React from 'react'
import cl from 'classnames/bind'
import styles from './Header.module.scss'
import { Nav } from '../Nav/Nav'

export const Header = () => {
  return (
    <header className={cl(styles.header)}>
      <div className={styles.header_container}>
        <Nav />
      </div>
    </header>
  )
}
