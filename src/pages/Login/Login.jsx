import React from 'react'
import { Form } from '../../components/Form'
import cl from "classnames"
import styles from './Login.module.scss'

export const Login = () => {
  return (
    <div className={cl(styles.login)}>
      <Form />
    </div>
  )
}
