import React from 'react'
import {Outlet} from 'react-router-dom'
import cl from 'classnames/bind'
import styles from './Main.module.scss'

export const Main = () => {
  return (
    <main className={cl(styles.main)}>
      <div className={cl(styles.main_container)}>
        <Outlet />
      </div>
    </main>
  )
}
