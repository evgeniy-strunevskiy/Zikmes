import React from 'react'
import cl from 'classnames'
import styles from './Layout.module.scss'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'


export const Layout = () => {
  return (
    <div className={cl(styles.layout)}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
